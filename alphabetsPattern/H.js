// Pattern Printing --- (H)

let num=5;

function patternPrinting(n){
    let midHight=Math.ceil(n/2);

    for(let i=0;i<midHight;i++){
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


    let temp="";
    for(let i=0;i<n;i++){
        temp+="*";
    }
    console.log(temp);

    
    for(let i=0;i<midHight;i++){
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

}
patternPrinting(num);