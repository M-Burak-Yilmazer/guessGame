//*Pc ye rastgele 1-20 arası sayı tutturduk.
const rastgeleSayi = Math.ceil(Math.random() * 20);
console.log(rastgeleSayi);

let message = document.querySelector(".msg");

let skor = 10;
//skoru index.html den cekilebilirdi ancak çok kullanılacağı için bu daha tercih edilen bir yol oldu.

let enYuksekSkor = 0;

//! her check butonuna basıldığında yapılacaklar

document.querySelector(".check").addEventListener("click", (e) => {
  const tahmin = document.querySelector(".guess").value;
  if (!tahmin) {
    message.textContent = "Lütfen bir sayı giriniz.";
  } else if (tahmin == rastgeleSayi) {
    message.textContent = "Tebrikler Bildiniz 👏";
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").textContent = tahmin;
  }
});
