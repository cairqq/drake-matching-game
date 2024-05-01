// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
let clickedIds = [];
let submitButton =
    document.querySelector(".submit");
let messages = document.querySelector(".messages");

// Array containing image URLs
let url = "http://cdn.glitch.global/8f1abe55-c0a4-499c-be9d-2c1731a172a2/";
let cards = ["image0.jpeg?v=1711491796041", "image1.jpeg?v=1711491795496", "image2.jpeg?v=1711491796502", "image3.jpeg?v=1711491797009", "image4.jpeg?v=1711491797437", "image5.jpeg?v=1711491797851", "image6.jpeg?v=1711491798326", "image7.jpeg?v=1711491798737"


];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
};

submitButton.onclick = function() {
    let username = document.querySelector("input").value;
    console.log(username);
    messages.innerHTML = (username + " is now playing");
};



// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Deck has " + cards.length + "cards.");

    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);

            game.insertAdjacentHTML("beforeend", "<div style= 'background-image: url(" + url + card + ")' class= 'card'>");

        }


    }
    buttonDouble.style.color = "silver";
    console.log("now the deck has " + cards.length + " cards");
};

// Button to Shuffle Cards\
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    let i = 0;
    console.log("shuffle it");
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")'id=" + i + " class='card'>");
        i = i + 1;
    }
};

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;

}


// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (card of cards) {

        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }


};

// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
    console.log(clickedId);
    if (clickedId !== "") {
        document.getElementById(clickedId).style.backgroundImage = "url( '" + url + cards[clickedId] + "')";
        clickedIds.push(clickedId);
        console.log(clickedIds);
    }
    if (clickedIds.length === 2) {
        let card1picture = document.getElementById(clickedIds[0]).style.backgroundImage;
        let card2picture = document.getElementById(clickedIds[1]).style.backgroundImage;
        console.log(card1picture);
        console.log(card2picture);
        if (card1picture === card2picture) {
            console.log("match");
            document.getElementById(clickedIds[0]).id = "";
            document.getElementById(clickedIds[1]).id = "";
            clickedIds = [];
            console.log(clickedIds);
        }

    } else if (clickedIds.length > 2) {
        document.getElementById(clickedIds[0]).style.backgroundImage = "";
        document.getElementById(clickedIds[1]).style.backgroundImage = "";
        clickedIds = [];
        clickedIds.push(clickedId);
        console.log(clickedIds);
    }

});