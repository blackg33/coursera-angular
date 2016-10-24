(function(){
    
    'use strict';
   /* 
    - CHECK OFF SHOPPING LIST - 
    2 LISTS :
    "TO BUY" - PREPOLULATED WITH LIST OF AT LEAST 5 ITEMS (ARRAY OF OBJECT LITERALS)
            - EACH ITEM HAS NAME AND QUANTITY
            - DISPLAYED TO USER IN FORMAT "BUY ITEM_QUANTITY ITEM_NAME"
            - NEXT TO EACH ITEM IS "BOUGHT" BUTTON
            - WHEN CLICKED ITEM MOVES TO OTHER LIST
            -ONCE EVERYTHING IS BOUGHT "EVERYTHING IS BOUGHT" APPEARS IN TO LIST
    "ALREADY BOUGHT"
        -SHOULD INITIALLY BE EMPTY AND DISPLAY MSG "NOTHING BOUGHT YET"
        -LIST ITEMS SHOULD APPEAR AS "BOUGHT QUANTITY NAME"
*/
    angular.module('ShoppingListCheckoff', [])
    
    
    .controller('ToBuyCtrl', ['$scope', 'ShoppingListCheckOffService', function($scope, ShoppingListCheckOffService){
        
        $scope.toBuyList = ShoppingListCheckOffService.getToBuyList(); 

        $scope.remove = function(item){
            ShoppingListCheckOffService.switchList(item);
        };          
    }])
    
    .controller('BoughtCtrl', ['$scope', 'ShoppingListCheckOffService', function($scope, ShoppingListCheckOffService){
        
        $scope.boughtList = ShoppingListCheckOffService.getBoughtList();

    }])
    
    .service('ShoppingListCheckOffService', function(){
        
        var toBuyList = [
            {name:'cheese' , quantity:1 },
            {name:'apples' , quantity:6},
            {name:'lemon' , quantity:3 },
            {name:'bagels' , quantity:12 },
            {name:'scallops' , quantity:20 }
        ];
        
        var boughtList = [];
        
        this.getToBuyList = function(){
            return toBuyList;
        };
        
        this.getBoughtList = function(){
            return boughtList;
        };
        
        this.switchList = function(item){
            var index = toBuyList.indexOf(item);
            toBuyList.splice(index, 1);
            boughtList.push(item);
            console.log(boughtList);
        };
        
    });
    
})();