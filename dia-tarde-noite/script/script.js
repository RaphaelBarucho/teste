// document.addEventListener("DOMContentLoaded", function() {});
function dia_tarde_noite() {
  let paragrafo_horas = window.document.getElementById("paragrafo_horas");
  let img_img = window.document.getElementById("img-img");
  let paragrafo_saudacao = document.createElement("p");
  let div_paragrafo = window.document.getElementById("div-horas");
  let body = window.document.body;
  div_paragrafo.appendChild(paragrafo_saudacao);
  paragrafo_saudacao.id = "paragrafo-saudacao";
  let create_time = new Date();
  let horas = create_time.getHours();
  let minutes = create_time.getMinutes();
  let seconds = create_time.getSeconds();
  function horario() {
  let create_time = new Date();
  let horas = create_time.getHours();
  let minutes = create_time.getMinutes();
  let seconds = create_time.getSeconds();
  paragrafo_horas.textContent = `Agora são ${horas} horas, ${minutes} minutos e ${seconds} segundos.`;
}
setInterval(horario, 1000);
  if (horas >= 0 && horas < 6) {
    img_img.src = "./img/1.jpg";
    paragrafo_saudacao.textContent = "Boa Madrugada!";
    body.style.backgroundColor = "#f1f77e";
  } else if (horas >= 6 && horas < 12) {
    img_img.src = "./img/2.jpg";
    paragrafo_saudacao.textContent = "Bom Dia!";
    body.style.backgroundColor = "#7afffb";
  } else if (horas >= 12 && horas < 18) {
    img_img.src = "./img/3.jpg";
    paragrafo_saudacao.textContent = "Boa Tarde!";
    body.style.backgroundColor = "#fae166";
  } else if (horas >= 18) {
    img_img.src = "./img/4.jpg";
    paragrafo_saudacao.textContent = "Boa Noite!";
    body.style.backgroundColor = "#161c5e";
  }
}
