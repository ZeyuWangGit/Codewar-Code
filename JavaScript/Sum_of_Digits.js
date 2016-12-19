function digital_root(n) {
  var sum=0;
  if(n<10){
    return n;
  }else{
    while(n>0){
      sum = sum + n%10;
      n = (n-(n%10))/10;
    }
  }
  return digital_root(sum);
}