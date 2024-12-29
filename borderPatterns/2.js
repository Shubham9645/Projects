// 2:- Border Patterns 

let num=5;

function patternPrinting(n){
    for(let i=0;i<n;i++){
        let temp="";
        for(let j=0;j<i;j++){
            temp+=" ";
        }
        for(let j=0;j<n-i;j++){
            if(i==0 || j==0 || j==n-i-1){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

}
patternPrinting(num);