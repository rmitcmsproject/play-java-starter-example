app.controller('loginController', function($scope) {

	if (window.console) {
		console.log("Welcome to your Play application's JavaScript!");
		$('.toggle').on('click', function() {
			$('.mycontainer').stop().addClass('active');
		});

		$('.close').on('click', function() {
			$('.mycontainer').stop().removeClass('active');
		});
	}

	$scope.user = {};
	$scope.title = "LOGIN";

	$scope.register = function() {

		if ($scope.user.role && $scope.user.ID && $scope.user.pass
				&& $scope.user.passConfirm) {
			if ($scope.user.pass == $scope.user.passConfirm)
				console.log($scope.user);
			else
				$scope.errorMessage("Error","Password Dont Match");
				

		}
	}

	
	$scope.errorMessage = function(mytype,mymessage){
		$scope.$parent.modal={};
		$scope.$parent.modal.type=mytype;
		$scope.$parent.modal.message=mymessage;
		$("#myModal").modal();
		
	}
	
});