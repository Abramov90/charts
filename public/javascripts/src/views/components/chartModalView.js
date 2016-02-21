define([
        'jquery',
        'underscore',
        'backbone',
        'marionette',
        'highcharts'
    ],

    function ($, _, Backbone, Marionette) {

        'use strict';

        return Marionette.ItemView.extend({
            className: 'chart-overlay',
            template : 'chart-modal',
            chartContainer: '.chart-container',

            events: {
                'click [data-close]' : 'modalCloseClickHandler'
            },

            bindings: {
                '[data-name]' : 'head'
            },

            initialize: function() {
                this.chartData = this.model.get('chartData');
                this.model.set('head', this.chartData.title.text);
            },

            modalCloseClickHandler: function () {
                var _this = this;
                this.$el.fadeOut(450, function () {
                    _this.remove();
                })
            },

            onRender: function () {
                var _this = this;
                _this.stickit();
                _this.$el.fadeIn(450);
                this.$(this.chartContainer).highcharts(this.chartData);
            }
        });

    });
