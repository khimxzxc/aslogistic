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

