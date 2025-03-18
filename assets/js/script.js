// Tüm butonları seç
const buttons = document.querySelectorAll(".buttons button");

// Klavyeden veya butona tıklayarak ses çalma fonksiyonu
function playSound(key) {
    let audio = document.getElementById(`${key}-sound`); // İlgili ses dosyasını seç
    let button = document.getElementById(key); // İlgili butonu seç

    if (audio) {
        audio.currentTime = 0; // Sesin en baştan başlamasını sağla
        audio.play(); // Sesi çal

        // Animasyon efekti ekle
        button.classList.add("active");
        setTimeout(() => button.classList.remove("active"), 200);
    }
}

// Butonlara tıklanınca ilgili sesi oynat
buttons.forEach(button => {
    button.addEventListener("click", function () {
        playSound(this.id);
    });
});

// Klavyeden basılan tuşu dinle ve ilgili sesi çal
document.addEventListener("keydown", function (event) {
    let key = event.key.toUpperCase(); // Harfi büyük harfe çevir
    playSound(key);
});
