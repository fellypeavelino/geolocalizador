/*var audio = new Audio();
audio.src = "C:/Documents and Settings/Felipe/Desktop/Rod Stewart E Amy Belle I Dont Want To Talk About It.mp3";
audio.play();*/
function initialize() {
 
// Exibir mapa;
var myLatlng = new google.maps.LatLng(-8.0631495, -34.87131120000004);
var mapOptions = {
zoom: 17,
center: myLatlng,
panControl: false,
mapTypeId: google.maps.MapTypeId.ROADMAP
}
 
 
// Exibir o mapa na div #mapa;
var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
 
 
// Marcador personalizado;
var image = 'https://cdn1.iconfinder.com/data/icons/gpsmapicons/blue/gpsmapicons01.png';
var marcadorPersonalizado = new google.maps.Marker({
position: myLatlng,
map: map,
icon: image,
title: 'Marco Zero - Recife/PE',
animation: google.maps.Animation.DROP
});
 
}
 
 
// Fun��o para carregamento ass�ncrono
function loadScript() {
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDeHb17So0QupSGO_d6b8X-OyvJ32UQehs&sensor=true&callback=initialize";
document.body.appendChild(script);
}
 
window.onload = loadScript;
/*function initialize() {
 
// Exibir mapa;
var myLatlng = new google.maps.LatLng(-8.0631495, -34.87131120000004);
var mapOptions = {
zoom: 17,
center: myLatlng,
mapTypeId: google.maps.MapTypeId.ROADMAP
}
 
// Exibir o mapa na div #mapa;
var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
 
}
 
// Fun��o para carregamento ass�ncrono
function loadScript() {
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDeHb17So0QupSGO_d6b8X-OyvJ32UQehs&sensor=true&callback=initialize";
document.body.appendChild(script);
initialize();
}
 
window.onload = loadScript;

//http://blog.thulioph.com/post/72436969224/api-google-maps-v3

/*
function initialize() {
 
// Exibir mapa;
var myLatlng = new google.maps.LatLng(-8.0631495, -34.87131120000004);
var mapOptions = {
zoom: 17,
center: myLatlng,
panControl: false,
// mapTypeId: google.maps.MapTypeId.ROADMAP
mapTypeControlOptions: {
mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
}
}
 
 
// Par�metros do texto que ser� exibido no clique;
var contentString = '<h2>Marco Zero</h2>' +
'<p>Pra�a Rio Branco, Recife/PE.</p>' +
'<a href="http://pt.wikipedia.org/wiki/Pra%C3%A7a_Rio_Branco_(Recife)" target="_blank">clique aqui para mais informa��es</a>';
var infowindow = new google.maps.InfoWindow({
content: contentString,
maxWidth: 700
});
 
 
// Exibir o mapa na div #mapa;
var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
 
 
// Marcador personalizado;
var image = 'https://cdn1.iconfinder.com/data/icons/gpsmapicons/blue/gpsmapicons01.png';
var marcadorPersonalizado = new google.maps.Marker({
position: myLatlng,
map: map,
icon: image,
title: 'Marco Zero - Recife/PE',
animation: google.maps.Animation.DROP
});
 
 
// // Exibir texto ao clicar no �cone;
google.maps.event.addListener(marcadorPersonalizado, 'click', function() {
infowindow.open(map,marcadorPersonalizado);
});
 
 
// Estilizando o mapa;
// Criando um array com os estilos
var styles = [
{
stylers: [
{ hue: "#41a7d5" },
{ saturation: 60 },
{ lightness: -20 },
{ gamma: 1.51 }
]
},
{
featureType: "road",
elementType: "geometry",
stylers: [
{ lightness: 100 },
{ visibility: "simplified" }
]
},
{
featureType: "road",
elementType: "labels"
}
];
 
// crio um objeto passando o array de estilos (styles) e definindo um nome para ele;
var styledMap = new google.maps.StyledMapType(styles, {
name: "Mapa Style"
});
 
// Aplicando as configura��es do mapa
map.mapTypes.set('map_style', styledMap);
map.setMapTypeId('map_style');
 
}
 
 
// Fun��o para carregamento ass�ncrono
function loadScript() {
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDeHb17So0QupSGO_d6b8X-OyvJ32UQehs&sensor=true&callback=initialize";
document.body.appendChild(script);
}
 
window.onload = loadScript;
*/