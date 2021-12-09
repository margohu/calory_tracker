//Storage controller
//create this later

//Item Controller
const ItemCtrl = (function(){
    //Item constructor
    const Item = function(id, name, calories){
        this.id = id
        this.name = name
        this.calories = calories
    }
    //console.log('ItemCtrl')
    //Data structure
    const data = {
        items: [
            {id:0, name:'Steak dinner', calories:1200},
            {id:1, name:'Cookie', calories:400},
            {id:2, name:'Eggs', calories:300},
            {id:3, name:'Vodka', calories:12000},
            {id:4, name:'Good woman', calories:-13000}
        ],
        total: 0
    }
    return {
        getItems: function () {
            return data items
        },
        logData: function(){
            return data
        }
    }
})();


//UI controller
const UICtrl = (function(){
    console.log('UiCtrl')
})();


//App controller
const App = (function(ItemCtrl, UICtrl){
    return {
        init: function () {
            console.log('Initializing App')
        }
    }
})(ItemCtrl, UICtrl);

//App initialize
App.init()