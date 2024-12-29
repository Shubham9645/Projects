// 30:- Pattern Printing 

let num=5;

function patternPrinting(n){
    let midLenght=Math.ceil(n/2);
    for(let i=1;i<=n;i++){
        let temp="";
        for(let j=1;j<=n;j++){
            if(j==midLenght || i==midLenght){
                temp+="*";
            }else{
                temp+="0";
            }
        }
        console.log(temp);
    }

}
patternPrinting(num);