window.goToSection = function (id, done, animate) {
  var $section = $('section#section-' + id);
  var $content = $('.section-content.collapse', $section);
  var offset = siteManager.ui.layout.isPhoneDeviceLayout() ? -50 : -180;
  var speed = 300;
  var isExpanded = $content.attr("aria-expanded");

  function moveTo () {
    if (animate === false) done();
    else {
      $.scrollTo($section, speed, {
        offset: offset,
        onAfter: done || $.noop
      });
    }
  }

  if (!isExpanded) {
    $section.one('shown.bs.collapse', moveTo);
    $content.collapse('show');
  } else {
    moveTo();
  }
};

$(document).on('site:ready', function () {

  var sectionscollapsed = true;
  var collapsibleCollapsed = true;

  // Configure section togglers
  $('section').each(function () {
    var $section = $(this);
    var $toggler = $('h1 .toggler', $section);
    var $content = $('.section-content', $section);
    if ($toggler.length) {
      if (sectionscollapsed) {
        $toggler.attr('aria-expanded', false);
        $content.removeClass('in');
        $section.removeClass('expanded');
      } else {
        $toggler.attr('aria-expanded', true);
        $content.addClass('in');
        $section.addClass('expanded');
      }
      $content.off("hidden.bs.collapse").on("hidden.bs.collapse", function(){
        var expanded = $toggler.attr('aria-expanded');
        $section.toggleClass("expanded", (expanded == "true"));
      });
      $content.off("shown.bs.collapse").on("shown.bs.collapse", function(){
        var expanded = $toggler.attr('aria-expanded');
        $section.addClass("expanded");
        if (siteConfig.analytics.events.sections.enabled) {
          gtag && gtag('event', siteConfig.analytics.events.sections.event, {
            'event_category': siteConfig.analytics.events.sections.category,
            'event_label': $section.data('analytics-label')
          });
        }
      });
    }
  });

  // Configure other collapsible
  $('.collapsible-wrapper').each(function () {
    var $collapsible = $(this);
    var $toggler = $('.collapsible-toggler', $collapsible);
    var $content = $('.collapsible-content', $collapsible);
    if ($toggler.length) {
      if (collapsibleCollapsed) {
        $toggler.attr('aria-expanded', false);
        $content.removeClass('in');
        $collapsible.removeClass('expanded');
      } else {
        $toggler.attr('aria-expanded', true);
        $content.addClass('in');
        $collapsible.addClass('expanded');
      }
      $content.off("hidden.bs.collapse").on("hidden.bs.collapse", function(){
        $collapsible.removeClass("expanded");
      });
      $content.off("shown.bs.collapse").on("shown.bs.collapse", function(){
        $collapsible.addClass("expanded");
      });
    }
  });

});
