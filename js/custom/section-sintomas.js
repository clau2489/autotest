$(document).on('sintomas:loaded', function () {

  // Referencias jQuery generales de la sección
  var
    $section = $('#section-sintomas-content'),
    $symptoms = $('.collapsible-content', $section),
    $questions = $('.block', $section),
    $actionBtns = $('[data-action]', $section)
  ;

  // Comportamiento al cerrar la sección
  $section.on("hidden.bs.collapse", function (event) {
    if ($(this).is(event.target)) {
      $symptoms.collapse("hide");
    }
  });

  // Comportamiento al abrir un síntoma
  $symptoms.on("show.bs.collapse", function (event) {
    $symptoms.not($(this)).collapse("hide");

  });

  // Comportamiento al cerrar un síntoma
  $symptoms.on('hidden.bs.collapse', function (e) {
    if ($(this).is(e.target)) {
      $(this).find('.block').parent('.collapse').collapse('hide');
      $(this).find('.block').removeClass('answered');
      $(this).find('.button').removeClass('selected');
    }
  });

  // Comportamiento al seleccionar una respuesta
  $actionBtns.on('click', function (e) {
    e.preventDefault();
    var $target = $(this).closest('.collapsible-content').find($(this).data('action'));
    var isTargetOpened = $target.hasClass('in');
    var $block = $(this).closest('.block');
    if ($block.hasClass('answered')) {
      clearAnswer($block.find('.selected'));
    }
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    $block.addClass('answered');
    setTimeout(function () {
      $target.collapse('show');
    }, isTargetOpened ? 500 : 0);
  });

  // Impedir la propagación de eventos de las preguntas
  $questions.on('show.bs.collapse hidden.bs.collapse', function (e) {
    e.stopPropagation();
  });

  function clearAnswer($btn) {
    var $target = $btn.closest('.collapsible-content').find($btn.data('action'));
    if ($target.find('.block').hasClass('answered')) {
      clearAnswer($target.find('.selected'));
      $target.find('.selected').removeClass('selected');
    }
    $target.collapse('hide');
  }

});
