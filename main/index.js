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


/*$(function() {
	var Border__bottom = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.rent__cards');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.rent__cards').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var border__bottom = new Border__bottom($('#border__bottom'), false);
}); */

document.getElementById("border__closeone").addEventListener("click", function() {
    document.getElementById("border__bottom").classList.add("close")
})

document.getElementById("border__close").addEventListener("click", function() {
    document.getElementById("border__open").classList.add("close")
})

document.getElementById("border__close").addEventListener("click", function() {
    document.getElementById("border__closeone").classList.add("open")
})


document.getElementById("border__open").addEventListener("click", function() {
    document.getElementById("border__bottom").classList.remove("close")
})

document.getElementById("border__open").addEventListener("click", function() {
    document.getElementById("border__close").classList.remove("open")
})

/*window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("border__bottom").classList.remove("close")
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("border__open").classList.remove("close")
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("border__closeone").classList.remove("open")
    }
});*/

