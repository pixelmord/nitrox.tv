import React from "react";
import {Helmet} from "react-helmet";
import config from "../../data/SiteConfig";
import Footer from "../components/Footer/Footer";
import "./index.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="de" />
        </Helmet>
        {children}
        <Footer config={config} />
      </div>
    );
  }
}
