import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import JustValidate from "just-validate";

import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../sass/style.scss";

const menu = document.querySelector(".header__menu");

document.querySelector(".burger").addEventListener("click", (e) => {
  menu.classList.add("header__menu-active");
  document.body.style.overflow = "hidden";
});

document.querySelector(".header__menu-close").addEventListener("click", () => {
  menu.classList.remove("header__menu-active");
  document.body.style.overflow = "";
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  //сколько слайдов будет показываться на самой первой версии(mobile first)
  loop: true,
  // зацикливание слайдера
  pagination: {
    // пагинация (точки для переключения слайдов)
    el: ".swiper-pagination",
    // какой элемент будет отвечать за переключение
    clickable: true,
  },
  navigation: {
    // навигация (переключение стрелками)
    nextEl: ".icon-right",
    // кнопка отвечающая за переключение вперед
    prevEl: ".icon-left",
    // кнопка отвечающая за переключение назад
  },
  breakpoints: {
    // брейкпоинты
    1200: {
      slidesPerView: 3,
      //   сколько слайдов показывать когда экран > 1120
      spaceBetween: 5,
      //   какое расстояние между слайдами
    },
    1920: {
      spaceBetween: 35,
    },
  },
  modules: [Navigation, Pagination],
});

const tabs = document.querySelectorAll(".catalog__tab"),
  content = document.querySelectorAll(".catalog__content-item");

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("catalog__tab-active"));
    content.forEach((c) => (c.style.display = "none"));

    tab.classList.add("catalog__tab-active");
    content[i].style.display = "flex";
  });
});

content.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));

const totalData = {
  jackets: 5,
  hats: "empty",
  socks: "empty",
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: "empty",
  mixers: 14,
  deficit: true,
  date: new Date(),
};

function printReport(data) {
  let arr = Object.entries(data)
    .filter((data) => data.includes("empty"))
    .map((val) => val[0])
    .join(", ");
  console.log(`We need this items: ${arr}`);

  // return `We need this items: ${"..."}`;
  // // или
  // return "Everything fine";
}

printReport(totalData);

const validator = new JustValidate(".touch__form", {
  submitFormAutomatically: true,
});
validator
  .addField(document.querySelector("#name"), [
    {
      rule: "required",
      errorMessage: "Please fill the name",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Min 2 char",
    },
  ])
  .addField(document.querySelector("#email"), [
    {
      rule: "required",
    },
    {
      rule: "email",
    },
  ])
  .addField(
    document.querySelector("#question"),
    [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 5,
      },
    ],
    {
      errorsContainer: document
        .querySelector("#question")
        .parentElement.querySelector(".error-message"),
    }
  )
  .addField(
    document.querySelector("#checkbox"),
    [
      {
        rule: "required",
      },
    ],
    {
      errorsContainer: document
        .querySelector("#checkbox")
        .parentElement.parentElement.querySelector(".checkbox-error-message"),
    }
  );

const footerValidator = new JustValidate(".footer__form", {
  submitFormAutomatically: true,
});

footerValidator
  .addField(
    document.querySelector(".footer__input-mail"),
    [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ],
    {
      errorsContainer: document
        .querySelector(".footer__form")
        .parentElement.querySelector(".footer-error-mail"),
    }
  )
  .addField(
    document.querySelector(".footer__checkbox"),
    [
      {
        rule: "required",
      },
    ],
    {
      errorsContainer: document
        .querySelector(".footer__form")
        .parentElement.querySelector(".footer-error-checkbox"),
    }
  );
