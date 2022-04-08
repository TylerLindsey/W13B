

function playerSelector(){
  console.log(document.getElementById('numUsers').value);
  let numUsers = document.getElementById('numUsers').value;
  // after talking with Mark I had trouble getting it to display 1-4 in the if, now all the drop down options work because i turned (numUsers == '1') into (numUsers == '1', '2') and I have no idea why. I thought if anything that 1 and 2 would work from the dropdown and 3 and 4 would still return the error, but they all return 'insert games from API'
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

function successFunction(response){
  console.log(response.data.activity);
  document.getElementById('answer').innerHTML = response.data.activity;
}

function failFunction(error){
  console.log(error);
}

document.getElementById('activity').addEventListener('click', playerSelector); 

// where does .then/.catch go? They go after the axios request, does that mean each axios needs it's own then/catch? and does each requestion also need it's own success/fail function? or should i have the 
// I know that with the else/if that numUsers == x doesnt work, but is everything else going to work? 
// im having trouble displaying what is on the API on the screen
// I guess im running out of ideas and want to know if i am at least going down the rght path