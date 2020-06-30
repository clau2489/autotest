/**
 * Main configuration.
 * @type Object
 */

customConfig = {
  nav: {
    onePageNav: false},
  paths: {
    core: {
      blocks: "web/core/layouts/blocks/",
      pages: "web/core/layouts/pages/",
      pieces: "web/core/layouts/pieces/"
    },
    custom: {
      blocks: "web/custom/layouts/blocks/",
      pages: "web/custom/layouts/pages/",
      pieces: "web/custom/layouts/pieces/"
    },
    main: {
      layouts: "web/main/layouts/"
    }
  },
  pages: {
    start: "landing.html",
    home: "index.html",
    error: {
      e403: "error-403.html",
      e404: "error-404.html",
      e500: "error-500.html"
    }
  },
  ui: {
    selectors: {
      loader: "#page-loader",
      mainWrapper: "#main-wrapper",
      mainHeader: "#main-header",
      mainFooter: "#main-footer",
      mainContent: "#main-content"
    },
    screen: {
      defaultState: "main"
    }
  },
  mocks: {
    loginCookie: false
  },
  analytics: {
    events: {
      sections: {
        enabled: true,
        event: "open",
        category: "autotest"
      }
    }
  }
};
