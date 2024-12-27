// Pattern Printing  --- (G);

let num=5;

function patternPrinting(n){
    let midHight=Math.floor(n/2);

    let temp="";
    for(let i=0;i<n;i++){
        temp+="*";
    }
    console.log(temp);

    for(let i=0;i<midHight;i++){
        console.log("*");
    }

    let temp1="";
    for(let i=0;i<=n;i++){
        if(i==0 || i==n-2 || i==n-1 || i==n){
            temp1+="*";
        }else{
            temp1+=" ";
        }
    }
    console.log(temp1);

    for(let i=0;i<midHight;i++){
        temp="";
        for(let j=0;j<n;j++){
            if(j==0 || j==n-1){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

    let temp2="";
    for(let i=0;i<n;i++){
        temp2+="*";
    }
    console.log(temp2);
}
patternPrinting(num);