define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'overrides'
],

function ($, _, Backbone, Marionette, overrides) {

  'use strict';

  overrides();

  return Marionette.Application;

});

