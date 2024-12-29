// 28:- Pattern Printing

let num=5;

function patternPrinting(n){
    for(let i=1;i<=n;i++){
        let temp="";
        for(let j=1;j<=i;j++){
            temp+="*";
        }
        for(let j=0;j<=2*(n-i)-1;j++){
            temp+=" ";
        }
        for(let j=1;j<=i;j++){
            temp+="*";
        }
        console.log(temp);
    }
}
patternPrinting(num);