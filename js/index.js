const onLoad = () => {
  //go to top functionality
  $("#go-to-top").click(function () {
    $("html, body").animate({ scrollTop: "0px" }, 300);
    return false;
  });

  //set copy write year
  const span = document.getElementById("year");
  span.innerText = new Date().getFullYear().toString();

  //hero swiper
  const heroSwiper = new Swiper(".hero-swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //pause autoplay on hover over title or button
  $(".hero-swiper-container .title, .hero-swiper-container .button").hover(
    function () {
      heroSwiper.autoplay.stop();
    },
    function () {
      heroSwiper.autoplay.start();
    }
  );

  //showcase swiper
  const showcaseSwiper = new Swiper(".show-swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //pause autoplay on hover over title or button
  $(".show-swiper-container .title, .show-swiper-container .button").hover(
    function () {
      showcaseSwiper.autoplay.stop();
    },
    function () {
      showcaseSwiper.autoplay.start();
    }
  );

  //cocktails swiper
  new Swiper(".cocktail-swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

window.onLoad = onLoad();

const showMore = () => {
  const dots = document.getElementById("dots"),
    moreText = document.getElementById("more-text"),
    readMoreIcon = document.getElementById("read-more-icon");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMoreIcon.src = "../assets/chevronDown.svg";
    readMoreIcon.alt = "chevron down";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    readMoreIcon.src = "../assets/blackChevronUp.svg";
    readMoreIcon.alt = "chevron up";
    moreText.style.display = "inline";
  }
};
