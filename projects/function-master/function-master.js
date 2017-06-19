function objectValues(obj) {
    var arr = [];
    for (var keys in obj){
        arr.push(obj[keys]);
    }
    return arr;
}

function keysToString(obj){
    var string = [];
    for(var key in obj){
        string.push(key);
    }
    string = string.join(" ");
    return string;
}

function valuesToString (obj) {
    var string = [];
    for(var key in obj){
        if(typeof obj[key] === "string"){
            string.push(obj[key]);
        }
    }
    return string.join(" ");
    
}

function arrayOrObject(obj) {
    if(Array.isArray(obj)){
        return 'array';
    }else if ( obj === null){
        
    }else if (obj instanceof Date){
        
    }else{
        if(typeof obj === "object"){
            return 'object';
        }
    }
}

function capitalizeWord (string) {
    return string[0].toUpperCase() + string.slice(1);
}


function capitalizeAllWords (string) {
  string = string.split(" ");
 
  for (var i = 0; i < string.length; i++){
    string[i] = string[i][0].toUpperCase() + string[i].slice(1);
  }
  return string.join(" ");
}

function welcomeMessage(obj) {
    if(obj.hasOwnProperty('name')){
        return "Welcome " + capitalizeWord(obj['name']) + "!";
        
    }

}

function profileInfo(obj) {
    if(obj.hasOwnProperty('name') && obj.hasOwnProperty('species'))
    return capitalizeWord(obj['name']) + " is a " + capitalizeWord(obj['species']);
}

function maybeNoises(obj) {
    if(obj.hasOwnProperty('noises') && obj['noises'].length > 0){
        
        return obj['noises'].join(" ");
        
    }else{
            return "there are no noises"
        }
    
}

function hasWord (stringOfWords, word) {
    var string = stringOfWords.split(" ");
    for (var i = 0; i < string.length; i++){
        if(word.toUpperCase() === string[i].toUpperCase()){
            return true;
        }
    }
    return false;
}

function addFriend (name, obj) {
    if(obj.hasOwnProperty('friends')){
        obj.friends.push(name);
        
    }
    return obj;
    
}

function isFriend(name, obj){
    if(obj.hasOwnProperty('friends')){
        for(var i = 0; i < obj.friends.length; i++){
            if(name === obj.friends[i]){
                return true;
            }
        }
       
        
    }
     return false;
}

function nonFriends(name, list){
  var nf =[];
  var people =[];
  var friends;
  
  for(var i = 0; i < list.length; i++){
    if (name === list[i].name){
      friends = list[i].friends;
    }
  }
  
  friends.push(name);
  
 for(var j = 0; j < list.length; j++){
        people.push(list[j].name);
   }
  
  for(var x = 0; x < people.length; x++){
    var count = 0;
    for(var y = 0; y < friends.length; y++){
      if(friends[y] === people[x]){
         count++;
      }
    }
    if(count === 0){
      nf.push(people[x]);
    }
  }
  return nf;

  
}  

function updateObject(obj, key, value){
       obj[key] = value;
       return obj;
}
  
 function removeProperties(obj, array){
     for(var i = 0; i < array.length; i++){
         if(obj.hasOwnProperty(array[i])){
             delete obj[array[i]];
         }
     }
     return obj;
 }
 
 function dedup(arr){
     var arr2 = [];
     for(var i = 0; i < arr.length; i++ ){
         var count = 0;
         for(var j = 0; j < arr2.length; j++){
             if(arr2[j] === arr[i]){
                 count++;
             }
         }
         if(count === 0){
             arr2.push(arr[i]);
         }
         
     }
  return arr2;
 }
  