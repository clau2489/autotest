/**
 * Site Navigation JS Class.
 */
var SiteNavigation = function () {

  // Base Class Inheritance
  var self = new SiteBase();
  var parent = $.extend(true, {}, self);

  /* ATTRIBUTES ********************************************************/

  /** This class name **/
  self.className = "SiteNavigation";

  /** Includes **/
  self.includes = {};


  /* PUBLIC METHODS *************************************************************/

  /**
   * Initialize this Class.
   */
  self.init = function () {
    self.log("Init Site Navigation");
    checkRedirection();
    // Disable caching of AJAX responses. For includes loading.
    $.ajaxSetup({cache: false});
    initApi();
  };

  /**
   * Initialize Actual Page
   * @param cb Callback to execute when page and all included pages will be loaded
   */
  self.initActualPage = function (cb) {
    var callback = cb || $.noop;
    initActualPage(function () {
      if ($.isFunction(callback)) callback();
      initSiteLinks();
    });
  };

  /**
   * Returns actual HTML page name.
   * @return string Page name
   */
  self.getActualPageName = function () {
    var pageName = "";
    if (siteConfig.nav.onePageNav) {
      pageName = siteManager.utils.getUrlParameter('page') + ".html";
    } else {
      pageName = window.location.pathname.split("/").pop();
    }
    return pageName;
  };

  /**
   * Checks if page exists
   * @param page: page url
   * @return A promise.
   */
  self.pageExists = function (page) {
    return $.ajax({
      url: page,
      type: 'HEAD'
    });
  };

  /**
   * Converts single URL to oneSinglePage site's URL format.
   * @param url URL to convert
   * @returns {string} oneSinglePage formatted URL
   */
  self.urlToSinglePageUrl = function (url) {
    return urlToSinglePageUrl(url);
  };

  /**
   * Go To main page
   */
  self.goToHomePage = function () {
    goToPage(siteConfig.pages.home);
  };

  /**
   * Redirect navigator to a internal page
   * @param href name of the page file: 'page.html'
   */
  self.goToPage = function (href) {
    goToPage(href);
  };

  /**
   * Check if MAQINT instance is being executed on MAQINT test server.
   * Uses a regular expression to validate valid server string values.
   * @returns {boolean}
   */
  self.isTestServer = function () {
    return isTestServer();
  };


  /* PRIVATE METHODS *************************************************************/

  /**
   * Define Site's main API Methods.
   */
  var initApi = function () {
    self.addToMainApi({
      goToHomePage: self.goToHomePage,
      goToPage: self.goToPage,
      getActualPageName: self.getActualPageName
    }, "nav");
  };

  /**
   * Check if page auto-redirects browser to another page on navigation's start.
   */
  var checkRedirection = function () {
    if (siteConfig.nav.onePageNav) return;
    var $redirect = $('[data-redirect]');
    if (!$redirect.length) return;
    var data = $redirect.first().data();
    if (data.redirect) {
      if (data.redirect == 'home') {
        self.goToHomePage();
      } else if (data.redirect == 'start') {
        self.goToPage(siteConfig.pages.start);
      } else {
        self.goToPage(data.redirect);
      }
      self.stopExecution();
    }
  };

  /**
   * Check if the link is a valid internal page or something else (anchors, lightbox, ...)
   */
  var checkPageLink = function (elem) {
    var href = $(elem).attr("href"),
      isPage = false;
    if (!href) return false;
    if (href.indexOf('http://') !== 0
      && href.indexOf('https://') !== 0
      && href.indexOf('#') !== 0
      && href.indexOf('mailto:') !== 0
      && (typeof $(elem).attr('data-toggle') === 'undefined') // check if is a lightbox link.
    ) {
      isPage = true;
    }
    return isPage;
  };

  /**
   * Initialize Site links. Overrides links behaviour of the site.
   * Prevents page redirection and generates url for load page into index page main container
   */
  var initSiteLinks = function () {
    $("a[href!='']").not('[data-lightbox]').on("click", function (event) {
      var $this = $(this);
      var href = $(this).attr("href");
      if (checkPageLink(this)) {
        event.preventDefault();
        goToPage(href);
      } else {
        customEvents.trigger("maqint:linkHrefNoAction", [$this]);
      }
    });
  };

  /**
   * Initialize Main Page
   * @param cb Callback to execute when page and all included pages will be loaded
   */
  var initActualPage = function (cb) {
    var page = false;
    var urlPage = siteManager.utils.getUrlParameter('page');
    if (urlPage) {
      page = siteConfig.paths.custom.pages + urlPage + ".html";
    }
    else if (siteConfig.pages.start) {
      page = siteConfig.paths.custom.pages + siteConfig.pages.start;
    }

    if (page) {
      self.pageExists(page)
        .done(function (resp) {
          renderPageMarkup(page, cb);
        })
        .fail(function () {
          if (page.indexOf('/custom/') !== -1) {
            var corePage = page.replace('/custom/', '/core/');
            self.pageExists(corePage)
              .done(function () {
                renderPageMarkup(corePage, cb);
                console.warn("Custom Page: '" + page + "' does not exist. Using Core page.");
              })
              .fail(function () {
                renderErrorPage(page, cb);
              });
          } else {
            renderErrorPage(page, cb);
          }
        });
    }
  };

  /**
   * @see api.urlToSinglePageUrl
   */
  var urlToSinglePageUrl = function (url) {
    if (!url) return '';
    if (url.indexOf('?page=') !== -1) return url;
    var tmp1 = url.split("/");
    var pageName = tmp1[tmp1.length - 1];
    if (pageName == "home" || pageName == "index.html") {
      pageName = siteConfig.pages.home;
    }
    var tmp2 = pageName.split('.html');
    var params = (tmp2[1]) ? tmp2[1].replace('?', '&') : '';
    var newUrl = "index.html?page=" + tmp2[0] + params;
    return newUrl;
  };

  /**
   * @see self.goToPage
   */
  var goToPage = function (href) {
    if (siteConfig.nav.onePageNav) {
      var newHref = urlToSinglePageUrl(href);
      window.location.href = newHref;
    } else {
      window.location.href = href;
    }
  };

  /**
   * Renders page's screen (main structure without page's contents)
   * @param screen Screen type
   * @returns jQuery promise
   */
  var renderPageScreenMarkup = function (screen) {
    var defaultScreen = siteConfig.ui.screen.defaultState || "main";
    var pageScreen = screen || defaultScreen;
    var screenFile = siteConfig.paths.main.layouts + pageScreen + ".html";
    var $wrapper = $(siteConfig.ui.selectors.mainWrapper);

    var def = $.Deferred();
    var promise = def.promise();

    self.pageExists(screenFile)
      .done(function () {
        $wrapper.load(screenFile, def.resolve);
      })
      .fail(function () {
        def.reject();
      });

    return promise;
  };

  /**
   * Render page's HTML content code into screen's main container.
   * @param page page's URL
   * @param cb Callback to execute when rendering ends.
   */
  var renderPageMarkup = function (page, cb) {
    var $temp = $("<div></div>");
    var pageCode = "";
    var pageScreen = false;

    $temp.load(page, function (code) {
      pageCode = code.replace(/data-screen(\s*)=(\s*)[\'\"](.*?)[\'\"]/g, function (match, p1, p2, p3) {
        pageScreen = p3;
        return match;
      });

      renderPageScreenMarkup(pageScreen)
        .done(function () {
          $(siteConfig.ui.selectors.mainContent).append(pageCode);
          initIncludes(1, cb);
        });
    });

  };

  /**
   * Render 404 error page's HTML code into main container.
   * @param page failed page's URL
   * @param cb Callback to execute when rendering ends.
   */
  var renderErrorPage = function (failPage, cb) {
    page = siteConfig.paths.custom.pages + siteConfig.pages.error.e404;
    renderPageMarkup(page, cb);
    console.error("Page '" + failPage + "' does not exist. Using 404 page.");
  };


  /**
   * Initialize HTML includes calls in HTML main structure.
   * @param level Level of including
   * @param cb Callback to execute when including process ends
   */
  var initIncludes = function (level, cb) {
    var onEnd = cb || $.noop;
    var $includers = $("[data-include]");
    var numIncludes = $includers.length;
    var noMoreIncludes = true;

    $includers.each(function () {
      var $includer = $(this);
      var data = $(this).data();
      var includePath = data.include;
      var force = data.force || false;

      if (self.includes[includePath] && (self.includes[includePath] < level) && !force) {
        --numIncludes;
        if (!numIncludes && noMoreIncludes) {
          onEnd();
        }
        return true;
      }

      self.includes[includePath] = level;
      $includer.load(data.include, function (response, status) {
        if (response && (response.search("data-include") !== -1)) {
          noMoreIncludes = false;
        }
        $includer.children().unwrap("[data-include]");
        --numIncludes;
        if (!numIncludes) {
          if (noMoreIncludes) {
            onEnd();
          }
          else {
            initIncludes(++level, onEnd);
          }
        }
      });
    })
  };

  /**
   * @see api.isTestServer
   */
  var isTestServer = function () {
    if (typeof siteConfig.nav.testServer === "undefined") return false;
    var serverRegExp = new RegExp(siteConfig.nav.testServer);
    return serverRegExp.test(window.location.host);
  };


  /* SELF INIT CLASS */
  self.init();

  return self;

};