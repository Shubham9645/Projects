// 4:- Borders Pattern 

let num = 5;

function patternPrinting(n) {
    for (let i = 0; i < n; i++) {
        let temp = "";
        for (let j = 0; j < i; j++) {
            temp += " ";
        }

        for (let j = 1; j < 2 * (n - i); j++) {
            if (j == 1 || j == 2 * (n - i) - 1 || i == 0) {
                temp += "*";
            } else {
                temp += " ";
            }
        }
        console.log(temp);
    }

}
patternPrinting(num);