var icon = $('[language-icon]'),
    list = $('[language-list]'),
    item = list.find('input[name="language"]');

class Lang {
    constructor() {
        this.events();
    }

    events() {
        item.on('change', (e) => {
            this.changeLanguage(e);
        });
    }

    changeLanguage(e) {
        if ($(e.currentTarget).attr('id') == 'rus_lang') {
            icon.removeAttr('src')
            icon.attr('src', '/images/lang/rus.svg');
        } else {
            icon.removeAttr('src')
            icon.attr('src', '/images/lang/eng.svg');
        }
    }
}

new Lang();