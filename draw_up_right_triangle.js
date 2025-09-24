/* 
Draw a right triangle on the up right using the * symbols.
The request can draw the number of lines according to the user input.
*/

const drawUpRightTriangle = (height) => {
  for (let i = 1; i <= height; i++) {
    let line = '';
    for (let j = 0; j <= height; j++) {
      if (j < i) {
        line += ' ';
      } else {
        line += '*';
      }
    }
    console.log(line);
  }
}

drawUpRightTriangle(5);