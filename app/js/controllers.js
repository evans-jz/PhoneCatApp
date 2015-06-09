'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';

    $scope.delete=function(index){
      var delphone=$scope.phones.splice(index,1);
    };
    
    $scope.add=function(){
      var addphone=new Object();
      addphone.name = $scope.phonename;
      addphone.imageUrl=$scope.phoneimageUrl;
      addphone.snippet=$scope.phonesnippet;
      $scope.phones.unshift(angular.copy(addphone));
    };


  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
