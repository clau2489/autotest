<?php

?>

<!DOCTYPE html>
<html lang="es">

<!-- Head -->
<head>
  <meta charset="utf-8">
  <title>Autotest Coronavirus | Marcos Paz Digital</title>
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="autotest por covid-19">
  <meta name="theme-color" content="#2e7d32">
  <meta name="author" content="Hernán Pallarez">
  <meta name="description" content="Autotest por covid-19. Marcos Paz Digital. Municipalidad de Marcos Paz">
  <link rel="icon" type="image/png" sizes="50x49" href="images/mpdsmallicon.png">
  <link rel="shortcut icon" href="images/favicon.ico">
  
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/btp43.min.css">

  <script src="libs-base/jquery/js/jquery.min.js"></script>
	<script src="libs-base/bootstrap-sass/js/bootstrap.min.js"></script>
	<script src="libs-base/bowser/js/bowser.js"></script>
	<script src="libs-base/jquery.scrollTo/js/jquery.scrollTo.js"></script>

  <script src="js/support.js"></script>
	<script src="js/core/common/extend.js"></script>
	<script src="js/core/common/utils.class.js"></script>
	<script src="js/core/common/storage.class.js"></script>

	<script src="js/custom/navbar.js"></script>
	<script src="js/custom/section-sintomas.js"></script>
	<script src="js/custom/sections.js"></script>
	<script src="js/custom/url.js"></script>
	<script src="js/core/ui/ui.base.class.js"></script>
	<script src="js/core/ui/pages/page.base.class.js"></script>
	<script src="js/core/ui/ui.layout.class.js"></script>
	<script src="js/core/main/base.class.js"></script>
	<script src="js/core/main/browser.class.js"></script>
	<script src="js/core/main/main.class.js"></script>
	<script src="js/core/main/navigation.class.js"></script>
	<script src="js/core/config.js"></script>
	<script src="js/custom/config.js"></script>
	<script src="js/main.js"></script>
	<script src="libs/jquery-ui-1.12.1-effects/jquery-ui-effects.min.js"></script>

  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-55555555-44');
  </script>
  <script type="text/javascript">
  document.write('<a href="mpdstats/stats.php" target="_blank"><img src="mpdstats/counter.php?ref=' + escape(document.referrer) + '" border="0"></a>')
  </script>
  <noscript><a href="mpdstats/stats.php"><img src="mpdstats/counter.php" border="0"></a></noscript>
</head>


<!-- Body -->
<body>

<!-- Main Header -->
<header id="main-header">
  <nav class="navbar navbar-light navbar-expand bg-light navigation-clean">
    <div class="container">
      <img src="images/modernizacion05.png" width="15%">
      <a class="navbar-brand" href="#">Marcos Paz Digital</a>
      <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"></button>
    </div>
  </nav>
</header>

<!-- Banner -->
<section id="banner">
  <div class="container-fluid">
    <div class="row text-center">
      <br><br>
      <h1 style="font-size:4rem; color:white;">Brote de enfermedad por coronavirus (COVID-19)</h1>
      <h2 style="color: rgba(250, 250, 250, 1);">Secretaría de Salud</h2>
      <p><img src="images/mmpblanco.png" style="width: 25%" alt="MMP"> </p>      
    </div>
  </div>  
</section>


<!-- Telefonos de atencion -->
<section id="urgencias">
  <div class="container-fluid alert alert-success" style="margin: 10px;">
    <div class="row">
      <div class="col-md-3 p2 text-center">
        <a href="tel:02204770242"><i class="fa fa-volume-control-phone fa-5x"></i></a>
      </div>
      <div class="col-md-9 p2">
        <p style="font-size:16px;"><a href="tel:02204770242"><b>(0220)477-0242</b></a> Marcos Paz Salud :: Teléfono para comunicación oficial con el Sistema Público de Salud Municipal.<br></p>
        <p style="font-size:16px;"><a href="tel:08002221002"><b>0800-222-1002</b></a> Salud Responde, opción 1. Teléfono gratuito para llamados desde todo el país.<br></p>
        <p style="font-size:16px;"><a href="tel:134"><b>134</b></a> Para denunciar a quienes violen la cuarentena, comunicate con el Ministerio de Seguridad al número gratuito 134.<br></p>
        <p class="margin-0"> * Todos estos números tienen atención las 24hs.</p>        
      </div>             
    </div>
  </div>  
</section>



<!-- Zonas Definidas por Coronavirus 
<section id="zonas">
  <div class="container-fluid alert alert-warning" style="margin: 10px;">
    <div class="row">
      <div class="col-md-3 p2 text-center">
        <i class="fa fa-map-marker fa-5x"></i>
      </div>
      <div class="col-md-9 p2">
      <h4>Zonas definidas con transmisión local en Argentina</h4>
      <br>
        <li>Ciudad Autónoma de Buenos Aires</li>
        <br>
        <li>Provincia de Buenos Aires:
          <span>Área Metropolitana de la provincia de Buenos Aires</span>
        </li>
        <br>
        <ul>
          RS V (completa): General San Martín, José C. Paz, Malvinas Argentinas, San Fernando, San Isidro, San Miguel, Tigre, Vicente López, Campana, Escobar, Exaltación de la Cruz, Pilar, Zárate.
        </ul>
        <ul>
          RS VI (completa): Almirante Brown, Avellaneda, Berazategui, Esteban Echeverría, Ezeiza, Florencio Varela, Lanús, Lomas de Zamora, Quilmes.
        </ul>
        <ul>
          RS XI en los siguientes municipios: Berisso, Brandsen, Cañuelas, Ensenada, La Plata, Presidente Perón, San Vicente.
        </ul>
        <ul>
          RS XII: La Matanza.
        </ul>
        <br>                        
        <li>Provincia de Chaco</li>
        <ul>Resistencia</ul>
        <ul>Barranqueras</ul>
        <ul>Fontana</ul>
        <ul>Puerto Vilelas</ul>
        <br>
        <li>Provincia de Córdoba</li>
        <ul>Ciudad de Córdoba</ul>
        <ul></ul>
        <br>
        <li>Provincia de Río Negro</li>
        <ul>Bariloche</ul>
        <ul>Choele Choel</ul>
        <ul>Cipoletti</ul>      
      </div>
    </div>
  </div> 
</section>
-->

<!-- Autotest --> 
<section id="autotest">
  
  <div id="sintomas" role="main">
    
    <section id="section-sintomas" class="section-primary" data-analytics-label="1. Tengo síntomas y me preocupa que pueda ser por coronavirus">
      
      <div class="container">
        <h1 class="underline-sm">
          <span>Realizar el AUTOTEST por coronavirus</span>
          <span class="text-primary">.</span>
          <a class="toggler" role="button" data-toggle="collapse" href="#section-sintomas-content" aria-expanded="true" aria-controls="collapseSectionSintomas"
          ></a>
        </h1>
      </div>

      <div id="section-sintomas-content" class="section-content collapse in">
        
        <div class="section-content-inner">
          
          <div class="container">
            <p>Entre mis síntomas se encuentran alguno de los siguientes:</p>
          </div>

          <!-- Con sintomas -->
          <div id="sintomas-tos" class="collapsible-wrapper">
            
            <a href="#collapsible-tos" class="collapsible-toggler" data-toggle="collapse">Tengo fiebre mayor a 37.5º asociada a uno o varios de estos síntomas: tos seca, dolor de garganta, dificultad respiratoria y/o disminución del gusto olfato/gusto.
            </a>

            
            <div id="collapsible-tos" class="collapse collapsible-content">
              
              <div class="row p-t-15">                
                
                <!-- Pregunta 1 --> 
                <div id="tos-viaje" class="col-xs-12">
                  <div class="block block-light first m-b-15">
                    <div class="block-body">
                      <h3>USTED ESTUVO DE VIAJE?</h3>
                      <p>Si además  de los síntomas anteriormente nombrados indique si ha regresado al país, dentro de los últimos 14 días o tiene historial de viaje o residencia en zonas de transmisión local (ya sea comunitaria o por conglomerados) de COVID-19 en Argentina.</p>
                      <div class="row">
                        <div class="col-md-3 p2 text-center">
                          <i class="fa fa-map-marker fa-5x"></i>
                        </div>
                        <div class="col-md-9 p2">
                        <h4>Zonas definidas con transmisión local en Argentina</h4>
                        <br>
                          <li>Ciudad Autónoma de Buenos Aires</li>
                          <br>
                          <li>Provincia de Buenos Aires:
                            <span>Área Metropolitana de la provincia de Buenos Aires</span>
                          </li>
                          <br>
                          <ul>
                            RS V (completa): General San Martín, José C. Paz, Malvinas Argentinas, San Fernando, San Isidro, San Miguel, Tigre, Vicente López, Campana, Escobar, Exaltación de la Cruz, Pilar, Zárate.
                          </ul>
                          <ul>
                            RS VI (completa): Almirante Brown, Avellaneda, Berazategui, Esteban Echeverría, Ezeiza, Florencio Varela, Lanús, Lomas de Zamora, Quilmes.
                          </ul>
                          <ul>RS VII (completa): Hurlingham, Ituzaingó, Merlo, Moreno, Morón, Tres de Febrero, General Las Heras, General Rodríguez, Luján, Marcos Paz.                            
                          </ul>
                          <ul>
                            RS XI en los siguientes municipios: Berisso, Brandsen, Cañuelas, Ensenada, La Plata, Presidente Perón, San Vicente.
                          </ul>
                          <ul>
                            RS XII: La Matanza.
                          </ul>
                          <br>                        
                          <li>Provincia de Chaco</li>
                          <ul>Resistencia</ul>
                          <ul>Barranqueras</ul>
                          <ul>Fontana</ul>
                          <ul>Puerto Vilelas</ul>
                          <br>
                          <li>Provincia de Córdoba</li>
                          <ul>Ciudad de Córdoba</ul>
                          <ul></ul>
                          <br>
                          <li>Provincia de Río Negro</li>
                          <ul>Bariloche</ul>
                          <ul>Choele Choel</ul>
                          <ul>Cipoletti</ul>      
                        </div>
                      </div>
                      <div class="block-actions">
                        <a href="#" class="button button-small button-blue button-disabled-alpha w-100" data-action="#result-positive">
                          SI
                        </a>
                        <a href="#" class="button button-small button-outline button-blue button-disabled-alpha w-100" data-action="#pregunta2">
                          NO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Pregunta 2-->
                <div id="pregunta2" class="col-xs-12 collapse">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                      <p>Es usted residente o personal que trabaja en instituciones cerradas ó de internación prolongada (penitenciarias, residencias de adultos mayores, instituciones neuropsiquiátricas, hogares de niñas y niños)</p>
                      <br>
                      <p>Es usted Personal esencial (Fuerzas de seguridad y Fuerzas Armadas. Personas que brinden asistencia a personas mayores)</p>
                      <br>
                      <p>Es usted habitante de barrios populares y pueblos originarios</p>
                      <br>
                      <p>Y presenta uno o más síntomas como: fiebre (37.5°C o más), tos, dolor de garganta, dificultad respiratoria y/o disminución del olfato/gusto de reciente aparición.</p>
                      <br>
                      <p>* Es usted personal de salud que presenta uno o más síntomas: fiebre (37.5°C o más), tos, dolor de garganta, dificultad respiratoria y/o disminución del olfato/gusto de reciente aparición; y trabaja en zonas con o sin transmisión viral</p>
                      <div class="block-actions">
                        <a href="#" class="button button-small button-blue button-disabled-alpha w-100" data-action="#result-positive">
                          SI
                        </a>
                        <a href="#" class="button button-small button-outline button-blue button-disabled-alpha w-100" data-action="#pregunta3">
                          NO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Pregunta 3 -->
                <div id="pregunta3" class="col-xs-12 collapse">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                      <h3>Ha estado usted en contacto estrecho con caso confirmado de COVID-19:</h3>
                      <p>Ante la presencia de 1 o más de estos síntomas: fiebre (37.5°C o más), tos, dolor de garganta, dificultad respiratoria y/o disminución del olfato/gusto de reciente aparición.</p>
                      <div class="block-actions">
                        <a href="#" class="button button-small button-blue button-disabled-alpha w-100" data-action="#result-positive">
                          SI
                        </a>
                        <a href="#" class="button button-small button-outline button-blue button-disabled-alpha w-100" data-action="#pregunta4">
                          NO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Pregunta 4 -->
                <div id="pregunta4" class="col-xs-12 collapse">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                      <h3>Ha presentado alteración del gusto/olfato, de reciente aparición y sin otra causa definida, signos o síntomas.</h3>
                      <div class="block-actions">
                        <a href="#" class="button button-small button-blue button-disabled-alpha w-100" data-action="#result-positive">
                          SI
                        </a>
                        <a href="#" class="button button-small button-outline button-blue button-disabled-alpha w-100" data-action="#pregunta5">
                          NO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Pregunta 5 --> 
                <div id="pregunta5" class="col-xs-12 collapse">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                      <h3>Usted vive en una zona definida de transmisión viral local, y tiene diagnóstico clínico y radiológico de neumonía y sin causa que lo explique. </h3>
                        <div class="row">
                          <div class="col-md-3 p2 text-center">
                            <i class="fa fa-map-marker fa-5x"></i>
                          </div>
                          <div class="col-md-9 p2">
                          <h4>Zonas definidas con transmisión local en Argentina</h4>
                          <br>
                            <li>Ciudad Autónoma de Buenos Aires</li>
                            <br>
                            <li>Provincia de Buenos Aires:
                              <span>Área Metropolitana de la provincia de Buenos Aires</span>
                            </li>
                            <br>
                            <ul>
                              RS V (completa): General San Martín, José C. Paz, Malvinas Argentinas, San Fernando, San Isidro, San Miguel, Tigre, Vicente López, Campana, Escobar, Exaltación de la Cruz, Pilar, Zárate.
                            </ul>
                            <ul>
                              RS VI (completa): Almirante Brown, Avellaneda, Berazategui, Esteban Echeverría, Ezeiza, Florencio Varela, Lanús, Lomas de Zamora, Quilmes.
                            </ul>
                            <ul>
                              RS VII (completa): Hurlingham, Ituzaingó, Merlo, Moreno, Morón, Tres de Febrero, General Las Heras, General Rodríguez, Luján, Marcos Paz.
                            </ul>                            
                            <ul>
                              RS XI en los siguientes municipios: Berisso, Brandsen, Cañuelas, Ensenada, La Plata, Presidente Perón, San Vicente.
                            </ul>
                            <ul>
                              RS XII: La Matanza.
                            </ul>
                            <br>                        
                            <li>Provincia de Chaco</li>
                            <ul>Resistencia</ul>
                            <ul>Barranqueras</ul>
                            <ul>Fontana</ul>
                            <ul>Puerto Vilelas</ul>
                            <br>
                            <li>Provincia de Córdoba</li>
                            <ul>Ciudad de Córdoba</ul>
                            <ul></ul>
                            <br>
                            <li>Provincia de Río Negro</li>
                            <ul>Bariloche</ul>
                            <ul>Choele Choel</ul>
                            <ul>Cipoletti</ul>      
                          </div>
                        </div>
                      <div class="block-actions">
                        <a href="#" class="button button-small button-blue button-disabled-alpha w-100" data-action="#result-positive">
                          SI
                        </a>
                        <a href="#" class="button button-small button-outline button-blue button-disabled-alpha w-100" data-action="#pregunta6">
                          NO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Pregunta 6 --> 
                <div id="pregunta6" class="col-xs-12 collapse">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                      <h3>Usted tiene infección respiratoria aguda, grave y requiere internación. </h3>
                      <div class="block-actions">
                        <a href="#" class="button button-small button-blue button-disabled-alpha w-100" data-action="#result-positive">
                          SI
                        </a>
                        <a href="#" class="button button-small button-outline button-blue button-disabled-alpha w-100" data-action="#result-negative">
                          NO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Resultado Positivo -->
                <div id="result-positive" class="col-xs-12 collapse result result-positive">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                      <h4>USTED ES CASO SOSPECHOSO</h4>
                      <p><b>Usted debe cumplir la cuarentena</b> y avisar a las autoridades sanitarias al telefono <a href="tel:02204770242">477-0242</a>, indicando que realizó el Autotest. </p>
                      <p>Puede seguir viendo las indicaciones recomendadas en la guía que se encuentra más abajo.</p>
                    </div>
                  </div>
                </div>                


                <!-- Resultado Negativo -->
                <div id="result-negative" class="col-xs-12 collapse result result-negative">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                    <p>USTED NO ES CASO SOSPECHOSO DE CORONAVIRUS</p>
                    <p>Según los protocolos actuales, usted no cumple los criterios de infección por COVID-19. <span> Debe cumplir con las medidas de distanciamiento social obligatorio por decreto, para prevenir el contagio comunitario.</span></p>
                    <br>
                    <p>Puede seguir viendo las indicaciones recomendadas en la guía que se encuentra más abajo.</p>
                    </div>
                  </div>
                </div>


              </div>
            
            </div>

          </div>

          <!-- Sin sintomas -->
          <div id="sintomas-ninguno" class="collapsible-wrapper">
            <a href="#collapsible-ninguno" class="collapsible-toggler" data-toggle="collapse"
            > No tengo ningún síntoma</a>
            <div id="collapsible-ninguno" class="collapse collapsible-content">
              <div class="row p-t-15">

                <!-- Pregunta 1 --> 
                <div id="no-viaje" class="col-xs-12">
                  <div class="block block-light first m-b-15">
                    <div class="block-body">
                      <h3>USTED ESTUVO DE VIAJE?</h3>
                      <p>Si además  de los síntomas anteriormente nombrados indique si ha regresado al país, dentro de los últimos 14 días o tiene historial de viaje o residencia en zonas de transmisión local (ya sea comunitaria o por conglomerados) de COVID-19 en Argentina.</p>
                      <div class="row">
                        <div class="col-md-3 p2 text-center">
                          <i class="fa fa-map-marker fa-5x"></i>
                        </div>
                        <div class="col-md-9 p2">
                        <h4>Zonas definidas con transmisión local en Argentina</h4>
                        <br>
                          <li>Ciudad Autónoma de Buenos Aires</li>
                          <br>
                          <li>Provincia de Buenos Aires:
                            <span>Área Metropolitana de la provincia de Buenos Aires</span>
                          </li>
                          <br>
                          <ul>
                            RS V (completa): General San Martín, José C. Paz, Malvinas Argentinas, San Fernando, San Isidro, San Miguel, Tigre, Vicente López, Campana, Escobar, Exaltación de la Cruz, Pilar, Zárate.
                          </ul>
                          <ul>
                            RS VI (completa): Almirante Brown, Avellaneda, Berazategui, Esteban Echeverría, Ezeiza, Florencio Varela, Lanús, Lomas de Zamora, Quilmes.
                          </ul>
                          <ul>RS VII (completa): Hurlingham, Ituzaingó, Merlo, Moreno, Morón, Tres de Febrero, General Las Heras, General Rodríguez, Luján, Marcos Paz.                            
                          </ul>
                          <ul>
                            RS XI en los siguientes municipios: Berisso, Brandsen, Cañuelas, Ensenada, La Plata, Presidente Perón, San Vicente.
                          </ul>
                          <ul>
                            RS XII: La Matanza.
                          </ul>
                          <br>                        
                          <li>Provincia de Chaco</li>
                          <ul>Resistencia</ul>
                          <ul>Barranqueras</ul>
                          <ul>Fontana</ul>
                          <ul>Puerto Vilelas</ul>
                          <br>
                          <li>Provincia de Córdoba</li>
                          <ul>Ciudad de Córdoba</ul>
                          <ul></ul>
                          <br>
                          <li>Provincia de Río Negro</li>
                          <ul>Bariloche</ul>
                          <ul>Choele Choel</ul>
                          <ul>Cipoletti</ul>      
                        </div>
                      </div>
                      <div class="block-actions">
                        <a href="#" class="button button-small button-blue button-disabled-alpha w-100" data-action="#cumplecuarentena">
                          SI
                        </a>
                        <a href="#" class="button button-small button-outline button-blue button-disabled-alpha w-100" data-action="#pregunta2">
                          NO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Pregunta 2-->
                <div id="pregunta2" class="col-xs-12 collapse">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                      <p>Es usted residente o personal que trabaja en instituciones cerradas ó de internación prolongada (penitenciarias, residencias de adultos mayores, instituciones neuropsiquiátricas, hogares de niñas y niños)</p>
                      <br>
                      <p>Es usted Personal esencial (Fuerzas de seguridad y Fuerzas Armadas. Personas que brinden asistencia a personas mayores)</p>
                      <br>
                      <p>Es usted habitante de barrios populares y pueblos originarios</p>
                      <br>
                      <p>Y presenta uno o más síntomas como: fiebre (37.5°C o más), tos, dolor de garganta, dificultad respiratoria y/o disminución del olfato/gusto de reciente aparición.</p>
                      <br>
                      <p>* Es usted personal de salud que presenta uno o más síntomas: fiebre (37.5°C o más), tos, dolor de garganta, dificultad respiratoria y/o disminución del olfato/gusto de reciente aparición; y trabaja en zonas con o sin transmisión viral</p>
                      <div class="block-actions">
                        <a href="#" class="button button-small button-blue button-disabled-alpha w-100" data-action="#result-positive">
                          SI
                        </a>
                        <a href="#" class="button button-small button-outline button-blue button-disabled-alpha w-100" data-action="#pregunta3">
                          NO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Pregunta 3 -->
                <div id="pregunta3" class="col-xs-12 collapse">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                      <h3>Ha estado usted en contacto estrecho con caso confirmado de COVID-19:</h3>
                      <p>Ante la presencia de 1 o más de estos síntomas: fiebre (37.5°C o más), tos, dolor de garganta, dificultad respiratoria y/o disminución del olfato/gusto de reciente aparición.</p>
                      <div class="block-actions">
                        <a href="#" class="button button-small button-blue button-disabled-alpha w-100" data-action="#result-positive">
                          SI
                        </a>
                        <a href="#" class="button button-small button-outline button-blue button-disabled-alpha w-100" data-action="#pregunta4">
                          NO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Pregunta 4 -->
                <div id="pregunta4" class="col-xs-12 collapse">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                      <h3>Ha presentado alteración del gusto/olfato, de reciente aparición y sin otra causa definida, signos o síntomas.</h3>
                      <div class="block-actions">
                        <a href="#" class="button button-small button-blue button-disabled-alpha w-100" data-action="#result-positive">
                          SI
                        </a>
                        <a href="#" class="button button-small button-outline button-blue button-disabled-alpha w-100" data-action="#pregunta5">
                          NO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Pregunta 5 --> 
                <div id="pregunta5" class="col-xs-12 collapse">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                      <h3>Usted vive en una zona definida de transmisión viral local, y tiene diagnóstico clínico y radiológico de neumonía y sin causa que lo explique. </h3>
                        <div class="row">
                          <div class="col-md-3 p2 text-center">
                            <i class="fa fa-map-marker fa-5x"></i>
                          </div>
                          <div class="col-md-9 p2">
                          <h4>Zonas definidas con transmisión local en Argentina</h4>
                          <br>
                            <li>Ciudad Autónoma de Buenos Aires</li>
                            <br>
                            <li>Provincia de Buenos Aires:
                              <span>Área Metropolitana de la provincia de Buenos Aires</span>
                            </li>
                            <br>
                            <ul>
                              RS V (completa): General San Martín, José C. Paz, Malvinas Argentinas, San Fernando, San Isidro, San Miguel, Tigre, Vicente López, Campana, Escobar, Exaltación de la Cruz, Pilar, Zárate.
                            </ul>
                            <ul>
                              RS VI (completa): Almirante Brown, Avellaneda, Berazategui, Esteban Echeverría, Ezeiza, Florencio Varela, Lanús, Lomas de Zamora, Quilmes.
                            </ul>
                            <ul>
                              RS VII (completa): Hurlingham, Ituzaingó, Merlo, Moreno, Morón, Tres de Febrero, General Las Heras, General Rodríguez, Luján, Marcos Paz.
                            </ul>                            
                            <ul>
                              RS XI en los siguientes municipios: Berisso, Brandsen, Cañuelas, Ensenada, La Plata, Presidente Perón, San Vicente.
                            </ul>
                            <ul>
                              RS XII: La Matanza.
                            </ul>
                            <br>                        
                            <li>Provincia de Chaco</li>
                            <ul>Resistencia</ul>
                            <ul>Barranqueras</ul>
                            <ul>Fontana</ul>
                            <ul>Puerto Vilelas</ul>
                            <br>
                            <li>Provincia de Córdoba</li>
                            <ul>Ciudad de Córdoba</ul>
                            <ul></ul>
                            <br>
                            <li>Provincia de Río Negro</li>
                            <ul>Bariloche</ul>
                            <ul>Choele Choel</ul>
                            <ul>Cipoletti</ul>      
                          </div>
                        </div>
                      <div class="block-actions">
                        <a href="#" class="button button-small button-blue button-disabled-alpha w-100" data-action="#result-positive">
                          SI
                        </a>
                        <a href="#" class="button button-small button-outline button-blue button-disabled-alpha w-100" data-action="#pregunta6">
                          NO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Pregunta 6 --> 
                <div id="pregunta6" class="col-xs-12 collapse">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                      <h3>Usted tiene infección respiratoria aguda, grave y requiere internación. </h3>
                      <div class="block-actions">
                        <a href="#" class="button button-small button-blue button-disabled-alpha w-100" data-action="#result-positive">
                          SI
                        </a>
                        <a href="#" class="button button-small button-outline button-blue button-disabled-alpha w-100" data-action="#result-negative">
                          NO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Resultado Positivo -->
                <div id="result-positive" class="col-xs-12 collapse result result-positive">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                      <h4>USTED ES CASO SOSPECHOSO</h4>
                      <p><b>Usted debe cumplir la cuarentena</b> y avisar a las autoridades sanitarias al telefono <a href="tel:02204770242">477-0242</a>, indicando que realizó el Autotest. </p>
                      <p>Puede seguir viendo las indicaciones recomendadas en la guía que se encuentra más abajo.</p>
                    </div>
                  </div>
                </div>                


                <!-- Resultado Negativo -->
                <div id="result-negative" class="col-xs-12 collapse result result-negative">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                    <p>USTED NO ES CASO SOSPECHOSO DE CORONAVIRUS</p>
                    <p>Según los protocolos actuales, usted no cumple los criterios de infección por COVID-19. <span> Debe cumplir con las medidas de distanciamiento social obligatorio por decreto, para prevenir el contagio comunitario.</span></p>
                    <br>
                    <p>Puede seguir viendo las indicaciones recomendadas en la guía que se encuentra más abajo.</p>
                    </div>
                  </div>
                </div>

                <!-- Llame a centro de salud-->
                <div id="llamar" class="col-xs-12 collapse result result-positive">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                      <p>Llame a su centro de salud y al teléfono <a href="tel:02204770242">477-0242</a>, indicando que realizó el Autotest.</p>
                    </div>
                  </div>
                </div>

                <!-- Cumple Cuarentena -->
                <div id="cumplecuarentena" class="col-xs-12 collapse result result-indef">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                      <p><b>Usted debe cumplir la cuarentena con aislamiento de sus convivientes y extremar las medidas higiénicas.</b></p>
                      <p>Llame al <a href="tel:02204770242">477-0242</a> para avisar a las autoridades sanitarias.</p>
                      <p>También puede seguir viendo las indicaciones recomendadas en la guía que se encuentra más abajo.</p>
                    </div>
                  </div>
                </div>


                <!-- Resultado Negativo -->
                <div id="resultado-netgativo" class="col-xs-12 collapse result result-negative">
                  <div class="block block-light m-b-15">
                    <div class="block-body">
                      <p>Según los protocolos actuales no cumple los criterios de infección por COVID-19.
                      <b>Debe cumplir con las medidas de distanciamiento social obligatorio por decreto, para prevenir el contagio comunitario.</b></p>
                      <p>Puede seguir viendo las indicaciones recomendadas en la guía que se encuentra más abajo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>

  </div>  

</section>
<script>
$(document).on('site:ready', function () {
  $(document).triggerHandler('sintomas:loaded');
});
</script>


<!-- Guia de Recomendaciones -->
<section id="section-guia" class="section-primary">
  <div class="container">
  <A name="guia"> <h6 style="margin-bottom:20px;font-weight: 900;font-size: 30px;"><span>Guía de cuidados y recomendaciones:</span></span></h6></A>  
  </div>
</section>



<!-- Cumpliendo aislamiento -->
<section id="section-aislado" class="section-primary" data-analytics-label="2. Estoy cumpliendo aislamiento en casa">
  <div class="container">
    <h1 class="underline-sm">
      <span>Estoy cumpliendo aislamiento en casa</span><span class="text-primary">.</span>
      <a class="toggler" role="button" data-toggle="collapse" href="#section-aislado-content" aria-expanded="true" aria-controls="collapseSectionAislado"></a>
    </h1>
  </div>
  <div id="section-aislado-content" class="section-content collapse in">
    <div class="section-content-inner">
      <div id="aislado-que-hacer" class="collapsible-wrapper">
        <a href="#collapsible-aislado-que-hacer" class="collapsible-toggler" data-toggle="collapse"
        >Qué tengo que hacer durante el aislamiento?</a>
        <div id="collapsible-aislado-que-hacer" class="collapse collapsible-content">
          <div class="row p-t-15 p-b-15">
            <div class="col-xs-12 p-b-15">
              <div class="block block-light">
                <div class="block-body">
                  <div><p>Características del lugar de aislamiento (si es posible):</p><ul><li>La vivienda debe disponer de una buena ventilación, con posibilidad de designar un baño para uso exclusivo del paciente.</li><li>La persona aislada debe disponer de teléfono para garantizar la comunicación permanente con el personal sanitario hasta la resolución de los síntomas.</li><li>El paciente no debe convivir con personas con condiciones de salud que supongan una vulnerabilidad: personas de edad avanzada, diversidad funcional, enfermedades crónicas, inmunodeprimidas, embarazadas... Tanto el paciente como sus convivientes deben ser capaces de comprender y aplicar de forma correcta y consistente las medidas básicas de higiene, prevención y control de la infección.</li><li>El paciente deberá permanecer preferiblemente en una habitación de uso individual o, en caso de que esto no sea posible, en un lugar en el que se pueda garantizar una distancia mínima de 2 metros con el resto de los convivientes. La puerta de la habitación deberá permanecer cerrada. En caso de que sea imprescindible ir a las zonas comunes del domicilio deberá utilizar mascarilla quirúrgica y realizar higiene de manos al salir de la habitación. Se mantendrán bien ventiladas las zonas comunes.</li><li>La habitación deberá tener una ventilación adecuada. No deben existir corrientes forzadas de aire provenientes de sistemas de calor o refrigeración.</li><li>En el interior de la habitación deberá colocarse un cubo de basura con tapa de apertura de pedal y en su interior una bolsa de plástico que cierre herméticamente para los residuos.</li><li>Se recomienda disponer utensilios de aseo de uso individual y de productos para la higiene de manos como jabón o alcohol en gel.</li><li>Las toallas deberán cambiarse periódicamente siempre que se encuentren húmedas.</li><li>La persona enferma deberá seguir en todo momento las medidas de higiene respiratoria: cubrirse la boca y la nariz al toser o estornudar con pañuelos desechables o el pliegue del codo, y lavarse las manos inmediatamente después.</li><li>La persona enferma no deberá recibir visitas durante el periodo de aislamiento.</li></ul></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="aislado-no-contacto" class="collapsible-wrapper">
        <a href="#collapsible-aislado-no-contacto" class="collapsible-toggler" data-toggle="collapse"
        >Aún no se han puesto en contacto conmigo</a>
        <div id="collapsible-aislado-no-contacto" class="collapse collapsible-content">
          <div class="row p-t-15 p-b-15">
            <div class="col-xs-12 p-b-15">
              <div class="block block-light">
                <div class="block-body">
                  <div>Tras la indicación de quedarse en casa, cumpla con las recomendaciones de higiene personal y aislamiento. En caso de empeoramiento llame a su centro de salud o al teléfono <a href="tel:02204770242">477-0242</a>.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="aislado-no-resultados" class="collapsible-wrapper">
        <a href="#collapsible-aislado-no-resultados" class="collapsible-toggler" data-toggle="collapse"
        >Me tomaron las muestras y aún no me han dado los resultados</a>
        <div id="collapsible-aislado-no-resultados" class="collapse collapsible-content">
          <div class="row p-t-15 p-b-15">
            <div class="col-xs-12 p-b-15">
              <div class="block block-light">
                <div class="block-body">
                  <div>Los resultados de las muestras pueden tardar en ser comunicados al paciente de 48 a 72 horas.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="aislado-empeorado" class="collapsible-wrapper">
        <a href="#collapsible-aislado-empeorado" class="collapsible-toggler" data-toggle="collapse"
        >Mi salud ha empeorado desde que estoy cumpliendo la cuarentena</a>
        <div id="collapsible-aislado-empeorado" class="collapse collapsible-content">
          <div class="row p-t-15 p-b-15">
            <div class="col-xs-12 p-b-15">
              <div class="block block-light">
                <div class="block-body">
                  <div>
                    <p>Si durante la cuarentena en casa se encuentra en cualquiera de la siguientes situaciones:</p><ul><li>Presenta dificultad respiratoria marcada.</li><li>Fiebre permanente por encima de 39º y los medicamentos que está tomando (en caso de haberlo hecho) no están consiguiendo disminuirla.</li><li>Cualquier signo de gravedad de otra índole (por ejemplo alteración de la consciencia)</li></ul><p>Llame de manera urgente al teléfono <a href="tel:02204770242">477-0242</a>. Indicando que su situación de salud ha empeorado.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<script>
$(document).on('site:ready', function () {
  $(document).triggerHandler('aislado:loaded');
});
</script>



<!-- Soy Positivo -->
<section id="section-positivo" class="section-primary" data-analytics-label="3. He dado positivo por coronavirus">
  <div class="container">
    <h1 class="underline-sm">
      <span>He dado positivo por coronavirus</span><span class="text-primary">.</span>
      <a class="toggler" role="button" data-toggle="collapse" href="#section-positivo-content" aria-expanded="true" aria-controls="collapseSectionPositivo"></a>
    </h1>
  </div>
  <div id="section-positivo-content" class="section-content collapse in">
    <div class="section-content-inner">
      <div id="positivo-que-hacer" class="collapsible-wrapper">
        <a href="#collapsible-positivo-que-hacer" class="collapsible-toggler" data-toggle="collapse"
        >Qué tengo que hacer durante el aislamiento?</a>
        <div id="collapsible-positivo-que-hacer" class="collapse collapsible-content">
          <div class="row p-t-15 p-b-15">
            <div class="col-xs-12 p-b-15">
              <div class="block block-light">
                <div class="block-body">
                  <div><p>Características del lugar de aislamiento (si es posible):</p><ul><li>La vivienda debe disponer de buena ventilación, con posibilidad de designar un baño para uso exclusivo del paciente.</li><li>La persona aislada debe disponer de teléfono para garantizar la comunicación permanente con el personal sanitario hasta la resolución de los síntomas.</li><li>El paciente no debe convivir con personas con condiciones de salud que supongan una vulnerabilidad: personas de edad avanzada, diversidad funcional, enfermedades crónicas, inmunodeprimidas, embarazadas... Tanto el paciente como sus convivientes deben ser capaces de comprender y aplicar de forma correcta y consistente las medidas básicas de higiene, prevención y control de la infección.</li><li>El paciente deberá permanecer preferiblemente en una habitación de uso individual o, en caso de que esto no sea posible, en un lugar en el que se pueda garantizar una distancia mínima de 2 metros con el resto de los convivientes. La puerta de la habitación deberá permanecer cerrada. En caso de que sea imprescindible ir a las zonas comunes del domicilio deberá utilizar mascarilla quirúrgica y realizar higiene de manos al salir de la habitación. Se mantendrán bien ventiladas las zonas comunes.</li><li>La habitación deberá tener una ventilación adecuada. No deben existir corrientes forzadas de aire provenientes de sistemas de calor o refrigeración.</li><li>En el interior de la habitación deberá colocarse un cubo de basura con tapa de apertura de pedal y en su interior una bolsa de plástico que cierre herméticamente para los residuos.</li><li>Se recomienda disponer utensilios de aseo de uso individual y de productos para la higiene de manos como jabón o alcohol en gel.</li><li>Las toallas deberán cambiarse periódicamente siempre que se encuentren húmedas.</li><li>La persona enferma deberá seguir en todo momento las medidas de higiene respiratoria: cubrirse la boca y la nariz al toser o estornudar con pañuelos desechables o el pliegue del codo, y lavarse las manos inmediatamente después.</li><li>La persona enferma no deberá recibir visitas durante el periodo de aislamiento.</li></ul></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="positivo-empeorado" class="collapsible-wrapper">
        <a href="#collapsible-positivo-empeorado" class="collapsible-toggler" data-toggle="collapse"
        >Mi Salud ha empeorado desde que estoy en cuarentena</a>
        <div id="collapsible-positivo-empeorado" class="collapse collapsible-content">
          <div class="row p-t-15 p-b-15">
            <div class="col-xs-12 p-b-15">
              <div class="block block-light">
                <div class="block-body">
                  <div><p>Si durante la cuarentena en casa se encuentra en cualquiera de la siguientes situaciones:</p><ul><li>Presenta dificultad respiratoria marcada.</li><li>Fiebre permanente por encima de 39º y los medicamentos que está tomando (en caso de haberlo hecho) no están consiguiendo disminuirla.</li><li>Cualquier signo de gravedad de otra índole (por ejemplo alteración de la consciencia)</li></ul><p>Llame de manera urgente al teléfono <a href="tel:02204770242">477-0242</a>. Indicando que su situación de salud ha empeorado.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<script>
$(document).on('site:ready', function () {
  $(document).triggerHandler('positivo:loaded');
});
</script>


<!-- Dudas --> 
<section id="section-dudas" class="section-primary" data-analytics-label="4. Tengo dudas acerca de temas relacionados con el coronavirus">
  <div class="container">
    <h1 class="underline-sm">
      <span>Tengo dudas acerca de temas relacionados con el coronavirus</span><span class="text-primary">.</span>
      <a class="toggler" role="button" data-toggle="collapse" href="#section-dudas-content" aria-expanded="true" aria-controls="collapseSectionDudas"
      ></a>
    </h1>
  </div>
  <div id="section-dudas-content" class="section-content collapse in">
    <div class="section-content-inner">
      <div class="container">
        <div>
        <p>Se atienden denuncias sobre incumplimiento de cuarentena a los teléfonos <a href="tel:02204777341">477-7341</a> y al <a href="tel:1131267598"> 11-3126-7598</a> durante las 24 hs.</p>
        <p>Comunicación con autoridades sanitarias:</p>
        <ul>
          <li>El teléfono de comunicación oficial con el Sistema Público de Salud para alertas sanitarias (avisos sobre personas que ingresan desde el exterior o presentación de síntomas de casos que ya se encuentren en aislamiento) es el <a href="tel:02204770242">477-0242</a>, de atención las 24 hs.</li>
          <li>El teléfono para dudas y consultas sobre posibles síntomas de la población en general es la línea provincial gratuita <a href="tel:148">148</a>, de atención las 24 hs.</li>
          <li>En <a href="http://www.marcospaz.gov.ar/component/k2/item/4025-actualización-de-información.html" target="_blank">el sitio web del municipio </a>se sube información actualizada sobre casos y el estado del sistema de salud. </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</section>



<!-- Imagenes -->
<section id="imagenes">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 my-auto h-100 text-center text-lg-left">
        <p class="text-muted small mb-4 mb-lg-0"><img src="images/90396708_2855448964535714_3739414642062000128_n.jpg" width="85%"></p>
      </div> 
      <div class="col-lg-4 my-auto h-100 text-center text-lg-left">
        <p class="text-muted small mb-4 mb-lg-0"><img src="images/90434862_2856320947781849_6168627584671154176_o.jpg" width="85%"></p>
      </div> 
      <div class="col-lg-4 my-auto h-100 text-center text-lg-left">
        <p class="text-muted small mb-4 mb-lg-0"><img src="images/90554173_2858043284276282_7916536968991735808_o.jpg" width="85%"></p>
      </div> 
    </div>
  </div> 
</section>

<script>
$(document).on('site:ready', function () {
  $(document).triggerHandler('dudas:loaded');
});
</script>


<!-- Main Footer -->
<footer class="footer bg-dark" style="z-index:2;">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 my-auto h-100 text-center text-lg-left">
        <p class="text-muted small mb-4 mb-lg-0"><img src="images/mmpblanco.png" width="15%"> © Marcos Paz Digital 2020 :: Marcos Paz Municipio.</p>
      </div>
      <div class="col-lg-6 my-auto h-100 text-center text-lg-right">
        <ul class="list-inline mb-0">
          <li class="list-inline-item"><a href="https://www.facebook.com/pg/desarrolloindustrialmmp/about/" target="_blank"><i class="fa fa-facebook fa-2x fa-fw"></i></a></li>
          <li class="list-inline-item"><a href="https://twitter.com/Muni_Marcos_Paz" target="_blank"><i class="fa fa-twitter fa-2x fa-fw"></i></a></li>
          <li class="list-inline-item"><a href="https://www.instagram.com/desarrolloproductivommp" target="_blank"><i class="fa fa-instagram fa-2x fa-fw"></i></a></li>
          <li class="list-inline-item"><a href="https://www.youtube.com/channel/UC_0WeRHM3SfePH1Yrv1bCvw" target="_blank"><i class="fa fa-youtube fa-2x fa-fw"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

</div>
</div>
</body>
</html>
