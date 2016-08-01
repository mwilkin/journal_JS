(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var count = 0;
  bodyArray = [];
  bodyArray = this.body.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");
  console.log(bodyArray);
  count = bodyArray.length;
  return count;
};

Entry.prototype.letterCount = function () {
  var vowelCount = 0;
  var consCount = 0;
  bodyArray = [];
  bodyArray = this.body.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"").split("");
  for (var i = 0; i<bodyArray.length; i++) {
    if (bodyArray[i] == "a" || bodyArray[i] == "e" || bodyArray[i] == "i" || bodyArray[i] == "o" || bodyArray[i] == "u" || bodyArray[i] == "y") {
      vowelCount += 1;
    } else {
      consCount += 1;
    }
  }

  return [vowelCount,consCount];
};

Entry.prototype.getTeaser = function() {
  return this.body.split(/\s+/).slice(0,8).join(" ");
};

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $ ('#body').val();
    var entry1 = new Entry(title, body);
    var words = entry1.wordCount();
    var letters = entry1.letterCount();
    var teaser = entry1.getTeaser();
      $('#solution').append("<li>words: " + words + "</li>");
      $('#solution').append("<li>vowels: " + letters[0] + "</li>");
      $('#solution').append("<li>consonants: " + letters[1] + "</li>");
      $('#teaser').append(teaser + "...");
  });
});

},{"./../js/journal.js":1}]},{},[2]);
