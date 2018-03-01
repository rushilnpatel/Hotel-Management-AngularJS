(function(){
    "use strict";
    angular
        .module("common.services")
        .factory("hotelResource",["$resource",hotelResource]);

    function hotelResource($resource){
        return $resource ("/api/hotelList/:hotelId");
    }

}());
