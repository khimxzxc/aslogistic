/*pop up*/
document.getElementById("popup").addEventListener("click", function() {
    document.getElementById("menu").classList.add("ok")
    document.body.classList.add("no-scroll");
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("menu").classList.remove("ok")
    }
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("ok")
    document.body.classList.remove("no-scroll");
})





document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-class', {
        // Optional parameters
		direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-prevClass',
            prevEl: '.swiper-button-nextClass',
        },
    });
});




  /* 2gis map*/

  /* document.addEventListener("DOMContentLoaded", function() {
	// Инициализация карты
	var map = DG.map('map', {
		center: [52.307193, 76.943669], 
		zoom: 17 
	});

}); */

DG.then(function () {
    var map = DG.map('map', {
        center: [52.306925, 76.941093],
        zoom: 17,
		scrollWheelZoom: false
		
    });

    var markers = [
        { coords: [52.308305, 76.94306], icon: 'image/icons/logomarker.svg', id: 'marker1' },
        { coords: [52.30628, 76.940983], icon: 'image/icons/logomarker.svg', id: 'marker1'  },
        
    ];

    markers.forEach(function(marker) {
        DG.marker(marker.coords, {
            icon: DG.icon({
                iconUrl: marker.icon,
                iconSize: [35, 35]
            })
        }).addTo(map);
    });
	

	var markerElement = document.querySelector('.marker-icon');

	// Удаляем фильтр у маркера
	if (markerElement) {
		markerElement.style.removeProperty('filter'); // Удаляет стиль filter
	}
});


/*according */
document.addEventListener("DOMContentLoaded", function () {
	const accordions = document.querySelectorAll(".accordion");
  
	accordions.forEach(accordion => {
	  const accordionHeader = accordion.querySelector(".accordion__header");
	  const accordionContent = accordion.querySelector(".accordion__content");
	  const toggleText = accordion.querySelector(".accordion__toggle-text");
	  const toggleClose = accordion.querySelector(".accordion__toggle-close");
	  const toggleIcon = accordion.querySelector(".accordion__toggle-icon");
  
	  accordionHeader.addEventListener("click", function () {
		const isActive = accordionContent.classList.contains("active");
  
		// Закрытие всех аккордеонов, если требуется
		accordions.forEach(acc => {
		  const content = acc.querySelector(".accordion__content");
		  const icon = acc.querySelector(".accordion__toggle-icon");
		  const textOpen = acc.querySelector(".accordion__toggle-text");
		  const textClose = acc.querySelector(".accordion__toggle-close");
  
		  if (content !== accordionContent) {
			content.classList.remove("active");
			textOpen.style.display = "none";
			textClose.style.display = "inline";
			icon.classList.remove("rotate");
		  }
		});
  
		// Переключение текущего аккордеона
		if (isActive) {
		  accordionContent.classList.remove("active");
		  toggleText.style.display = "none";
		  toggleClose.style.display = "inline";
		  toggleIcon.classList.remove("rotate");
		} else {
		  accordionContent.classList.add("active");
		  toggleText.style.display = "inline";
		  toggleClose.style.display = "none";
		  toggleIcon.classList.add("rotate");
		}
	  });
	});
  });
  

/*according icon animation */
  document.querySelectorAll('.accordion__toggle').forEach(button => {
	button.addEventListener('click', () => {
	  const content = button.closest('.accordion').querySelector('.accordion__content');
	  const icon = button.querySelector('.accordion__toggle-icon');
	  
	  content.classList.toggle('open');
	  icon.classList.toggle('rotate');
  
	  const textOpen = button.querySelector('.accordion__toggle-text');
	  const textClose = button.querySelector('.accordion__toggle-close');
  
	  if (content.classList.contains('open')) {
		textOpen.classList.add('open');
		textClose.classList.add('close');
	  } else {
		textOpen.classList.remove('open');
		textClose.classList.remove('close');
	  }
	});
  });

/* swipper slider */











	//map no 2gis
 /*  // Создаем карту и устанавливаем начальные координаты и зум
   var map = L.map('map').setView([52.307193, 76.943669], 16);

   // Добавляем слой карты из OpenStreetMap
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	   attribution: '&copy; OpenStreetMap contributors'
   }).addTo(map);

   var customIcon = L.icon({
	iconUrl: 'image/icons/myhostelicon.png', // Путь к иконке
	iconSize: [50, 50], // Размер иконки
	iconAnchor: [16, 32], // Точка, которая будет размещена в положении маркера
	popupAnchor: [0, -32] // Точка, которая будет размещена в положении всплывающего окна
});


var customSvg = L.divIcon({
	className: 'custom-svg-icon',
	html: `<svg  viewBox="0 0 65 72">
<path d="M2.33905 55.9035L25.9271 69.5012L25.9203 60.0935L8.37248 49.9793L8.37999 26.9019L14.6436 30.5063L31.6866 20.673C31.9859 20.5226 32.3241 20.4375 32.682 20.4375C32.9908 20.4375 33.285 20.5008 33.5523 20.6148L40.0389 24.4083L47.2142 20.1745L33.6934 12.3765L33.6832 12.3769C33.3083 12.1587 32.8727 12.0337 32.4078 12.0337C31.956 12.0337 31.5319 12.1517 31.1642 12.3586L31.1625 12.3585L14.6398 21.7955L3.79663 15.5418L3.79637 15.542C3.42599 15.3309 2.99735 15.2102 2.5404 15.2102C1.13745 15.2102 0 16.3475 0 17.7506C0 17.8258 0.00338351 17.9002 0.00989895 17.9739L0.00739668 51.8953C0.00351248 51.9693 0.00150503 52.0439 0.00150503 52.1191C0.00150503 53.7751 0.953011 55.2088 2.33905 55.9035Z" fill="url(#paint0_linear_2107_175)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.4325 67.8115L28.4238 67.8073L28.4171 59.0136L10.2275 48.523L10.2207 30.5194L17.9227 34.9454L17.926 43.2097C17.9736 43.8894 18.1678 44.3547 18.7547 44.8233L35.1396 54.2727L35.1429 54.279C35.6873 54.5805 36.0561 55.1606 36.0561 55.8269C36.0561 55.8907 36.0527 55.9536 36.0462 56.0156L36.0564 61.5806L55.0413 50.632C55.6272 50.1422 55.7932 49.6478 55.8202 48.9001L55.8241 48.907V29.1746L63.9155 24.5122V51.9699C63.9186 52.0367 63.9204 52.1038 63.9204 52.1713C63.9204 53.7172 63.091 55.0693 61.8533 55.8075L61.853 55.8084L61.808 55.8344L61.7851 55.8476L35.0289 71.2774C34.3535 71.7336 33.5395 72 32.6631 72C30.3405 72 28.4553 70.1287 28.4325 67.8115Z" fill="url(#paint1_linear_2107_175)"/>
<path d="M37.9931 49.0617L38.0168 57.7093L53.8148 48.612L53.8111 27.7434L63.6062 22.0845L63.604 22.0747C64.309 21.6233 64.7764 20.8331 64.7764 19.934C64.7764 19.0025 64.2749 18.1882 63.5274 17.7461L63.5278 17.7436L34.1613 0.807407C33.4633 0.299578 32.6042 0 31.675 0C30.9507 0 30.2691 0.182177 29.6729 0.502938L29.6708 0.502558L5.96484 14.1446L14.7137 19.1911L31.3782 9.5802L31.3691 9.58982C31.6989 9.39561 32.0835 9.28385 32.4939 9.28385C32.9011 9.28385 33.283 9.39385 33.6111 9.58543L33.6031 9.57234L51.9644 20.1906L45.9192 23.6767L45.8818 43.2352C45.8541 44.0073 45.6777 44.509 45.0442 45.0148L37.9931 49.0617Z" fill="url(#paint2_linear_2107_175)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.396 31.2119L32.7917 27.9764L32.7419 27.9401C32.6743 27.8912 32.6005 27.8526 32.5234 27.8277C32.4542 27.8052 32.3732 27.793 32.2826 27.793C32.2104 27.793 32.1442 27.801 32.0854 27.8158C32.022 27.8317 31.9664 27.8522 31.9209 27.8758L31.9224 27.8785L31.8773 27.9039L31.8758 27.9011L31.8495 27.919L26.1464 31.2118L32.2711 34.7478L38.396 31.2119Z" fill="#1F6DFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.8395 44.3047L30.8398 37.2291L24.7188 33.6953V39.9962L24.7345 40.0439L24.731 40.3293H24.7364C24.7364 40.4833 24.778 40.6237 24.8498 40.7391C24.928 40.8651 25.0391 40.9673 25.1688 41.0313L30.8395 44.3047Z" fill="#00AD88"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.8241 33.6953L33.7034 37.2291L33.7031 44.3047L39.4241 41.002L39.4297 40.9964C39.548 40.9295 39.6493 40.8278 39.7219 40.7035C39.7879 40.5903 39.826 40.4565 39.826 40.3128H39.8314L39.8296 40.2646L39.8241 40.2253V33.6953Z" fill="#F6852F"/>
</svg>
`,
iconSize: [35, 35], // Установите размер иконки в соответствии с вашими требованиями
iconAnchor: [65, 25], // Точка, которая будет размещена в позиции маркера
popupAnchor: [-15, -10] // Точка, которая будет размещена в позиции всплывающего окна
});



   // Добавляем маркер на карту
   L.marker([52.308305, 76.94306], { icon: customSvg }).addTo(map)
	   .bindPopup('AS Logistic 7/7')
	   .openPopup();


	   L.marker([52.306652, 76.94101], { icon: customIcon }).addTo(map)
	   .bindPopup('My Hostel 11/6')
	   .openPopup();

*/

/*const swiper = new Swiper('.swiperclass', {
	// Optional parameters
	direction: 'vertical',
	loop: true,
  
	
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-nextClass',
	  prevEl: '.swiper-button-prevClass',
	},
  
	// And if we need scrollbar
	
  });*/


