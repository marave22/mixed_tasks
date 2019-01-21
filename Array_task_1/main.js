let a, b, c;

let arr = [1, 2, 3];
let main_arr = [],new_arr;
let hold;
let leng = arr.length;

for (let i = 0; i < leng*2; i++) {
    if (i == leng) {
        let first = arr.shift();
        let second = arr.shift()
        arr.push(second);
        arr.push(first);
        console.log(first);
    }
    new_arr = arr.slice();
    for (let j = 0; j < leng-1; j++) {
        hold = arr[j];
        arr[j] = arr[j+1];
        arr[j +1] = hold;
    }
    main_arr[i] = new_arr;

}

console.log(main_arr);