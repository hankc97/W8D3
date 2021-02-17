Array.prototype.myEach = function(callback) {


    for(let i = 0; i < this.length; i++){
        callback(this[i])
    }

}
// const n = [1,2,3]



// console.log(n.myEach((j)=>{ 

//     console.log(j + 2 )

// }))


Array.prototype.myMap = function(callback){
    new_arr = []
    for (let i = 0; i < this.length; i++){
        new_arr.push(callback(this[i]))
    }
    return new_arr
}


// const n = [1,2,3]



// console.log(n.myMap((j)=>{ 
//     return j + 2

// }))

const n = [1, 2, 3]

console.log(n.reduce(reducer, 5))