var preloader = $("preloader");

class Preloader {
  constructor() {
    this.events();
  }

  events() {
    this.init();
  }

  init() {
    if ($("preloader-is-active")) {
      setTimeout(() => {
        $("body").removeClass("preloader-is-active");
        setTimeout(() => {
          this.removeObject();
        }, 1000);
      }, 5000);
    }
  }

  removeObject() {
    preloader.remove();
  }
}

new Preloader();
