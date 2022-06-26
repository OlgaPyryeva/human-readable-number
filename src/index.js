module.exports = function toReadable(number) {
    let simpleNumbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let numberClean = String(number).trim().split("_").join("");

    let thousands = "";
    let hundreds = "";
    let units = "";
    let readableNum = "";

    let rangeNum = numberClean.length; //number

    function findPartsNum(numberClean) {
        if (numberClean.length === 1) {
            return (units = simpleNumbers[+numberClean]);
        }
        if (numberClean.length === 2) {
            if (numberClean[0] == 1 && numberClean[1] !== 0) {
                return (units = simpleNumbers[+numberClean]);
            }
            if (numberClean[0] == 1 && numberClean[1] == 0) {
                return (units = simpleNumbers[10]);
            }
            if (numberClean[0] == 2 && numberClean[1] == 0) {
                return (units = simpleNumbers[20]);
            }
            if (numberClean[0] == 2 && numberClean[1] != 0) {
                return (units =
                    simpleNumbers[20] + " " + simpleNumbers[numberClean[1]]);
            }
            if (numberClean[0] == 3 && numberClean[1] == 0) {
                return (units = simpleNumbers[30]);
            }
            if (numberClean[0] == 3 && numberClean[1] != 0) {
                return (units =
                    simpleNumbers[30] + " " + simpleNumbers[numberClean[1]]);
            }
            if (numberClean[0] == 4 && numberClean[1] == 0) {
                return (units = simpleNumbers[40]);
            }
            if (numberClean[0] == 4 && numberClean[1] != 0) {
                return (units =
                    simpleNumbers[40] + " " + simpleNumbers[numberClean[1]]);
            }

            if (numberClean[0] == 5 && numberClean[1] == 0) {
                return (units = simpleNumbers[50]);
            }
            if (numberClean[0] == 5 && numberClean[1] != 0) {
                return (units =
                    simpleNumbers[50] + " " + simpleNumbers[numberClean[1]]);
            }
            if (numberClean[0] == 6 && numberClean[1] == 0) {
                return (units = simpleNumbers[60]);
            }
            if (numberClean[0] == 6 && numberClean[1] != 0) {
                return (units =
                    simpleNumbers[60] + " " + simpleNumbers[numberClean[1]]);
            }
            if (numberClean[0] == 7 && numberClean[1] == 0) {
                return (units = simpleNumbers[70]);
            }
            if (numberClean[0] == 7 && numberClean[1] != 0) {
                return (units =
                    simpleNumbers[70] + " " + simpleNumbers[numberClean[1]]);
            }
            if (numberClean[0] == 8 && numberClean[1] == 0) {
                return (units = simpleNumbers[80]);
            }
            if (numberClean[0] == 8 && numberClean[1] != 0) {
                return (units =
                    simpleNumbers[80] + " " + simpleNumbers[numberClean[1]]);
            }
            if (numberClean[0] == 9 && numberClean[1] == 0) {
                return (units = simpleNumbers[90]);
            }
            if (numberClean[0] == 9 && numberClean[1] != 0) {
                return (units =
                    simpleNumbers[90] + " " + simpleNumbers[numberClean[1]]);
            }
        }
    }

    if (rangeNum === 1 || rangeNum === 2) {
        return findPartsNum(numberClean);
    }

    if (rangeNum === 3) {
        let firstNum = numberClean[0];
        let restNum = numberClean.slice(-2).replace(/^0+/, "");
        // let restNum = numberClean.slice(-2);
        hundreds = findPartsNum(firstNum) + " " + "hundred";
        units = findPartsNum(restNum);

        if (units !== undefined) {
            if (units[0] != 8 && units[1] == 0) {
                return (readableNum = `${hundreds} ${units}ty`);
            }
            if (units[0] == 8 && units[1] == 0) {
                return (readableNum = `${hundreds} ${units}y`);
            } else {
                return (readableNum = `${hundreds} ${units}`);
            }
        } else {
            return (readableNum = `${hundreds}`);
        }
    }
};
