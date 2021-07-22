function guessingGame() {
    const num = Math.floor(Math.random() * 100);
    let count = 0;
    let won = false;
    return (guess) => {
        if(won) return 'The game is over, you already won!'
        count++;
        if (guess === num) {
            won = true;
            return `You win! You found ${num} in ${count} guesses.`;
        }
        if(guess < num) return `${guess} is too low!`;
        if(guess > num) return `${guess} is too high!`
    }
}

module.exports = { guessingGame };
