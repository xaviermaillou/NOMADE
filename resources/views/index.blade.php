<?php   

use App\Property;
use App\Favorite;
use App\Photo;
use App\User;
use App\PropComment;
use App\Message;

    // VAR_DUMP CUSTOMIZADO

function vardump ($data) {
    echo '<pre style="display: inline-block; background: black; padding-left: 20px; margin-top: 0px; font-size: 15px; color: yellow; z-indez: 99999; font-weight: bolder;">'; var_dump($data); echo '</pre>';
}

    // ChEQUEO USUARIO

$userID = 0;

if(Auth::check()) {
    $userID = Auth::user()->id;
}

    // SELECTOR DE TEMA

    // POR DEFECTO
    $theme = "claro";
    $carpeta = "/img/light_mode";
    $css = "/css/light_mode.css";
    $selectedThemeClaro = "selected";
    $selectedThemeOscuro = "";

    // CAMBIO DE TEMA
    if(isset($_POST["theme"])) {
        $theme = $_POST["theme"];
        $_COOKIE["theme"] = $theme;
        setcookie("theme",$theme,time()+60*60*24*30);
    };

    if(isset($_COOKIE["theme"])) {
        $theme = $_COOKIE["theme"];
        if($theme == "oscuro") {
            $selectedThemeClaro = "";
            $selectedThemeOscuro = "selected";
            $carpeta = "/img/dark_mode";
            $css = "/css/dark_mode.css";
        } else if ($theme == "claro") {
            $selectedThemeClaro = "selected";
            $selectedThemeOscuro = "";
            $carpeta = "/img/light_mode";
            $css = "/css/light_mode.css";
        }
    }

    // CAMBIO DE IDIOMA

    $language = "es";
    $selectedEs = "selected";
    $selectedFr = "";
    $selectedEn = "";

    if(Auth::check()) {
        $language = Auth::user()->language;    
    };

    include(app_path().'/php/translate.php');

    // CHEQUEO DEL PAIS

    $country = "argentina";

    if(Auth::check()) {
        $country = Auth::user()->country;    
    };

    // CHEQUEO DE LA MONEDA

    $currency = "ARS";
    $selectedARS = "selected";
    $selectedEUR = "";
    $selectedUSD = "";

    if(Auth::check()) {
        $currency = Auth::user()->currency;
    }

    if($currency == "ARS") {$selectedARS = "selected"; $multiplier = 1; $symbol = 'AR$';}
    if($currency == "EUR") {$selectedEUR = "selected"; $multiplier = 0.015; $symbol = '€';}
    if($currency == "USD") {$selectedUSD = "selected"; $multiplier = 0.017; $symbol = 'U$';}

    // CHEQUEO DEL AVATAR

    if(!Auth::check() || Auth::user()->avatar == 'user.jpg') {
        $avatar = $carpeta.'/user.png';
    } else {
        $avatar = '/storage/'.Auth::user()->avatar;
    }

    // TABLAS

    $currentTime = time();

    $users = User::all()->toArray();
    $properties = Property::all()->toArray();
    $myProperties = Property::where('owner', '=', $userID)->get()->toArray();
    $myFavorites = Favorite::where('user_id', '=', $userID)->where('favorite', '=', 1)->get('property_id')->toArray();
    $myBookings = Favorite::where('user_id', '=', $userID)->where('booked', '=', 1)->get()->toArray();
    $myNextBooking = Favorite::where('user_id', '=', $userID)->where('booked', '=', 1)->where('date_in', '>', $currentTime)->orderBy('date_in', 'ASC')->first();
    $myLastBooking = Favorite::where('user_id', '=', $userID)->where('booked', '=', 1)->where('date_out', '<', $currentTime)->where('reviewed', '=', 0)->orderBy('date_out', 'DESC')->first();
    if(!empty($myNextBooking)) {$myNextBooking->toArray();}
    if(!empty($myLastBooking)) {$myLastBooking->toArray();}
    $pictures = Photo::all()->toArray();
    $propertiesReviews = PropComment::all()->toArray();
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/css/style.css">
        <link rel="stylesheet" href=<?=$css?>>
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Plaster&display=swap" rel="stylesheet">
        <script src='https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js'></script>
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css' rel='stylesheet' />
        <link rel="stylesheet" href="/calendar/dist/datepicker.min.css">
        <title>NOMADE</title>
    </head>
    <body>

        <!-- ERRORES -->

        @if (count($errors) > 0)
            <div class="alert alert-danger" style="opacity: 1; z-index: 9999999; position: absolute; width: 100%; height: 100vh; text-align: center; padding-top: 250px;">
                <ul style="color: gold;">
                    <li>{{ $erreur }}</li>
                </ul>
                <form class="formLogin" action="{{ route('login') }}" method="post" style="width: 500px; margin: auto;">
                @csrf
                    <input id="login_mail" name="email" type="email" placeholder= "E-mail" autocomplete="off"  value="{{ old('email') }}">
                    <input id="login_pass" name="password" type="password" placeholder="<?=$mdp?>" autocomplete="off"  value="">
                    <input type="submit" name="registrarse" value="<?=$connecter?>" class="aceptar">
                </form>
            </div>
        @endif

        <!------------------------------------------ ENCABEZADO ---------------------------------------------->

        <header>
            <a href="/"><h1>NOMADE</h1></a>

            <!-- FLECHA RETORNO -->

            <img src="<?=$carpeta?>/arrow.png" class="retorno" id="retorno" alt="">
            <nav class="encabezado">
                <div class="fotoUsuario"><img src="<?=$avatar?>" id="fotoDeUsuario" alt=""></div>
                <div class="favoritos"><img src="<?=$carpeta?>/heart.png" alt=""><br><span style="opacity: 0; font-size: 30px; position: relative; top: -12px; text-align: center; width: 30px; display: inline-block;">&#9679</span></div>
                <div class="info"><img src="<?=$carpeta?>/info.png" alt=""><br><span style="opacity: 0; font-size: 16px; position: relative; top: -12px; text-align: center; width: 27px; display: inline-block;">&#9679</span></div>
                @if(Auth::check())<div class="plus"><img src="<?=$carpeta?>/plus.png" alt=""></div>@endif
            </nav>
        </header>

        <!-- CONTENEDOR DEL MAPA -->

        <section class="mapa" style="opacity: 0.5;">
        </section>

        <!------------------------------------------ BUSQUEDA ---------------------------------------------->

        <form action="/search" id="formBuscar" method="POST">
        @csrf
            <input class="buscar" type="text" name="buscar" id="buscar" autocomplete="off" placeholder="<?=$question?>">
            <nav class="filtros">
                <label for="enviarBusqueda"><img src="<?=$carpeta?>/buscar.png" id="lupa" alt=""></label>
                <input oninput = "filter()" autocomplete="off"  name="personas" type="text" id="cantidadDePersonas"> <img src="<?=$carpeta?>/persona.png" alt=""><span> | MIN </span><input oninput = "filter()" autocomplete="off"  type="text" name="superficie" id="cantidadDeM2"><span> m<sup>2</sup> | MAX </span><input oninput = "filter()" autocomplete="off"  type="text" name="precio" id="quePrecio"><span> <?=$symbol?></span>
                <input type="submit" style="display:none;">
                <input onclick = "searchAgain()" type="" id="enviarBusqueda" style="display:none;">
            </nav>
        </form>

        <!--------------------------------------- TABLA DE INICIO ------------------------------------------->

        <section class="downPanel">
            <footer>
                <div class="allerIci"><?=$allerIci?></div>
            </footer>

            @if (Auth::check())
            @if (!empty($myLastBooking))
                <div id="downTile1" class="downTile">
                    <section id="reviewSection">
                        <form action="/sendReview" method="POST">
                        @csrf
                            <textarea name="message" cols="30" rows="10" placeholder="<?=$ecrireCommentaire2?>"></textarea>
                            <figure class="closeReview">&#215;</figure>
                            <input type="submit" class="aceptar" value="<?=$envoyer?>">
                        </form>
                    </section>
                    <div><?=$commenterReserve?>
                    </div>
                    <p id="upcomingStayTitle"><?=$dernierSejour?>
                    </p>
                    <p id="upcomingStayDate">
                        @if ($language == 'es' || $language == 'fr')
                        <?=$ilya?> 
                        <span id="upcomingStayDays">
                        </span> 
                        <?=$jour?>(s)
                        @elseif ($language == 'en')
                        <span id="upcomingStayDays">
                        </span> 
                        <?=$jour?>(s)
                        <?=$ilya?> 
                        @endif
                    </p>
                </div>
            @elseif (!empty($myNextBooking))
                <div id="downTile1" class="downTile">
                    <div><?=$voirReserve?>
                    </div>
                    <p id="upcomingStayTitle"><?=$prochainSejour?>
                    </p>
                    <p id="upcomingStayDate">
                        <?=$dans?> 
                        <span id="upcomingStayDays">
                        </span> 
                        <?=$jour?>(s)
                    </p>
                </div>
            @endif
            <div id="downTile2" class="downTile">
                @if(sizeof($myProperties) == 0)
                    <span style="margin-top: 2px"><?=$ajoute?></span>
                    <img src="<?=$carpeta?>/plus.png" alt="">
                    <span style="position: relative; top: 70px;"><?=$taProp?></span>
                    <div class="plus">
                        <span style="margin-top: 2px"><?=$devenez?></span>
                        <span style="position: relative; top: 70px;"><?=$partenaire?></span>
                    </div>
                @endif
            </div>
            <div id="downTile3" class="downTile"></div>
            @endif

        </section>
        
        <!-------------------------------- RESULTADOS (SE GENERAN EN JS) ------------------------------------>

        <section class="seccionPrincipalArticulos">
                      
        </section>

        <!--------------- MIS RESEVRAS, MIS FAVORITOS Y MIS PROPIEDADES (SE GENERAN EN JS) ------------------>

        <section class="panel panelFavoritos">
            <h2><?=$reserves?></h2>
            <div id="myBookings"></div>
            <h2><?=$favoris?></h2>
            <div id="myFavorites"></div>
            <h2><?=$proprietes?></h2>
            <div id="myProperties"></div>
        </section>

        <!------------------------------------ LOGIN Y CONFUGURACIÓN ---------------------------------------->

        <section class="panel panelLogin" id="panelLogin">

            @if (!Auth::check())

            <!-- SIGN IN -->

            <h2><?=$enregistrer?></h2>
            <img class="social" src="<?=$carpeta?>/loginFacebook.png" alt="Facebook">
            <img class="social" src="<?=$carpeta?>/loginTwitter.png" alt="Twitter">
            <img class="social" src="<?=$carpeta?>/loginLinkedin.png" alt="LinkedIn">

            <form class="formRegistro" action="{{ route('register') }}" method="post">
            @csrf
                <input id="register_mail" name="email" type="email" placeholder= "E-mail" autocomplete="off"  value="{{ old('email') }}">
                <input id="register_name" name="name" type="text" placeholder= "<?=$utilisateur?>" autocomplete="off"  value="{{ old('name') }}">
                <input id="register_pass" name="password" type="password" placeholder="<?=$mdp?>" autocomplete="off"  value="">
                <input id="register_conf_pass" name="password_confirmation" type="password" placeholder="<?=$confirmerMdp?>" autocomplete="off"  value="">
                <span class="alertaContrasena"></span>
                <input type="submit" name="registrarse" value="<?=$registrer?>" class="aceptar">
            </form>

            <!-- LOGIN -->
            
            <h5><?=$dejaRegistre?></h5>
            <h2><?=$connexion?></h2>
            <form class="formLogin" action="{{ route('login') }}" method="POST">
            @csrf
                <input id="login_mail" name="email" type="email" placeholder= "E-mail" autocomplete="off"  value="{{ old('email') }}">
                <input id="login_pass" name="password" type="password" autocomplete="off"  placeholder="<?=$mdp?>">
                <span class="alertaContrasena"></span>
                <label for="remember" class="checkbox" id="rememberMe">
                <?=$rappeler?>
                </label>
                <input type="checkbox" class="checkbox subir" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                
                <input name="login" type="submit" value="<?=$connecter?>" class="aceptar botonLogin">
            </form>
            <p class="olvide"><?=$oubli?></p>
            <form action="mail.php" method="POST" class="formLogin">
                <input name="mailOlvide" type="email" placeholder="E-mail" class="emailOlvide">
            </form>

            @elseif (Auth::check())

            
            <h2>{{Auth::user()->name}}</h2>

            <!-- FOTO -->

            <form action="/uploadAvatar" method="POST" enctype="multipart/form-data">
            @csrf
                <label for="foto" class="file formLogin"><?=$choisirPhoto?></label>
                <input type="file" id="foto" class="file" name="avatar" onchange="readURL(this);">
                <label for="subir" class="file formLogin" id="sendAvatar"><?=$envoyer?></label>
                <input type="submit" id="subir" class="subir" value="Subir" class="aceptar">
            </form>
            <div id="avatarPreview"></div>

            <!-- MONEDA -->

            <form action="/changeCurrency" class="formLogin" id="formCurrency" method="POST">
            @csrf
            <label for="currency" class="formLogin"><?=$devise?></label>
                <select name="currency" id="currency" onchange='this.form.submit()'>
                    <option <?=$selectedARS?> value="ARS">ARS</option>
                    <option <?=$selectedEUR?> value="EUR">EUR</option>
                    <option <?=$selectedUSD?> value="USD">USD</option>
                </select>
            </form>

            <!-- IDIOMA -->

            <form action="/changeLanguage" class="formLogin" id="formLanguage" method="POST">
            @csrf
                <label for="language" class="formLogin"><?=$langue?></label>
                <select name="language" id="language" onchange='this.form.submit()'>
                    <option <?=$selectedEs?> value="es">Español (Argentina)</option>
                    <option <?=$selectedFr?> value="fr">Français (France)</option>
                    <option <?=$selectedEn?> value="en">English (US)</option>
                </select>
            </form>

            <!-- PAIS -->

            <form action="/changeCountry" class="formLogin" id="formCountry" method="POST">
            @csrf
                <label for="country" class="formLogin"><?=$pays?></label>
                <div id="country"></div>
            </form>

            <!-- TEMA -->

            <form action="/" class="formLogin" id="formTheme" method="POST">
            @csrf
                <label for="theme" class="formLogin"><?=$styleVisuel?></label>
                <select name="theme" id="theme" onchange='this.form.submit()'>
                    <option <?=$selectedThemeClaro?> value="claro"><?=$clair?></option>
                    <option <?=$selectedThemeOscuro?> value="oscuro"><?=$fonce?></option>
                </select>
            </form>
            
            @if(Auth::user()->admin == 1)
            <p class="aceptar activarMapa" style="display: block;">Relanzar mapa</p>
            @endif

            <!-- LOGOUT -->

            <form action="{{ route('logout') }}" class="formLogin" method="POST">
            @csrf
                <input type="submit" name="desconectarse" value="<?=$deconexion?>" class="aceptar">
            </form>
        
            @endif

        </section>

        <!------------------------------------------ INFO ---------------------------------------------->

        <section class="panel panelInfo" id="panelInfo">
            <h2 class="myMessagesH2"><?=$mesMessages?></h2>
            <section class="generalMessenger">

            </section>
           <h2 class="aceptar preguntasFrecuentesH2"><?=$questionsFrequentes?></h2>
           <ul class="preguntasFrecuentes" type="bullet">
             <li class="pregunta"><?=$question1?><p class="respuesta"><?=$reponse1?></p></li> 
             <li class="pregunta"><?=$question2?><p class="respuesta"><?=$reponse2?></p></li> 
             <li class="pregunta"><?=$question3?><p class="respuesta"><?=$reponse3?></p></li>
             <li class="pregunta"><?=$question4?><p class="respuesta"><?=$reponse4?></p></li> 
             <li class="pregunta"><?=$question5?><p class="respuesta"><?=$reponse5?></p></li> 
           </ul>
        </section>

        <!------------------------------------ AGREGAR PROPIEDAD ---------------------------------------->

        <section class="agregarDepto" id="agregarDepto">
            <section class="formularioAgregar">
                <img src="<?=$carpeta?>/cruz.png" class="cerrar" alt="">
                <h1><?=$ajouterProp?></h1>
                <form action="/addProperty" method="POST" enctype="multipart/form-data">
                @csrf
                    <input type="text" name="title" placeholder="<?=$choisirTitre?>">

                    <select name="location">
                        <option value="" selected disabled hidden><?=$choisirVille?></option>
                        <option value="buenos aires">Buenos Aires</option>
                        <option value="ushuaia">Ushuaia</option>
                        <option value="bariloche">Bariloche</option>
                        <option value="mendoza">Mendoza</option>
                        <option value="iguazu">Iguazu</option>
                        <option value="el calafate">El Calafate</option>
                    </select>
                    
                    <label for="foto2" class="file formLogin"><?=$choisirPhoto2?></label>
                    <input type="file" id="foto2" class="file" name="pictures[]" multiple="multiple">
                    
                    <input type="text" name="area" placeholder="<?=$combienM2?>m²?">
                    <input type="text" name="beds" placeholder="<?=$combienPersonnes?>">
                    <input type="text" name="price" placeholder="<?=$combienParMois?>">
                    <input type="submit" value="<?=$ajouter?>" class="aceptar">
                </form>
            </section>
        </section>


        <!----------------------------RESERVAR PROPIEDAD Y EDITAR RESERVA------------------------------->

        <section class="agregarDepto" id="bookPropForm">
            <section class="formularioAgregar">
                <img src="<?=$carpeta?>/cruz.png" class="cerrar" alt="">
                <h1 class="opt1" style="margin-left: 10px; display: none;"><?=$reserverProp?></h1>
                <h1 class="opt2" style="margin-left: 10px; display: none;"><?=$editerReserv?></h1>
                <form action="/bookProperty" method="POST" id="editBooking">
                @csrf 
                    <label for="dateIn" class="file formLogin" style="display: inline-block; border: none; width: 298px; margin-bottom: 0; text-indent: 10px;"><?=$depuis?></label>
                    <label for="dateOut" class="file formLogin" style="display: inline-block; border: none; width: 298px; margin-bottom: 0; text-indent: 10px;"><?=$jusqua?></label>
                    <input style="display: inline-block; color:transparent; height: 0px;" type="text" name="dateIn" id="dateIn" readonly>
                    <input style="display: inline-block; color:transparent; height: 0px;" type="text" name="dateOut" id="dateOut" readonly>
                    <p id='firstDate' style='margin-left: 10px; margin-top: 260px; margin-bottom: 10px; opacity: 0; font-size: 20px; font-weight: bolder'>PRECIO</p>
                    <input type="submit" value="<?=$reserver?>" class="aceptar" style="margin-left: 10px; width: 120px;">
                </form>
                <form action="/removeBooking" style="display: none;" method="POST" id="cancelBooking">
                @csrf
                <input type="submit" value="<?=$supprimer?>" class="aceptar" style="margin-left: 10px; width: fit-content;">
                </form>
            </section>
        </section>

        <script src="/calendar/dist/datepicker.min.js"></script> 
    </body>
</html>

<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

<script>
    var users = <?php echo json_encode($users) ?>;
    var properties = <?php echo json_encode($properties) ?>;
    var myFavorites = <?php echo json_encode($myFavorites) ?>;
    var myBookings = <?php echo json_encode($myBookings) ?>;
    var myNextBooking = <?php echo json_encode($myNextBooking) ?>;
    var myLastBooking = <?php echo json_encode($myLastBooking) ?>;
    var propertyPictures = <?php echo json_encode($pictures) ?>;
    var country = "<?php echo $country; ?>";
    var language = "<?php echo $language ?>";
    var multiplier = <?php echo $multiplier ?>;
    var symbol = "<?php echo $symbol ?>";
    var theme = "<?php echo $theme ?>";
    var userID = <?php echo $userID ?>;
    var propertiesReviews = <?php echo json_encode($propertiesReviews) ?>;
    console.log("Usuarios:");
    console.log(users);
    console.log("Propiedades:");
    console.log(properties);
    console.log("Favoritos:");
    console.log(myFavorites);
    console.log("Reservas:");
    console.log(myBookings);
    console.log("Próxima reserva:");
    console.log(myNextBooking);
    console.log("Última reserva:");
    console.log(myLastBooking);
    console.log("Fotos de propiedades:");
    console.log(propertyPictures);
    console.log("País:");
    console.log(country);
    console.log("Idioma:");
    console.log(language);
    console.log("Multiplicador de precio:");
    console.log(multiplier);
    console.log("Moneda:");
    console.log(symbol);
    console.log("Tema:");
    console.log(theme);
    console.log("ID de usuario:");
    console.log(userID);
    console.log("Reseñas:");
    console.log(propertiesReviews);
</script>

<script src="/js/app.js"></script>
