function lefttrianglePattern(row) {
    for (let i = 1; i <= row; i++) {
      let x = '';
  
      for (let j = 1; j <= i; j++) {
        x += '*';
      }
  
      console.log(x);
    }
  }
  
  
lefttrianglePattern(5);
  