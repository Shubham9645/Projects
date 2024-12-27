// Pattern Printing --- (B)

let num=5;


function patternPrinting(n){
    let midLength=Math.floor(n/2);

    let temp="";
    for(let i=0;i<n;i++){
        if(i==n-1){
            temp+=" ";
        }else{
            temp+="*";
        }
    }
    console.log(temp);

    for(let i=0;i<midLength;i++){
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
    for(let i=0;i<n;i++){
        if(i==n-1){
            temp1+=" ";
        }else{
            temp1+="*";
        }
    }
    console.log(temp1);

    for(let i=0;i<midLength;i++){
        let temp2 = "";
        for(let j=0;j<n;j++){
            if(j==0 || j==n-1){
                temp2+="*";
            }else{
                temp2+=" ";
            }
        }
        console.log(temp2);
    }

    let temp3="";
    for(let i=0;i<n;i++){
        if(i==n-1){
            temp3+=" ";
        }else{
            temp3+="*";
        }
    }
    console.log(temp3);
}
patternPrinting(num);