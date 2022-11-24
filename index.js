function receivesAFunction(callback){
    return callback();
}

receivesAFunction(function(){
     return 4 * 4
});

function returnsANamedFunction(){
    return function myName(){
        return "Emmanuel Mutisya";
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        return "Musau";
    }
}