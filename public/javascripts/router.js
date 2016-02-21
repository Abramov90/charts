define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'src/controllers/appCtrl'
],

function ($, _, Backbone, Marionette, AppCtrl) {

  'use strict';

  return  Marionette.AppRouter.extend({

    controller : new AppCtrl(),
    appRoutes : {
      '' : 'home',
      '/' : 'home',
      'readme' : 'readme'
    }

  });

});

