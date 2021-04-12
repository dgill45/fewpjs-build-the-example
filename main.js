// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const like = document.querySelectorAll('.like-glyph') 
like.addEventListener("click", function(callback){
  const heart = e.target
});

function mimicServerCall(){
  return fetch('http://somedumbURL')
  .then(resp => resp.json())
  .then(json => adjudicateResponse(json))
  .catch(error => console.log(error));
}


function adjudicateResponse(){
  if (reject){
    const div = document.getElementById('hidden');
    div.classList.remove('hidden');
    console.log(error);
    setTimeout(() => div.classList.add('hidden', 5000),
  }else{
    heart.innerText = glyphStates[heart.innerText];
    heart.style.color = colorStates[heart.style.color];

  }
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
