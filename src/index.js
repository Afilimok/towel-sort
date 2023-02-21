// You should implement your task here.

module.exports = function towelSort(matrix) {
    let newArr = [];
    let x = 0;
    if (matrix === undefined)
        return [];
    if (matrix === 0)
        return [];
    for (let i = 0; i < matrix.length; i++) {

        if (x % 2 === 0) {
            newArr = newArr.concat(matrix[i]);
        } else {
            newArr = newArr.concat(matrix[i].reverse());
        }
        x += 1;
    }


    return newArr;
}
