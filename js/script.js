function getCurrentDateTime() {
var currentDate = new Date(); // Получаем текущую дату и время
var options = { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' };
var dateTimeString = currentDate.toLocaleString('ru-RU', options); // Создаем текстовое представление

document.getElementById("currentDateTime").innerHTML = dateTimeString; // Обновляем HTML элемент
}
// можно было сделать короче, но при более коротком коде периодически не срабатывало перетаскивание, поэтому решил перестраховаться
$(function(){
	$('#element1').draggable({
		containment: '.mainbody'
	});
});
$(function(){
	$('#element2').draggable({
		containment: '.mainbody'
	});
});
$(function(){
	$('#element3').draggable({
		containment: '.mainbody'
	});
});
$(function(){
	$('#element4').draggable({
		containment: '.mainbody'
	});
});
$(function(){
	$('#element5').draggable({
		containment: '.mainbody'
	});
});

// выбор слоя

$(document).ready(function() {
  $('div[id^="element"]').on('mousedown', function() {
    $(this).addClass('selected').siblings().removeClass('selected');
    bringToFront($(this));
  });

  function bringToFront(element) {
    let highestIndex = 0;
    $('div[id^="element"]').each(function() {
      let currentIndex = parseInt($(this).css('z-index'), 10);
      if (currentIndex > highestIndex) {
        highestIndex = currentIndex;
      }
    });
    element.css('z-index', highestIndex + 1);
  }

  $('div[id^="element"]').draggable();
});

// эффекты при нажатии на слои

function getRandomEffect() {
  var effects = ['jello', 'wobble', 'tada', 'swing', 'bounceIn', 'headShake'];
  var randomIndex = Math.floor(Math.random() * effects.length);
  return effects[randomIndex];
}

function applyRandomEffect(element) {
  var effect = getRandomEffect();
  element.addClass('animate__animated animate__' + effect);
  setTimeout(function() {
    element.removeClass('animate__animated animate__' + effect);
  }, 1000);
}

$(document).ready(function() {
  $('#element1, #element2, #element3, #element4, #element5').each(function() {
    $(this).draggable({
      start: function(event, ui) {
        $(this).addClass('selected').siblings().removeClass('selected');
        applyRandomEffect($(this));
      }
    });
  });

  $('#element1, #element2, #element3, #element4, #element5').click(function() {
    var element = $(this);
    applyRandomEffect(element);
  });

  $('#element1, #element2, #element3, #element4, #element5').css('opacity', 0);

  setTimeout(function() {
    $('#element1, #element2, #element3, #element4, #element5').css('opacity', 1);
    $('#element1').addClass('animate__animated animate__fadeInUp');
    setTimeout(function() {
      $('#element1').removeClass('animate__animated animate__fadeInUp');
    }, 1000);
    $('#element2').addClass('animate__animated animate__fadeInUp');
    setTimeout(function() {
      $('#element2').removeClass('animate__animated animate__fadeInUp');
    }, 1000);
    $('#element3').addClass('animate__animated animate__fadeInUp');
    setTimeout(function() {
      $('#element3').removeClass('animate__animated animate__fadeInUp');
    }, 1000);
    $('#element4').addClass('animate__animated animate__fadeInUp');
    setTimeout(function() {
      $('#element4').removeClass('animate__animated animate__fadeInUp');
    }, 1000);
    $('#element5').addClass('animate__animated animate__fadeInUp');
    setTimeout(function() {
      $('#element5').removeClass('animate__animated animate__fadeInUp');
    }, 1000);
  }, 500);
});

// $(document).ready(function() {
//   $('#element1, #element2, #element3, #element4, #element5').each(function() {
//     $(this).resizable({
//       aspectRatio: true,
//       handles: 'ne, nw, se, sw',
//       start: function(event, ui) {
//         $(this).addClass('selected').siblings().removeClass('selected');
//       }
//     });
//   });
// });

// чтобы избежать случайных нажатий на ссылки

$(document).ready(function() {
  let linkClicked = false;

  $('#myLink').on('click', function(e) {
    if (!linkClicked) {
      e.preventDefault();
      linkClicked = true;
      setTimeout(function() {
        window.location.href = $('#myLink').attr('href');
      }, 500); 
    }
  });
});

$(function(){
	$('#element6').draggable({
		containment: '.mainbody'
	});
});
  
// Хотел сделать небольшой тильт эффект, но подумал, что будет слишком
const tilt = document.querySelectorAll(".tilt");

VanillaTilt.init(tilt, {

	max: 2,
	speed: 100,
  axis: "x",
	glare: true,
	perspective: 1000,
	transition: true,
	"max-glare": 0.45,
	"glare-prerender": false,
	gyroscope: true,
	gyroscopeMinAngleX: -45,
	gyroscopeMaxAngleX: 45,
	gyroscopeMinAngleY: -45,
	gyroscopeMaxAngleY: 45
});