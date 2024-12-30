// 9:- Border Patterns 

let num=5;

function patternPrinting(n){
    for(let i=1;i<=n;i++){
        let temp="";
        for(let j=1;j<i;j++){
            temp+=" ";
        }
        for(let j=1;j<=n ;j++){
            if(i==1 || i==n || j==1 || j==n){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

}
patternPrinting(num);