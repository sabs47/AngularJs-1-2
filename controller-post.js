app.controller('controllersall', function($scope, $http) {

       // $scope.SendData = function () {
           // use $.param jQuery function to serialize data from JSON 
         $scope.submitForm = function(addsal) {
            var numerosalle =  {"numsalle":$scope.numsalle};
        
            var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
 //console.log(etudiantp)
            $http.post('http://localhost:8080/Smartschelude/sall/add/',numerosalle,config)
            .success(function (data) {
              //  $scope.PostDataResponse = data;
            console.log(data)
            })
            .error(function (data) {
            });
        };

    })
    ;
