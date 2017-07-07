/* global $ _ */

$(document).ready(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  
  
  $.getJSON('data/product.json',function(data){
    
      
   
    // Only X left in stock function //
    var itemsLeft = function(stock_num){
      if(stock_num <=10){
        return "Only " + stock_num + " left in stock!";
      }else{
        return stock_num + " left in stock"}};
      
      
      // Price to US currency function //
    var toMoney = function(amount){
      return amount.toLocaleString('en-US',{ style: 'currency', currency: 'USD', minimumFractionDigits:2 });};
    
    
    // Product Creation //
    var items = _.map(data,function(item){return item});
   function populateList(list){var sorted = _.map(list, function(item){
     $('#products').empty();
      let $imageDiv = $('<div>').addClass("col-md-2");
      let $image = $('<img>').addClass("image").attr('src', '/projects/product-project/img/product/thumbs/' + item.image);
      $imageDiv.append($image);
      let $desc = $('<div>').text( item.desc).addClass('col-md-10 ').addClass("desc");
      let $price = $('<div>').text("Price: "+ toMoney(item.price)).addClass('col-md-4').addClass("price");
      let $stock = $('<div>').text(itemsLeft(item.stock)).addClass("col-md-4").addClass("stock");
      if(item.stock <= 10){$stock.addClass('red')} // Low stock Alert //
      let $itemDiv = $('<div>').append( $imageDiv, $desc, $price,$stock);
       return $itemDiv
      .addClass('item')
      .addClass("row ")
      .data('item',item);
      });
      // Product Css //
     $('#products').addClass('container').append(sorted);
     $(".item").css({'margin' : '35px', 'padding' : '20px', 'background-color': 'yellow', 'border-radius': '20px'});
     $('.image').css('border-radius', '20px');
     $('.red').css('color','red');
     $('.price').css('padding', '20px 0px 0px 60px ');
     $('.stock').css('padding' , '20px 0px 60px 60px');
     $('.desc').css('padding-left', '40px' );
   }
   
   // Populate list of all items //
     populateList(items);
      
      
      
    
      
      // Modal Creation //
    $('.item').on('click',function(event){
      var $obj = $(event.currentTarget);
      var $objData = $obj.data("item");
      console.log($objData);
      /*
      const $item = $(event.currentTarget);
      const $itemInfo = $item.data('item');
      let $id = $('<div>').text("Id Num: "+ $itemInfo.id).addClass("id");
      let $type = $('<div>').text("Item Type: "+ $itemInfo.type).addClass("type");
      let $image = $('<div>').append($('<img>').addClass("image").attr('src', '/projects/product-project/img/product/' + $itemInfo.image));
      let $desc = $('<div>').text("Description: "+ $itemInfo.desc).addClass("desc");
      let $price = $('<div>').text("Price: "+ toMoney($itemInfo.price)).addClass("price");
      let $color = $('<div>').text("Color: "+ $item.color).addClass("color");
      let $colorsAvail = $('<div>').text("Colors available: "+ $itemInfo.availableColors," ").addClass("colorsAvail");
      let $specs = $('<div>').text("Specs: "+ $itemInfo.specs + " ").addClass("spec");
      let $stock = $('<div>').text(itemsLeft($itemInfo.stock)).addClass("stock");
      let $itemDiv = $('<div>').append($id, $type, $image, $desc, $price, $color, $colorsAvail, $specs, $stock);
      return $itemDiv
      .addClass('modalItem');
      */
      
    });
    
  
        
    // Sort toggle //
    $("li").on('click', function(event){
      var $type = $(event.currentTarget);
      $type = $type.attr('type');
      var itemsList = [];
      _.reduce(items, function(s,n){
        if(n.type === $type){
          return  itemsList.push(n); 
        }else if($type === "all"){
          return itemsList.push(n)}}, 0);
      
      console.log(itemsList[0].data('item'));
       populateList(itemsList);

    });
    
    
    
     
  
     // Jquery Css Mods //
    
    $('nav').css('background-color', 'black');
    $('nav').css('border-radius', '20px');
    $('nav').css('color', 'grey');
    $('nav').css('padding', '10px');
    $('li').css('list-style-type', 'none');
    $('body').css('background', 'blue');
    
    
   
    
    
    
    
  }); 
  
  
  
  
  // ALL YOUR CODE GOES ABOVE HERE //
});