

angular.module('Momsmed')
  .controller('ResultCtrl', function ($scope, $http) {
    $scope.findMed=function(enteredMed) {
      // alert("Searching for: " + enteredMed);
      $http.get('https://api.fda.gov/drug/label.json?search=pregnancy:' + enteredMed).success(function (myinfo) {
        $scope.myinfo=myinfo;
        // $scope.result= [];
        console.log($scope.myinfo.results[0].pregnancy[0])
        // $scope.result.push(key.results[0].pregnancy[0])
      })
    };



  });
