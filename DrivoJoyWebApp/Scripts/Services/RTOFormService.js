﻿var RTOFormService = RTOForms.service("RTOFormService", function ($http) {

 //   this.getInfo = function (id) {
 //     var req = $http.get('/api/PersonInformationAPI/' + id);
 //     return req;
 //   };

 //    this.getAppInfo = function () {
 //       var req = $http.get('/api/PersonInformationAPI');
 //     return req;
 //   }
    this.submitInfo = function (Details) {
        var req = $http.post('/Form/Submit', Details);
    }


    this.postInfo = function (Details) {

        if (Details.FormSelected == 'Seller') {
            if (Details.SellerRTO == Details.BuyerRTO) {
                var req = $http.post('/Form/Form_29', Details);
                return req;
            }

            if (Details.SellerRTO != Details.BuyerRTO) {
                var req = $http.post('/Form/Form_28', Details);
                return req;
            }

        }


        if (Details.FormSelected == 'Buyer') {
            if (Details.SellerRTO == Details.BuyerRTO) {
                var req = $http.post('/Form/Form_30', Details);
                return req;
            }

            if (Details.SellerRTO != Details.BuyerRTO) {
                var req = $http.post('/Form/Form_28', Details);
                return req;
            }
        }
    };

});