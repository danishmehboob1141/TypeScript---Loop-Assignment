let randomNumber: number = Math.floor(Math.random()*10)
let maximumValue: number = 10
let guesses: number[] = [3,6,4]
let count=0
while (count < guesses.length) {
    if (guesses[count] == randomNumber) {
        console.log("Congratulations! You guessed correct number.")
    } else {
        console.log("Wrong Guess! Try Again ...")
        if (randomNumber > guesses[count]) {
            console.log("Your guess is " + (randomNumber-guesses[count]) + " numbers Low")
        } else {
            console.log("Your guess is " + (guesses[count]-randomNumber) + " numbers High")
        }
    }
    count ++
    console.log()
}
