var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=randomNumber1+1;
randomNumber1=Math.floor(randomNumber1);
var randomImage1="dice"+randomNumber1+".png";
var randomImagesrc="images/"+randomImage1;
var image1=document.querySelectorAll("img")[0].setAttribute("src",randomImagesrc);

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=randomNumber2+1;
randomNumber2=Math.floor(randomNumber2);
var randomImage2="dice"+randomNumber2+".png";
var randomImagesrc1="images/"+randomImage2;
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImagesrc1);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player1 wins";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player2 wins";
}
else
{
  document.querySelector("h1").innerHTML="No one wins";
}
