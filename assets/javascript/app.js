$(document).ready(function(){

    $('button').on('click', function() {
        var soccer = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + soccer + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {


                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    
                    var soccerDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var soccerImage = $('<img/>');

                    soccerImage.addClass('anImg')

                    soccerImage.attr('src', results[i].images.fixed_height.url);

                    soccerImage.attr('data-still', results[i].images.fixed_height_still.url)

                    soccerImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    soccerDiv.append(p);

                    soccerDiv.append(soccerImage);

                    soccerDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var soccerplayers = [''];

    
        //This function "adds" the buttons 

        // handles the event when clicked
        $('#theButton').on('click', function(){
            var soccerButton = $("#gif-input").val();
            //adds the new animal

            var newButton = $("<button/>").addClass( "btn btn-danger soccer").attr('data-name',soccerButton).html(soccerButton).css({'margin': '5px'});
            
            $("#soccerbuttons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + soccerButton + "&api_key=dc6zaTOxFJmzC&limit=10";
                console.log(soccerButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var soccerDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var soccerImage = $('<img/>');

                    soccerImage.addClass('anImg')

                    soccerImage.attr('src', results[i].images.fixed_height_still.url);

                    soccerImage.attr('data-still', results[i].images.fixed_height_still.url)

                    soccerImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    soccerDiv.append(p);

                    soccerDiv.append(soccerImage);

                    soccerDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});