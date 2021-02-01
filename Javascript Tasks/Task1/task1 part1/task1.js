let i = parseFloat(
  prompt(
    `please chose 1-circle area. 2-circle circumference. 3-Check even or odd. `
  )
);
if (i == 1) {
  let r = parseFloat(prompt(`plz enter R`));
  console.log(`the area is : ${3.4 * Math.pow(r, 2)}`);
} else if (i == 2) {
  let r = parseFloat(prompt(`plz enter R`));
  console.log(`the circumference is : ${2 * 3.14 * r}`);
} else if (i == 3) {
  let x = parseFloat(prompt(`Please enter the number that u want to check`));
  if (x % 2 == 0) {
    console.log(`The Number ${x} Is Even`);
  } else if (x % 2 == 1) {
    console.log(`The Number ${x} Is Odd`);
  } else {
    console.log(`The Number ${x} Is not Int Number `);
  }
}else if( i > 3 || i < 1){
    console.log(`this ${i} is wrong`);
}
