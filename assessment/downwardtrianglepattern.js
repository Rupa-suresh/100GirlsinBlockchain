function downwardTrianglePattern(row) {
    for (let i = row; i >= 1; i--) {
      let x = '';
      for (let j = 1; j <= i; j++) {
        x += '*';
      }
     console.log(x);
    }
  }
  downwardTrianglePattern(5);
  
