var i=0;
var txt = 'GIPA student David Lomtatidze presents interactive project in digital narration (Multimedia) and Computer Art\
- at Rustaveli Avenue -\
Lecturers - Nino Japiashvili and David Makaridze \
Click to the video to go to the second page'

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewriter_text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 75);
        if (i == 109 | i == 132 | i == 181) {
          document.getElementById("typewriter_text").innerHTML += "<br></br>"
        }
      }
}

function redirect() {
  window.location = "map.html"
}