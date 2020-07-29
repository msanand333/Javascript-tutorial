function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('InnerVariable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');