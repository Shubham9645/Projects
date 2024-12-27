// Pattern Printing --- (F)

let num=5;

function patternPrinting(n){
let upperHight=Math.floor(n/2);
let lowerHight=Math.ceil(n/2);

let temp="";
for(let i=0;i<n;i++){
    temp+="*";
}
console.log(temp);

for(let i=0;i<upperHight;i++){
   console.log("*");
}

let temp1="";
for(let i=0;i<n;i++){
    temp1+="*";
}
console.log(temp1);

for(let i=0;i<lowerHight;i++){
    console.log("*");
}

}
patternPrinting(num);