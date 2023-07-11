const mainVisualPlayBtn = document.querySelector(".main-visual .btn-play");

const mainVisual = new Swiper(".main-visual .swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".banner-btn-next",
    prevEl: ".banner-btn-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function(index, className) {
      return `<button type="button" class="${className} banner-dot">
        <span class="blind">${index + 1}번 배너로 이동</span>
      </button>`;
    },
  },
});

mainVisualPlayBtn.addEventListener("click", (e) => {
  const _this = e.target;
  const state = _this.dataset.state;

  _this.classList.toggle("on");
  if(state === "play") {
    mainVisual.autoplay.stop();
    mainVisualPlayBtn.dataset.state = "pause";
  } else {
    mainVisual.autoplay.start();
    mainVisualPlayBtn.dataset.state = "play";
  }
});