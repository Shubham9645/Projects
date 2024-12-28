// Pattern Printing --- (S)

let num = 5;

function patternPrinting(n) {
    let midHeight = Math.floor(n / 2);

    let temp = "";
    for (let i = 0; i < n; i++) {
        temp += "*";
    }
    console.log(temp);

    for (let i = 0; i < midHeight; i++) {
        console.log("*");
    }

    let temp1 = "";
    for (let i = 0; i < n; i++) {
        temp1 += "*";
    }
    console.log(temp1);

    for(let i=0;i<midHeight;i++){
        let temp="";
        for(let j=0;j<n;j++){
            if(j==n-1){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

    let temp2="";
    for(let i=0;i<n;i++){
        temp2+="*";
    }
    console.log(temp2);

}
patternPrinting(num);