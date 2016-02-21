define([
  'jquery',
  'underscore',
  'backbone',
  'marionette'
],

function ($, _, Backbone, Marionette) {

  'use strict';

  return Marionette.LayoutView.extend({
    el : '[data-wrapper]',
    template : 'layout',
    regions : {
      headerRegion : '[data-header-region]',
      contentRegion : '[data-content-region]'
    }
  });

});
