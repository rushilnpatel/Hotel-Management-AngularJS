(function() {
    "use strict";
    var app = angular.module("hotelManagement",
        ["common.services",
            "ui.router",
            "hotelResourceMock"]);

    app.config(["$stateProvider",
        "$urlRouterProvider",
        function($stateProvider,$urlRouterProvider){
            $urlRouterProvider.otherwise("/");


            $stateProvider

                .state("main",{
                    url:"/",
                    templateUrl:"app/main.html"

                })
                .state("hotelList",{
                    url:"/hotelList",
                    templateUrl:"app/hotelList/hotelList.html",
                    controller: "controllerHotels as vm"
                })

                .state("hotelDetail",{
                    url:"/hotelList/:hotelId",
                    templateUrl:"app/hotelList/hotelDetails.html",
                    controller:"controllerHotelsDetail as vm",
                    resolve:{
                        hotelResource :"hotelResource", //defining dependency, key name can be any name
                        hotelList: function(hotelResource,$stateParams) {

                            var hotelId = $stateParams.hotelId;
                            return hotelResource.get({hotelId: hotelId}).$promise;
                        }
                    }
                })

                .state("hotelEdit",{
                    url:"/hotelList/edit/:hotelId",
                    templateUrl:"app/hotelList/hotelEdit.html",
                    controller: "hotelEditController as vm",
                    resolve:{
                        hotelResource :"hotelResource", //defining dependency, key name can be any name
                        hotelList: function(hotelResource,$stateParams) {

                            var hotelId = $stateParams.hotelId;
                            return hotelResource.get({hotelId: hotelId}).$promise;
                        }
                    }

                })


        }]

    );

}());
