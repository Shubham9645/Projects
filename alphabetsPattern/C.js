// Pattern Printing --- (C);

let  num=5;

function patternPrinting(n){
    let temp="";
    for(let i=0;i<n;i++){
        if(i==0){
            temp+=" ";
        }else{
            temp+="*";
        }
    }
    console.log(temp);

    for(let i=1;i<n;i++){
        console.log("*");
    }

    let temp1="";
    for(let i=0;i<n;i++){
        if(i==0){
            temp1+=" ";
        }else{
            temp1+="*";
        }
    }
    console.log(temp1);

}
patternPrinting(num);