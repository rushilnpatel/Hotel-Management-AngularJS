(function(){
    "use strict";

    angular
        .module("hotelManagement")
        .controller("controllerHotelsDetail",["hotelList",controllerHotelsDetail]);
    function controllerHotelsDetail(hotelList){

        var vm=this;
        vm.hotelList =  hotelList;
        vm.title="Hotel Details" + vm.hotelList.hotelname;
        /*if(vm.employee.tags){
            vm.employee.tagList = vm.employee.tags.toString();
        }*/
    }
}());

