//*Pc ye rastgele 1-20 arası sayı tutturduk.
let rastgeleSayi = Math.ceil(Math.random() * 20);
console.log(rastgeleSayi);

let message = document.querySelector(".msg");

let skor = 10;
let enYuksekSkor = localStorage.getItem("top-score") || 0;
document.querySelector(".top-score").textContent = enYuksekSkor;

//skoru index.html den cekilebilirdi ancak çok kullanılacağı için bu daha tercih edilen bir yol oldu.

//! her check butonuna basıldığında yapılacaklar

document.querySelector(".check").addEventListener("click", (e) => {
  const tahmin = document.querySelector(".guess").value;
  if (!tahmin) {
    message.textContent = "Lütfen bir sayı giriniz.";
  } else if (tahmin == rastgeleSayi) {
    message.textContent = "Tebrikler Bildiniz 👏";
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").textContent = tahmin;
    document.querySelector(".guess").disabled = "true";
    //*top score kontrolü

    if (skor > enYuksekSkor) {
      localStorage.setItem("top-score", skor);
      enYuksekSkor = skor;
      document.querySelector(".top-score").textContent = enYuksekSkor;
    }
  } else {
    //!skor 1 den büyük olduğu sürece tahmin hakkım var.
    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;
      tahmin < rastgeleSayi
        ? (message.textContent = "Arttır👆")
        : (message.textContent = "Azalt👎");
    } else {
      message.textContent = "GAME OVER 🥹";
      document.querySelector(".score").textContent = 0;

      document.body.style.backgroundColor = "red";
    }
  }
});

//!again tuşuna basıldığında ayarlar başlangıç değerlerine geçsin

document.querySelector(".again").onclick = () => {
  document.querySelector("body").style.backgroundColor = "#2d3436";
  rastgeleSayi = Math.ceil(Math.random() * 20);
  console.log(rastgeleSayi);
  skor = 10;
  document.querySelector(".score").textContent = skor;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").disabled = "";
  message.textContent = "Oyun yeni oyuncu için başliyor";
  document.querySelector(".guess").focus();
};

//! enter keydown
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.querySelector(".check").click();
  }
});
//! Geçersiz sayı girdiniz  1 ile 20 arasında bir sayı girin"
document.querySelector(".check").addEventListener("click", () => {
  let tahmin = document.querySelector(".guess").value;

  const tahminSayi = parseInt(tahmin);

  if (tahminSayi >= 1 && tahminSayi <= 20 && !isNaN(tahminSayi)) {
    //Doğru sayı girilmişse onu devam ettir
  } else {
    message.textContent =
      "Geçersiz sayı girdiniz (1 ile 20 arasında bir sayı girin) ";
    skor++;
  }
});
