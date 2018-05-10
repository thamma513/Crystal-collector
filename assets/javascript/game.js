$(document).ready(function () {
    var Random = Math.floor(Math.random() * 102 + 8)


    $('#guessingNumber').append("<h2>Number to guess: " +Random +"</h2>");

    var num1 = Math.floor(Math.random() * 12 + 1)
    var num2 = Math.floor(Math.random() * 12 + 1)
    var num3 = Math.floor(Math.random() * 12 + 1)
    var num4 = Math.floor(Math.random() * 12 + 1)

    var playerTotal = 0;
    var wins = 0;
    var losses = 0;


    $('#wins').append(wins);
    $('#losses').append(losses);

    function reset() {
        Random = Math.floor(Math.random() * 102 + 8);
        console.log(Random)
        $('#guessingNumber').append(Random);
        num1 = Math.floor(Math.random() * 12 + 1);
        num2 = Math.floor(Math.random() * 12 + 1);
        num3 = Math.floor(Math.random() * 12 + 1);
        num4 = Math.floor(Math.random() * 12 + 1);
        playerTotal = 0;
        $('#totalScore').html(playerTotal);
    }

    function winning() {
        alert("You won!");
        wins++;
        $('#wins').append(wins);
        reset();
    }

    function loser() {
        alert("You lose!");
        losses++;
        $('#losses').append(losses);
        reset()
    }
    $('.red').on('click', function () {
        playerTotal = playerTotal + num1;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').html("<h2> Current score: " +playerTotal+ "</h2>");
        if (playerTotal == Random) {
            winning();
        }
        else if (playerTotal > Random) {
            loser();
        }
    })
    $('.blue').on('click', function () {
        playerTotal = playerTotal + num2;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').html("<h2> Current score:" +playerTotal+ "</h2>");
        if (playerTotal == Random) {
            winning();
        }
        else if (playerTotal > Random) {
            loser();
        }
    })
    $('.yellow').on('click', function () {
        playerTotal = playerTotal + num3;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').html("<h2> Current score:" +playerTotal+ "</h2>");

        if (playerTotal == Random) {
            winning();
        }
        else if (playerTotal > Random) {
            loser();
        }
    })
    $('.green').on('click', function () {
        playerTotal = playerTotal + num4;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').html("<h2> Current score:" +playerTotal+ "</h2>");

        if (playerTotal == Random) {
            winning();
        }
        else if (playerTotal > Random) {
            loser();
        }
    });
}); 