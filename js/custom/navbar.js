$(document).on('site:ready', function () {

  // Init menu behavior

  var $toggler = getMenuToggler();

  // Init menu toggler
  $toggler.on('click', function () {
    if (!$toggler.is('.is-active'))
      openMenu();
    else
      closeMenu();
  });

  // Copy secondary meny
  $('.menu-secondary').first().clone().appendTo('.menu-secondary-copy');

  // Copy partner logos
  $('.partner-logos').first().clone().appendTo('.partner-logos-copy');

  var $links = getMenu().find('#menu-deploy-links a[data-toggle]');
  var $linksCollapse = $links.next('.collapse');

  $linksCollapse
    .on('hide.bs.collapse', function () {
      unfixResponsiveMenu();
      $(this).closest('li').removeClass('active');
    })
    .on('show.bs.collapse', function () {
      if ($(window).width() < 768)
        $linksCollapse.filter('.in').not(this).stop(true).addClass('auto-hiding').collapse('hide');
      $(this).removeClass('auto-hiding').closest('li').addClass('active');
    })
    .on('hidden.bs.collapse shown.bs.collapse', function () {
      if (!$(this).hasClass('auto-hiding'))
        fitResponsiveMenu();
    })
  ;

  // Bind links
  $(document)
    .on('click', 'a[href^="#"]', function (e) {
      if (!$(this).is('[data-toggle]') && this.href.match(/#\w+/)) {
        e.stopPropagation();
        var exact = $(this).data("goto");
        goTo(this.href, exact);
        return false;
      }
    });

  $('body').scrollspy({target: '#menu-deploy'});
  // $('body').on('activate.bs.scrollspy', function () {
  //   console.log(arguments);
  // });

  function resize() {
    // collapse submenus when in xs mode
    if ($(window).width() < 768)
      $linksCollapse.stop(true).collapse('hide');
    else
      $linksCollapse.not('[aria-expanded]').stop(true).collapse('show');
  }

  $(window).resize(resize);
  resize();
});

window.getMenu = function () {
  return $('#menu-deploy');
};

window.getMenuToggler = function () {
  return $('#menu-toggler');
};

window.openMenu = function () {
  getMenuToggler().addClass('is-active');
  getMenu().stop(true, true).slideDown(fitResponsiveMenu);
};

window.closeMenu = function () {
  getMenuToggler().removeClass('is-active');
  unfixResponsiveMenu();
  if (siteManager.ui.layout.isPhoneDeviceLayout()) {
    getMenu().find(".collapse").collapse("hide");
  }
  getMenu().stop(true, true).slideUp();
};

window.goTo = function (target, mode) {
  var hash = target.split('#')[1];
  var $target = $('#' + hash);
  // Si el destino es una sección o es un elemento contenido en una sección
  var $section = $target.closest('section');
  //console.log('go to ', $section);
  if ($section.length) {
    var sectionName = $section.attr('id').split('section-')[1];
    var sectionSpeed = (mode == "exact") ? false : 300;
    goToSection(sectionName, function () {
      window.goToExact($target);
    }, sectionSpeed);
  } else {
    window.goToExact($target);
  }
  closeMenu();
};

window.goToExact = function ($target, done) {
  var offset = -($("#main-header").height());
  $.scrollTo($target, 300, {
    offset: offset,
    onAfter: done || $.noop
  });
};

function fitResponsiveMenu() {
  var $menu = $('#menu-deploy');
  var $header = $('header');
  var menuH = $menu.height() + parseInt($header.height());
  var clientH = $(window).height();
  // console.log(clientH, menuH);
  if (menuH >= clientH)
    fixResponsiveMenu();
  else
    unfixResponsiveMenu();
}

function fixResponsiveMenu() {
  var $menu = $('#menu-deploy');
  $menu.addClass('menu-deploy-scrollable-fixed');
}

function unfixResponsiveMenu() {
  var $menu = $('#menu-deploy');
  $menu.removeClass('menu-deploy-scrollable-fixed');
}
