// Exercise 1
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]

function findWords(dog_string, dog_names) {
    for (let i = 0; i < dog_names.length; i++) {
        let re = new RegExp(dog_names[i], 'g')
        if (dog_string.match(re)) {
            return "Matched " + dog_names[i]
        }
    }
    return "No Matches"
}
console.log(findWords(dog_string, dog_names))

console.log("Hello World")



// Exercise 2 
arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr[i] = "Even Index"
        }
    }
    return arr
}

console.log(replaceEvens(arr))