// Pattern Printing --- (V)

let num=5;

function patternPrinting(n){

    for(let i=0;i<=n+1;i++){
        let temp="";
        for(let j=0;j<=i;j++){
            if(j==i){
                temp+="*";
            }else{
                temp+=" ";
            }
        }

        for(let j=0;j<=2*(n-i)+1;j++){
            if(j==2*(n-i)+1){
                temp+="*";
            }else{
                temp+=" ";
            }
        }

        console.log(temp);
    }
}
patternPrinting(num);