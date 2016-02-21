define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'src/views/layout',
        'src/collections/chartsCollection',
    'src/views/headerView',
        'src/views/readmeView',
    'src/views/chartsCollectionView'
],

function ($, _, Backbone, Marionette, app, Layout, ChartsCollection, HeaderView, ReadmeView, ChartsCollectionView) {

    'use strict';

    return Marionette.Controller.extend({

        initialize : function () {
            _.bindAll(this, 'showChartsView');
            this.initLayout();
            this.renderStaticComponent();
        },


        initLayout : function () {
            this.layout = new Layout();
            this.layout.render();
        },


        renderStaticComponent : function () {
            this.headerView = new HeaderView();
            this.layout.headerRegion.show(this.headerView);
        },

        home : function () {
            this.chartsCollection = new ChartsCollection();
            this.chartsCollectionView = new ChartsCollectionView({collection:this.chartsCollection});
            this.chartsCollection.fetch().done(this.showChartsView);
        },

        showChartsView: function () {
            this.layout.contentRegion.show(this.chartsCollectionView);
        },

        readme : function () {
            var readmeView = new ReadmeView();
            this.layout.contentRegion.show(readmeView);
        }


    });

});
