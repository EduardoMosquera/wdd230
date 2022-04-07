document.querySelector(".like-btn").click( function() {

	document.querySelector(this).classList.toggle('clicked');
  event.preventDefault();

});



document.querySelector(".panel-group_btn span").click(function(){
                       var btnStorage = document.querySelector(this).attr("id");

                        if(document.querySelector(this).classList.contains("clicked")) {
                            localStorage.setItem(btnStorage, 'true');
                        } else {
                            localStorage.removeItem(btnStorage, 'true');
                        }

                    });


                    document.querySelector( ".panel-group_btn span" ).each(function() {
                      var mainlocalStorage = document.querySelector( this ).attr( "id" );

                      if(localStorage.getItem(mainlocalStorage) == 'true') {
                        document.querySelector(this).classList.add("clicked");
                    } else {
                        document.querySelector(this).removeClass("clicked");
                    }
});
