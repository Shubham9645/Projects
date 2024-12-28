// Pattern Printing --- (L)

let num=5;

function patternPrinting(n){
for(let i=0;i<=n;i++){
    console.log("*");
}

let temp="";
for(let i=0;i<n;i++){
    temp+="*";
}
console.log(temp);

}
patternPrinting(num);