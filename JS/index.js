function onClickScrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const boh = document.getElementById("boh-container");
  const boh2 = document.getElementById("boh2-container");
  const boh3 = document.getElementById("boh3-container");
  const bohHolo = document.getElementById("boh-holograma");
  const btnMais = document.getElementById("btn-mais");
  const feedPost = document.getElementById("feed-post");
  const btnAmei = document.getElementById("btn-amei");
  const hoverLike = document.getElementById("hover-like");
  const confetti = document.getElementById("confetti");
  const overlay = document.getElementById("overlay");

  btnMais.addEventListener("click", () => {
    feedPost.classList.toggle("active");
    if (feedPost.classList.contains("active")) {
      document.body.classList.add("scroll-block");
      overlay.classList.add("active");
    }
    // Boh acelera + holograma some
    boh.classList.add("boh-hide");
    bohHolo.classList.add("boh-hide");

    BohToFeed();
  });

  function BohToFeed() {
    boh3.style.display = "block";
  }

  // fechar o feed clicando no fundo
  feedPost.addEventListener("click", (e) => {
    if (e.target === feedPost) {
      feedPost.classList.remove("active");
      document.body.classList.remove("scroll-block");
      boh.classList.remove("boh-hide");
      bohHolo.classList.remove("boh-hide");
      boh3.style.display = "none";
      overlay.classList.remove("active");
    }
  });

  btnAmei.addEventListener("click", () => {
    btnAmei.classList.toggle("wakeup");
  });

  let checkedLike = false;

  hoverLike.addEventListener("click", () => {
    checkedLike = !checkedLike;

    hoverLike.src = checkedLike
      ? "/assets/icons/heartSolid.png"
      : "/assets/icons/heartThin.png";

    if (checkedLike) {
      startBohCelebrate();
    }
  });

  function startBohCelebrate() {
    boh.style.display = "none";
    bohHolo.style.display = "none";

    boh2.style.display = "block";

    playConfetti();

    setTimeout(() => {
      boh.style.display = "block";
      bohHolo.style.display = "block";
      boh2.style.display = "none";
      confetti.style.display = "none";
    }, 2000);
  }

  let confettiAnim = null;

  function playConfetti() {
    const container = document.getElementById("confetti");

    if (confettiAnim) {
      confettiAnim.destroy();
    }

    container.style.display = "block";

    confettiAnim = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "/Confetti.json",
    });
    setTimeout(() => {
      container.style.display = "none";
    }, 2000);
  }
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
