var TestWeb = window.TestWeb || (window.TestWeb = {});
//var $                   = require('jquery');
var global = {};
global.jQuery           = $;
window.$                = $;
//var _                   = require('underscore');
//var Backbone            = require('backbone');
Backbone.$ = $;
//var Platform            = require('platform');

var Models = {}

var Views = {
  Intro:                require('./views/intro.js')
};

var AppModel = new Backbone.Model();

TestWeb.Main = {
  init: function(){
    //$('html').addClass('platform-' + Platform.name.toLowerCase());
    console.log("Initialize");
  }
};
TestWeb.Main.init();
