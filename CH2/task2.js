var fs=require("fs")
fs.writeFileSync("temp.txt","Hi! How are you? \nWelcome to LJ University!")
var fs1=fs.readFileSync("temp.txt","utf-8")
var c=0
var v="aeiouAEIOU"
for(let a=0;a<fs1.length;a++){
    if(v.includes(fs1[a])){
        c++
    }
}
fs.appendFileSync("temp.txt","\nNo of vowels:"+c)