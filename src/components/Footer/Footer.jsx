import React, { Component } from 'react';
import { Link } from 'gatsby';
import UserLinks from '../UserLinks/UserLinks';
import './Footer.css';

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <UserLinks config={config} labeled />
        <div className="notice-container">
          <h4>{copyright}</h4>

          <Link to={url}>
            <button type="button">
              <span role="img" aria-label="feed">
                🍼
              </span>
{' '}
              Subscribe to RSS
            </button>
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
