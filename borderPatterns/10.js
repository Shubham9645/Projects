// 10:- Border Pattern 

let num=5;

function patternPrinting(n){
    for(let i=0;i<n;i++){
        let temp="";
        for(let j=0;j<n;j++){
            if(i==0 || (i==n-1) || i==j || (i+j==n-1)){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

}
patternPrinting(num);