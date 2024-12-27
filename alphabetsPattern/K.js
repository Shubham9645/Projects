// Pattern Printing --- (K)

let num=5;

function patternPrinting(n){
    for(let i=1;i<n;i++){
        let temp="*";
        for(let j=0;j<n-i;j++){
            if(j==n-i-1){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

    for(let i=2;i<n;i++){
        let temp="*";
        for(let j=0;j<i;j++){
            if(j==i-1){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

}
patternPrinting(num);