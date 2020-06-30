/**
 * MAQINT Base Configuration
 * @type Object
 */
siteConfig = {
  browser: {
    showSupportWarning: true,
    minVersion: {
      msie: "10",
      chrome: "25",
      firefox: "30"
    }
  },
  layoutDisplay: false,
  lang: {
    default: 'gl',
    persistence: false,
    enableLangSelector: true,
    updateLangAttributes: true
  },
  env: {
    type: 'core',
    showEnvDisplay: false
  },
  nav: {
    testServer: "localhost:888(.*)", // Reg-exp
    onePageNav: false
  }
};