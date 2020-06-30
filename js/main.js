$(window).load(function () {

  /**
   * Site Manager
   * @type {SiteMain}
   */

  siteManager = new SiteMain({
    lazy: true,
    autoHideLoader: false,
    afterInit: function () {

      // Check for custom behaviour's definition overrides.
      if (typeof CustomMain !== 'undefined') {
        var main = new CustomMain({
          afterInit: function () {
            setTimeout(function () {
              $(document).triggerHandler('site:ready');
            }, 500);
          }
        });

      } else {
        setTimeout(function () {
          $(document).triggerHandler('site:ready');
        }, 500);
      }
    }
  });

  // Manual initialization after variable definition.
  siteManager.lazyInit();

});
