// Pattern Prinitng --- (P)

let num=5;

function patternPrinting(n){
    let upperHeight=Math.floor(n/2);
    let lowerHeight=Math.ceil(n/2);
    
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
        let  temp="";
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
    
    for(let i=0;i<lowerHeight;i++){
        console.log("*");
    }

}
patternPrinting(num);