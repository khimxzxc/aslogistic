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

