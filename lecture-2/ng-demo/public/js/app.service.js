(function(){
  "use strict";
  
  var cmsService = function($http){
    
    var getContent = function(){
      
      return $http.get("/content")
        .then(function(response){
          return response.data;
      });    
      
    }
    
    return {
      getContent: getContent
    }
    
  }
  
  angular
    .module("contentMachine")
    .factory("cmsService", cmsService);
  
})();