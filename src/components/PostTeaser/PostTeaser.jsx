import React from "react";
import { Link } from "gatsby";

import Img from "gatsby-image"
import './PostTeaser.scss';

const PostTeaser = ({post}) => {
  return (
    <article className="post-teaser">
      {!!post.cover && (
        <Link to={post.path}>
          <Img
            fluid={post.cover.childImageSharp.fluid}
            alt={post.title}
          />
        </Link>
)}
      <h2 className="post-teaser__headline"><Link to={post.path}>{post.title}</Link></h2>
    </article>
)
  }

export default PostTeaser;
