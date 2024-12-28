// Pattern Printing ---(Q)

let num=5;

function patternPrinting(n){
    let upperHeight=Math.ceil(n/2);

    let temp="";
    for(let i=0;i<n;i++){
        if(i==0 || i==n-1){
            temp+=" ";
        }else{
            temp+="*";
        }
    }
    console.log(temp);  

    for(let i=0;i<upperHeight;i++){
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
        if(i==0 || i==1 || i==n-1){
            temp1+="*";
        }else{
            temp1+=" ";
        }
    }
    console.log(temp1);

    let temp2="";
    for(let i=0;i<n;i++){
        if(i==0 || i==n-1){
            temp2+=" ";
        }else{
            temp2+="*";
        }
    }
    console.log(temp2);

    let temp3="";
    for(let i=0;i<n;i++){
        if(i==n-1){
            temp3+="*";
        }else{
            temp3+=" ";
        }
    }
    console.log(temp3);
}
patternPrinting(num);