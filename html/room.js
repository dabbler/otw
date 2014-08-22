﻿(function() {
    function init() {
	    $("#girly").hide();
	    $("#boyish").hide();
	    
    	storage.get('girly');
    	storage.get('boyish');

        console.log(storage.get('girly'));
        console.log(storage.get('boyish'));

		if((storage.get("girly")) == true ){
		     $("#girly").show();
		};

		if((storage.get("boyish")) == true ){
		     $("#boyish").show();
		};

        $('#theCloset').hover(function() {
            if (!$(this).hasClass('animated')) {
                $(this).addClass('animated');
                $("#help_text").text("Ќе ми помогнеш ли да го средам плакарот?").css({
                	"top": "60px"
                });
            }
        }, function() {
            $(this).removeClass('animated');
            $("#help_text").text("Ова е мојата соба! Ќе ми помогнеш ли да ја средам? Кога собата ќе биде средена ќе ми помогнеш ли да напишам домашно?").css({
             	"top":"50px"
             });
        });

        $('#theToys').hover(function() {
            if (!$(this).hasClass('animated')) {
                $(this).addClass('animated');
                $("#help_text").text("Ќе ми помогнеш ли да ги средам играчките?").css({
                	"top": "60px"
                });
            }
        }, function() {
            $(this).removeClass('animated');
            $("#help_text").text("Ова е мојата соба! Ќе ми помогнеш ли да ја средам? Кога собата ќе биде средена ќе ми помогнеш ли да напишам домашно?").css({
            	"top":"50px"
            });
        });

        $('#theBooks').hover(function() {
            if (!$(this).hasClass('animated')) {
                $(this).addClass('animated');
                $("#help_text").text("Ќе ми помогнеш ли да ги средам книгите?").css({
                	"top": "60px"
                });

            }
        }, function() {
            $(this).removeClass('animated');
            $("#help_text").text("Ова е мојата соба! Ќе ми помогнеш ли да ја средам? Кога собата ќе биде средена ќе ми помогнеш ли да напишам домашно?").css({
            	"top":"50px"
            });
        });

        $('#theWorkingTable').hover(function() {
            if (!$(this).hasClass('animated')) {
                $(this).addClass('animated');
                $("#help_text").text("Ќе ми помогнеш ли да напишам домашно?").css({
                	"top": "60px"
                });
            }
        }, function() {
            $(this).removeClass('animated');
            $("#help_text").text("Ова е мојата соба! Ќе ми помогнеш ли да ја средам? Кога собата ќе биде средена ќе ми помогнеш ли да напишам домашно?").css({
            	"top":"50px"
            });
        });

	};
    
    $(init);

})();