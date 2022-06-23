let vowel =["a", "e", "i" , "o", "u"];


function unluSay(string) {
    let count = 0;

    for (let i of string.toLowerCase()) {
        if(vowel.includes(i)) {
            count += 1
        }
    }
    return count;
}

let input = prompt("Bir cümle giriniz: ");

console.log(unluSay(input)); 

