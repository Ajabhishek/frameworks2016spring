(function(){
  "use strict";
  
  angular
    .module("contentMachine", [])
    .controller('contentController', cmsController);
  
  function cmsController($scope, cmsService){    
    cmsService.getContent()
      .then(function(data){
        $scope.content = data;  
      })
  }
  
})();

