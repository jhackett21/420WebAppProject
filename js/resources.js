(function(){


    var app = angular.module('parking',[ ]);

    app.controller('ParkingController', function(){
        this.spot = parkingSpot;

    });

    var parkingSpot = {

        name: 'WoodLand',
        parkingAva: false


    };


})();