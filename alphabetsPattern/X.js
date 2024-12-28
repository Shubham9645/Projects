// Pattern Printing --- (X)

let num=5;

function patternPrinting(n){
    for(let i=1;i<n;i++){
        let temp="";
        for(let j=0;j<i;j++){
            if(j==i-1){
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

    for(let i=2;i<n;i++){
        let temp="";
        for(let j=0;j<n-i;j++){
            if(j==n-i-1){
                temp+="*";
            }else{
                temp+=" ";
            }
        }

        for(let j=0;j<2*(i-1);j++){
            if(j==2*(i-1)-1){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

}
patternPrinting(num);