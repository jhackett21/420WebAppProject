(function(){


    var app = angular.module('parking',[]);

    app.controller('ParkingController', function($scope, $http) {
            $http.get("https://api.mongolab.com/api/1/databases/parkit/collections/StudentUsers?apiKey=X_7L-M-OY0e-hjHbhVsIM-JLeorp_-xG")
            .success(function(response)
                {$scope.user = response;});
             });

    app.controller('getCars', function($scope, $http) {
            $http.get("https://api.mongolab.com/api/1/databases/parkit/collections/Car?apiKey=X_7L-M-OY0e-hjHbhVsIM-JLeorp_-xG")
            .success(function(response)
                {$scope.cars = response;});
             });

        app.controller('getSpot', function($scope, $http) {
            $http.get("https://api.mongolab.com/api/1/databases/parkit/collections/ParkingLot?apiKey=X_7L-M-OY0e-hjHbhVsIM-JLeorp_-xG")
            .success(function(response)
                {$scope.spot = response;});


            $scope.put = function(response) {
              $http.put("https://api.mongolab.com/api/1/databases/parkit/collections/ParkingLot/"+response._id.$oid+"?apiKey=X_7L-M-OY0e-hjHbhVsIM-JLeorp_-xG", {"lotName": response.lotName,
                    "spotNumber": response.spotNumber,
                "vacant":false,}).success(function(result) {
                  $scope.currentParking = response;
                  console.log(response);
              }).error(function() {
                  console.log("error");
              });

            };



             });







})();