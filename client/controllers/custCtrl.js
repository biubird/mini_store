App.controller('CustomerController', function($scope, CustomerFactory, $location){
  $scope.customers = [];

  function getAllCustomers(){
    CustomerFactory.getCustomers()
    .then( function(serverResponse){
      $scope.customers = serverResponse.data;
    })
  }
  getAllCustomers();

  $scope.createCustomer = function(){
    CustomerFactory.createCustomer($scope.newCustomer)
    .then( function(serverResponse){
      console.log(serverResponse.data)
      $scope.newCustomer = {};
      getAllCustomers();
      $location.path('/customers');
    })
    .catch( function(error){
      console.log(error)
    })
  }
  $scope.removeCustomer = function(custID){
    CustomerFactory.removeCustomer(custID)
    .then( getAllCustomers )
  }
})
