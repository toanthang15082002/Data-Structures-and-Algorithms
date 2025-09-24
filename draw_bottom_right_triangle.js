/* 
Draw a right triangle on the bottom right using the * symbols.
The request can draw the number of lines according to the user input.
*/

const drawBottomRightTriangle = (height) => {
  for (let i = 1; i <= height; i++) {
    let line = '';
    for (let j = 0; j < height; j++) {
      if (j >= height - i) {
        line += '*';
      } else {
        line += ' ';
      }
    }
    console.log(line);

  }
}

drawBottomRightTriangle(5);