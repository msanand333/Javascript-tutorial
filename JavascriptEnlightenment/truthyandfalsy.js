/**
 In Javascript a TRUTHY value is a value that is considered as true when evaluated in a BBOOLEAN context
 i.e it will to translate to true and execute the if block.
 **/

//TRUTHY VALUES

function truthyandfalsy(value) {
    if (value) {
        // console.log('TRUTHY');
        return true;

    } else {
        // console.log('FALSEY')
        return false;

    }
}

// /* TRUTHY VALUES */
// truthsyandfalsy(true);
// truthsyandfalsy({});
// truthsyandfalsy([]);
// truthsyandfalsy(42);
// truthsyandfalsy('FOO');
// truthsyandfalsy(new Date());
// truthsyandfalsy(-42);
// truthsyandfalsy(3.14);
// truthsyandfalsy(-3.14);
// truthsyandfalsy(Infinity);
// truthsyandfalsy(-Infinity);

// /* FALSEY VALUES */
// truthsyandfalsy(false)
// truthsyandfalsy(null)
// truthsyandfalsy(undefined)
// truthsyandfalsy(0)
// truthsyandfalsy(-0)
// truthsyandfalsy(0n)
// truthsyandfalsy(NaN)
// truthsyandfalsy("")


module.exports = { truthyandfalsy };


