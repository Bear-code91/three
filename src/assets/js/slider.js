import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

// styles
import "swiper/css";
import "swiper/css/navigation";

// init
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Autoplay],
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay
  autoplay: {
    delay: 3000,
  },
  // loop
  loop: true,
});
