let pronoun = ['the','our','me','your'];
let adj = ['great', 'big','pretty', 'small', 'tiny' ];
let noun = ['jogger','racoon','duck', 'house', 'doll'];
let ext = ['.es','.com','.uk','.us']

let randomGenerator = function(parts){
    let randomIndex = Math.floor(Math.random()*parts.length);
    return parts[randomIndex];
}


const domainGenerator = function(){
    var domain = "";
    for (var i in arguments) {
        randomGenerator (arguments[i]);
        domain += randomGenerator(arguments[i]);
    }
    return (domain)
}
console.log (domainGenerator(pronoun, adj, noun, ext))