// Pattern Printing --- (A)

let num=5;

function patterPrinting(n){
let upperLength=Math.floor(n/2);
let lowerLength=Math.ceil(n/2);

let temp="";
for(let i=0;i<n;i++){ 
    if(i==0 || i==n-1){
        temp+=" ";
    }else{
        temp+="*";
    }
}
console.log(temp);

for(let i=0;i<upperLength;i++){
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

let temp1="";
for(let i=0;i<n;i++){
    temp1+="*";
}
console.log(temp1);


for(let i=0;i<lowerLength;i++){
    let temp2="";
    for(let j=0;j<n;j++){
        if(j==0 || j==n-1){
            temp2+="*";
        }else{
            temp2+=" ";
        }
    }
    console.log(temp2);
   }
}
patterPrinting(num);