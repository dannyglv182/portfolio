var projectOneDesc = document.getElementById('description_1');
var projectTwoDesc = document.getElementById('description_2');
var text1 = document.createTextNode(`A Flask application where users can log in and share posts.
                                    The passlib libary is used to hash and verify passwords. API endpoints exist for
                                    adding users and blog posts. JSON and jQuery make posts appear asynchronously.
                                    `);


var text2 = document.createTextNode(`A Connect Four game played against the computer. Pytest is used for testing and moves
                                     are played as row and column combinations. 
                                    `);

projectOneDesc.appendChild(text1);
projectTwoDesc.appendChild(text2);
