(function(){
    "use strict";
    angular
        .module("hotelManagement") //using the getter method
        .controller("controllerHotels",["hotelResource",controllerHotels]);
    function controllerHotels(hotelResource) {
        var vm = this;
        hotelResource.query(function (data) {
            vm.hotelList = data;
        })
    }

}());