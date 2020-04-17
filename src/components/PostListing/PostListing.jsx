import React from "react";
import './PostListing.scss'
import PostTeaser from '../PostTeaser/PostTeaser'

const PostListing = ({ postEdges}) => {
  const postList = postEdges.map(postEdge => {
    return {
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead
    };
  });

    return (
      <div className="post-listing">
        {/* Your post list here. */
        postList.map(post => (
          <PostTeaser post={post} key={`${post.title  }-${  post.date}`} />
        ))
}
      </div>
    );
}

export default PostListing;
