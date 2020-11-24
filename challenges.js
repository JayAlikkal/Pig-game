//documnet.querySelector, Math.random, .addEventListener, var.src
//
//
var scores, roundscore, activeplayer, dice, contigame;
init();


document.querySelector('.btn-roll').addEventListener('click', function(){

  dice = Math.floor(Math.random()*6) +1
  //test
  //document.querySelector('#current-'+ activeplayer).textContent = dice;
  var diceimg = document.querySelector('.dice');
  diceimg.style.display = 'block'
  diceimg.src = 'dice-'+dice + '.png';
  if(dice !== 1){
  roundscore += dice;
  document.querySelector('#current-'+ activeplayer).textContent = roundscore;
  }
  else{
    //change Player
    nextplayer();
    alert("You rolled a 1");
  }
});


document.querySelector('.btn-new').addEventListener('click', init);


document.querySelector('.btn-hold').addEventListener('click', function(){

    score[activeplayer] += roundscore;
    document.getElementById('score-'+ activeplayer).textContent = score[activeplayer];
    //check winner
    if(score[activeplayer] >= 100){
      document.getElementById('name-'+ activeplayer).textContent = 'We have a Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('player-'+ activeplayer +'-panel').classList.add('winner');
      document.querySelector('player-'+ activeplayer +'-panel').classList.remove('active');
      contigame = false;
    }
    else{
      //change Player
        nextplayer();
    }
});


function nextplayer(){
  document.querySelector('#current-'+ activeplayer).textContent = '0';
  //ternary operator;just like if else
  activeplayer === 0 ? activeplayer = 1: activeplayer = 0;
  //toggle; remove & add; active
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
  roundscore = 0;
}
function init(){
  score = [0,0];
  roundscore = 0;
  activeplayer = 0;
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'player 2';
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.add('active');

}
