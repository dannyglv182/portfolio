var projectOneDesc = document.getElementById('description_1');
var projectTwoDesc = document.getElementById('description_2');
var projectThreeDesc = document.getElementById('description_3');

var text1 = document.createTextNode(`A Flask application where users can log in
                                    and share posts. The passlib libary is used
                                    to hash and verify passwords. API endpoints
                                    exist for adding users and blog posts. JSON
                                    and jQuery make posts appear asynchronously.
                                    `);


var text2 = document.createTextNode(`A Connect Four game written in Python.
                                    Moves are played as row and column
                                    combinations and each match is played
                                    against the computer. Pytest is used for testing.
                                    `);

var text3 = document.createTextNode(`A Twilio application that sends a text from the browser.
                                    A copy of the text is stored in a postgreSQL database and
                                    the Spark micro framework is used along with Java to send
                                    the message.
                                    `);

projectOneDesc.appendChild(text1);
projectTwoDesc.appendChild(text2);
projectThreeDesc.appendChild(text3);


// Checks the input form to make sure values are present.
function validate() {
  var user_message = document.getElementById('message').value
  if (user_message == '' || user_message == ' ') {
    alert('Please enter a message before sending.');
    return false;
  }
}
