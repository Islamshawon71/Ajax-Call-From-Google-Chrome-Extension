jQuery( document ).ready(function() { 

    jQuery( "#LoginButton" ).click(function() {
         
        jQuery.ajax({ 
            type: "GET",
            beforeSend: function(request) {
              request.setRequestHeader("Authorization", '72f1cf8ec8b41e05c31bf426e0e5f32f');
            },
            url: "https://fortnite-api.theapinetwork.com/store/get",  
            success: function(result) {
                var html = '';
                jQuery.each( result.data, function( i, items ) {
                    html = html + "<p>" +items.item.name+ "</p>";
                });
                jQuery('#list').empty();
                jQuery('#list').append(html);
            }

        });


    });


});