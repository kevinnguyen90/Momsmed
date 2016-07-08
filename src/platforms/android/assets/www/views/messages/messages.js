/**
 * Created by kevinnguyen on 6/24/16.
 */
angular.module('App')
    .controller('smsController', function ($scope, $ionicPlatform, $cordovaSms){
        $scope.number= '4087805515';
        $scope.message= 'hello';
        $scope.sendSms = function(){
            console.log($scope.number);
            console.log($scope.message);
            var options = {
                replaceLineBreaks: false, // true to replace \n by a new line, false by default
                android: {
                    //intent: 'INTENT'  // send SMS with the native android SMS messaging
                    intent: '' // send SMS without open any other app
                }
            };
            $ionicPlatform.ready(function(){
                $cordovaSms
                    .send($scope.number, $scope.message, options)
                    .then(function() {
                        console.log('Success');

                    }, function(error) {
                        console.log(error);
                    })
            })
        }

    })
