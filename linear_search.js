const arr = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

function linearSearch(array, item) {
     for (let i = 0; i < array.length; i++) {
       count += 1;
       
        if(arr[i] === item) {
            return i;
        }
     }
     return null;
}

console.log(linearSearch(arr, 8));
console.log(count);

// O(n)