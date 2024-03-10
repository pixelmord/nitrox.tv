const config = {
  siteTitle: "Nitrox.TV - Internetfernsehen, Konzertmitschnitte und Interviews von Bands und Fans", // Site title.
  siteTitleShort: "Nitrox.TV", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Nitrox.TV - Internetfernsehen, Konzertmitschnitte und Interviews von Bands und Fans", // Alternative site title for SEO.
  siteLogo: "/logos/logo-645.png", // Logo used for SEO and manifest.
  siteUrl: "https://nitroxtv.netlify.app", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Nitrox.Tv macht Internetfernsehen. Wir filmen Videos von Konzertmitschnitten und machen Interviews mit Bands und Fans aus allen Bereichen der Rockmusik.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Nitrox.TV RSS feed", // Title of the RSS feed
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-10770592-1", // GA tracking ID.
  disqusShortname: "nitrox-tv", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD.MM.YYYY", // Date format for display.
  postsPerPage: 25, // Amount of posts displayed per listing page.
  userName: "Maschine", // Username to display in the author segment.
  userEmail: "maschine@sac.me", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Kiel, Erde", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Wir sind Maschinen.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com/nitroxtv",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "YouTube",
      url: "https://youtube.com/wwwnitroxtv",
      iconClassName: "fa fa-youtube"
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/pages/wwwNitroxTV/196272106655",
      iconClassName: "fa fa-facebook"
    },
    {
      label: "MySpace ;)",
      url: "https://myspace.com/nitroxtv",
      iconClassName: "fa fa-myspace"
    },
    {
      label: "Email",
      url: "mailto:maschine@sac.me",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2020. Nitrox.TV", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#DF3742", // Used for setting manifest and progress theme colors.
  backgroundColor: "#1E1D1E" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
