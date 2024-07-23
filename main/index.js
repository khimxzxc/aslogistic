document.getElementById("popup").addEventListener("click", function() {
    document.getElementById("menu").classList.add("ok")
})



window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("menu").classList.remove("ok")
    }
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("ok")
})

