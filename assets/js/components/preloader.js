var preloader = $(".preloader");

class Preloader {
  constructor() {
    this.events();
  }

  events() {
    this.init();
    $('body').addClass('preloader-is-active');
  }

  init() {
    if ($("preloader-is-active")) {
      setTimeout(() => {
        $("body").removeClass("preloader-is-active");
        setTimeout(() => {
          preloader.remove();
        }, 1000);
      }, 5000);
    }
  }
}

new Preloader();
