(function() {
//    document.body.style.zoom="90%"
    //Creating the global variables
    var daXpos = [0, 120, 240, 360, 480];
    var daYpos = [300, 400, 500];

    /*var ranX = daXpos.sort(function(){return Math.random() - .4});
        var ranY = daYpos.sort(function(){return Math.random() - .4});*/

    daXpos.sort(function() {
        return Math.random() - .3
    });
    daTransparent = [0, 120, 240, 360];
    dacopy = [-60, 100, 200, 300];
    dacopy.sort(function() {
        return Math.random() - .25
    });



    var smths = daXpos[0] + "px";
    var othersmths = daXpos[1] + "px";
    var counter = 0;
    var checkMe = 0;
    var score = 0;
    var guess = 0;

    //There are 8 blouses that need to appear randomly. Array and then random the elements
    var shirt = [1, 2, 3, 4, 5, 6, 7, 8];
    shirt.sort(function() {
        return Math.random() - .23
    });
    var shirtNumberss = [2, 3, 4];
    shirtNumberss.sort(function() {
        return Math.random() - .3
    });
    var shirtCounter = 0;
    var checkShirt = 0;
    var guessShirt = 0;
    var trueShirt = 0;

    //There are 7 shoes that need to appear randomly. Array and then random the elements
    var shoes = [1, 2, 3, 4, 5, 6, 7];
    shoes.sort(function() {
        return Math.random() - .3
    });
    var shoesNumber = [2, 3, 4];
    shoesNumber.sort(function() {
        return Math.random() - .3
    });
    var shoesCounter = 0;
    var checkShoes = 0;
    var guessShoes = 0;
    var trueShoes = 0;

    //There are 7 sox that need to appear randomly. Array and then random the elements
    var sox = [1, 2, 3, 4, 5, 6, 7];
    sox.sort(function() {
        return Math.random() - .3
    });
    var soxNumber = [2, 3, 4];
    soxNumber.sort(function() {
        return Math.random() - .3
    });
    var soxCounter = 0;
    var checkSox = 0;
    var guessSox = 0;
    var trueSox = 0;

    //There are 9 sox that need to appear randomly. Array and then random the elements
    var hats = [1, 2, 3, 4, 5, 6, 7, 9];
    hats.sort(function() {
        return Math.random() - .3
    });
    var hatsNumber = [2, 3, 4];
    hatsNumber.sort(function() {
        return Math.random() - .3
    });
    var hatsCounter = 0;
    var checkHats = 0;
    var guessHats = 0;
    var trueHats = 0;

    //There are 7 pants that need to appear randomly. Array and then random the elements
    var pants = [1, 2, 3, 4, 5, 6];
    pants.sort(function() {
        return Math.random() - .3
    });

    // Array.prototype.random = function(length) {
    //     return this[Math.floor((Math.random() * length))];
    // }


    var pantsNumber = [2, 3, 4];
    pantsNumber.sort(function() {
        return 0.5 - Math.random();
    });

    var pantsCounter = 0;
    var checkPants = 0;
    var guessPants = 0;
    var truePants = 0;

    //Creating the init function so I don't use the $(document).ready function all the time
    //also, when i do changes to variables will be usuable withing the scope, because I'm having problems
    //working with them outside the function

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



        //create the divs with the cap name and with the attr. add id's to all divs, and add them to main one
        for (var k = 1; k <= 8; k++) {
            $("<li>" + "</li>").attr("id", "shirts" + k).appendTo("#dashirts");
        };

        for (var k = 1; k <= 7; k++) {
            $("<li>" + "</li>").attr("id", "shoes" + k).appendTo("#shoes");
            $("<li>" + "</li>").attr("id", "sox" + k).appendTo("#sox");
            $("<li>" + "</li>").attr("id", "pants" + k).appendTo("#pants");
        };

        for (var k = 1; k <= 9; k++) {
            $("<li>" + "</li>").attr("id", "hats" + k).appendTo("#hats");
        };

        //create the divs with the little boxes to guess how many shirts were there and adding to 'numbers' div
        for (var k = 1; k <= 4; k++) {
            $("<div>" + k + "</div>").attr("id", "daShirts" + k).appendTo("#numbers1");
            $("<div>" + k + "</div>").attr("id", "daShoes" + k).appendTo("#numbers2");
            $("<div>" + k + "</div>").attr("id", "daSox" + k).appendTo("#numbers3");
            $("<div>" + k + "</div>").attr("id", "daHats" + k).appendTo("#numbers4");
            $("<div>" + k + "</div>").attr("id", "daPants" + k).appendTo("#numbers5");
        };

        //creating the divs for tries after the user has guessed
        for (var k = 1; k <= 5; k++) {
            $("<div>" + "</div>").attr("id", "guessMe" + k).appendTo("#test" + k);
        };

        //Hiding every element that I've created in the body
        for (var i = 1; i <= 9; i++) {
            $("#shirts" + i).hide();
            $("#shirts" + i + "_transparent").hide();
            $("#shoes" + i).hide();
            $("#shoes" + i + "_transparent").hide();
            $("#sox" + i).hide();
            $("#sox" + i + "_transparent").hide();
            $("#hats" + i).hide();
            $("#hats" + i + "_transparent").hide();
            $("#pants" + i).hide();
            $("#pants" + i + "_transparent").hide();
        };
        for (var i = 1; i <= 4; i++) {
            $("#daShirts" + i).hide();
            $("#daShoes" + i).hide();
            $("#daSox" + i).hide();
            $("#daHats" + i).hide();
            $("#daPants" + i).hide();
        };

        for (var i = 1; i <= 5; i++) {
            $("#test" + i).hide();
            $("#guessMe" + i).hide();
            $("#word" + i).hide();
            $("#numbers" + i).hide();
        };

        $("#shirt_BG").hide();
        $("#shoes_BG").hide();
        $("#sox_BG").hide();
        $("#hat_BG").hide();
        $("#popUp").hide();
        $("#score").hide();
        $("#howMany").hide();
        $("#shirtNumGuess").hide();
        $("#shoesNumGuess").hide();
        $("#soxNumGuess").hide();
        $("#hatNumGuess").hide();
        $("#pantsNumGuess").hide();


        //creating a for loop so i decide to show random elements that are hiden.
        //Making them draggable and droppable at the same time while the loop is checking
        //need to ask why i had to use '-1' at the array so the droppable objects are shown in order

        //-----------------------------shirt---------------------------------------------------
        //shirt
        myShirtPosition = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= shirtNumberss[0]; i++) {
            $("#shirts" + shirt[i]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                top: "310px",
                left: dacopy[i - 1] + "px"
            }, 2000).css({
                "position": "absolute"
            });
            $("#trans_shirts").droppable({
                accept: "#dashirts> li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    shirtCounter = shirtCounter + 1;
                    shirtsshoesCheck();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        top: "5px",
                        left: 100 + myShirtPosition + "px",
                    }).appendTo("#trans_shirts");
                    myShirtPosition = myShirtPosition + 100;
                }
            });
        };

        //Shoes

        myShoesPosition = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= shoesNumber[0]; i++) {
            $("#shoes" + shoes[i]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                top: "280px",
                left: dacopy[i - 1] + "px"
            }, 2000).css({
                "position": "absolute"
            });
            $("#shoes_transparent").droppable({
                accept: "#shoes > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    shoesCounter = shoesCounter + 1;
                    shirtsshoesCheck();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        top: "5px",
                        left: 100 + myShoesPosition + "px",
                    }).appendTo("#shoes_transparent");
                    myShoesPosition = myShoesPosition + 100;
                }
            });
        };

        //Sox

        mySoxPosition = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= soxNumber[0]; i++) {
            $("#sox" + sox[i]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                top: "350px",
                left: dacopy[i - 1] + "px"
            }, 2000).css({
                "position": "absolute"
            });
            $("#sox_transparent").droppable({
                accept: "#sox > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    soxCounter = soxCounter + 1;
                    shirtsshoesCheck();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        top: "5px",
                        left: 100 + mySoxPosition + "px",
                    }).appendTo("#sox_transparent");
                    mySoxPosition = mySoxPosition + 100;
                }
            });
        };

        //Hats

        myHatsPosition = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= hatsNumber[0]; i++) {
            $("#hats" + hats[i]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                top: "400px",
                left: dacopy[i - 1] + "px"
            }, 2000).css({
                "position": "absolute"
            });
            $("#hats_transparent").droppable({
                accept: "#hats > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    hatsCounter = hatsCounter + 1;
                    shirtsshoesCheck();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        top: "5px",
                        left: 100 + myHatsPosition + "px",
                    }).appendTo("#hats_transparent");
                    myHatsPosition = myHatsPosition + 100;
                }
            });
        };

        //creating a function where it checks if the draggable items are as same as the droppable
        //then show the other elements
        function shirtsshoesCheck() {
            if ((shoesCounter == shoesNumber[0]) && (shirtCounter == shirtNumberss[0]) &&
                (soxCounter == soxNumber[0]) && (hatsCounter == hatsNumber[0])) 
//                && (pantsCounter == pantsNumber[0]))
            {
//                for (var i = 1; i <= 5; i++) {
                for (var i = 1; i <= 4; i++) {
                    $("#my_room").animate({
                        width: "1170px"
                    });

                    $("#test" + i).fadeIn(3000);
                    //            $("#howMany").fadeIn(3000);
                    $("#numbers" + i).fadeIn(3000);
                    $("#shirtNumGuess").fadeIn(3000);
                    $("#shoesNumGuess").fadeIn(3000);
                    $("#soxNumGuess").fadeIn(3000);
                    $("#hatNumGuess").fadeIn(3000);
                    $("#girly").fadeOut(100);
                    $("#boyish").fadeOut(100);
                    $("#text_blob").fadeOut(100);
                    $("#help_text").fadeOut(100);
                };

                for (var i = 1; i <= 4; i++) {

                    $("#shirt_BG").fadeIn();
                    $("#shoes_BG").fadeIn();
                    $("#sox_BG").fadeIn();
                    $("#hat_BG").fadeIn();
                    $("#daShirts" + i).fadeIn(3000);
                    $("#daShoes" + i).fadeIn(3000);
                    $("#daSox" + i).fadeIn(3000);
                    $("#daHats" + i).fadeIn(3000);
 //                   $("#daPants" + i).fadeIn(3000);
                };
            };
        };

        //after the Shirt elements are dropped into their places, the next elements are shown
        //these new elements will be draggable
        //Shirts
        for (var i = 1; i <= 4; i++) {
            checkShirt = checkShirt + 1;
            $("#daShirts" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guessShirt = guessShirt + 1;
                    if (guessShirt != shirtNumberss[0] && guessShirt == 2) {
                        $("#daShirts" + shirtNumberss[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (shirtNumberss[0] == 2 && guessShirt != shirtNumberss[0] && guessShirt == 1) {
                        $("#daShirts" + shirtNumberss[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guessShirt == 3) {
                        $("#numbers1").hide(50);
                        trueShirt = 1;
                        checkAllGuess();
                        $("#guessMe1").show().text(shirtNumberss[0]).unbind();
                        $("#shirt_BG").hide();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (checkShirt == shirtNumberss[0]) {
                $("#test1").droppable({
                    accept: "#daShirts" + i,
                    drop: function(ev, ui) {
                        trueShirt = 1;
                        checkAllGuess();
                        $("#guessMe1").show().text(shirtNumberss[0]);
                        $("#shirt_BG").hide();
                        $(this).droppable("disable");
                        $("#numbers1").hide();
                        ui.draggable.draggable({
                            revert: false,
                        }).unbind().position({
                            of: $(this),
                            my: "center",
                            at: "center"
                        });
                    }
                });
            };
        };
        //after the Shoe elements are dropped into their places, the next elements are shown
        //these new elements will be draggable
        //shoes
        for (var i = 1; i <= 4; i++) {
            checkShoes = checkShoes + 1;
            $("#daShoes" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guessShoes = guessShoes + 1;
                    if (guessShoes != shirtNumberss[0] && guessShoes == 2) {
                        $("#daShoes" + shoesNumber[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (shoesNumber[0] == 2 && guessShoes != shoesNumber[0] && guessShoes == 1) {
                        $("#daShoes" + shoesNumber[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guessShoes == 3) {
                        $("#numbers2").hide(50);
                        trueShoes = 1;
                        checkAllGuess();
                        $("#guessMe2").show().text(shoesNumber[0]).unbind();
                        $("#shoes_BG").hide();
                    };
                }
            });
            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message
            if (checkShoes == shoesNumber[0]) {
                $("#test2").droppable({
                    accept: "#daShoes" + i,
                    drop: function(ev, ui) {
                        trueShoes = 1;
                        checkAllGuess();
                        $("#guessMe2").show().text(shoesNumber[0]);
                        $("#shoes_BG").hide();
                        $(this).droppable("disable");
                        $("#numbers2").hide();
                        ui.draggable.draggable({
                            revert: false,
                        }).unbind().position({
                            of: $(this),
                            my: "center",
                            at: "center"
                        });
                    }
                });
            };
        };

        //after the Sox elements are dropped into their places, the next elements are shown
        //these new elements will be draggable
        //Sox
        for (var i = 1; i <= 4; i++) {
            checkSox = checkSox + 1;
            $("#daSox" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guessSox = guessSox + 1;
                    if (guessSox != soxNumber[0] && guessSox == 2) {
                        $("#daSox" + soxNumber[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (soxNumber[0] == 2 && guessSox != soxNumber[0] && guessSox == 1) {
                        $("#daSox" + soxNumber[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guessSox == 3) {
                        $("#numbers3").hide(50);
                        trueSox = 1;
                        checkAllGuess();
                        $("#guessMe3").show().text(soxNumber[0]).unbind();
                        $("#sox_BG").hide();
                    };
                }
            });
            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message
            if (checkSox == soxNumber[0]) {
                $("#test3").droppable({
                    accept: "#daSox" + i,
                    drop: function(ev, ui) {
                        trueSox = 1;
                        checkAllGuess();
                        $("#guessMe3").show().text(shoesNumber[0]);
                        $("#sox_BG").hide();
                        $(this).droppable("disable");
                        $("#numbers3").hide();
                        ui.draggable.draggable({
                            revert: false,
                        }).unbind().position({
                            of: $(this),
                            my: "center",
                            at: "center"
                        });
                    }
                });
            };
        };

        //after the Hats elements are dropped into their places, the next elements are shown
        //these new elements will be draggable
        //Hats
        for (var i = 1; i <= 4; i++) {
            checkHats = checkHats + 1;
            $("#daHats" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guessHats = guessHats + 1;
                    if (guessHats != hatsNumber[0] && guessHats == 2) {
                        $("#daHats" + hatsNumber[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (hatsNumber[0] == 2 && guessHats != hatsNumber[0] && guessHats == 1) {
                        $("#daHats" + hatsNumber[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guessHats == 3) {
                        $("#numbers4").hide(50);
                        trueHats = 1;
                        checkAllGuess();
                        $("#guessMe4").show().text(hatsNumber[0]).unbind();
                        $("#hat_BG").hide();
                    };
                }
            });
            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message
            if (checkHats == hatsNumber[0]) {
                $("#test4").droppable({
                    accept: "#daHats" + i,
                    drop: function(ev, ui) {
                        trueHats = 1;
                        checkAllGuess();
                        $("#guessMe4").show().text(hatsNumber[0]);
                        $("#hat_BG").hide();
                        $(this).droppable("disable");
                        $("#numbers4").hide();
                        ui.draggable.draggable({
                            revert: false,
                        }).unbind().position({
                            of: $(this),
                            my: "center",
                            at: "center"
                        });
                    }
                });
            };
        };

        function checkAllGuess() {
            if ((trueShirt == 1) && (trueShoes == 1) && (trueSox == 1) &&
                (trueHats == 1))
//                 && (truePants == 1)) 
            {
                $("#trans_shirts").hide();
                $("#daShirts").hide();
                $("#shoes_transparent").hide();
                $("#shoes").hide();
                $("#sox_transparent").hide();
                $("#sox").hide();
                $("#hats_transparent").hide();
                $("#hats").hide();
                $("#pants_transparent").hide();
                $("#pants").hide();
                $("#shirtNumGuess").hide();
                $("#shoesNumGuess").hide();
                $("#soxNumGuess").hide();
                $("#hatNumGuess").hide();
                $("#pantsNumGuess").hide();
                $("#shirt_outline").hide();
                $("#shoes_outline").hide();
                $("#sox_outline").hide();
                $("#hats_outline").hide();
                $("#container").hide();

                $("#test1").hide();
                $("#test2").hide();
                $("#test3").hide();
                $("#test4").hide();

                if((storage.get("girly")) == true ){
                    $("#girly").fadeIn(2000);
                };

                if((storage.get("boyish")) == true ){
                    $("#boyish").fadeIn(2000);
                };

                $("#text_blob").fadeIn(100);

                $("#popUp").fadeIn(3000);
                $("#score").fadeIn(3000);
            };
        };


    }

    $(init);

    //if the person wants to restart the game, i'm using the reload function.
    //have to check if the score can be kept
    function reloadPage() {
        location.reload();
    }




})();