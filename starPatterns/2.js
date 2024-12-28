// 2:- Pattern Printing

let num=5;

function patternPrinting(n){
    for(let i=1;i<=n;i++){
        let temp="";
        for(let j=0;j<=n-i;j++){
            temp+="*";
        }
        console.log(temp);
    }
}
patternPrinting(num);