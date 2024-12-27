// Pattern Printing --- (E)

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
    for(let i=0;i<n;i++){
        temp1+="*";
    }
    console.log(temp1);

    for(let i=0;i<midHight;i++){
        console.log("*");   
    }

    let temp2="";
    for(let i=0;i<n;i++){
        temp2+="*"; 
    }
    console.log(temp2);
}
patternPrinting(num);