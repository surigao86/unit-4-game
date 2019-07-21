$(document).ready(function(){


    //set variables 
    let myNum = 0;
    let wins = 0;
    let losses = 0;
    let targetNum = 0;
    let totalScore = 0;
    


    function resetGame(){
        myNum = 0; 
        targetNum = generateTargetNumber();
        $(".winning-number h1").html(targetNum);
        applyGemNumbers();
    }

    function generateTargetNumber(){
        //random number from 10 to 85
        return Math.floor((Math.random() * 75) + 10);
    }

    function generateGemNumber(){
        //random number from 1 to 11
        return Math.floor((Math.random() * 10) + 1);
    }

    // console.log(generateTargetNumber());

    targetNum = generateTargetNumber();

    $(".winning-number h1").html(targetNum);

    function applyGemNumbers(){

        $('.gem1').attr('data-number',generateGemNumber());
        $('.gem2').attr('data-number',generateGemNumber());
        $('.gem3').attr('data-number',generateGemNumber());
        $('.gem4').attr('data-number',generateGemNumber());

        let gem1 = $('.gem1').data('number');
        let gem2 = $('.gem2').data('number');
        let gem3 = $('.gem3').data('number');
        let gem4 = $('.gem4').data('number');


        console.log(gem1, gem2, gem3, gem4);
    }

    applyGemNumbers();

    $('.gem').on('click', function(){
        // console.log('click');

        let gemNumber = $(this).data('number');
        // console.log(gemNumber);
        myNum += gemNumber;
        $('.my-score').html(myNum);

        if (myNum == targetNum){
            //You Win!
            $(".wins").html(wins +=1);
            resetGame();
        }else if(myNum > targetNum){
            //You Lose! 
            $(".losses").html(losses +=1);
            resetGame();
        }

    });

    

});