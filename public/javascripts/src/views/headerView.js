define([
        'jquery',
        'underscore',
        'backbone',
        'marionette',
        'app'
    ],

    function ($, _, Backbone, Marionette, app) {

        'use strict';

        return Marionette.ItemView.extend({
            template : 'header',

            events : {
                'click a'  : 'linkClickHandler'
            },

            linkClickHandler: function(e) {
                e.preventDefault();
                var link = $(e.currentTarget).attr('href');
                app.router.navigate(link, {trigger:true});
            }
        });

    });
