app.controller('myCtrl', function($scope){
	// store all users here
	$scope.users = []

	$scope.login = function() {
		// stop the function if form is empty
		if(!$scope.username || !$scope.password) { 
			alert('missing info!')
			return 
		}

		// store user input
		$scope.username = $scope.username
		$scope.password = $scope.password

		// loop through array of users
		angular.forEach($scope.users, function(value, key) {
			// check to make sure the username and password match
		    if(value.username == $scope.username && value.password == $scope.password){
		  		alert('success ' + value.username + ' has been logged in!')
		    }
		})

		// clear out user input
		$scope.username = ''
		$scope.password = ''
	}

	$scope.register = function() {
		// stop the function if form is empty
		if(!$scope.newUsername || !$scope.newPassword) { 
			alert('missing info!')
			return 
		}

		// create new user
		$scope.newuser = {
			username : $scope.newUsername,
			password : $scope.newPassword
		}

		// clear out form fields
		$scope.newUsername = ''
		$scope.newPassword = ''

		// add new user to $scope.users array
		$scope.users.push($scope.newuser)
			
		alert($scope.newuser.username + ' has been added to your list of current users. Your total user count is now: ' + $scope.users.length)
		
		// display all users after success
		// angular.forEach($scope.users, function(value, key){
		// 	console.log(value.username + ', ' + value.password)
		// })
	}
})