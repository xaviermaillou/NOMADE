var clic = 0;
var show_resultados = false;

if(language == "es") {
    var personnes = "persona(s)" ;
    var jour = "día";
    var erreur_filtre = "Estás siendo demasiado exigente...";
    var erreur_filtre2 = "No hay resultados que filtrar...";
    var publie = "Aún no publicaste propiedades";
    var favoris = "Aún no agregaste favoritos";
    var reserver = "RESERVAR";
    var a_partir_du = "a partir del";
    var pour = "por";

    var dimanche = "Dom";
    var lundi = "Lun";
    var mardi = "Mar";
    var mercredi = "Mie";
    var jeudi = "Jue";
    var vendredi = "Vie";
    var samedi = "Sáb";

    var janvier = "Enero";
    var fevrier = "Febrero";
    var mars = "Marzo";
    var avril = "Abril";
    var mai = "Mayo";
    var juin = "Junio";
    var juillet = "Julio";
    var aout = "Agosto";
    var septembre = "Septiembre";
    var octobre = "Octubre";
    var novembre = "Noviembre";
    var decembre = "Diciembre";

    var mail_vide = "Ingresa un mail";
    var pseudo_vide = "Ingresa un nombre";
    var mdp_vide = "Ingresa una contraseña";
    var conf_mdp_vide = "Confirma la contraseña";
    var conf_mdp_meme = "Las contraseñas no se corresponden";
    var mail_meme = "Este mail ya está registrado";
    var pseudo_meme = "Este nombre ya es usado";
    var mail_incorrect = "Este mail no está registrado";
    var mdp_incorrect = "La contraseña es incorrecta";

    var pasDeReserve = "No tenes reservas";
    var editer = "EDITAR";
    var ecrire = "Escribi acá...";
    var envoyer = "ENVIAR";

    var details = "DETALLES DEL ALOJAMIENTO";
    var commentaires = "LO QUE OTROS USUARIOS COMENTARON";

    var mesMessages = "MIS MENSAJES";

    var ilyaDesReserves = "Hay una o varias reservas entre esas fechas";

} else if (language == "fr") {
    var personnes = "personne(s)" ;
    var jour = "jour";
    var erreur_filtre = "Il semblerait que vous êtes beaucoup trop exigeant...";
    var erreur_filtre2 = "Il n'y a pas de résultats à filtrer...";
    var publie = "Vous n'avez pas encore publié de propriétés";
    var favoris = "Vous n'avez pas encore ajouté de favoris";
    var reserver = "RÉSERVER";
    var a_partir_du = "à partir du";
    var pour = "pour";

    var dimanche = "Dim";
    var lundi = "Lun";
    var mardi = "Mar";
    var mercredi = "Mer";
    var jeudi = "Jeu";
    var vendredi = "Ven";
    var samedi = "Sam";

    var janvier = "Janvier";
    var fevrier = "Février";
    var mars = "Mars";
    var avril = "Avril";
    var mai = "Mai";
    var juin = "Juin";
    var juillet = "Juillet";
    var aout = "Août";
    var septembre = "Septembre";
    var octobre = "Octobre";
    var novembre = "Novembre";
    var decembre = "Décembre";

    var mail_vide = "Entrez un mail";
    var pseudo_vide = "Entrez un nom";
    var mdp_vide = "Entrez un mot-de-passe";
    var conf_mdp_vide = "Confirmez le mot-de-passe";
    var conf_mdp_meme = "Les mots-de-passe ne sont pas les mêmes";
    var mail_meme = "Cette adresse mail est déjà enregistrée";
    var pseudo_meme = "Ce nom est dékà pris";
    var mail_incorrect = "Cette adresse mail n'est pas enregistrée";
    var mdp_incorrect = "Le mot-de-passe est incorrect";

    var pasDeReserve = "Vous n'avez pas de réservations";
    var editer = "ÉDITER";
    var ecrire = "Écrivez ici...";
    var envoyer = "ENVOYER";

    var details = "DÉTAILS DU LOGEMENT";
    var commentaires = "CE QUE D'AUTRES UTILISATEURS ONT COMMENTÉ";

    var mesMessages = "MES MESSAGES";

    var ilyaDesReserves = "Il y a une ou des réserves pour ces dates";

} else if (language == "en") {
    var personnes = "people" ;
    var jour = "day";
    var erreur_filtre = "You are being overly stringent...";
    var erreur_filtre2 = "There are no results to filter...";
    var publie = "You have not published any property yet";
    var favoris = "You have not added any favorites yet";
    var reserver = "BOOK";
    var a_partir_du = "starting the";
    var pour = "for";

    var dimanche = "Sun";
    var lundi = "Mon";
    var mardi = "Tue";
    var mercredi = "Wed";
    var jeudi = "Thu";
    var vendredi = "Fri";
    var samedi = "Sat";

    var janvier = "January";
    var fevrier = "February";
    var mars = "March";
    var avril = "April";
    var mai = "May";
    var juin = "June";
    var juillet = "July";
    var aout = "August";
    var septembre = "September";
    var octobre = "October";
    var novembre = "November";
    var decembre = "December";

    var mail_vide = "Enter an e-mail adress";
    var pseudo_vide = "Enter a name";
    var mdp_vide = "Enter a password";
    var conf_mdp_vide = "Confirm the password";
    var conf_mdp_meme = "Passwords don't match";
    var mail_meme = "This mail adress is already registered";
    var pseudo_meme = "This name is already taken";
    var mail_incorrect = "This mail adress has not been registered yet";
    var mdp_incorrect = "The password is incorrect";

    var pasDeReserve = "You don't have any bookings";
    var editer = "EDIT";
    var ecrire = "Type here...";
    var envoyer = "SEND";

    var details = "DETAILS ABOUT THE ACCOMMODATION";
    var commentaires = "WHAT OTHER USERS COMMENTED";

    var mesMessages = "MY MESSAGES";

    var ilyaDesReserves = "There is one or several bookings between those dates";
}

dateIn = datepicker("#dateIn", {id:1});
dateOut = datepicker("#dateOut", {id:1});

function loadCalendar() {
    dateIn.remove();
    dateOut.remove();

    dateIn = datepicker("#dateIn", { 
        id: 1, 
        alwaysShow: true, 
        customDays: [dimanche, lundi, mardi, mercredi, jeudi, vendredi, samedi], 
        customMonths: [janvier, fevrier, mars, avril, mai, juin, juillet, aout, septembre, octobre, novembre, decembre],
        disableYearOverlay: true,
        disabledDates: bookedDates
    });
    dateOut = datepicker("#dateOut", { 
        id: 1, 
        alwaysShow: true, 
        customDays: [dimanche, lundi, mardi, mercredi, jeudi, vendredi, samedi], 
        customMonths: [janvier, fevrier, mars, avril, mai, juin, juillet, aout, septembre, octobre, novembre, decembre],
        disableYearOverlay: true,
        disabledDates: bookedDates
    });
}

$(".activarMapa").click(function(){
    $(".mapa").css("background", "none");
    $(".mapa").load("/map");
});

$(document).ready(function(){
    $('.articulosPrincipales').click(function(){

        var iteration=$(this).data('iteration')||1
        switch ( iteration) {
            case 1:
                $(this).animate({height: '500px'});
                $(".infoPrevia", this).animate({opacity: '0'});
                $(".infoCompleta", this).animate({opacity: '1'});
                $(".favorito", this).css("opacity", "1");
                $(".flecha", this).css("display", "inline-block");
                break;

            case 2:
                $(this).animate({height: '200px'});
                $(".infoPrevia", this).animate({opacity: '1'});
                $(".infoCompleta", this).animate({opacity: '0'});
                $(".favorito", this).css("opacity", "0");
                $(".flecha", this).css("display", "none");
                break;
        }
        iteration++;
        if (iteration>2) iteration=1
        $(this).data('iteration',iteration)
    })
});

$(function(){
    $(".pestana").click(function(){
        var iteration=$(this).data("iteration")||1;
        switch(iteration) {
            case 1:
                $(".articulosPrincipales").animate({height:"0px"});
                $(".infoPrevia").animate({opacity: '1'});
                $(".infoCompleta").animate({opacity: '0'});
                $(".favorito").css("opacity", "0");
                $(".flecha").css("display", "none");
                break;

            case 2:
                $('.articulosPrincipales').animate({height:"200px"});
                break;
        }
        iteration++;
        if(iteration>2) iteration=1
        $(this).data("iteration",iteration)
    })
});
$(".plus").click(function(){
    $("#agregarDepto").animate({opacity: '1'},300);
    $("#agregarDepto").css("z-index", "100000");

    $("#agregarDepto form input[name=title]").val('');
    $("#agregarDepto form select[name=location]").val('');
    $("#agregarDepto form input[name=area]").val('');
    $("#agregarDepto form input[name=beds]").val('');
    $("#agregarDepto form input[name=price]").val('');

    $("#agregarDepto form").attr('action', '/addProperty');
});
$(".cerrar").click(function(){
    $("#agregarDepto").animate({opacity: '0'}, 300);
    $("#agregarDepto").animate({zIndex: "-10"}, 000);
    $("#bookPropForm").animate({opacity: '0'}, 500);
    $("#bookPropForm").animate({zIndex: "-10"}, 000);
});
$(".favoritos").click(function(){
    $(".panelFavoritos").animate({right: '0'},500);
    clic = clic + 100;
    $(".panelFavoritos").css("z-index",clic);
    $(".retorno").stop().delay(300).animate({left:"73%"},200);
});
$(".fotoUsuario").click(function(){
    $(".panelLogin").animate({right: '0'},500);
    clic = clic + 100;
    $(".panelLogin").css("z-index",clic);
    $(".retorno").stop().delay(300).animate({left:"73%"},200);
});
$(".info").click(function(){
    $(".info").children("span").css("opacity", "0");
    $(".panelInfo").animate({right: '0'},500);
    clic = clic + 100;
    $(".panelInfo").css("z-index",clic);
    $(".retorno").stop().delay(300).animate({left:"73%"},200);
});
$(".retorno").click(function(){
    if($(window).width()<700) {
        $(".retorno").animate({left:"100%"});
        $(".panelFavoritos").animate({right: '-100%'},500);
        $(".panelLogin").animate({right: '-100%'},500);
        $(".panelInfo").animate({right: '-100%'},500);
    } else {
        $(".retorno").animate({left:"100%"});
        $(".panelFavoritos").animate({right: '-30%'},500);
        $(".panelLogin").animate({right: '-30%'},500);
        $(".panelInfo").animate({right: '-30%'},500);
    }
});


$(function(){
    $("#rememberMe").click(function(){
        var iteration=$(this).data("iteration")||1;
        switch(iteration) {
            case 1:
                $(this).append(' <span>&#10003;</span>');
                break;

            case 2:
                $(this).children('span').remove();
                break;
        }
        iteration++;
        if(iteration>2) iteration=1
        $(this).data("iteration",iteration)
    })
});

var triggered = 0;

$(document).on("click", "#checkBooking", function() {
    var booking_id = $(this).attr("booking-id");
    $(".favoritos").trigger("click");
    if(triggered < 1) {
        $("#booking"+booking_id).delay(250).trigger("click");
        triggered++;
    }
});
$(document).on("click", "#reviewBooking", function() {
    var booking_id = $(this).attr("booking-id");
    var property_id = $(this).attr("property-id");
    $("form", "#reviewSection").append("<input type='hidden' name='property_id' value='"+property_id+"'>");
    $("form", "#reviewSection").append("<input type='hidden' name='booking_id' value='"+booking_id+"'>");
    $("#reviewSection").animate({top: "0px"});
});
$(document).on("click", ".closeReview", function() {
    $("#reviewSection").animate({top: "-250px"});
});

var searchedProperties = {};
var markers = [];

$(document).on("click", ".allerIci", function() {
    $(".buscar").val($(this).attr('id').toUpperCase());
    $("#formBuscar").submit();
});

function searchAgain() {
    var alreadySearched = 1;
    $(".filtros").hide();
    $(".buscar").animate({width:"400px"},500);
    $(".buscar").focus();
    return alreadySearched;
};

$('#formBuscar').submit(function search(event){
    event.preventDefault();
    if($(".buscar").val() == "") {return;}
    $("header h1").fadeOut();
    $('#formBuscar').animate({top: '20px'});
    $(".downPanel").fadeOut();
    $('html, body').animate({scrollTop: 0});
    $('.seccionPrincipalArticulos').show();
    $('.seccionPrincipalArticulos').children('h2').remove();
    $(".buscar").animate({width:"50px"},500);
    $(".filtros").css("display","inline-block");
    $(".filtros").show();
    $(".mapboxgl-ctrl-geocoder--input").val($('#buscar').val()).parent("form").submit();
    $busqueda = $('#buscar').val().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
    var sameLocationProperties = [];
    
    properties.forEach(function(property){
        if(property.location == $busqueda) {
            users.forEach(function(user){
                if(user.id == property.owner) {
                    owner_avatar = user.avatar;
                    owner_name = user.name;
                }
            });
            $('.seccionPrincipalArticulos').prepend('<div id="'+property.id+'" class="articleContainer" style="margin: 0; padding: 0; border: noneM background-color: rgba(125,125,125,0.8);"><article id="'+property.id+'" data-picture="'+property.main_picture+'" class="articulosPrincipales '+multiplier*property.price+'price '+property.area+'area '+property.beds+'beds '+property.location.split(' ').join('_')+'" style="background-image: url(\'/storage/'+property.main_picture+'\'); height: 200px; border:none;"><img id="favorito" class="favorito" src="/img/light_mode/heart2.png" alt="" style="opacity: 0"><img id="flechaIzq" class="flecha flechaIzq" src="/img/light_mode/arrow2.png" alt="" style="display: none"><img id="flechaDer" class="flecha flechaDer" src="/img/light_mode/arrow2.png" alt="" style="display: none"><p class="infoPrevia" style="opacity: 1">'+property.title+'</p><p class="infoCompleta" style="opacity: 0">'+property.area+' m<sup>2</sup> | '+property.beds+' '+personnes+' | <strong>'+Math.round(multiplier*property.price)+' '+symbol+'/'+jour+'</strong><span id="slideUp">^</span><span id="slideDown">^</span><img class="profile" src="/storage/'+owner_avatar+'"><span class="ownerName">'+owner_name+'</span><span class="'+property.id+'" id="bookButton">'+reserver+'</span></p><div class="propDetails"><h3 style="opacity: 0;">'+property.title+'</h3><div class="propDescription"><div class="propEquipments"><h5>'+details+'</h5><div class="descriptionColumn"></div><div id="middleColumn" class="descriptionColumn"></div><div class="descriptionColumn"></div><div class="rightTab"><span id="slideRight">^</span></div></div><div class="propComments"><h5>'+commentaires+'</h5><div class="leftTab"><span id="slideLeft">^</span></div><section class="reviewsContainer"></section></div></div></div></article></div>')
            sameLocationProperties.push(property);

            var reviewsIndex = 0;

            propertiesReviews.forEach(function(propertyReview) {
                if(propertyReview.property_id == property.id) {
                    var date = new Date(propertyReview.created_at).toLocaleDateString();
                    users.forEach(function(user){
                        if(user.id == propertyReview.author) {
                            author_avatar = user.avatar;
                            author_name = user.name;
                        }
                    });
                    
                    $(".reviewsContainer", ".articleContainer#"+property.id).append('<div data-avatar="/storage/'+owner_avatar+'" class="propReview hoverEnlarge"><h5><img src="/storage/'+author_avatar+'">'+author_name+'</h5><em>'+date+'</em><div class="reviewMessage"><i>'+propertyReview.message+'</i></div></div>');
                    
                }
            });
            
            var lon = property.longitude;
            var lat = property.latitude;
            var target = [lon,lat];
            var marker = new mapboxgl.Marker({
                color: color,
              }).setLngLat(target).addTo(map);
              marker._element.id = property.id;
            markers.push(marker);
        }
    });

    searchedProperties[$busqueda] = sameLocationProperties;
    $('.seccionPrincipalArticulos').prepend('<div class="pestana" id="'+$busqueda+'">'+$('#buscar').val()+'<span class="closeTab"> &#215;</span></div>');

    $(".buscar").removeAttr('placeholder');
    $(".buscar").val("");
    $(".buscar").blur();
});

var typingTimer; 

function filter() {
    var beds = $("#cantidadDePersonas").val() || "N";
    var area = $("#cantidadDeM2").val() || 0;
    var price = $("#quePrecio").val() || 999999999;

    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, 500);

    function doneTyping () {
        $('.seccionPrincipalArticulos').empty();
        $('.mapboxgl-marker').hide();

        var e = 0;
        var k = 0;

        $.each(searchedProperties, function(loc, sameLocationProperties) {
            var i = 0;
            k++;
            sameLocationProperties.forEach(function(filteredProperty) {
                if(filteredProperty.area >= area && filteredProperty.price <= price && (beds == "N" || beds == filteredProperty.beds)) {
                    users.forEach(function(user){
                        if(user.id == filteredProperty.owner) {
                            owner_avatar = user.avatar;
                            owner_name = user.name;
                        }
                    });

                    $('.seccionPrincipalArticulos').prepend('<div id="'+filteredProperty.id+'" class="articleContainer" style="margin: 0; padding: 0; border: noneM background-color: rgba(125,125,125,0.8);"><article id="'+filteredProperty.id+'" data-picture="'+filteredProperty.main_picture+'" class="articulosPrincipales '+multiplier*filteredProperty.price+'price '+filteredProperty.area+'area '+filteredProperty.beds+'beds '+filteredProperty.location.split(' ').join('_')+'" style="background-image: url(\'/storage/'+filteredProperty.main_picture+'\'); height: 200px; border:none;"><img id="favorito" class="favorito" src="/img/light_mode/heart2.png" alt="" style="opacity: 0"><img id="flechaIzq" class="flecha flechaIzq" src="/img/light_mode/arrow2.png" alt="" style="display: none"><img id="flechaDer" class="flecha flechaDer" src="/img/light_mode/arrow2.png" alt="" style="display: none"><p class="infoPrevia" style="opacity: 1">'+filteredProperty.title+'</p><p class="infoCompleta" style="opacity: 0">'+filteredProperty.area+' m<sup>2</sup> | '+filteredProperty.beds+' '+personnes+' | <strong>'+Math.round(multiplier*filteredProperty.price)+' '+symbol+'/'+jour+'</strong><span id="slideUp">^</span><span id="slideDown">^</span><img class="profile" src="/storage/'+owner_avatar+'"><span class="ownerName">'+owner_name+'</span><span id="bookButton">'+reserver+'</span></p><div class="propDetails"><h3 style="opacity: 0;">'+filteredProperty.title+'</h3><div class="propDescription"><div class="propEquipments"><h5>'+details+'</h5><div class="descriptionColumn"></div><div id="middleColumn" class="descriptionColumn"></div><div class="descriptionColumn"></div><div class="rightTab"><span id="slideRight">^</span></div></div><div class="propComments"><h5>'+commentaires+'</h5><div class="leftTab"><span id="slideLeft">^</span></div><section class="reviewsContainer"></section></div></div></div></article></div>')
                    i++;
                    e++;

                    propertiesReviews.forEach(function(propertyReview) {
                        if(propertyReview.property_id == filteredProperty.id) {
                            var date = new Date(propertyReview.created_at).toLocaleDateString();
                            users.forEach(function(user){
                                if(user.id == propertyReview.author) {
                                    author_avatar = user.avatar;
                                    author_name = user.name;
                                }
                            });
                            console.log($(".reviewsContainer", "#"+filteredProperty.id+".articleContainer").attr('class'));
                            $(".reviewsContainer", "#"+filteredProperty.id+".articleContainer").append('<div data-avatar="/storage/'+owner_avatar+'" class="propReview hoverEnlarge"><h5><img src="/storage/'+author_avatar+'">'+author_name+'</h5><em>'+date+'</em><div class="reviewMessage"><i>'+propertyReview.message+'</i></div></div>');
                            
                        }
                    });

                    var lon = filteredProperty.longitude;
                    var lat = filteredProperty.latitude;
                    var target = [lon,lat];
                    var marker = new mapboxgl.Marker({
                        color: color,
                    }).setLngLat(target).addTo(map);
                    marker._element.id = filteredProperty.id;
                }
            });

            var location = sameLocationProperties[0].location;

            if(i>0) {
                $('.seccionPrincipalArticulos').prepend('<div class="pestana" id="'+location+'">'+location+'<span id="'+location+'" class="closeTab"> &#215;</span></div>');
            }
        });

        if(e==0 && k>0) {
            $('.seccionPrincipalArticulos').prepend("<h2 style='margin-left: 20px;'>"+erreur_filtre+"</h2>");
        } else if(e==0 && k==0) {
            $('.seccionPrincipalArticulos').prepend("<h2 style='margin-left: 20px;'>"+erreur_filtre2+"</h2>");
        } else {
            $('.seccionPrincipalArticulos').children('h2').remove();
        }
    }
}

$(document).on("click", ".pestana", function(event) {
    var className = $(this).attr('id').split(' ').join('_');
    var iteration=$(this).data("iteration")||1;
    var target = $(event.target);

    if(target.attr("class") == "closeTab") {
        $(".articulosPrincipales."+className).animate({height:"0px"});
        $(".articulosPrincipales."+className).css("margin-bottom", "0");
        $(".articulosPrincipales."+className).each(function(i) {
            var ID = $(this).attr('id');
            $("#"+ID+".mapboxgl-marker").hide();
        });
        $(".infoPrevia."+className).animate({opacity: '1'});
        $(".infoCompleta."+className).animate({opacity: '0'});
        $(".favorito."+className).css("opacity", "0");
        $(".flecha."+className).css("display", "none");
        target.parent().delay(300).fadeOut('fast');

        delete searchedProperties[className];
        if(Object.keys(searchedProperties).length == 0) {
            $(".downPanel").delay(200).fadeIn();
        }
        
        return;
    }
        switch(iteration) {
            case 1:
                $(".articulosPrincipales."+className+" .propDetails").animate({bottom: "-100%"});
                $(".articulosPrincipales."+className+" .flecha").animate({opacity: 1});
                $(".articulosPrincipales."+className+" .profile").animate({opacity: 1});
                $(".articulosPrincipales."+className+" .ownerName").animate({opacity: 1});
                $(".articulosPrincipales."+className+" .favorito").animate({opacity: 1});
                $(".articulosPrincipales."+className+" .propDetails h3").animate({opacity: 0});
                $(".articulosPrincipales."+className+" #slideUp").animate({opacity: 0.3});
                $(".articulosPrincipales."+className+" #slideDown").animate({opacity: 0});
                $(".articulosPrincipales."+className+" .infoCompleta").data('iteration', 1);

                $(".articulosPrincipales."+className).animate({height:"0px"});
                $(".articulosPrincipales."+className).css("margin-bottom", "0");
                $(".articulosPrincipales."+className+" .infoPrevia").animate({opacity: '1'});
                $(".articulosPrincipales."+className+" .infoCompleta").animate({opacity: '0'});
                $(".articulosPrincipales."+className+" .favorito").css("opacity", "0");
                $(".articulosPrincipales."+className+" .flecha").css("display", "none");
                $(".articulosPrincipales."+className).data('iteration', 1);
                break;

            case 2:
                $(".articulosPrincipales."+className).animate({height:"200px"});
                $(".articulosPrincipales."+className).css("margin-bottom", "3px");
                break;
        }
        iteration++;
        if(iteration>2) iteration=1
        $(this).data("iteration",iteration)
});

var favoritesAmount = 0;
var pictureIndex = 0;

$(document).on("click",".articulosPrincipales", function (event) {

    var target = $(event.target);
    var iteration2=$(this).children(".favorito").data('iteration')||1;
    var thisID = $(this).attr('id');
    var pictures = [];
    pictures.push($(this).attr('data-picture'));

    propertyPictures.forEach(function(picture) {
        if(picture.property_id == thisID) {
            pictures.push(picture.img);
        }
    });


    if(target.attr("id") == "bookButton") {

        bookedDates = [];

        bookings.forEach(function(booking) {
            if(booking.property_id == thisID) {
                var date_in = new Date((booking.date_in-75600)*1000);
                var date_out = new Date((booking.date_out-75600)*1000);
                var datesArray = getDates(date_in, date_out);
                bookedDates = bookedDates.concat(datesArray);
            }
        }); 

        loadCalendar();

        dateIn.setDate();
        dateOut.setDate(); 

        $("#bookPropForm .opt1").css("display", "block");
        $("#bookPropForm .opt2").css("display", "none");
        $("#bookPropForm").animate({opacity: '1'},500);
        $("#bookPropForm").css("z-index", "100000");
        $("#bookPropForm form").attr("action", "/bookProperty");
        $("#bookPropForm form").append("<input name='id' value='"+thisID+"' style='display:none'></input>");

        properties.forEach(function(property) {
            if(property.id == thisID) {
                booked_property = property;
            }
        });

        return booked_property;
    }
    if(target.attr('class') == 'infoCompleta' || target.parent().attr('class') == 'infoCompleta') {

        var iteration3=$(".infoCompleta", this).data('iteration')||1
        switch ( iteration3) {
            case 1:
                $(".propDetails", this).animate({bottom: "0%"});
                $(".flecha", this).animate({opacity: 0, zIndex: -1});
                $(".profile", this).animate({opacity: 0, zIndex: -1});
                $(".ownerName", this).animate({opacity: 0, zIndex: -2});
                $(".favorito", this).animate({opacity: 0, zIndex: -1});
                $(".propDetails h3", this).animate({opacity: 1});
                $("#slideUp", this).animate({opacity: 0});
                $("#slideDown", this).animate({opacity: 0.3});
                break;

            case 2:
                $(".propDetails", this).animate({bottom: "-100%"});
                $(".flecha", this).animate({opacity: 1, zIndex: 40});
                $(".profile", this).animate({opacity: 1, zIndex: 999});
                $(".ownerName", this).animate({opacity: 1, zIndex: 998});
                $(".favorito", this).animate({opacity: 1, zIndex: 40});
                $(".propDetails h3", this).animate({opacity: 0});
                $("#slideUp", this).animate({opacity: 0.3});
                $("#slideDown", this).animate({opacity: 0});
                break;
        }
        iteration3++;
        if (iteration3>2) iteration3=1
        $(".infoCompleta", this).data('iteration',iteration3);

        return;
    }
    if(target.attr('class') == 'rightTab' || target.parent().attr('class') == 'rightTab') {
        $('.propEquipments', this).animate({left: '-102.5%'});
        $('.propComments', this).animate({left: '0%'});
        return;
    }
    if(target.attr('class') == 'leftTab' || target.parent().attr('class') == 'leftTab') {
        $('.propEquipments', this).animate({left: '0%'});
        $('.propComments', this).animate({left: '102.5%'});
        return;
    }
    if(target.attr('class') == 'propDetails' || target.parent().attr('class') == 'propDetails' || target.parent().parent().attr('class') == 'propDetails' || target.parent().parent().parent().attr('class') == 'propDetails' || target.parent().parent().parent().parent().attr('class') == 'propDetails' || target.parent().parent().parent().parent().parent().attr('class') == 'propDetails' || target.parent().parent().parent().parent().parent().parent().attr('class') == 'propDetails' || target.attr('class') == 'infoPrevia') {
        return;
    }
    if(target.attr("id") == "favorito") {
        var iteration2=$(this).children(".favorito").data("iteration")||1;
        switch(iteration2) {
            case 1:
                $(this).children(".favorito").attr("src", "/img/light_mode/heart3.png");
                $("#myFavorites").contents().filter(function(){return this.nodeType === 3;}).remove();
                $(".favoritos").children("span").css("opacity", "1");
                $(".favoritos").children("span").animate({fontSize: "16px"});
                $background = $(this).css('background-image');

                properties.forEach(function(property) {
                    if(property.id == thisID) {
                        $("#myFavorites").prepend('<article id="'+property.id+'" class="articulosFavoritos favOpac" style="background-image:url(\'/storage/'+property.main_picture+'\');"><span style="display: none;" class="closeFav"> &#215;</span><img class="flecha flechaIzq" src="/img/light_mode/arrow2.png" alt=""><img class="flecha flechaDer" src="/img/light_mode/arrow2.png" alt=""><p class="infoFavoritos">'+property.title+' <br><strong>'+Math.round(multiplier*property.price)+' '+symbol+'/'+jour+'</strong></p></article>');
                    }
                });
                favoritesAmount++;

                $.post('/addFavorites', {
                    'id': thisID
                }, refreshFavorites);
                break;

            case 2:
                $(this).children(".favorito").attr("src", "/img/light_mode/heart2.png");

                $("#myFavorites").children("article#"+thisID).remove();
                
                favoritesAmount = favoritesAmount - 1;

                $.post('/removeFavorites', {
                    'id': thisID
                }, refreshFavorites);

                if(favoritesAmount == 0){
                    $(".favoritos").children("span").css("opacity", "0");
                }
                break;
        }
        iteration2++;
        if(iteration2>2) iteration2=1
        $(this).children(".favorito").data("iteration",iteration2);
        
        return;
    }

    if(target.attr("id") == "flechaIzq") {
        pictureIndex--;
        if(pictureIndex < 0) {pictureIndex = pictures.length - 1;}

        $(this).fadeTo(100, 0.75, function(){
            $(this).css("background-image","url(/storage/"+pictures[pictureIndex]+")");
        }).fadeTo(100, 1);

        return;
    }
    if(target.attr("id") == "flechaDer") {
        pictureIndex++;
        if(pictureIndex > pictures.length - 1) {pictureIndex = 0;}

        $(this).fadeTo(100, 0.75, function(){
            $(this).css("background-image","url(/storage/"+pictures[pictureIndex]+")");
        }).fadeTo(100, 1);

        return;
    }

    var iteration=$(this).data('iteration')||1
        switch ( iteration) {
            case 1:
                $(".infoCompleta", this).animate({left: '0%'});
                $(this).animate({height: '500px'});
                $(".infoPrevia", this).animate({opacity: '0'});
                $(".infoCompleta", this).animate({opacity: '1'});
                $(".favorito", this).css("opacity", "1");
                $(".flecha", this).css("display", "inline-block");
                $(".ownerName", this).fadeIn();
                $('.mapboxgl-marker').css('opacity', 0.66);
                $('#'+thisID+'.mapboxgl-marker').css('opacity', 1);
                break;

            case 2:
                $(this).animate({height: '200px'});
                $(".infoPrevia", this).animate({opacity: '1'});
                $(".infoCompleta", this).animate({opacity: '0'});
                $(".favorito", this).css("opacity", "0");
                $(".flecha", this).css("display", "none");
                $(".ownerName", this).fadeOut();
                $(".infoCompleta", this).animate({left: '-100%'});
                $('.mapboxgl-marker').css('opacity', 0.66);
                break;
        }
        iteration++;
        if (iteration>2) iteration=1
        $(this).data('iteration',iteration);
});

$(document).on("click", ".propReview", function() {
    var iteration=$(this).data('iteration')||1
        switch ( iteration) {
            case 1:
                $(this).parent().children(".propReview").animate({opacity: 0}).animate({width: '0px', padding: '0px', margin: '0px'});
                $(this).animate({height: '85%', width: '95%', padding: '10px', margin: '5px'}).animate({opacity: 1});
                $(this).removeClass('hoverEnlarge');

                
                break;

            case 2:
                $(this).animate({opacity: 0}, 'fast').animate({height: '26%', width: '30%'}, 100);
                $(this).parent().children(".propReview").animate({margin: '5px'}).delay(400).animate({width: '30%', padding: '5px', margin: '5px'},'fast').animate({opacity: 1});
                $(this).addClass('hoverEnlarge');

                
                break;
        }
        iteration++;
        if (iteration>2) iteration=1
        $(this).data('iteration',iteration);
});

var myPropertiesIndex = 0;
var myFavoritesIndex = 0;
var quick = 0;

properties.forEach(function(property) {
    if(property.owner == userID) {
        $("#myProperties").prepend('<article id="'+property.id+'" class="articulosFavoritos favOpac" style="background-image:url(\'/storage/'+property.main_picture+'\');"><span data-id="'+property.id+'" style="display: none;" class="editPropTab">&#9998;</span><img class="flecha flechaIzq" src="/img/light_mode/arrow2.png" alt=""><img class="flecha flechaDer" src="/img/light_mode/arrow2.png" alt=""><p class="infoFavoritos">'+property.title+'</p></article>');
        myPropertiesIndex++;
    }
    myFavorites.forEach(function(myFavorite) {
        if(myFavorite.property_id == property.id) {
            $("#myFavorites").prepend('<article id="'+property.id+'" class="articulosFavoritos favOpac" style="background-image:url(\'/storage/'+property.main_picture+'\');"><span style="display: none;" class="closeFav"> &#215;</span><img class="flecha flechaIzq" src="/img/light_mode/arrow2.png" alt=""><img class="flecha flechaDer" src="/img/light_mode/arrow2.png" alt=""><p class="infoFavoritos">'+property.title+' <br><strong>'+Math.round(multiplier*property.price)+' '+symbol+'/'+jour+'</strong></p></article>');
            myFavoritesIndex++;
        }
    });
    myBookings.forEach(function(myBooking) {
        if(myBooking.property_id == property.id) {
            var days = Math.round((myBooking.date_out-myBooking.date_in)/60/60/24);
            var date = new Date(myBooking.date_in*1000).toLocaleDateString();
            quick++;
            $("#myBookings").prepend('<article id="booking'+myBooking.id+'" data-id="'+property.id+'" data-datein="'+myBooking.date_in+'" data-dateout="'+myBooking.date_out+'" class="articulosFavoritos favOpac" style="background-image:url(\'/storage/'+property.main_picture+'\');"><span style="display: none;" class="editBookingTab">&#9998;</span><span style="display: none;" class="messageIcon">&#9993;</span><img class="flecha flechaIzq" src="/img/light_mode/arrow2.png" alt=""><img class="flecha flechaDer" src="/img/light_mode/arrow2.png" alt=""><div class="quickMessenger"><form data-send="booking'+myBooking.id+'" class="quickMessengerForm" action="/sendMessage" method="POST"><input class="quickMessengerRecipient" name="recipient" type="hidden" value='+property.owner+'><textarea name="message" rows="8" cols="30" class="quickMessengerText" placeholder="'+ecrire+'"></textarea></form></div><p class="infoFavoritos">'+property.title+' <br><strong>'+Math.round(multiplier*myBooking.price)+' '+symbol+'</strong><br><span id="howManyDays">'+pour+' '+days+' '+jour+'s </span><i style="color: grey;"> '+a_partir_du+' '+date+'</i></p></article>');
            if(myLastBooking != null) {
                if(myBooking.property_id == myLastBooking.property_id) {
                    $("#downTile1").addClass("nextBookingOk");
                    $("div", "#downTile1").attr("id", "reviewBooking");
                    $("div", "#downTile1").attr("booking-id", myBooking.id);
                    $("div", "#downTile1").attr("property-id", property.id);
                    var days2 = Math.round((($.now()/1000)-myBooking.date_out)/60/60/24);
                    $("#downTile1").css('background-image','url("/storage/'+property.main_picture+'")');
                    $("#upcomingStayDays").html(days2);
                }
            }
            else if(myNextBooking != null) {
                if(myBooking.property_id == myNextBooking.property_id) {
                    $("#downTile1").addClass("nextBookingOk");
                    $("div", "#downTile1").attr("id", "checkBooking");
                    $("div", "#downTile1").attr("booking-id", myBooking.id);
                    var days2 = Math.round((myBooking.date_in-($.now()/1000))/60/60/24);
                    $("#downTile1").css('background-image','url("/storage/'+property.main_picture+'")');
                    $("#upcomingStayDays").html(days2);
                }
            }
            if((($.now()/1000)-myBooking.date_out) > 0) {
                $(".editBookingTab", "#booking"+myBooking.id).remove();
            }
        }
    });
});
if (myPropertiesIndex == 0) {$("#myProperties").prepend(publie);}
if (myFavoritesIndex == 0) {$("#myFavorites").prepend(favoris);}
if(myNextBooking == null && myLastBooking == null) {
    $("#downTile2").css("left", "525px");
    $("#downTile3").css("left", "525px");
}

var usersContact = [];
var unreadMessages = 0;

function refreshMessenger() {
    $("#regularMessage.activeMessenger").val('');
    $(".messagesContainer").load('/messengerInside');
}
function refreshFavorites() {
    console.log("POST ejecutado");
}

$('.generalMessenger').load('/messenger');
setInterval(refreshMessenger, 4000);

$(document).on("click", ".regularMessenger h5", function() {
    var iteration=$(this).data('iteration')||1
        switch ( iteration) {
            case 1:
                $(this).parent().animate({height: '310px'});
                break;

            case 2:
                $(this).parent().animate({height: '35px'});
                break;
        }
        iteration++;
        if (iteration>2) iteration=1
        $(this).data('iteration',iteration)
});

$(document).on("submit", ".regularMessengerForm", function(event) {
    event.preventDefault();
    var message = $("#regularMessage", this).val();
    var recipient = $("#regularRecipient", this).val();
    $("#regularMessage", this).addClass('activeMessenger');

    $.post('/sendMessage', {
        'recipient': recipient,
        'message': message
    }, refreshMessenger);
});

function cuadrado (){
    var width = $('.articulosFavoritos').outerWidth();
    $('.articulosFavoritos').css('height', width);
}

$(document).ready(function(){ cuadrado(); });

$(window).resize(function(){ cuadrado(); });

$(".pregunta").click(function(){
    $(".respuesta",this).css("display","block");
    $(".respuesta",this).animate({opacity:"1"});
});
$(".olvide").click(function(){
    $(".olvide").css("display","none");
    $(".olvide").animate({opacity:"0"});
    $(".emailOlvide").css("display","block");
    $(".emailOlvide").animate({opacity:"1"});
});
$(".conectarse").click(function(){
    $(".panelLogin").animate({right: '0'},500);
    clic = clic + 100;
    $(".panelLogin").css("z-index",clic);
});

$("#theme").change(function(){
    $("formTheme").submit();
});

$(document).on("submit", "#editBooking", function(event) {

    event.preventDefault();
    
    var action = $(this).attr('action');
    var date_in = dateIn.dateSelected.toString().split(' ').slice(0,4).join(' ');
    var date_out = dateOut.dateSelected.toString().split(' ').slice(0,4).join(' ');
    var booking_id = $('input[name=bookingId]', this).val();
    var booked_property_id = $('input[name=id]', this).val();
    var price = $("#firstDate").text().replace(/\D/g,'');

    $.post(action, {
        'dateIn': date_in,
        'dateOut': date_out,
        'bookingId': booking_id,
        'id': booked_property_id,
        'price': price
    }, refreshFavorites);

    $(".cerrar").trigger("click");

    var parsed_date_in = Date.parse(date_in)/1000;
    var parsed_date_out = Date.parse(date_out)/1000;

    var days = Math.round((parsed_date_out-parsed_date_in)/60/60/24);
    var date = new Date(parsed_date_in*1000).toLocaleDateString();

    if(action == '/bookProperty') {
        $(".favoritos").children("span").css("opacity", "1");
        $(".favoritos").children("span").animate({fontSize: "16px"});

        properties.forEach(function(property) {
            if(property.id == booked_property_id) {
                $("#myBookings").prepend('<article id="booking'+booking_id+'" data-id="'+property.id+'" data-datein="'+date_in+'" data-dateout="'+date_out+'" class="articulosFavoritos favOpac" style="background-image:url(\'/storage/'+property.main_picture+'\');"><span style="display: none;" class="editBookingTab">&#9998;</span><span style="display: none;" class="messageIcon">&#9993;</span><img class="flecha flechaIzq" src="/img/light_mode/arrow2.png" alt=""><img class="flecha flechaDer" src="/img/light_mode/arrow2.png" alt=""><div class="quickMessenger"><form data-send="booking'+booking_id+'" class="quickMessengerForm" action="/sendMessage" method="POST"><input class="quickMessengerRecipient" name="recipient" type="hidden" value='+property.owner+'><textarea name="message" rows="8" cols="30" class="quickMessengerText" placeholder="'+ecrire+'"></textarea></form></div><p class="infoFavoritos">'+property.title+' <br><strong>'+Math.round(multiplier*price)+' '+symbol+'</strong><br><span id="howManyDays">'+pour+' '+days+' '+jour+'s </span><i style="color: grey;">'+a_partir_du+' '+date+'</i></p></article>');
            }
        });
    } else if(action == '/editBooking') {
        $("#booking"+booking_id+" strong").html(Math.round(multiplier*price)+' '+symbol);
        $("#booking"+booking_id+" span#howManyDays").html(pour+' '+days+' '+jour+'s ');
        $("#booking"+booking_id+" i").html(' '+a_partir_du+' '+date);
    }
});

var width = $('.articulosFavoritos').outerWidth();

$(document).on("click", ".articulosFavoritos", function(event) {
    var target = $(event.target);
    removed_fav_id = $(this).attr('id').replace(/\D/g,'');
    var thisID = $(this).attr('data-id');
    var uniqueID = $(this).attr('id');

    if(target.attr('class') == 'closeFav') {
        $("#myFavorites").children("article#"+removed_fav_id).remove();
        $.post('/removeFavorites', {
            'id': removed_fav_id
        }, refreshFavorites);
       
        return;
    }

    if(target.attr('class') == 'editBookingTab') {
        dateIn.setDate(new Date($(this).attr('data-datein')*1000), true);
        dateOut.setDate(new Date($(this).attr('data-dateout')*1000), true);
        $("#bookPropForm .opt1").css("display", "none");
        $("#bookPropForm .opt2").css("display", "block");
        $("#cancelBooking").show();
        $("#bookPropForm").animate({opacity: '1'},500);
        $("#bookPropForm").css("z-index", "100000");
        $("#bookPropForm form#editBooking").attr("action", "/editBooking");
        $("#bookPropForm form").append("<input name='bookingId' value='"+removed_fav_id+"' style='display:none'></input>");

        properties.forEach(function(property) {
            if(property.id == thisID) {
                booked_property = property;
            }
        });

        $(".qs-squares").trigger("click");

        return booked_property;
    }

    if(target.attr('class') == 'messageIcon') {
        $(".messageIcon", this).animate({opacity: 0});
        $(".editBookingTab", this).animate({opacity: 0});
        $(".quickMessenger", this).animate({top: '2.5%'});
        $(this).append('<span id="closeMessenger">&#215;</span><span data-send="'+uniqueID+'" id="sendQuickMessageLabel">'+envoyer+'</span>');
        $("#closeMessenger", this).animate({opacity: 1});
        $("#sendQuickMessageLabel", this).animate({opacity: 1});

        return;
    }

    if(target.attr('class') == 'quickMessengerText') {
        return;
    }

    if(target.attr('id') == 'closeMessenger') {
        $(".quickMessenger", this).animate({top: '-22.5%'});
        $("#closeMessenger", this).animate({opacity: 0});
        $("#sendQuickMessageLabel", this).animate({opacity: 0});
        $(".messageIcon", this).animate({opacity: 1});
        $(".editBookingTab", this).animate({opacity: 1});

        return;
    }

    if(target.attr('id') == 'sendQuickMessageLabel') {
        var recipient = $(".quickMessengerRecipient", this).val();
        var message = $(".quickMessengerText", this).val();
        
        $.post('/sendMessage', {
            'recipient': recipient,
            'message': message
        }, refreshFavorites);

        $(".quickMessenger", this).animate({top: '-22.5%'});
        $("#closeMessenger", this).animate({opacity: 0});
        $("#sendQuickMessageLabel", this).animate({opacity: 0});
        $(".messageIcon", this).animate({opacity: 1});
        $(".editBookingTab", this).animate({opacity: 1});

        $(".quickMessengerText", this).val('');

        return;
    }

    if(target.attr('class') == 'editPropTab') {
        var property_id = $(this).attr('id');

        properties.forEach(function(property) {
            if(property.id == property_id) {
                $("#agregarDepto form input[name=title]").val(property.title);
                $("#agregarDepto form select[name=location]").val(property.location);
                $("#agregarDepto form input[name=area]").val(property.area);
                $("#agregarDepto form input[name=beds]").val(property.beds);
                $("#agregarDepto form input[name=price]").val(property.price);
            }
        });

        $("#agregarDepto").animate({opacity: '1'},300);
        $("#agregarDepto").css("z-index", "100000");
        $("#agregarDepto form").append('<input type="hidden" name="id" value="'+property_id+'">');
        $("#agregarDepto form").attr('action', '/editProperty');

        return;
    }

    var iteration=$(this).data('iteration')||1
    switch ( iteration) {
        case 1:
            $(this).animate({width: "96%", height: 3*width});

            $(this).animate({
                borderTopLeftRadius: 0, 
                borderTopRightRadius: 0, 
                borderBottomLeftRadius: 0, 
                borderBottomRightRadius: 0}, { duration: 500, queue: false });
            
            $(".flecha", this).css("display", "inline-block");
            $("p", this).css("display", "block");
            $("p", this).animate({opacity: 1});
            $("span", this).css("display", "inline-block");
            $(this).removeClass('favOpac');
            $(".quickMessenger", this).css("opacity", "1");
            triggered = 1;
            break;

        case 2:
            $(this).animate({width: "30%", height: width});

            $(this).animate({
                borderTopLeftRadius: '50%', 
                borderTopRightRadius: '50%', 
                borderBottomLeftRadius: '50%', 
                borderBottomRightRadius: '50%'}, { duration: 500, queue: false });
            
            $(".flecha", this).css("display", "none");
            $("p", this).css("display", "none");
            $("p", this).delay(500).animate({opacity: 0});
            $("span", this).css("display", "none");
            $(this).addClass('favOpac');
            $(".quickMessenger", this).animate({opacity: 0});
            triggered = 0;
            break;
    }
    iteration++;
    if (iteration>2) iteration=1
    $(this).data('iteration',iteration)
});

$(document).on("click", "#eliminateFavNo", function(event) {
    event.preventDefault();
    $("#removeFavForm").animate({opacity: '0'},300);
    $("#removeFavForm").animate({zIndex: -10});
});

        
$(function(){
    $(".preguntasFrecuentesH2").click(function(){
        var iteration=$(this).data('iteration')||1
        switch ( iteration) {
            case 1:
                $(".preguntasFrecuentes").css("display","none");
                break;

            case 2:
                $(".preguntasFrecuentes").css("display","block");
                break;
        }
        iteration++;
        if (iteration>2) iteration=1
        $(this).data('iteration',iteration)
    })
});

$(document).on("click",".qs-squares", function () {
    setTimeout(function() {

        selectedDates = getDates(dateIn.dateSelected, dateOut.dateSelected);

        if(hasCommonElement(selectedDates, bookedDates)) {
            dateIn.setDate();
            dateOut.setDate();
            $('#firstDate').css('opacity', 1);
            $('#firstDate').html(ilyaDesReserves);

            return;
        }

        var date1 = Date.parse(dateIn.dateSelected)/1000/60/60/24;
        var date2 = Date.parse(dateOut.dateSelected)/1000/60/60/24;
        var range = date2 - date1;
        if(!isNaN(range)) {
            $('#firstDate').css('opacity', 1);
            $('#firstDate').html(Math.round(booked_property.price*multiplier*range)+' '+symbol).digits();
            $("#bookPropForm form").append("<input name='price' value='"+booked_property.price*range+"' style='display:none'></input>");
        } else {
            $('#firstDate').css('opacity', 0);
        }
    },100);
});

$(document).on("submit",".formRegistro", function (event) {
    var usermail = $('#register_mail').val().toLowerCase();
    var username = $('#register_name').val().toLowerCase();

    if(usermail == "") {
        event.preventDefault();
        $('body').append('<style>#register_mail::placeholder{color:gold;opacity:1;}</style>');
        $('#register_mail').attr('placeholder', mail_vide);
    }
    if(username == "") {
        event.preventDefault();
        $('body').append('<style>#register_name::placeholder{color:gold;opacity:1;}</style>');
        $('#register_name').attr('placeholder', pseudo_vide);
    }
    if($('#register_pass').val() == "") {
        event.preventDefault();
        $('body').append('<style>#register_pass::placeholder{color:gold;opacity:1;}</style>');
        $('#register_pass').attr('placeholder', mdp_vide);
    }
    if($('#register_conf_pass').val() == "") {
        event.preventDefault();
        $('body').append('<style>#register_conf_pass::placeholder{color:gold;opacity:1;}</style>');
        $('#register_conf_pass').attr('placeholder', conf_mdp_vide);
    }

    if($('#register_conf_pass').val() != $('#register_pass').val()) {
        event.preventDefault();
        $('body').append('<style>#register_pass::placeholder{color:gold;opacity:1;}</style>');
        $('body').append('<style>#register_conf_pass::placeholder{color:gold;opacity:1;}</style>');
        $('#register_pass').val('');
        $('#register_conf_pass').val('');
        $('#register_pass').attr('placeholder', conf_mdp_meme);
        $('#register_conf_pass').attr('placeholder', conf_mdp_meme);
    }

    users.forEach(function(user) {
        if(usermail == user.email) {
            event.preventDefault();
            $('#register_mail').val('');
            $('body').append('<style>#register_mail::placeholder{color:gold;opacity:1;}</style>');
            $('#register_mail').attr('placeholder', mail_meme);
        }
        if(username == user.name) {
            event.preventDefault();
            $('#register_name').val('');
            $('body').append('<style>#register_name::placeholder{color:gold;opacity:1;}</style>');
            $('#register_name').attr('placeholder', pseudo_meme);
        }
    });
});

$(document).on("submit",".formLogin", function (event) {
    var mail_accepted = 0;
    var login_check = 0;
    var usermail = $('#login_mail').val().toLowerCase();

    if(usermail == "") {
        event.preventDefault();
        $('body').append('<style>#login_mail::placeholder{color:gold;opacity:1;}</style>');
        $('#login_mail').attr('placeholder', mail_vide);
    }
    if($('#login_pass').val() == "") {
        event.preventDefault();
        $('body').append('<style>#login_pass::placeholder{color:gold;opacity:1;}</style>');
        $('#login_pass').attr('placeholder', mdp_vide);
    }
    if(usermail != "" && $('#login_pass').val() != "") {
        users.forEach(function(user) {
            if(usermail == user.email) {
                mail_accepted++;
            }
        });

        if(mail_accepted == 1) {
            $(this).submit();
        } else {
            event.preventDefault();
                $('body').append('<style>#login_mail::placeholder{color:gold;opacity:1;}</style>');
                $('#login_mail').attr('placeholder', mail_incorrect);
                $('#login_mail').val('');
                $('#login_pass').val('');
        }
    }
});

function countrySelect() {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      //console.log(data);
      var completarHtml = '<select name="country" onchange="this.form.submit()">';

      for (var i = 0; i < data.length; i++){
            if(data[i].name.toLowerCase() == country) {
                completarHtml += '<option selected value="' + data[i].name + '">';
            } else {
            completarHtml += '<option value="' + data[i].name + '">';
            }
        
        completarHtml += data[i].name;
        completarHtml += '</option>';
      }

      completarHtml += '</select>';

      elDiv = document.querySelector('#country');

      elDiv.innerHTML = completarHtml;

    })
    .catch(function(error){
      console.log('Ocurrió un error: ' + error);
    });
}
    
$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") ); 
    })
}

function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function readURL(input) {
    if (input.files && input.files[0]) {
        $("#sendAvatar").css("width", "100%");
        $("#sendAvatar").animate({opacity: 1});
        $("#avatarPreview").animate({opacity: 1, right: '20px'});

        var reader = new FileReader();

        reader.onload = function (e) {
            $('#avatarPreview').css('background-image', 'url("'+e.target.result+'")');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

var actualLocation = "lune";
var newLocation = "soleil";
var position = $(window).scrollTop(); 


$(document).on('click', '.mapboxgl-marker', function() {
    $('.mapboxgl-marker').css('opacity', 0.66);
    $(this).css('opacity', 1);
    var ID = $(this).attr('id');
    $('html, body').animate({scrollTop: $('article#'+ID+'.articulosPrincipales').offset().top-175});
    if($('article#'+ID+'.articulosPrincipales').data('iteration') != 2) {
        $('article#'+ID+'.articulosPrincipales').trigger('click');
    }
});

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date (currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

function hasCommonElement(arr1,arr2)
{
    var hasCommon = false;
    arr1.forEach(function(arr1Element) {
        arr2.forEach(function(arr2Element) {
            if(arr2Element.getTime() == arr1Element.getTime()) {
                hasCommon = true;
            }
        });
    });
    return hasCommon;
}

$(window).load(function() {
    countrySelect();
    $(".mapa").load("/map");
});
