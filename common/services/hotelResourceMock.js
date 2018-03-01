(function(){
    "use strict";
    var app = angular
                .module("hotelResourceMock",["ngMockE2E"]);

    app.run(function($httpBackend){
         var hotelList=[
         {
         "hotelId":1,
         "hcode":"E-1001",
         "hotelname": "Comfort Inn",
             "address":"7079 Black Horse Pike, West Atlantic City",
             "zipcode":"08232",
             "city":"Atlantic City",
             "state":"New Jersey",
             "distance":"4.26 mi / 6.85 km",
             "review":"Excellent",
         "rate":60,
         "imageUrl": "images/img.jpg",
             "amenities":"Wifi, Laundromat, Room Service, Swimming Pool"
         },
         {
         "hotelId":2,
         "hcode":"E-1002",
         "hotelname": "Super 888",
             "address":"3001 Black Horse Pike, East Atlantic City",
             "zipcode":"08231",
             "city":"Atlantic City",
             "state":"New Jersey",
             "review":"Good",
             "rate":80,
             "imageUrl": "images/img1.jpg",
             "amenities":"Wifi, Laundromat, Room Service, Swimming Pool"

         },
         {
         "hotelId":3,
         "hcode":"E-1003",
         "hotelname": "Hamilton Black",
             "address":"4001 Black Horse Pike, West Atlantic City",
             "zipcode":"08233",
             "city":"Atlantic City",
             "state":"New Jersey",
             "review":"Very Good",
             "rate":100,
             "imageUrl": "images/img2.jpg",
             "amenities":"Wifi, Laundromat, Room Service, Swimming Pool"
         }
         ];

        var hotelUrl = "/api/hotelList";
        $httpBackend.whenGET(hotelUrl).respond(hotelList);



        var editingRegex = new RegExp(hotelUrl+ "/[0-9][0-9]*",'');

        $httpBackend.whenGET(editingRegex).respond(function(method,url,data){


            var hotel = {"hotelId":0};
            var parameters=url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if(id>0)
            {
                for(var i=0;i< hotelList.length;i++) {
                    if(hotelList[i].hotelId == id) {
                        hotel = hotelList[i];
                        break
                    }
                };
            }
            return [200,hotel,{}];

        });
        $httpBackend.whenPOST(hotelUrl).respond(function(method,url,data){
            var hotel = angular.fromJson(data);

            if (!hotel.hotellId) {
                // new hotel Id
                hotel.hotelId = hotelList[hotelList.length - 1].hotelId + 1;
                hotelList.push(hotel);
            }
            else {
                // Updated hotelList
                for (var i = 0; i < hotelList.length; i++) {
                    if (hotelList[i].hotelId == hotel.hotelId) {
                        hotelList[i] = hotel;
                        break;
                    }
                };
            }
            return [200, hotel, {}];

        });

        $httpBackend.whenGET(/app/).passThrough();

    });
}());