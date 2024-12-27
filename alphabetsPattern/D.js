// Pattern Printing --- (D)

let num=5;

function patternPrinting(n){
    let temp="";
    for(let i=1;i<n;i++){
        temp+="*";
    }
    console.log(temp);

    for(let i=0;i<n;i++){
        let temp="";
        for(let j=0;j<n;j++){
            if(j==0 || j==n-1){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

    let temp1="";
    for(let i=1;i<n;i++){
        temp1+="*";
    }
    console.log(temp1);

}
patternPrinting(num);