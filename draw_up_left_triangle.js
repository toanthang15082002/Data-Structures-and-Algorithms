/* 
Draw a right triangle on the up left using the * symbols.
The request can draw the number of lines according to the user input.
*/

const drawUpLeftTriangle = (height) => {
  for (let i = height; i >= 1; i--) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += '*';
    }
    console.log(line);
  }
}

drawUpLeftTriangle(5);