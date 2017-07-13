/* global $ _ */

$(document).ready(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  
  
  $.getJSON('data/product.json',function(data){
    
     var items = _.map(data,function(item){return item});
     populateList(items);
     
     var currentList = items;
      toggle(currentList);
      
     function toggle(){
      
    $("li").on('click', function(event){
      console.log('clicked');
      var itemsList = [];
      var $event = $(event.currentTarget);
      var $type = $event.attr('type');
      var $data = $event.attr('data');
      
      if(Object.is(currentList, items) && $type === 'all'){
        $('#sort').text('Sort by');
      }else if($type === 'all'){
        $('#sort').text($data);
      }else{
        $('#sort').text($data + " Only");
      }
      
      
    
      _.reduce(currentList, function(s,n){
        if(n.type === $type){
         
          return  itemsList.push(n); 
        }else if($type === "all"){
          return itemsList.push(n)
          
        }else{
          return itemsList;
        }
        
      }, 0);
       
      
      
      if(itemsList.length < 1){
     $('#products').empty();
     $('#products').addClass('container').append($('<div>').addClass('item').addClass('row').append($('<h1>').text("No Results")));
     modalCreation();
     
   }else{
    populateList(itemsList);
   }
     

    });
       
    }
    
    
    
      
       
      
   
    // Only X left in stock function //
    function itemsLeft(stock_num){
      if(stock_num <=10){
        return "Only " + stock_num + " left in stock!";
      }else{
        return stock_num + " left in stock"}}
      
      
      // Price to US currency function //
    function toMoney(amount){
      return amount.toLocaleString('en-US',{ style: 'currency', currency: 'USD', minimumFractionDigits:2 });}
      
      
      function nameSplit(desc){
        var comma = desc.split(',');
        var dash = desc.split('-');
        if(comma[0].length < dash[0].length){
          return comma;
        }else {
          return dash
        }
      }
    
    
     // Modal Creation //
   function modalCreation(){
     $('.item').on('click',function(event){
      var $obj = $(event.currentTarget);
      var $objData = $obj.data("item");
      let $imageDiv = $('<div>').addClass('col-md-6');
      let $image = $('<img>').addClass("image").attr('src', '/projects/product-project/img/product/' + $objData.image).width('100%');
      $imageDiv.append($image);
      let $desc = $('<h2>').text(nameSplit($objData.desc)[0] + ".").addClass("desc").attr('id','h2');
      let $color = $('<div>').text('Color: ' + $objData.color)
      let $price = $('<div>').text("Price: "+ toMoney($objData.price)).addClass("price");
      let $stock = $('<div>').text(itemsLeft($objData.stock)).addClass("stock");
      let $colors =$('<div>').text('Available in ').addClass('colors');
      let $cList = $('<ul>').append(_.map($objData.availableColors, function(e, i, c){return $('<li>').append(e);}));
      $colors.append($cList);
      let $specs =$('<div>').addClass('specs');
      
      if($objData.specs.length > 0){
      let $slist = $('<ul>').append(_.map($objData.specs, function(e, i, c){return $('<li>').append(e);}));
      $specs.text('Specs').append($slist);
      };
      
      if($objData.stock <= 10){$stock.addClass('red')} // Low stock Alert //
      let $description = $('<div>').append($price ,$stock, $color , $colors, $specs).addClass('col-md-6')
      let $itemDiv = $('<div>').attr('id','body').addClass('row')
      $itemDiv.append($imageDiv, $description);
      
      $('#body').replaceWith($itemDiv);
      $('#h2').replaceWith($desc);
      
      
    });
   }
   
   
    
    // Sort toggle //
  
   
    
        
      
    
  
        
    
    
    // Product Creation //
   
   
   
   function populateList(list){
     var sorted = _.map(list, function(item){
       $('#products').empty();
      let $imageDiv = $('<div>').addClass("col-md-2");
      let $image = $('<img>').addClass("image").attr('src', '/projects/product-project/img/product/thumbs/' + item.image);
      $imageDiv.append($image);
      let $desc = $('<div>').text(nameSplit(item.desc)[0] + ".").addClass('col-md-10 ').addClass("desc");
      $desc.append($('<a>').attr('href','#').attr('data-toggle','modal').attr('data-target', '#itemModal').text(' More Info'));
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
    // $('.image').css('style="width:100%)
     $('.red').css('color','red');
     $('.price').css('padding', '20px 0px 0px 60px ');
     $('.stock').css('padding' , '20px 0px 60px 60px');
     $('.desc').css('padding-left', '40px' );
     
     //currentList = list;
     modalCreation();
      
    
     
   }
   
   
   // Populate list of all items //
   
      
      
   
    
   
  
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
    
      var $form = $('.form');
      
    
      $form.on('submit', function(e){
        e.preventDefault();
        
        var $search = $('#name');
        var placeholder = $search.val();
        var regex = new RegExp( $search.val(), "i");
        var filtered = function(array){
        var id;
        
        
      var fun = function(array){
       var list = [];
        _.each( array, function(e, i, c){
          if(c.hasOwnProperty('id')){
            id = c;
            }
          if(arrayOrObj(e)){
            list.push(fun(e));
            return fun(e);
            
          }else{
            if(regex.test(e)){
              list.push(id);
            }
           
            
          }
            
          
          

        });
       
        return list;
      };
      function flatten(arr) {
          return arr.reduce(function (flat, toFlatten) {
            return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
            
          }, []);}
       
      return  _.unique(flatten(fun(array)));
      
    };
    
    
        if($search.val() === ""){
          currentList = items;
          $('#searchButton').text("search")
          $search.attr('placeholder', "What do you want?")
          
        }else{
          currentList = filtered(items);
          $form.trigger('reset');
          $search.attr('placeholder', placeholder)
          $('#searchButton').text("Clear search")
        }
   $('#sort').text('Sort by');
   if(currentList.length < 1){
     $('#products').empty();
     $('#products').addClass('container').append($('<div>').addClass('item').addClass('row').append($('<h1>').text("No Results")));
     modalCreation();
     
   }else{
    populateList(currentList);
   }
  
    //$form.trigger('reset');
    
    
      
      
    
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