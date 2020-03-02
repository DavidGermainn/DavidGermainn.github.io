let operaPop = document.getElementById('operaPop');
let cafeContainer = document.getElementById('cafeContainer');
let dramaBarContainer = document.getElementById('dramaBarContainer');
let georgianAirwaysContainer = document.getElementById('georgianAirwaysContainer');
function myMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: { lat: 41.702433, lng: 44.793878 },
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8ec3b9"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1a3646"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#64779e"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#334e87"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#6f9ba5"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3C7680"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#304a7d"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2c6675"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#255763"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#b0d5ce"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3a4762"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#0e1626"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#4e6d70"
          }
        ]
      }
    ]
  });
  let operaMarker = new google.maps.Marker({
    position: { lat: 41.700816, lng: 44.795797 },
    map: map,
    title: 'Opera'
  })
  let cafeGalleryMarker = new google.maps.Marker({
    position: { lat: 41.70266, lng: 44.791799 },
    map: map,
    title: 'Cafe Gallery'
  })
  let dramaBarMarker = new google.maps.Marker({
    position: { lat: 41.703585, lng: 44.791249 },
    map: map,
    title: 'Drama Bar'
  })
  let georgianAirwaysMarker = new google.maps.Marker({
    position: { lat: 41.698633, lng: 44.797957 },
    map: map,
    title: 'Georgian Airways'
  })
  let museumMarker = new google.maps.Marker({
    position: { lat: 41.696150, lng: 44.800643 },
    map: map,
    title: 'Georgian National Museum'
  })
  let marriotMarker = new google.maps.Marker({
    position: { lat: 41.699218, lng: 44.798306 },
    map: map,
    title: 'Marriot'
  })
  let museumCafeMarker = new google.maps.Marker({
    position: { lat: 41.697407, lng: 44.799373 },
    map: map,
    title: 'Museum Cafe'
  })
  let schoolMarker = new google.maps.Marker({
    position: { lat: 41.697842, lng: 44.798187 },
    map: map,
    title: 'N1 School'
  })
  let galleryMarker = new google.maps.Marker({
    position: { lat: 41.698420, lng: 44.798739 },
    map: map,
    title: 'National Gallery'
  })
  let nearDramaMarker = new google.maps.Marker({
    position: { lat: 41.703161, lng: 44.792021 },
    map: map,
    title: 'Near Drama Bar'
  })
  let parliamentMarker = new google.maps.Marker({
    position: { lat: 41.696906, lng: 44.798522 },
    map: map,
    title: 'Parliament'
  })
  let sculptureMarker = new google.maps.Marker({
    position: { lat: 41.703883, lng: 44.789954 },
    map: map,
    title: 'Sculpture'
  })
  let theatreMarker = new google.maps.Marker({
    position: { lat: 41.699686, lng: 44.797720 },
    map: map,
    title: 'Theatre'
  })
  let youthMarker = new google.maps.Marker({
    position: { lat: 41.696140, lng: 44.799076 },
    map: map,
    title: 'Youth Art Palace'
  })

  operaMarker.addListener('click', () => {
    document.getElementById("next").style.display = "none"
    document.getElementById("prev").style.display = "none"

    operaPop.style.display = "block";
    operaPop.style.animation = "fadeIn 2s";
    operaContainer.style.display = "block";
  })
  cafeGalleryMarker.addListener('click', () => {

    operaPop.style.display = "block";
    operaPop.style.animation = "fadeIn 2s";
    cafeContainer.style.display = "block";
  })
  dramaBarMarker.addListener('click', () => {

    operaPop.style.display = "block";
    operaPop.style.animation = "fadeIn 2s";
    dramaBarContainer.style.display = "block";
  })
  georgianAirwaysMarker.addListener('click', () => {

    operaPop.style.display = "block";
    operaPop.style.animation = "fadeIn 2s";
    georgianAirwaysContainer.style.display = "block";
  })
  museumMarker.addListener('click', () => {

    operaPop.style.display = "block";
    operaPop.style.animation = "fadeIn 2s";
    museumContainer.style.display = "block";
  })
  marriotMarker.addListener('click', () => {

    operaPop.style.display = "block";
    operaPop.style.animation = "fadeIn 2s";
    marriotContainer.style.display = "block";
  })
  museumCafeMarker.addListener('click', () => {

    operaPop.style.display = "block";
    operaPop.style.animation = "fadeIn 2s";
    museumCafeContainer.style.display = "block";
  })
  schoolMarker.addListener('click', () => {

    operaPop.style.display = "block";
    operaPop.style.animation = "fadeIn 2s";
    schoolContainer.style.display = "block";
  })
  galleryMarker.addListener('click', () => {

    operaPop.style.display = "block";
    operaPop.style.animation = "fadeIn 2s";
    galleryContainer.style.display = "block";
  })
  nearDramaMarker.addListener('click', () => {

    operaPop.style.display = "block";
    operaPop.style.animation = "fadeIn 2s";
    nearDramaContainer.style.display = "block";
  })
  parliamentMarker.addListener('click', () => {

    operaPop.style.display = "block";
    operaPop.style.animation = "fadeIn 2s";
    parliamentContainer.style.display = "block";
  })
  sculptureMarker.addListener('click', () => {

    operaPop.style.display = "block";
    operaPop.style.animation = "fadeIn 2s";
    sculptureContainer.style.display = "block";
  })
  theatreMarker.addListener('click', () => {

    operaPop.style.display = "block";
    operaPop.style.animation = "fadeIn 2s";
    theatreContainer.style.display = "block";
  })
  youthMarker.addListener('click', () => {

    operaPop.style.display = "block";
    operaPop.style.animation = "fadeIn 2s";
    youthContainer.style.display = "block";
  })
}

function closeOverlay() {
  operaPop.style.animation = "fadeOut 2s";
  setTimeout(() => {
    operaPop.style.display = "none";
    operaContainer.style.display = "none";
    cafeContainer.style.display = "none";
    dramaBarContainer.style.display = "none";
    georgianAirwaysContainer.style.display = "none";
    museumContainer.style.display = "none";
    marriotContainer.style.display = "none";
    museumCafeContainer.style.display = "none";
    schoolContainer.style.display = "none";
    galleryContainer.style.display = "none";
    nearDramaContainer.style.display = "none";
    parliamentContainer.style.display = "none";
    sculptureContainer.style.display = "none";
    theatreContainer.style.display = "none";
    youthContainer.style.display = "none";
  }, 1950);
}

let slideIndex = 1;

function cafePlusSlides(n) {
  cafeShowSlides(slideIndex += n);
}
function cafeCurrentSlide(n) {
  cafeShowSlides(slideIndex = n);
}
function cafeShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("cafeSlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function dramaPlusSlides(n) {
  dramaShowSlides(slideIndex += n);
}
function dramaCurrentSlide(n) {
  dramaShowSlides(slideIndex = n);
}
function dramaShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("dramaSlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function gaPlusSlides(n) {
  gaShowSlides(slideIndex += n);
}
function gaCurrentSlide(n) {
  gaShowSlides(slideIndex = n);
}
function gaShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("gaSlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function marriotPlusSlides(n) {
  marriotShowSlides(slideIndex += n);
}
function marriotCurrentSlide(n) {
  marriotShowSlides(slideIndex = n);
}
function marriotShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("marriotSlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function museumCafePlusSlides(n) {
  museumCafeShowSlides(slideIndex += n);
}
function museumCafeCurrentSlide(n) {
  museumCafeShowSlides(slideIndex = n);
}
function museumCafeShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("museumCafeSlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function galleryPlusSlides(n) {
  galleryShowSlides(slideIndex += n);
}
function galleryCurrentSlide(n) {
  galleryShowSlides(slideIndex = n);
}
function galleryShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("gallerySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function nearDramaPlusSlides(n) {
  nearDramaShowSlides(slideIndex += n);
}
function nearDramaCurrentSlide(n) {
  nearDramaShowSlides(slideIndex = n);
}
function nearDramaShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("nearDramaSlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function theatrePlusSlides(n) {
  theatreShowSlides(slideIndex += n);
}
function theatreCurrentSlide(n) {
  theatreShowSlides(slideIndex = n);
}
function theatreShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("theatreSlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}