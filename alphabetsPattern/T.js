// Pattern Printingv --- (T)

let num=5;

function patternPrinting(n){
    let midLength=Math.ceil(n/2);
    
    let temp="";
    for(let i=0;i<n;i++){
        temp+="*";
    }
    console.log(temp);

    for(let i=0;i<=n;i++){
        let temp="";
        for(let j=0;j<midLength;j++){
            if(j==midLength-1){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

}
patternPrinting(num);