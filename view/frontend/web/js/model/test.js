define([
    'jquery',
    'ko',
    'uiComponent'
], function (
    $,
    ko,
    Component
) {

    return Component.extend({

        initialize: function () {
            this._super();
            this.sayHello = "Hello this is content populated with KO!";
        }

    });

});
