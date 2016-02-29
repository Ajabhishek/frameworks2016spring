(function(){
  "use strict";
    
  function adminService($http, $resource){
    
    var User = $resource("/api/admin/users/:id", {id: '@_id' });

    var getUser = function(id){
      return User.get({id: id}).$promise;
    };
    
    var getUsers = function(){
      return User.query().$promise;
    };
    
    // classic Angular AJAX request with the low-level $http service
    // is added just for demonstration purpose
    
    var getUsersHttp = function(){
      return $http.get("/api/admin/users").then(function(response) {
          return response.data;
        }); 
    };
    
    var saveUser = function(userdata) {
      return User.save(userdata).$promise;
    }
    
    var deleteUser = function(id) {
      return User.remove({id: id}).$promise;
    };

    return {
      getUser: getUser,
      getUsers: getUsers,
      saveUser: saveUser,
      deleteUser: deleteUser,
      getUsersHttp: getUsersHttp
    };
    
  }
  
  angular
    .module("adminModule")
    .factory("adminService", adminService);
  
})();