var Backbone        = require('backbone');
var _               = require('underscore');
var $               = require('jquery');
var Platform        = require('platform');

var IntroView = Backbone.View.extend({
  initialize: function(options){
    $('html').addClass('platform-' + Platform.name.toLowerCase());
    this.appModel = options.appModel;
  }
});

module.exports = IntroView;
