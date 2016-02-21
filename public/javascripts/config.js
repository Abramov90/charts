require.config({
  'deps' : ['main'],
  'baseUrl' : 'javascripts',
  'paths' : {
    'libs' : '/assets/libs',
    'plugins' : '/assets/plugins',
    'underscore' : '/assets/libs/underscore',

    'jquery' : '/assets/libs/jquery',
    'backbone' : '/assets/libs/backbone',
    'marionette' : '/assets/libs/marionette',
    'backbone.stickit' : '/assets/plugins/backbone.stickit',
    'highcharts': '/assets/libs/highcharts'

   },

  'shim' : {
    'backbone' : {
      'deps' : ['underscore', 'jquery'],
      'exports' : 'Backbone'
    },
    'backbone.stickit' : ['backbone'],
    'underscore' : {
      'exports' : '_'
    },
    'highcharts': {
      'exports': 'Highcharts',
      deps: ['jquery']
    },
    'marionette' : ['backbone']
    }

});
