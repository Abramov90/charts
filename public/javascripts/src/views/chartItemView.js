define([
        'jquery',
        'underscore',
        'backbone',
        'marionette'
    ],

    function ($, _, Backbone, Marionette) {

        'use strict';

        return Marionette.ItemView.extend({
            className: 'chart-list-item',
            template : 'chart-item',

            triggers: {
                'click': 'chart:click'
            },

            bindings: {
                '[data-name]' : 'name'
            },

            onRender: function () {
                this.stickit();
            }

        });

    });
