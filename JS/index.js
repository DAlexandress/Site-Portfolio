function onClickScrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const boh = document.getElementById("boh-container");
  const bohHolo = document.getElementById("boh-holograma");
  const btnMais = document.getElementById("btn-mais");
  const feedPost = document.getElementById("feed-post");

  btnMais.addEventListener("click", () => {
    feedPost.classList.toggle("active");

    // Boh acelera + holograma some
    boh.classList.add("boh-hide");
    bohHolo.classList.add("boh-hide");
  });

  // fechar o feed clicando no fundo
  feedPost.addEventListener("click", (e) => {
    if (e.target === feedPost) {
      feedPost.classList.remove("active");
      boh.classList.remove("boh-hide");
      bohHolo.classList.remove("boh-hide");
    }
  });
});

function onClickLink(url) {
  window.open(url);
}

function redirectToWhatsApp() {
  const phoneNumber = "5521971543501";
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  window.open(whatsappURL);
}

function copyright() {
  const year = new Date().getFullYear();
  const footer = document.getElementById("footer-bottom");

  footer.innerHTML = `
    © ${year} por <a href="https://github.com/DAlexandress" target="_blank" rel="noreferrer">@DAlexandress
    </a>. Todos os direitos reservados.
    
    
  `;
}
document.addEventListener("DOMContentLoaded", copyright);
