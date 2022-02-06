//Implement the function frontDoorResponse that takes a line of the poem as an argument and returns the first letter of that line.
export function frontDoorResponse(str){
    return str[0];
  }
  
  
  //Implement the function backDoorResponse that takes a line of the poem as an argument and returns the last letter of that line that is not a whitespace character.
  export function backDoorResponse (str) {
    let space = str.trim();
    return space[space.length - 1];
  }
  
  //Implement the function frontDoorPassword that accepts a string (the combined letters you found in task 1) and returns it correctly capitalized.
  export function capitalization(str){
    let word = str.toLowerCase();
    return word[0].toUpperCase() + word.slice(1)
  }
  
  export function frontDoorPassword(str) {
    let word = str.toLowerCase();
    return word[0].toUpperCase() + word.slice(1);
  }
  
  export function backDoorPassword(str) {
    let word = str[0].toUpperCase() + str.slice(1);
    return word + ',' + " " + 'please';
  }