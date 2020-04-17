import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Player, BigPlayButton } from 'video-react';

import Layout from '../layout';
import UserInfo from '../components/UserInfo/UserInfo';
import Disqus from '../components/Disqus/Disqus';
import PostTags from '../components/PostTags/PostTags';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import SEO from '../components/SEO/SEO';

import config from '../../data/SiteConfig';
import './b16-tomorrow-dark.css';
import './post.scss';

const PostTemplate = ({ data, pageContext }) => {
  const playerEl = useRef(null);

  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }
  const [src, setSource] = useState(post.videos[0].src);

  if (playerEl.current) {
    const VideoPlayer = playerEl.current;
    VideoPlayer.subscribeToStateChange((state) => {
      if (state.ended) {
        post.videos.find((video, index) => {
          if (video.src === state.currentSrc) {
            if (index < post.videos.length - 1) {
              setSource(post.videos[index + 1].src);
              VideoPlayer.load();
            } else {
              setSource(post.videos[0].src);
              VideoPlayer.load();
            }
          }
        });
      }
    });
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <main>
        {!!src && (
          <Player ref={playerEl} autoPlay src={src} poster={!!post.cover && post.cover.childImageSharp.fluid.src}>
            <BigPlayButton position="center" />
          </Player>
        )}
        {!!post.videos &&
          post.videos.length > 1 &&
          post.videos.map((video) => (
            <button
              type="button"
              className="post__video__play-btn"
              onClick={() => {
                setSource(video.src);
                playerEl.current.load();
              }}
            >
              {`▶️ Video: ${video.name}`}
            </button>
          ))}
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        <div className="post-meta">
          <PostTags tags={post.tags} />
          <SocialLinks postPath={slug} postNode={postNode} />
        </div>
        <UserInfo config={config} />
        <Disqus postNode={postNode} />
      </main>
    </Layout>
  );
};

export default PostTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date
        tags
        videos {
          src
          name
        }
      }
      fields {
        slug
        date
      }
    }
  }
`;
