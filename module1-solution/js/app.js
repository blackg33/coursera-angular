(function(){
    
    'use strict';
    
    //LIST COMMA SEPARATED ITEMS USER EATS FOR LUNCH
    //CHECK IF TOO MUCH BUTTON
    //IF LESS THAN OR EQUAL TO 3 ITEMS THEN MSG = "ENJOY!"
    //IF GREATER THAN 3 MSG = "TOO MUCH!"
    //ENJOY OR TOO MUCH TEXTBOX BORDER = GREEN, FONT COLOUR GREEN
    //IF TEXTBOX IS EMPTY MSG = "Please enter data first"
    //EMPTY = TEXTBOX BORDER RED, FONT COLOUR RED
    //ONLY ONE MSG SHOWS UP AT ONCE
    //BONUS CHECK FOR EMPTY ITEM EG ITEM1, ,ITEM2, ITEM3

    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController', ['$scope', function($scope){
        
        $scope.lunch = '';
        $scope.valid = false;
        $scope.red = false;
        $scope.green = false;

        $scope.lunchChecker = function(lunch){

             if(lunch === ''){
                 $scope.notValid = true;
                $scope.msg = 'Please enter data first';
                 $scope.green = false;
                 $scope.red = true;

            } else {
                $scope.valid = true;
                $scope.lunch = lunch.split(",");
                $scope.red = false;
                $scope.green = true;

                if($scope.lunch.length <= 3){
                   $scope.msg = "Enjoy!";  

                } else if ($scope.lunch.length > 3){
                    $scope.msg = "Too much!";
                }
            }

        };
    }]);
    
})();