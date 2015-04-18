(function(){


    var app = angular.module('parking',[ ]);

    app.controller('ParkingController', function($scope, $http) {
            $http.get("https://api.mongolab.com/api/1/databases/parkit/collections/ParkingLot?apiKey=X_7L-M-OY0e-hjHbhVsIM-JLeorp_-xG")
            .success(function(response)
                {$scope.spot = response;});
             });
})();