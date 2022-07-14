
const arr = ["abcdj", "asfalseiruqwo", "bhhkkbbjjjb"]

function isArrValid(arr) {

    const [arrayA,arrayB,arrayC] = [...arr]

    let counter = 0;
    let validPasswords = 0;

    for (let i = 0; i < arrayA.length; i++) {

        if (arrayA[i] == "a") {
            counter++;
        }
        if ((counter != 0 && counter <= 5)) {
            validPasswords++;
            break;
        }
    }
    counter = 0;
    for (let i = 0; i < arrayB.length; i++) {
        if (arrayB[i] == 'z') {
            counter++;
        }
        if (counter > 1 && counter <= 4) {
            validPasswords++;
            break;
        }
    }
    counter = 0;
    for (let i = 0; i < arrayC.length; i++) {

        if (arrayC[i] == 'b') {
            counter++;
        }
        if (counter > 2 && counter <= 6) {
             validPasswords++;
             break;
        }
    }

    return validPasswords
}

console.log(isArrValid(arr))

