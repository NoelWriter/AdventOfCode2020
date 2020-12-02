const fs = require("fs")

function puzzle1() {
    fs.readFile('day 2/passwords.txt', 'utf8', function (err,data) {
        if (err)
            return console.log(err);

        let lines = data.split("\r\n")
        let correctPass = 0;

        for (let line of lines) {
            if (line === lines.slice(-1)[0])
                break

            let lineInfo = line.split(" ")
            let sectionAmount = lineInfo[0]
            let sectionMin = lineInfo[0].split("-")[0]
            let sectionMax = lineInfo[0].split("-")[1]
            let sectionChar = lineInfo[1][0]
            let sectionPass = lineInfo[2]

            console.log(sectionAmount + " | " + sectionChar + " | " + sectionPass)

            let charAmountInLine = line.split(sectionChar).length-2
            console.log(charAmountInLine)
            if (charAmountInLine >= sectionMin && charAmountInLine <= sectionMax) {
                console.log("Correct")
                correctPass++
            }
        }

        console.log("Correct passwords = " + correctPass)
    });
}

function puzzle2() {
    fs.readFile('day 2/passwords.txt', 'utf8', function (err,data) {
        if (err)
            return console.log(err);

        let lines = data.split("\r\n")
        let correctPass = 0;

        for (let line of lines) {
            if (line === lines.slice(-1)[0])
                break

            let lineInfo = line.split(" ")
            let sectionAmount = lineInfo[0]
            let sectionMin = lineInfo[0].split("-")[0]
            let sectionMax = lineInfo[0].split("-")[1]
            let sectionChar = lineInfo[1][0]
            let sectionPass = lineInfo[2]

            console.log(sectionAmount + " | " + sectionChar + " | " + sectionPass)
            if (
                (sectionPass[sectionMin-1] === sectionChar && sectionPass[sectionMax-1] !== sectionChar) ||
                (sectionPass[sectionMin-1] !== sectionChar && sectionPass[sectionMax-1] === sectionChar)
            ) {
                console.log("Correct!")
                correctPass++
            }
        }

        console.log(correctPass)

    });
}

puzzle2();
