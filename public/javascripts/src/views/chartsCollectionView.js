define([
        'jquery',
        'underscore',
        'backbone',
        'marionette',
        'src/views/chartItemView',
        'src/views/components/chartModalView'
    ],

    function ($, _, Backbone, Marionette, ChartItemView, ChartModalView) {

        'use strict';

        return Marionette.CollectionView.extend({
            initialize: function () {
                this.addListeners();
            },

            addListeners: function () {
                this.on("childview:chart:click", this.onChartItemClick);
            },

            onChartItemClick: function (chartView) {
                this.chartModalView = new ChartModalView({model:chartView.model});
                $('body').append(this.chartModalView.render().el);
            },

            childView: ChartItemView
        });

    });
