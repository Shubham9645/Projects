// 29:- Pattern Printing 

let num=5;

function patternPrinting(n){
    let midLenght=Math.ceil(n/2);
    for(let i=1;i<midLenght;i++){
        let temp="";
        for(let j=1;j<=midLenght;j++){
            if(j==midLenght){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

    let temp="";
    for(let i=1;i<=n;i++){
        temp+="*";
    }
    console.log(temp);

    for(let i=1;i<midLenght;i++){
        let temp="";
        for(let j=1;j<=midLenght;j++){
            if(j==midLenght){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

}
patternPrinting(num);