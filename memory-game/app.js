document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector("#result");

    //card options
    const cardArray = [{
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        }
    ]

    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
        }
    }

    function checkForMAtch() {
        var firstCardId = cardsChosenId[0];
        var secondCardId = cardsChosenId[1];
        var cards = document.querySelectorAll('img');
        if (firstCardId === secondCardId) {
            alert('You clicked the same image twice');
            cards[firstCardId].setAttribute('src', 'images/blank.png');
            cards[secondCardId].setAttribute('src', 'images/blank.png');
        } else if (cardsChosen[0] === cardsChosen[1]) {
            cards[firstCardId].setAttribute('src', 'images/white.png');
            cards[secondCardId].setAttribute('src', 'images/white.png');
            cards[firstCardId].removeEventListener('click', flipCard);
            cards[secondCardId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[firstCardId].setAttribute('src', 'images/blank.png')
            cards[secondCardId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again')
        }
        cardsChosenId = []
        cardsChosen = []
        console.log(cardsWon.length);
        if(cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all';
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id');
        const chosenCardName = cardArray[cardId].name;
        console.log(chosenCardName);
        cardsChosen.push(chosenCardName);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosenId.length === 2) {
            setTimeout(checkForMAtch, 500);
        }
    }
    createBoard();
})