// Pattern Printing --- (Y)

let num=5;

function patternPrinting(n){
    
    for(let i=1;i<n;i++){
        let temp="";
        for(let j=1;j<=i;j++){
            if(j==i){
                temp+="*";
            }else{
                temp+=" ";
            }
        }

        for(let j=1;j<2*(n-i)-1;j++){
            if(j==2*(n-i)-2){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

    for(let i=1;i<n-1;i++){
        let temp="";
        for(let j=1;j<n;j++){
            if(j==n-1){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }
}
patternPrinting(num);