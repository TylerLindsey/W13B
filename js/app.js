// The function below sets numUser as a JS variable to reference the HTML dropdown options of the same name. The If statement links the number on the drop down to the number in the API to display the correct information. The else function catches if there is an error. 
function playerSelector(){
  console.log(document.getElementById('numUsers').value);
  let numUsers = document.getElementById('numUsers').value;
  if (numUsers == '1', '2'){
    // console.log(numUsers + ' if');
    // document.getElementById('answer').innerHTML = 'supposed to be activity';
    axios.request({
      method: "GET",
      url: "http://www.boredapi.com/api/activity",
      params: {
        'participants' : numUsers
      }
    }).then(successFunction).catch(failFunction);
  } else {
      console.log('Incorrect number of players. Must be 1-4');
      document.getElementById('answer').innerHTML = 'Incorrect number of players. Must be 1-4';
  }
}

// if the API was successful the data from activity is logged into the console and displayed on the webpage.
function successFunction(response){
  console.log(response.data.activity);
  document.getElementById('answer').innerHTML = response.data.activity;
}

function failFunction(error){
  console.log(error);
}

// to make it so the user can just 'reroll' an activity I just linked the same event to a different button. So both buttons are connected to the same event.
document.getElementById('activity').addEventListener('click', playerSelector); 
document.getElementById('randomizer').addEventListener('click', playerSelector); 