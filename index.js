const express = require('express');
const express_handlebars = require ('express-handlebars');
const handlebars = require ('handlebars');
const app = express();
const path = require ('path');

app.use(express.static('public'));

app.engine('handlebars', express_handlebars({
    extname: '.handlebars',
    defaultLayout:'',
    partialsDir: path.join(__dirname, 'views/partials'),
    layoutsDir: path.join(__dirname, 'views'),
}))

app.set('view engine', 'handlebars');

app.get('/', function(request, response){
    response.render('main');
});

app.get('/menuAlumno', function(request, response){
    response.render('menuAlumno');
});

app.get('/menuColaborador', function(request, response){
    response.render('menuColaborador');
});

app.get('/inventario', function(request, response){
  response.render('inventario');
});

handlebars.registerPartial('nav',` 
<nav class="navbar sticky-top navbar-dark navIcesi d-flex bd-highlight mb-3">

<a href="#" class="mr-auto p-2 bd-highlight"><img class="logoCertyco" src="./img/certyco.svg"></a>

<div class="row infoUsuarioMenu">
    <div class="col d-flex align-items-center">
        <div class="row d-flex align-items-center">
            <p class="infoUserIcesi">1234567 <br> Nombre</p>
        </div>
    </div>
    <div class="col d-flex align-items-center"><i
            class="fas fa-user-circle fa-2x align-self-center iconUserIcesi"></i></div>
</div>

<a href="/views/login.html" class="p-2 bd-highlight"><button class="btn btn-outline-light"
        type="button">Salir</button></a>

</nav>
<nav class="miniBar"></nav>` );

handlebars.registerPartial('footer', `
<footer>
    <div class="container-fluid">
      <div class="row">
        <div class="col footer_info">
          <div class="row footerStyle">
            <img class="footerIcesi_logo" src="./img/logo-Icesi-footer.svg">
          </div>
          <div class="row">
            <button type="button" class="btn btnSocialMedia">
              <a href="https://www.youtube.com/user/universidadicesi" target="_blank"><i
                  class="fab fa-youtube fa-lg socialMedia"></i></a></button>

            <button type="button" class="btn btnSocialMedia">
              <a href="https://twitter.com/icesi" target="_blank"><i
                  class="fab fa-twitter fa-lg socialMedia"></i></a></button>

            <button type="button" class="btn btnSocialMedia">
              <a href="https://www.instagram.com/universidad_icesi/" target="_blank"><i
                  class="fab fa-instagram fa-lg socialMedia"></i></a></button>
          </div>
        </div>

        <div class="col footer_info">
          <p class="contact">CONTACTO</p>
          <p class="location">Universidad Icesi, Calle 18 No. 122-135 <br>
            Pance, Cali - Colombia <br>
            Teléfono: +57 (2) 555 2334 <br>
            Fax: +57 (2) 555 1441</p>
        </div>

        <div class="col footer_info d-flex justify-content-start">

          <div class="row">
            <ul class="infoIcesiFooter">
              <li>La Universidad Icesi es una Institución de Educación Superior que se encuentra sujeta a inspección y
                vigilancia por parte del Ministerio de Educación Nacional.
              </li>
              <li> Sitio desarrollado por:</li>
              <li> <img class="imgSyri" src="./img/logo-syri-desarrollo.svg"></li>
            </ul>
          </div>
        </div>
        
      </div>
      <div class="row">
        <div class="col footer_info">
          <hr>
          <p class="text-center infoIcesiFt">
            Copyright © 2009 - 2017<br>
            Recomendamos navegadores o versiones superiores a Chrome 35, IE 11, Firefox 52, Safari 10</p>
        </div>
      </div>
    </div>
  </footer>
`);


app.listen(5500);



