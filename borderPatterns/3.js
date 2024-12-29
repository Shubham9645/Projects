// 3:- Border Pattern 

let num=5;

function patternPrinting(n){
    for(let i=0;i<n;i++){
        let temp="";
        for(let j=1;j<n-i;j++){
            temp+=" ";
        }
        for(let j=0;j<=(2*i);j++){
            if(j==0 || i==n-1 || j==(2*i)){
                temp+="*";
            }else{
                temp+=" ";
            }
        }
        console.log(temp);
    }

}
patternPrinting(num);