// Pattern Printing --- (J)

let num=5;

function patternPrinting(n){
    let upperHight=Math.ceil(n/3)*2;
    let lowerHigth=Math.floor(n/3);
    let midLength=Math.ceil(n/2);
    
    let temp="";
    for(let i=0;i<n;i++){
        temp+="*";
    }
    console.log(temp);

    for(let i=0;i<upperHight;i++){
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

    for(let i=0;i<lowerHigth;i++){
        let temp="";
        for(let j=0;j<midLength;j++){
            if(j==0 || j==midLength-1){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

    let temp1=""
    for(let i=0;i<midLength;i++){
        temp1+="*";
    }
    console.log(temp1);

}
patternPrinting(num);