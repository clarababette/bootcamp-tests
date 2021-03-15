var findItemsOver20 = function(itemList) {
  var itemsOver20 = [];
  
  itemList.forEach(function(item) {
  	if (item.qty > 20) {
      itemsOver20.push(item);
    }
  });
  
  console.log(itemsOver20);
  return itemsOver20;
  
 
  }
