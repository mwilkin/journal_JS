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
      $('#titleh3').append(title);
      $('#solution').append("<li>words: " + words + "</li>");
      $('#solution').append("<li>vowels: " + letters[0] + "</li>");
      $('#solution').append("<li>consonants: " + letters[1] + "</li>");
      $('#teaser').append(teaser + "...");
  });
});
