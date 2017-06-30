/*global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-quotes').css('background-color', '#3F6EB5').css('border-radius', '4px');
        $('.heading-quotes').css('color', 'white').css('padding-left', '10px');
        $('.quote').css('color', 'white').css('font-style', 'italic');
        $('#quotes').css('padding-right', '10px').css('padding-left', '10px');
        $('#quotes:last-child').css('padding-bottom', '4px');
        $('#section-quotes').prependTo('#sections');
        $('#image-billy').attr('src', 'images/billy/billy-0.jpg');
        $('#section-bio p:last-child').remove();
        $('#list-top-rated').css('color', 'white').css('font-style', 'italic');
        
       
       
          
       let topRated = data.discography.topRated;
       let records = data.discography.recordings;
    
       // Making Top Rated list //
       
       var topRateListItems  = _.map(topRated, function(recording) {
           let $title = $('<div>').text("Title: "+ recording.title).addClass("title");
            let $artist = $('<div>').text("Artist: " + recording.artist).addClass("artist");
            let $release = $('<div>').text("Title: " + recording.release).addClass("release");
            let $year = $('<div>').text("Title: " + recording.year).addClass("year");
            let $list = $('<li>').append($title, $artist, $release, $year);
           return $list
            .addClass('recording')
            .attr('type', 'top-rated')
            .data('recording', recording);
       });
       
      $('#list-top-rated').append(topRateListItems);
         
         
        //Making recordings section //
         let $sectionR = $('<section>').attr('id', 'section-recordings');
       $sectionR.append($('<ul id="list-recordings">')).appendTo('#sidebar');
       $('<header  id="header-recordings class="header-recordings">').text("Discography").prependTo($sectionR);
       
        
        //Making Discography list //
        var discographyListItems = _.map(records,function(recording){
            let $title = $('<div>').text("Title: "+ recording.title).addClass("title");
            let $artist = $('<div>').text("Artist: " + recording.artist).addClass("artist");
            let $release = $('<div>').text("Title: " + recording.release).addClass("release");
            let $year = $('<div>').text("Title: " + recording.year).addClass("year");
            let $list = $('<li>').append($title, $artist, $release, $year);
            return $list
            .addClass('recording')
            .attr('type', 'discography')
            .data('recording', recording);
        });
        
        $('#list-recordings').append(discographyListItems);
       
          
         
       
       
       //Making picture for each list //
       
        var $divTopImage = $('<div>').attr('id', 'image-container-top-rated');
     $divTopImage.addClass('image-container');
     var $topImage = $('<img>').attr('id', 'top-rated-image');
     $topImage.attr('style', 'img-align');
     $topImage.attr('src', topRated[0].art);
     $divTopImage.append($topImage).prependTo($('#section-top-rated'));  
     
   
     
     var $divDiscography = $('<div>').attr('id', 'image-container-recording');
     $divDiscography.addClass('image-container');
     var $discographyImage = $('<img>').attr('id', 'recording-image');
     $discographyImage.attr('style', 'img-align');
     $discographyImage.attr('src', records[0].art);
     $divDiscography.append($discographyImage).prependTo($('#section-recordings'));  
      
       
       

        
          // Dynamic pictures //
                // Billy//
        var count = 1;
        $('#image-billy').on('click',function(event){
           $("#image-billy").fadeOut('3000', function(event){
               if(count > data.images.billy.length-1){
                   count = 0;
               }
               $('#image-billy').attr('src', 'images/billy/billy-' +count +'.jpg').fadeIn(1000);
               count++})});
               
               // album-photos //
        $('.recording').on('click', function(event) {
            
         const $li = $(event.currentTarget);
         const type = $li.attr('type');
         const recording = $li.data('recording');
         if(type === 'discography'){
            $('#list-recordings li').removeClass('selectedList');
            $li.addClass('selectedList');
            $discographyImage.attr('src', recording.art);
         }else{
          $topImage.attr('src', recording.art);
          $('#list-top-rated li ').removeClass('selectedList');
          $li.addClass('selectedList');
         }
         
          
       });
       
       
        // Create Billy Rider section //
        let $section = $('<section>').attr('id', 'section-rider');
        $section.append($('<h3>').text('Billy\'s Rider')).appendTo($('#sections'));
        
       
       
       // Create Billy Rider table //
     var createTable = function(rider){
    var createRow = function(instrument){
        var $row = $("<tr>").addClass("row");
        var $instrument = $("<td>").text(instrument.type).addClass("instrument");
        var $desc = $("<td>").text(instrument.desc).addClass("desc");
        $row.append($instrument);
        $row.append($desc);
        return $row;
    };
    var $table = $("<table>");
    var $titleRow = $('<tr>');
    $titleRow.append($("<td>").text("Item").addClass("table_title"));
    $titleRow.append($("<td>").text("Description").addClass("table_title"));
    var $rows = data.rider.map(createRow);
    $table.append($rows);
    $table.prepend($titleRow);
    $table.attr('id', 'rider');
    return $table;
};
var $table = createTable(data.rider).appendTo($section);
       
       
       
       //var $topRatedDiv = $('<div>').append($divTopImage, $('#list-top-rated') );
       //$topRatedDiv.appendTo('#section-top-rated');
       
       
       
              //css changes //
       
        //$('.title').css('background-color', 'blue');
        //$('.artist').css('background-color', 'green');
        //$('.release').css('background-color', 'purple');
        //$('.year').css('background-color', 'gold');
        $('.recording').css("padding-bottom", '20px');
        $('#list-recordings').css('color', 'white')//.css('font-style', 'italic');
        $('.instrument').css("padding-right", '30px');
        $('li').css('list-style-type', 'none');
        //$('#sidebar').attr('style', "text-align : center");
        $('.table_title').wrapInner('<strong />');
        $('#image-billy').css("width", '100%');
        $('#image-billy').css('margin-bottom', '50px');
        $('header').css('font-size', '50px');
        $('#sidebar').css('background-color', 'grey');
        $('body').css('background-color', '#3F6EB5')
        $('main').css('background-color', '#DCD6C3')
        //$('section ul').css('background-color', '#3F6EB5')
        
        
       
       
        // Table css changes //
        
        $('#rider tr:even').css({
            'background-color': '#001A57',
            'color': 'white'
            });
        $('#rider tr:odd').css('background-color', 'white');
        $('#rider tr:first').css({
             'background-color' :'#2F5690',
             "color" : "white "
         });
         $('nav').css('backgroud-color', '#001A57')
         $('#rider').css('border', '#2F5690  5px solid');
         $('#rider').css('backgroud-color', '#2F5690');
         
         
        
       
        
       
       
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});

