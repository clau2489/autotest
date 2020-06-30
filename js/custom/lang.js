(function (ctx) {

  var LangSelector = ctx.LangSelector = {};

  LangSelector.defaultLanguage = 'gl-ES';
  LangSelector.languageUrlParam = 'lang';
  LangSelector.actualLanguage = LangSelector.defaultLanguage;

  LangSelector.getLanguages = function () {
    return [{
      code: 'gl-ES',
      name: 'Galego'
    }, {
      code: 'es-ES',
      name: 'Castellano'
    }];
  };


  LangSelector;

  LangSelector.setLanguage = function (code) {
    var $opts = $('[data-lang-select]');
    $opts.closest('li').removeClass('active');
    var $opt = $opts.filter('[data-lang-select="' + code + '"]');
    $opt.closest('li').addClass('active');
    SiteURL.setParam(LangSelector.languageUrlParam, code);

    if (LangSelector.actualLanguage !== code) {
      LangSelector.actualLanguage = code;
      $(document).triggerHandler("languageChanged", code);
    }

    $('[data-localize]').localize('libs/i18n/' + code + '/main', {
      language: code,
      level: 3, // => Force 'main.gl-ES.txt' file format (Remove in other case).
      fileExtension: 'txt'
    })
  };

  LangSelector.getActualLanguage = function () {
    return LangSelector.actualLanguage;
  };

  LangSelector.getSelector = function () {
    return $('.lang-selector');
  };

  LangSelector.updateFromUrl = function () {
    var langCode = SiteURL.getParam(LangSelector.languageUrlParam) || LangSelector.defaultLanguage;
    if (langCode)
      LangSelector.setLanguage(langCode);
  };

  $(document).on('site:ready', function () {

    $('.lang-selector').first().clone().appendTo('.lang-selector-copy');

    var $langSelector = LangSelector.getSelector();
    var languages = LangSelector.getLanguages();

    $.each(languages, function (i, lang) {
      var $item = $('<li><a href="#" data-lang-select="' + lang.code + '">' + lang.name + '</a></li>');
      $langSelector.append($item);
    });

    $('[data-lang-select]').on('click', function (e) {
      e.stopPropagation();
      var $opt = $(this);
      var langCode = $opt.data('lang-select');
      LangSelector.setLanguage(langCode);
      return false;
    });

    LangSelector.updateFromUrl();

  });

})(window);
