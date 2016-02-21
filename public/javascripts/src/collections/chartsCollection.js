define([
        'jquery',
        'underscore',
        'backbone',
        'marionette',
        'app'
    ],

    function ($, _, Backbone, Marionette, app) {

        'use strict';

        return Backbone.Collection.extend({

            url : 'api/charts'

        });

    });
