(function() {
  /*
   * Generate a random with custom alphabet.
   */

  function create(stringLength) {
    var result = '';

    alphabet = 'CDEHKMPRTUWXY012458';
    var alphabetLength = alphabet.length;

    if ((stringLength === undefined) || isNaN(stringLength)) stringLength = 12;
    for (var i = 0; i < stringLength; i++) {
      var rnd = Math.floor(Math.random() * alphabetLength);
      result += alphabet[rnd];
    }

    return result;
  }

  function parse(string, targetLength) {
      if(!targetLength)
      targetLength = -1;

    replacements = [
      {
        replace: ["v", "V"].join("|"),
        replaceWith: "U"
      },
      {
        replace: ["o", "O", "ö", "Ö"].join("|"),
        replaceWith: "0"
      },
      {
        replace: ["i", "I", "l", "L", "j", "J", "ı"].join("|"),
        replaceWith: "1"
      },
      {
        replace: ["z", "Z"].join("|"),
        replaceWith: "2"
      },
      {
        replace: ["a", "A", "ä", "Ä"].join("|"),
        replaceWith: "4"
      },
      {
        replace: ["s", "S"].join("|"),
        replaceWith: "5"
      },
      {
        replace: ["n", "N"].join("|"),
        replaceWith: "M"
      },
      {
        replace: ["ü", "Ü"].join("|"),
        replaceWith: "U"
      },

    ];

    for (replacement in replacements) {
      var re = new RegExp(replacements[replacement].replace, "g");
      string = string.replace(re, replacements[replacement].replaceWith);
    }


    return string.toUpperCase();
  }

  var distinguishable    = {};
  distinguishable.create = create;
  distinguishable.parse  = parse;

  module.exports = distinguishable;
})();
