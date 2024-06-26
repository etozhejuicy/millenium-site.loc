document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector(".preloader").style.setProperty("display", "block");
  document.documentElement.style.setProperty("display", "block");
});

// init jquery
import "./modules/jquery";

// init lazyloading
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

// primary
import "../scss/style.scss";
import "bootstrap";

// modules
import "./components/lang";
import "./components/preloader";
import "./modules/mask";
import "./modules/selectize";
import '../../js-modules/scroller';
