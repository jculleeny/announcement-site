------ Needs ------
- Way to vote on bb/gg/bg
- Submit vote with name
- Optional name ideas
- Spotify playlist
- Link to registry
- Graph of vote results
- 

---Slides---
1.) Intro
    a.) We are having twins
    b.) <p> tag with info
    c.) baby registry
2.) Vote for what the sexes will be
3.) Guess the delivery date
    a.) mention the actual delivery date with info
    b.) calendar input that takes the guess
4.) Help name the babies
    a.) up to six names, 3 different combos
5.) Give us your full name to keep track of the data and info
6.) Charts with various information
7.) Thanks from Bri, John, Jack, and the twins


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/styles.css">
    <title>Twins, yo!</title>
</head>
<body>
    <div class="banner-wrapper">
        <h1>We havin' twins!</h1>
        <p>Bri and John are having twins, and we want you to guess the sexes and delivery date!
            We also want to hear some good name suggestions from you! Give us your full name to 
            see who comes closest!
        </p>
        <div class="form-wrapper">
            <form action="/" id='form' name='form' method="POST">
                <h2>What's it going to be ya'll?</h2>
                <div class="radios-wrapper">
                    <input type="radio" name="sex" id="boyBoy">
                    <label for="boyBoy">Boy & Boy</label>
                    <input type="radio" name="sex" id="boyGirl">
                    <label for="boyGirl">Boy & Girl</label>
                    <input type="radio" name="sex" id="girlGirl">
                    <label for="girlGirl">Girl & Girl</label>
                </div>
                <div class="calendar-wrapper">
                    <label for="deliveryDate">Guess the Delivery Date ( 11/09/20 ):</label>
                    <input type="date" name="deliveryDate" id="deliveryDate">
                </div>
                <div class="name-suggestion-wrapper">
                    <label for="">Name our babies:</label>
                    <input type="text" name="nameSuggestion" id="nameSuggestion1">
                    &
                    <input type="text" name="nameSuggestion" id="nameSuggestion2">
                </div>
                <div class="name-wrapper">
                    <label for="guesser">Full Name:</label>
                    <input type="text" name="guesser" id="guesser">
                </div>
            </form>
        </div>
        <div style="width: 400px;">
        <canvas id="myChart" width="200" height="200"></canvas>
        </div>
        <div class="register-wrapper">
            <h3><a href="">Link to our Baby Registry</a></h3>
        </div>
    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.bundle.js"></script>
    <script src="src/main.js"></script>
    <script src="src/donut.js"></script>
</body>
</html>