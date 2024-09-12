function onClickScrollTo(id) {
  document.getElementById(id).scrollIntoView();
}

function onClickLink(url) {
  window.open(url);
}

function redirectToWhatsApp() {
  const phoneNumber = "5521971543501"; // Coloque o número de telefone aqui no formato internacional
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  window.open(whatsappURL);
}
