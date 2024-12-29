// 26:- Pattern Printing 

let num=5;

function patternPrinting(n){
    for(let i=1;i<=n;i++){
        temp="";
        for(let j=1;j<=i;j++){
            temp+="*";
        }
        for(let j=1;j<=n-i;j++){
            temp+=" ";
        }
        for(let j=0;j<=n-i;j++){
            temp+="*";
        }
        for(let j=1;j<2*i-1;j++){
            temp+=" ";
        }
        for(let j=0;j<=n-i;j++){
            temp+="*";
        }
        for(let j=1;j<=n-i;j++){
            temp+=" ";
        }
        for(let j=1;j<=i;j++){
            temp+="*";
        }
        console.log(temp);
    }
    

}
patternPrinting(num);