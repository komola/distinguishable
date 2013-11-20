distinguishable
===============

Create a string and parse a string to a standard set of chars

For order references it is important to now have any problems created by users misstyping information e.g. on a wiretransfer reference.
Thus I looked at the characters of a european keyboard and tried to find all possible misinterpretations of letters either alone or as groups.

These are my findings of similiar looking characters:

    o, O, Q, ö, Ö, 0
    i, I, l, L, |, j, J, ı, 1
    z, Z, 2
    a, A, 4
    s, S, 5
    B, 8

    g, q
    q, 9
    6, b
    e, f
    m, n
    u, v


    rn, m
    vv, w

The final result should in my opinion only consist of Capital Letters and Numbers. Thus the list of letters to create a random string is the following:

    CDEHKMPRSTUWXY012458

totaling 20 chars.

## Installation

    $ npm install distinguishable

## Usage

    var distinguishable = require('distinguishable');

Choose a different password length:

    console.log(distinguishable.create(12));
    // UXYYTHUMU8

Parse string:

    console.log(distinguishable.parse("UaILo0ö"));
    // U411000

## Running tests

    vows test/test.js

## TODO

See the [issue tracker](http://github.com/komola/distinguishable/issues).

## Author

Thomas Schaaf (schaaf@komola.de).
Development was sponsored by [komola](http://www.komola.de/).

## Thanks
Big thanks go to SDA Software Associates Inc. who created [passgen](https://github.com/SDA/passgen) and greatly inspired the structure.