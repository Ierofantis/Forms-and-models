var form = angular.module('scotchTodo', []);

function mainController($scope, $http) {
    $scope.formData = {};

   
    $http.get('/')
        .success(function(data) {
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
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.delete = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}