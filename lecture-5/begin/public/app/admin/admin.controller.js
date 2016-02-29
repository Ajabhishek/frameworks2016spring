(function(){
  "use strict";
  
  angular
  .module("adminModule", [])
  .controller("adminController", adminController);

  function adminController($scope, adminService){
    
    var getUsers = function(){
      adminService.getUsers().then(function(users){
        $scope.users = users;
      });
    }
    
    var resetUser = function(){
      $scope.user = $scope.user || {};
      $scope.user.username = "";
      $scope.user.password = "";
      $scope.user.name = "";
      $scope.user.role = "";
      $scope.user._id = null;
    }
        
    $scope.openCreateUserModal = function(){
      resetUser();
      $scope.modalTitle = "Create user";
    };
    
    $scope.openEditUserModal = function(id){
      $scope.modalTitle = "Edit user";
      adminService.getUser(id).then(function(user){
        $scope.user = user;
      });
    
    };
    
    $scope.saveUser = function(){
      adminService.saveUser($scope.user).then(function(){
        getUsers();
      });
    };
    
    $scope.deleteUser = function(id) {
      adminService.getUser(id).then(function(user){
        $scope.user = user;
      });
    }

    $scope.performDeleteUser = function() {
      adminService.deleteUser($scope.user._id).then(function(){
        getUsers();
      });
    }
    
    /* Just for demonstration purpose
    
    adminService.getUsersHttp().then(function(data){
      console.log(data);
    })
    */
    
    getUsers();
    resetUser()
  }
  
})();
