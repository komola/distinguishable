(function() {
    /*
     * Generate a random with custom alphabet.
     */

    function create(stringLength) {
        var result = '';

        alphabet = 'CDEHKMPRSTUWXY012458';
        var alphabetLength = alphabet.length;

        if ((stringLength === undefined) || isNaN(stringLength)) stringLength = 12;
        for (var i = 0; i < stringLength; i++) {
            var rnd = Math.floor(Math.random() * alphabetLength);
            result += alphabet[rnd];
        }

        return result;
    }

    function parse(string) {
        return string;
    }

    var distinguishable    = {};
    distinguishable.create = create;
    distinguishable.parse  = parse;

    module.exports = distinguishable;
})();