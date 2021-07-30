let pronoun = ['the','our','last','first'];
let adj = ['great', 'big','of','call' ];
let noun = ['jogger','me','racoon','us'];
let ext = ['com', 'us','uk','es','me']

function domainGenerator (part1, part2, part3, part4){
   
    for (let i=0; i<part1.length; i++){
        
        for (let j=0; j<part2.length; j++){
            
            for (let k=0; k<part3.length; k++){
                
                for (let l=0; l<part4.length; l++){
                    if ( part3[k]==part4[l]){
                        domain = part1[i] + part2[j] + "." + part4[l]
                        console.log ("DOMAIN HACK " + domain)
                    }
                    else{
                        domain =part1[i] + part2[j] + part3[k] + "." + part4[l]
                        console.log(domain)
                    }
                }
            }
        }    
    }
}

domainGenerator(pronoun, adj, noun,ext)