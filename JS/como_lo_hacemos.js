document.querySelectorAll(".tarjeta").forEach(tarjeta => {
    tarjeta.addEventListener("mouseenter", function () {
        let info = document.querySelector(".info-adicional");
        info.textContent = this.dataset.info;
        info.style.display = "block";
    });

    tarjeta.addEventListener("mouseleave", function () {
        document.querySelector(".info-adicional").style.display = "none";
    });
});
