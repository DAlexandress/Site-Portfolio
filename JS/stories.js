const projects = [
  {
    images: [
      "/assets/images/lenhero/Lenhero.png",
      "/assets/images/lenhero/Status.png",
      "/assets/images/lenhero/cssStatus.png",
      "organizacao-codigo1.png",
      "organizacão-codigo2.png",
    ],
    video: "/assets/videos/Lenhero SmokeHouse.mp4",
    link: "https://meuprojeto1.com",
  },
  {
    images: ["/assets/images/Wallat.jpg", "img2-projeto2.png"],
    video: "demo-projeto2.mp4",
    link: "https://meuprojeto2.com",
  },
  {
    images: ["/assets/images/MarkList.png", "img3-projeto3.png"],
    video: "demo-projeto3.mp4",
    link: "https://meuprojeto2.com",
  },
];

let currentProject = null;
let currentIndex = 0;

function openStory(index) {
  currentProject = projects[index];
  currentIndex = 0;
  document.getElementById("boh3-container").style.display = "none";
  document.getElementById("storyModal").style.display = "flex";
  playNext();
}
function playNext() {
  const img = document.getElementById("storyImage");
  const video = document.getElementById("storyVideo");
  const link = document.getElementById("storyLink");
  img.style.display = "none";
  video.style.display = "none";
  link.style.display = "none";
  if (currentIndex < currentProject.images.length) {
    img.src = currentProject.images[currentIndex];
    img.style.display = "block";
    currentIndex++;
    setTimeout(playNext, 2000);
  } else if (currentIndex === currentProject.images.length) {
    video.src = currentProject.video;
    video.style.display = "block";
    video.play();
    video.onended = playNext;
    currentIndex++;
  } else {
    link.href = currentProject.link;
    link.style.display = "inline-block";
  }
}
document.getElementById("storyModal").onclick = function (e) {
  if (e.target.id === "storyModal") {
    this.style.display = "none";
  }
};
