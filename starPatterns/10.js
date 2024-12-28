// 10:- Pattern Prinitng 

let num=5;

function patternPrinting(n){
    for(let i=1;i<=n;i++){
        let temp="";
        for(let j=1;j<=n-i;j++){
            temp+=" ";
        }

        for(let j=1;j<=(2*i)-1;j++){
            temp+="*";
        }
        console.log(temp);
    }

}
patternPrinting(num);