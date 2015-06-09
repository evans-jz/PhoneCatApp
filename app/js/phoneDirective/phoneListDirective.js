	angular.module('phonecatApp').directive('phoneList',function() { 

  		return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/phoneDirective/phoneListDirective.html',
    link: function(scope, element, attrs){

    }

  }; 
});