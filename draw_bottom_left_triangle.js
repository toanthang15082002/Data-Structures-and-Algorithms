/* 
Draw a right triangle on the bottom left using the * symbols.
The request can draw the number of lines according to the user input.
*/

const drawBottomLeftTriangle = (height) => {
  for (let i = 1; i <= height; i++) {
    let line = '';
    for (let j = 0; j < i; j++) {
      line += '*';
    }
    console.log(line);
  }
}

drawBottomLeftTriangle(10);