// function playerSelector(){
//   if (numUsers == '1player'){
//     console.log(numUsers);
//     document.getElementById('answer').innerHTML = 'insert games from API';
//     axios.request({
//       method: "GET",
//       url: "http://www.boredapi.com/api/activity?participants=1"
//     }).then(successFunction).catch(failFunction);
//   } else if (numUsers == 2) {
//     console.log(numUsers);
//     document.getElementById('answer').innerHTML = 'insert games from API';
//     axios.request({
//       method: "GET",
//       url: "http://www.boredapi.com/api/activity?participants=2"
//     }).then(successFunction).catch(failFunction);
//   } else if (numUsers == 3) {
//     console.log(numUsers);
//     document.getElementById('answer').innerHTML = 'insert games from API';
//     axios.request({
//       method: "GET",
//       url: "http://www.boredapi.com/api/activity?participants=3"
//     }).then(successFunction).catch(failFunction);
//   } else if (numUsers == 4) {
//     console.log(numUsers);
//     document.getElementById('answer').innerHTML = 'insert games from API';
//     axios.request({
//       method: "GET",
//       url: "http://www.boredapi.com/api/activity?participants=4"
//     }).then(successFunction).catch(failFunction);
//   } else {
//     console.log('Incorrect number of players. Must be 1-4');
//     document.getElementById('answer').innerHTML = 'Incorrect number of players. Must be 1-4';
//   }
// }

// function successFunction(response){
//   console.log(response);
// }

// function failFunction(error){
//   console.log(error);
// }

// document.getElementById('activity').addEventListener('click', playerSelector); 

//  else if (numUsers == 2) {
//   console.log(numUsers);
//   document.getElementById('answer').innerHTML = 'insert games from API';
//   axios.request({
//     method: "GET",
//     url: "http://www.boredapi.com/api/activity?participants=2"
//   }).then(successFunction).catch(failFunction);
// } else if (numUsers == 3) {
//   console.log(numUsers);
//   document.getElementById('answer').innerHTML = 'insert games from API';
//   axios.request({
//     method: "GET",
//     url: "http://www.boredapi.com/api/activity?participants=3"
//   }).then(successFunction).catch(failFunction);
// } else if (numUsers == 4) {
//   console.log(numUsers);
//   document.getElementById('answer').innerHTML = 'insert games from API';
//   axios.request({
//     method: "GET",
//     url: "http://www.boredapi.com/api/activity?participants=4"
//   }).then(successFunction).catch(failFunction);
// } else {
//   console.log('Incorrect number of players. Must be 1-4');
//   document.getElementById('answer').innerHTML = 'Incorrect number of players. Must be 1-4';
// }