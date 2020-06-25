$(document).ready(function () {
  const particlesJSON = {
    "particles": {
      "number": {
        "value": 336,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "top",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
 
  particlesJS("particles-js", particlesJSON);
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
 
  function startTimeSalam() {
    var ucapanSalam = "";
    var todaySalam = new Date();
    var hSalam = todaySalam.getHours();
    var mSalam = todaySalam.getMinutes();
    var sSalam = todaySalam.getSeconds();
    mSalam = checkTime(mSalam);
    sSalam = checkTime(sSalam);
    if (hSalam < 4) {
      ucapanSalam = "Hallo Sayangg" <i class='fa fa-heart'></i>";
      kata1 = "Semangat ya kuliahnya disana";
      kata2 = "Jangan nakal inget sama esa ya jangan cari yang lain :D
    } else {
      if (hSalam < 11) {
        ucapanSalam = "Pagi bebb" <i class='fa fa-heart'></i>";
        kata1 = "Jangan lupa sarapan sebelum berangkat";
        kata2 = "Hatihati dijalannya ya sayangg
      } else {
        if (hSalam < 16) {
          ucapanSalam = "Siang bebb" <i class='fa fa-heart'></i>";
          kata1 = "Jangan lupa makan siang jangan terlalu cape ya banyakin istirahat";
          kata2 = "esa sayang banget ke adis
        } else {
          if (hSalam < 20) {
            ucapanSalam = "Sore Sayangg" <i class='fa fa-heart'></i>";
            kata1 = "Jangan lupa mandi haha biasa di clk mandi jam 5 ya";
            kata2 = "Buruan mandi ya biar makin gemseshh, lv u bebb <i class='fa fa-heart'></i>";
          } else {
              ucapanSalam = "Malem bebb"
              kata1 = "mimpi indah ya sayang tidur yang nyenyak";
              kata2 = "esa sayang banget ke adis,jangan tinggalin esa yaa <i class='fa fa-heart'></i>";
              kata3 = "cepet pulang ya sayang kesini"
          }
        }
      }
    }
    // $(".salam").html(ucapanSalam);
    var typed = new Typed('h3', {
      strings: [ucapanSalam, kata1, kata2],
      smartBackspace: true,
      showCursor: 0,
      typeSpeed: 50,
    });
  }
 
  window.onload = startTimeSalam();
})
