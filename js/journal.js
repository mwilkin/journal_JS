function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var count = 0;
  bodyArray = [];
  bodyArray = this.body.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");
  count = bodyArray.length;
  return count;
};

Entry.prototype.letterCount = function () {
  var vowelCount = 0;
  var consCount = 0;
  bodyArray = [];
  bodyArray = this.body.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"").split("");
  for (var i = 0; i < bodyArray.length; i++) {
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
