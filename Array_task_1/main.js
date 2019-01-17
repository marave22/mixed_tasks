let a, b, c;

let arr = [a, b, c];
let main_arr = [];
let leng = arr.length;

for (let i = 0; i < leng; i++) {
    let new_arr = arr.reverse();
    for (let j = 0; j < leng*2; i++) {
        main_arr[j] = new_arr;
        if (!main_arr.every(x => x === new_arr)) {
            let hold = new_arr[i];
            new_arr[i] = new_arr[i + 1];
            new_arr[i + 1] = hold;
        }
    }
}

console.log(main_arr);