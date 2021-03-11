var yearsAgo = function(year) {
  //var past = new Date(year);
   var today = new Date();
  
  //return today.getFullYear() - past.getFullYear();
   return today.getFullYear() - year;
}
