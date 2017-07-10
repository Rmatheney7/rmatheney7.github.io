/* global $ _ */

$(document).ready(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  
  
  $.getJSON('data/product.json',function(data){
    
      
    var currentList;
    // Only X left in stock function //
    var itemsLeft = function(stock_num){
      if(stock_num <=10){
        return "Only " + stock_num + " left in stock!";
      }else{
        return stock_num + " left in stock"}};
      
      
      // Price to US currency function //
    var toMoney = function(amount){
      return amount.toLocaleString('en-US',{ style: 'currency', currency: 'USD', minimumFractionDigits:2 });};
    
    
     // Modal Creation //
   var modalCreation = function(){
     $('.item').on('click',function(event){
      var $obj = $(event.currentTarget);
      var $objData = $obj.data("item");
      let $imageDiv = $('<div>');
      let $image = $('<img>').addClass("image").attr('src', '/projects/product-project/img/product/' + $objData.image);
      $imageDiv.append($image);
      let $desc = $('<h2>').text($objData.desc + ".").addClass('col-md-10 ').addClass("desc").attr('id','h2');
      let $price = $('<div>').text("Price: "+ toMoney($objData.price)).addClass("price");
      let $stock = $('<div>').text(itemsLeft($objData.stock)).addClass("stock");
      if($objData.stock <= 10){$stock.addClass('red')} // Low stock Alert //
      let $itemDiv = $('<p>').attr('id','body').append( $imageDiv, $price,$stock);
      $('#body').replaceWith($itemDiv);
      $('#h2').replaceWith($desc);
    });
   };
  
        
    
    
    // Product Creation //
    var items = _.map(data,function(item){return item});
   
   
   function populateList(list){var sorted = _.map(list, function(item){
     $('#products').empty();
      let $imageDiv = $('<div>').addClass("col-md-2");
      let $image = $('<img>').addClass("image").attr('src', '/projects/product-project/img/product/thumbs/' + item.image);
      $imageDiv.append($image);
      let $desc = $('<div>').text(item.desc + ".").addClass('col-md-10 ').addClass("desc");
      $desc.append($('<a>').attr('href','#').attr('data-toggle','modal').attr('data-target', '#itemModal').text(' More Info'));
      let $price = $('<div>').text("Price: "+ toMoney(item.price)).addClass('col-md-4').addClass("price");
      let $stock = $('<div>').text(itemsLeft(item.stock)).addClass("col-md-4").addClass("stock");
      if(item.stock <= 10){$stock.addClass('red')} // Low stock Alert //
      let $itemDiv = $('<div>').append( $imageDiv, $desc, $price,$stock);
      toggle();
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
     
     currentList = list;
     modalCreation();
   }
   
   
   // Populate list of all items //
     populateList(items);
      
      
        // Sort toggle //
    var toggle =  function(){ $("li").on('click', function(event){
      var $type = $(event.currentTarget);
      $type = $type.attr('type');
      var itemsList = [];
      _.reduce(currentList, function(s,n){
        if(n.type === $type){
          return  itemsList.push(n); 
        }else if($type === "all"){
          return itemsList.push(n)}}, 0);
      
      
       populateList(itemsList);

    });};
    
    var $form = $('.form');
    var $search = $('#name');
    var regex = new RegExp( $search.val(), "i");
  
    var arrayOrObj = function(value){
      if(value === null){
        return false;
      }else if (value instanceof Date){
        return false;
      }else if(typeof value  === "object"){
        return true;
      }else{
        return false;
      }
    };
    
      
  
      
      $form.on('submit', function(e){
        e.preventDefault();
        var filtered = function(array){
      var id;
      var fun = function(array){
        var list = []; 
        var t = _.filter( array, function(e, i, c){
          if(c.hasOwnProperty('id')){
            id = c; 
            console.log('#1',c);
            
          }
          if(arrayOrObj(e)){
            list.push(fun(e));
            console.log('#2', fun(e));
            return fun(e);
            
          }else{
            //console.log(e);
            if(regex.test(e)){
              list.push(id);
              console.log('#3', id);
              return true;
              
            }else{
              return false;
              
            }
            
          }
          
          
        });
        
        return  list;
        
      };
      function flatten(arr) {
          return arr.reduce(function (flat, toFlatten) {
            return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
            
          }, []);}
          return  _.unique(flatten(fun(array)));
      
    };
    currentList = filtered(items);
    populateList(currentList);
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