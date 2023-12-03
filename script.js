var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var txt1=document.querySelector(".txt1");
var txt2=document.querySelector(".txt2");
var colortext="linear-gradient(to right, " +color1.value+", "+color2.value+")";
css.textContent=colortext;
// console.log(body);
// console.log(css);
// console.log(color1);
// console.log(color2);
// body.style.background="red"; - this is used to change background of something
function setGradient(){
    console.log(color1.value);
    txt1.style.color=color1.value;
    txt2.style.color=color2.value;
    body.style.background="linear-gradient(to left, " +color1.value+", "+color2.value+")";
    
    css.textContent=body.style.background+";";
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

