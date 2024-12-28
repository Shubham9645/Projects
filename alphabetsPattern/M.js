// Pattern Printing --- (M)

let num=5;

function patternPrinting(n){

    for(let i=1;i<n;i++){
        let temp="*";
        for(let j=1;j<i;j++){
            if(j==i-1){
                temp+="*";
            }else{
                temp+=" ";
            }
        }

        for(let j=2;j<2*(n-i);j++){
            if(j==2*(n-i)-1){
                temp+="*";
            }else{
                temp+=" ";
            }
        }

        for(let j=1;j<i;j++){
            if(j==i-1){
                temp+="*";
            }else{
                temp+=" ";
            }
            
        }
        console.log(temp);
    }

    for(let i=1;i<n-1;i++){
        let temp="*";
        for(let j=0;j<=2*(n-3);j++){
                temp+=" ";
        }
        console.log(temp+"*");
    }
}
patternPrinting(num);