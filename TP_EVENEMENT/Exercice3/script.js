var scores, roundScore, activePlayer, gamePlaying;
go();
let lance =document.querySelector('.lance');
let passe =document.querySelector('.passe');
let j1=document.querySelector('.joueur-1-div');

lance.addEventListener('click', function() {
    if(gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#scoref-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }    
});
passe.addEventListener('click', function() {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
   
let s1=document.getElementById('scoref-0');
let s2=document.getElementById('scoref-1');

    s1.textContent = '0';
   s2.textContent = '0';
    s2.textContent = '0';

    document.querySelector('.joueur-1-div').classList.toggle('active');
    document.querySelector('.joueur-2-div').classList.toggle('active');


    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.nouveau').addEventListener('click', go);

function go() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('scoref-0').textContent = '0';
    document.getElementById('scoref-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.joueur-1-div').classList.remove('winner');
    document.querySelector('.joueur-2-div').classList.remove('winner');
    document.querySelector('.joueur-1-div').classList.remove('active');
    document.querySelector('.joueur-2-div').classList.remove('active');
    document.querySelector('.joueur-1-div').classList.add('active');
}







