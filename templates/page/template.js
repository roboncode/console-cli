module.component('{name}Page', {
    templateUrl: '{name}.page',
    controller: function ($stateParams, locale) {
        var ctrl = this;
        ctrl.locale = locale;
    }
});