fs = require('fs')

function main() {
    fs.readFile('day 1/numbers.txt', 'utf8', function (err,data) {
        if (err)
            return console.log(err);
        let numbers = data.split("\r\n")

        for (let number1 of numbers) {
            for (let number2 of numbers) {
                for (let number3 of numbers) {
                    number1 = parseInt(number1)
                    number2 = parseInt(number2)
                    number3 = parseInt(number3)
                    if ((number1 + number2 + number3) == 2020) {
                        console.log(number1 + " | " + number2 + " | " + number3)
                        console.log(number1 * number2 * number3)
                    }
                }
            }
        }
    });
}

main();
