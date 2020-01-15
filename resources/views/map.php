
<div style="width: 100%; height: 100vh; overflow:hidden; position: fixed;">
    <div id='map' style='width: 100vw; height: 105vh;'></div>
</div>

<script>

    // UBICACIÓN ALEATORIA, COMENTARIO Y FOTOS

    var num = Math.floor(((Math.random() * 10) + 2)/2);

    if(num == 1) {lon = -67; lat = -55;} // Tierra del Fuego
    if(num == 2) {lon = -71.308525; lat = -41.134258;} // Bariloche
    if(num == 3) {lon = -68.838844; lat = -32.888355;} // Mendoza
    if(num == 4) {lon = -54.5736; lat = -25.5991;} // Iguazú
    if(num == 5) {lon = -72.27682; lat = -50.34075;} // Calafate
    if(num == 6) {lon = -65.2226; lat = -26.82414;} // Tucuman
    if(num == 7) {lon = -58.381592; lat = -34.603722;} // Buenos Aires
    if(num == 8) {lon = -65.412155; lat = -24.782932;} // Salta
    if(num == 9) {lon = -60.5238; lat = -31.73197;} // Santa Fe y Paraná
    if(num == 10) {lon = -57.55754; lat = -38.00228;} // Mar del Plata

    if(language == "es") {
      if(num == 1) {presse = '<p>"Sinónimo de destierro antes de volverse un atractivo mundial, <b>Ushuaia (Tierra del Fuego)</b> nos recuerda en cada uno de sus rincones que estamos en el fin del Mundo"<br><br><em>Le Monde Diplomatique</em></p>';}
      if(num == 2) {presse = '<p>"Escondida entre montañas, lagos, y bosques, <b>Bariloche</b> impresiona exhibiendo uno de los paisajes más colosales y majestuosos de los Andes"<br><br><em>El País</em></p>'}
      if(num == 3) {presse = '<p>"Respaldada por la Cordillera de los Andes y el mejor Malbec del Mundo, la provincia argentina de <b>Mendoza</b> es un lugar espectacularmente pintoresco para recorrer viñedos y satisfacer el paladar"<br><br><em>National Geographic</em></p>'}
      if(num == 4) {presse = '<p>"<b>Iguazú</b>, \'agua grande\' en Guaraní, no hay mejor descripción para esta maravilla natural, espectáculo atronador para los ojos"<br><br><em>Lonely Planet</em></p>'}
      if(num == 5) {presse = '<p>"En una travesía entre glaciares y montes colosales, se abre lugar <b>El Calafate</b>, la puerta de entrada para visitar una de las maravillas naturales del Mundo: el glaciar Perito Moreno"<br><br><em>Voyageurs du Monde</em></p>'}
      if(num == 6) {presse = 'Tucuman'}
      if(num == 7) {presse = 'Buenos Aires'}
      if(num == 8) {presse = 'Salta'}
      if(num == 9) {presse = 'Santa Fe y Paraná'}
      if(num == 10) {presse = 'Mar del Plata'}
    }
    if(language == "fr") {
      if(num == 1) {presse = '<p>"Synonyme de bannissement avant de devenir une attraction mondiale, <b>Ushuaia (Terre de Feu)</b> nous rappelle à chaque recoin que nous sommes au bout du Monde"<br><br><em>Le Monde Diplomatique</em></p>';}
      if(num == 2) {presse = '<p>"Perdue entre montagnes, lacs, et forêts, <b>Bariloche</b> impressionne en exhibant un des plus colossaux et majestueux paysages des Andes"<br><br><em>El País</em></p>'}
      if(num == 3) {presse = '<p>"S\'appuyant sur la Cordillère des Andes et le meilleur Malbec au Monde, la province argentine de <b>Mendoza</b> est un endroit spectaculairement pittoresque pour parcourir les vignobles et satisfaire le palais"<br><br><em>National Geographic</em></p>'}
      if(num == 4) {presse = '<p>"<b>Iguazu</b>, \'eau grande\' en Guarani, il n\'y a pas de meilleure description pour cette merveille naturelle, spectacle tonitruant pour les yeux"<br><br><em>Lonely Planet</em></p>'}
      if(num == 5) {presse = '<p>"Dans une travsersée entre glaciers et monts colossaux, s\'érige <b>El Calafate</b>, porte d\'entrée pour visiter une des merveilles naturelles du Monde: le glacier Perito Moreno"<br><br><em>Voyageurs du Monde</em></p>'}
      if(num == 6) {presse = 'Tucuman'}
      if(num == 7) {presse = 'Buenos Aies'}
      if(num == 8) {presse = 'Salta'}
      if(num == 9) {presse = 'Santa Fe y Paraná'}
      if(num == 10) {presse = 'Mar del Plata'}
    }
    if(language == "en") {
      if(num == 1) {presse = '<p>"Known as a banishment place before turning worldwide famous, <b>Ushuaia (Tierra del Fuego)</b> reminds us in each and every one of its corners that we are in the end of the World"<br><br><em>Le Monde Diplomatique</em></p>';}
      if(num == 2) {presse = 'Bariloche'}
      if(num == 3) {presse = 'Mendoza'}
      if(num == 4) {presse = 'Iguazu'}
      if(num == 5) {presse = 'Calafate'}
      if(num == 6) {presse = 'Tucuman'}
      if(num == 7) {presse = 'Buenos Aires'}
      if(num == 8) {presse = 'Salta'}
      if(num == 9) {presse = 'Santa Fe y Paraná'}
      if(num == 10) {presse = 'Mar del Plata'}
    }
    if(num == 1) {$(".allerIci").attr("id", "ushuaia"); photos = '<div class="example_pic" style="background-image: url(\'/storage/ushuaia.jpg\');"></div>';}
    if(num == 2) {$(".allerIci").attr("id", "bariloche"); photos = '<div class="example_pic" style="background-image: url(\'/storage/bariloche.jpg\');"></div>';}
    if(num == 3) {$(".allerIci").attr("id", "mendoza"); photos = '<div class="example_pic" style="background-image: url(\'/storage/mendoza.jpg\');"></div>';}
    if(num == 4) {$(".allerIci").attr("id", "iguazu"); photos = '<div class="example_pic" style="background-image: url(\'/storage/iguazu.jpg\');"></div>';}
    if(num == 5) {$(".allerIci").attr("id", "el calafate"); photos = '<div class="example_pic" style="background-image: url(\'/storage/calafate.jpg\');"></div>';}

    $("footer").append(photos);
    $(".example_pic").html(presse);

    // MAPA

    if(theme == "claro") {style = 'mapbox://styles/julabrego/ck16ub24v3jd71cmxyiya7w1t'; color = 'red'}
    else if(theme == "oscuro") {style = 'mapbox://styles/julabrego/ck16vetx60bp31cp4g97hmsq6'; color = 'yellow'}

    mapboxgl.accessToken = 'pk.eyJ1IjoianVsYWJyZWdvIiwiYSI6ImNrMTVtZDM0ejB3aGwzY256cmtia2txbG0ifQ.RozygX8rIQZaI2IlJxBuZA';
    var map = new mapboxgl.Map({
      container: 'map',
      style: style,
      center: [10,20],
      zoom: 1.3,
    });

    map.on('load', function() {

      map.on('mousemove', function (e) {

      JSON.stringify(e.point) + '<br />' +

      JSON.stringify(e.lngLat.wrap());
      });

      setTimeout(function(){

        var target = [lon,lat];

        map.flyTo({

          center: target,
          zoom: 7,
          bearing: 0,

          speed: 2,
          curve: 1,

          easing: function (t) { return t; }
        });
      }, 000);

      function worldFly(lon, lat) {

        var target = [lon-0.05,lat];

        map.flyTo({

          center: target,
          zoom: 12,
          bearing: 0,

          speed: 2,
          curve: 1,

          easing: function (t) { return t; }
        });
      }

      $(document).on('submit', '#formBuscar', function() {

        if($busqueda == "ushuaia") {
        var lon = -68.335150;
        var lat = -54.822288;
        }
        if($busqueda == "bariloche") {
        var lon = -71.308525;
        var lat = -41.134258;
        }
        if($busqueda == "mendoza") {
        var lon = -68.838844;
        var lat = -32.888355;
        }
        if($busqueda == "buenos aires") {
        var lon = -58.37723;
        var lat = -34.61315;
        }
        if($busqueda == "iguazu") {
        var lon = -54.5736;
        var lat = -25.5991;
        }
        if($busqueda == "el calafate") {
        var lon = -72.27682;
        var lat = -50.34075;
        }
        
        worldFly(lon, lat);
      });
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll > position) {
          if($(".pestana").length) {
            $(".pestana").each(function(i) {
              if(this.getBoundingClientRect().top < 200) {
                newLocation = $(this).attr('id');
              }
            });
          }
          if(actualLocation != newLocation) {
            actualLocation = newLocation;
            $busqueda = actualLocation;
            $('#formBuscar').trigger('submit');
          }
        } else {
          if($(".pestana").length) {
            $(".pestana").each(function(i) {
              if(this.getBoundingClientRect().top < 550) {
                newLocation = $(this).attr('id');
              }
            });
          }
          if(actualLocation != newLocation) {
            actualLocation = newLocation;
            $busqueda = actualLocation;
            $('#formBuscar').trigger('submit');
          }
        }
        position = scroll;
        });
    });
</script>
