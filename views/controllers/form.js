var form = angular.module('form', ["ngRoute"]);	

form.config(function($routeProvider) {
    $routeProvider
    .when("/register", {
        template : "views/register.html",
        controller:'mainController';
    }) 
    
});

function mainController($scope, $http) {
	
    $scope.formData = {};   

    $http.get('/').success(function(data) {
            $scope.newUser = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    
    $scope.create = function() {
        $http.post('/', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; 
                $scope.newUser = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    
    $scope.delete = function(id) {
        $http.delete('/' + id)
            .success(function(data) {
                $scope.newUser = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}