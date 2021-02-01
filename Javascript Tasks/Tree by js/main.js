let userChoice = Number(
  prompt(
    `Please chose what to do : \n 1-print reverse word \n 2- calc the num u enter from 1 to it \n 3-make a tree`
  )
);
if (userChoice == 1) {
  let x = prompt(`Pleas enter the word`);
  let spiltString = x.split(""); //here we spilt the word into arry
  let reverseArray = spiltString.reverse(); // here we reverse the letters in the array
  let joinArray = reverseArray.join(""); //here we make the array back to word agin
  console.log(joinArray);
} else if (userChoice == 2) {
  let entryNum = Number(prompt(`Please enter the numer to calc it `));
  let j = 0;
  for (i = 1; i <= entryNum; i++) {
    console.log((j += i));
  }
} else if (userChoice == 3) {
  var txt = "";
  for (i = 1; i <= 4; i++) {
    txt = "";
    for (j = i; j < 4; j++) {
      txt += " ";
    }
    for (k = 0; k < i * 2 - 1; k++) {
      txt += "*";
    }
    console.log(txt);
  }
}
