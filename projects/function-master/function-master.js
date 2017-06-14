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