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
    console.log(data)

    return {
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
const App = (function(itemCtrl, UICtrl){
    console.log('App')
})(ItemCtrl, UICtrl);