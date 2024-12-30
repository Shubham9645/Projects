// 5:- Border Patterns

let num = 5;

function patternPrinting(n) {
    for (let i = 1; i <= n; i++) {
        let temp = "";
        for (let j = 1; j <= n - i; j++) {
            temp += " ";
        }
        for (let j = 0; j < (2 * i) - 1; j++) {
            if (j == 0 || j == (2 * i) - 2) {
                temp += "*";
            } else {
                temp += " ";
            }
        }
        console.log(temp);
    }

    for (let i = 2; i <= n; i++) {
        let temp = "";
        for (let j = 1; j < i; j++) {
            temp += " ";
        }
        for (let j = 0; j <= 2 * (n - i); j++) {
            if (j == 0 || j == 2 * (n - i)) {
                temp += "*";
            } else {
                temp += " ";
            }
        }
        console.log(temp);
    }

}
patternPrinting(num);