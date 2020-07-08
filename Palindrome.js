function palindrome(str) {
  let newStr = str.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9+]/g, "").toLowerCase();
  let revStr = newStr.split('').reverse().join('').toLowerCase();
  if(newStr == revStr){
    return true;
  } else{
    return false;
  }
}




palindrome("eye");
