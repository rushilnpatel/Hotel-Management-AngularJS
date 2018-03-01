(function(){
    "use strict";

    angular
        .module("hotelManagement")
        .controller("hotelEditController",["hotelList","$state",hotelEditController]);

    function hotelEditController(hotelList,$state){
        var vm=this;

        vm.hotelList=hotelList;

        if(vm.hotelList && vm.hotelList.hotelId)
        {
            vm.title= "Edit:" + vm.hotelList.hotelname;

        }
        else
        {
            vm.title="New Hotel";
        }

        vm.open = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened = !vm.opened;
        };

       vm.submit=function(){
            vm.hotelList.$save(function(){
                toastr.success("Record Saved Successfully");
            });

        }

        vm.cancel=function(){
            $state.go('hotelList');
        }


    }
}());

