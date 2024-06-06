function transformString(str) {
    const length = str.length;
    if (length % 3 === 0) {
      str = str.split('').reverse().join('');
    }
    if (length % 5 === 0) {
      str = str.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    return str;
  }