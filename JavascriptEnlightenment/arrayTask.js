
function findElement(arr, index) {

    if (Array.isArray(arr) && index && ((index < arr.length) && (index>=0))) {
        return arr[index];
    }
    else {
        return null;
    }
}

module.exports = { findElement };