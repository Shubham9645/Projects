// Pattern Printing --- (N);

let num=5;

function patternPrinting(n){
    for(let i=0;i<=n+1;i++){
        let temp="*";
        for(let j=1;j<=i;j++){
            if(j==i){
                temp+="*"
            }else{
                temp+=" ";
            }
        }

        for(let j=0;j<=n-i;j++){
            if(j==n-i){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

}
patternPrinting(num);