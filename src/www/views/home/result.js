

angular.module('Momsmed')
  .controller('ResultCtrl', function ($scope, $http) {
    $scope.findMed=function(enteredMed) {
      // alert("Searching for: " + enteredMed);
      $http.get('https://api.fda.gov/drug/label.json?search=pregnancy:' + enteredMed).success(function (myinfo) {
          $scope.myinfo = myinfo;
          // $scope.result= [];
          //console.log($scope.myinfo.results[0].pregnancy[2]);
          // $scope.result.push(key.results[0].pregnancy[0])

          var Category = "Pregnancy Category";
          var Categories = "Pregnancy Categories";
          $scope.result =[];

          angular.forEach(myinfo.results[0].pregnancy,  function (Category, Categories) {
              for (var i = 0; i < myinfo.results[0].pregnancy.length; i++) {
                  console.log(i + " " + myinfo.results[0].pregnancy[i]);

                  //check if string array contains the string
                  if (myinfo.results[0].pregnancy[i].search("Category") >= 0) {

                      //string found
                      var found = myinfo.results[0].pregnancy[i].indexOf("Pregnancy Category")+19;
                      console.log("found                           " + Category)

                      console.log("i, found =" + i + " " + found);
                      $scope.result=myinfo.results[0].pregnancy[i].substring(found, found+ 2);
                      break;
                  }
                  else if (myinfo.results[0].pregnancy[i].search("Pregnancy Categories") >= 0) {

                      //string found
                      var found = myinfo.results[0].pregnancy[i].indexOf("Pregnancy Categories")+21;
                      $scope.result=myinfo.results[0].pregnancy[i].substring(found, found+ 56);
                      break;
                  }

              }

          });

          console.log($scope.result);
          return $scope.result;




      })
    };



  });


//, CategoryB, CategoryC, CategoryD, CategoryX, CategoryN