// In Class Project: Modify the login app to register a new user. Test that a new user can register, and login on the same page without reloading the page. Check to make sure that the username is not already taken and that the password is at least 8 characters long.
var objPeople = [
	{
		username: "sam",
		password: "password25"
	},
	{
		username: "matt",
		password: "password88"
	},
	{
		username: "chris",
		password: "password3"
	}
]


//login functionality
function getInfo() {
	//retrieve data input from the form
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	
	//loop through all the user objects and confirm if the username and passwords are correct
	for(i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			return
		}
	}

	//error if username and password do not match
	console.log("incorrect username or password")
}


//register new user functionality
function registerUser() {
	//retrieve data input from the form
	var registerUser = document.getElementById("newUsername").value
	var registerPassword = document.getElementById("newPassword").value
	var newUser = {
		username: registerUser,
		password: registerPassword
	}
	
	//checks to make sure the username is not already taken, stops the function if it is
	for(i = 0; i < objPeople.length; i++) {
		if(registerUser == objPeople[i].username) {
			alert("That username is already in use")
			return
		} else if (registerPassword.length < 8) {
			alert("That password is too short")
			return
		}
	}

	//pushes the new user into the objPeople array as a new object at the end
	objPeople.push(newUser)
	console.log(objPeople)
}