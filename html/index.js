(function() {
    
    function init() {
        var audio, dir_mk_index, playlist_mk, playlist_sq, playlist_index, ext, audio_order;
        
        dir_mk_index = "mk_sounds/index/";
        dir_sq_index = "sq_sounds/index/";
        playlist_mk = ["welcome", "jazik", "makedonski", "shqip", "continue"];
        playlist_sq = ["welcome_alb", "jazik_alb", "makedonski_alb", "shqip_alb", "continue_alb"];
        audio_order = [dir_mk_index+"jazik", dir_sq_index+"jazik_alb", dir_mk_index+"makedonski", dir_sq_index+"shqip_alb"];
        ext = ".ogg";
        
        playlist_index = 0;
        
        audio = new Audio();
        
        audio.src = audio_order[0] + ext;
        audio.play();
        audio.addEventListener("ended", function() { switch_me(); });
        
        function switch_me(){
            if(playlist_index == (audio_order.length-1)){
                audio.pause();
            } else {
                number_me();
                audio.src = audio_order[playlist_index+1] + ext;
                setTimeout(function(){audio.play();}, 2000);
                playlist_index++;
            }
        }
        

       $("#chose_mk_page").hide();
       $("#chose_sq_page").hide();

       $("#front_page").hide();
       $("#welcome").hide();

       $("#front_page_sq").hide();
       $("#welcome_sq").hide();

       $("#chose_mk_page").fadeIn(3000);
       $("#chose_sq_page").fadeIn(3000);

        $("#goToIndexMK").click(function() {
            $("#front_page").fadeIn(2000);
            $("#welcome").fadeIn(2000);
            audio.src = dir_mk_index+"welcome"+ext;
            audio.play();
            function number_me(){
                playlist_index = audio_order.length-1;
            }

            $("#front_page_sq").hide();
            $("#welcome_sq").hide();
        });
        
        

        $("#goToIndexSQ").click(function() {
            $("#front_page_sq").fadeIn(2000);
            $("#welcome_sq").fadeIn(2000);
            audio.src = dir_sq_index+"welcome_alb"+ext;
            audio.play();

            $("#front_page").hide();
            $("#welcome").hide();
        });

    }
    
    $(init);

})();