Array.prototype.uniq = function() {
    let final = []
    for ( let i = 0; i < this.length; i++) {
        if (!final.includes(this[i]))  {
            final.push(this[i]);
        }
    };
    return final
}

// console.log([1, 2, 3, 4, 4, 4].uniq());

Array.prototype.twoSum = function() {
    let final = [];
    for ( let i = 0; i < this.length; i++) {
        for ( let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                final.push([i, j])
            };
        };
    };
    return final
}

// console.log([-1, 0, 1].twoSum());


Array.prototype.transpose = function() {
    // let final = Array.
    matrix = new Array(this.length)
    
    for(let i = 0; i < this.length; i++) {
        matrix[i] = new Array(this.length);
    }

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length ; j++) {
            matrix[j][i] = this[i][j]
        }
    }

    return matrix
}

console.log([[1, 1, 1], 
             [2, 2, 2], 
             [3, 3, 3]].transpose())



















