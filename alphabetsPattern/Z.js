// Pattern Printing --- (Z)

let num=5;

function patternPrinting(n){
    let temp='';
    for(let i=0;i<=n+1;i++){
        temp+="*";
    }
    console.log(temp);

    for(let i=0;i<n;i++){
        let temp=" ";
        for(let j=1;j<=n-i;j++){
            if(j==n-i){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

    let temp1="";
    for(let i=0;i<=n+1;i++){
        temp1+="*";
    }
    console.log(temp);
}
patternPrinting(num);