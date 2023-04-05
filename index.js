// Exercise: Calculator v1
// begin of the loop

while (true) {
  const answer = prompt('Do you want make some calculations? (Y/N). ');
  if (answer ==='N') {
    const answer = prompt('Have a nice day. come back in the future.');
    break;
  }
  if (answer ==='Y') {
    // wskazanie ze odpowiedz jest liczba, a nie zmienna !!! this is a number not a string !!! (number(promt(qeustion))) otherwise you get something like this 5+5=55 in place 5+5=10 !!! important !!!
    const numberOne = Number(prompt('Enter first number, please...'));
    const operator = prompt('Which operation do you want to do? (+,-,*,/.)');
    const numberTwo = Number(prompt('What is the second number ?'));

    // utworzenie zmiennej result = adding variable result
    
    let result;

    // variables for some math with case 
    
    switch(operator) {
      case '+':
        result = numberOne + numberTwo;
        break;
      case '-':
        result = numberOne - numberTwo;
        break;
      case '*':
        result = numberOne * numberTwo;
        break;
      case '/':
        result = numberOne / numberTwo;
        break;
    }
// if result is undefinied 
    
    if (result === undefined) {
      console.log ('something is wrong.....');
      continue;
    }
    // answer
    console.log(`${numberOne}${operator}${numberTwo}=${result}`);
    } else {
    console.log("Something wrong, one more time please..Remember about BIG LETTERS like Y or N/ .Use only operators like : -.+.*,/.")
  }
}