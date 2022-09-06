let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
let runnersAge = 19
if (registeredEarly && runnersAge > 18){
  raceNumber += 1000;
}
if (registeredEarly && runnersAge > 18){
  console.log(`Race will begin at 9:30, yout race number is ${raceNumber}.`)
}
else if (!registeredEarly && runnersAge > 18) {console.log(`Race will begin at 11:00am, your race number is ${raceNumber}.`);
}
else if (runnersAge < 18){
  console.log (`Race will begin at 12:30pm, your race number is ${raceNumber}.`);
}
else{
console.log ('Please report to the registration desk for further information. Thank you!');
}
