// 1:- Pattern Printing 

let num=5;

function PatternPrinting(n){
    for(let i=1;i<=n;i++){
        let temp="";
        for(let j=1;j<=n;j++){
            temp+="*";
        }
        console.log(temp);
    }
}
PatternPrinting(num);