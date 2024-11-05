function pyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = '';
    
    for (let j = 1; j <= rows - i; j++) {
      str += ' ';
    }

    for (let k = 1; k <= i; k++) {
      str += '* ';
    }

    document.write(str);
  }
}

pyramid(5);
