// Code your solution here
function findMatching(array, name){
    let arrayFilter = array.filter(function(array){
      if(array.toUpperCase() === name.toUpperCase()){
        return name}
    })
    return arrayFilter}

    function fuzzyMatch(array, nameInput){
        let arrayFilter = array.filter(function (name){
            if(name[0]== nameInput[0] && name[1] == nameInput[1]){
              return(name)
          }
        })
        return arrayFilter
      }

      function matchName(array, string){
        let arrayFilter = array.filter(function (item){
          if (item['name']==string){
            return( item['name'])
          }
        })
        return arrayFilter
      }