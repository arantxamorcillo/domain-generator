


let pronoun = ['the','our','last','first'];
let adj = ['great', 'big','of','call' ];
let noun = ['jogger','me','racoon','us'];
let ext = ['com', 'us','uk','es','me']

function domainGenerator (part1, part2, part3, part4){
    let listDomains = []

    for (let i=0; i<part1.length; i++){
        
        for (let j=0; j<part2.length; j++){
            
            for (let k=0; k<part3.length; k++){
                
                for (let l=0; l<part4.length; l++){
                    let domain =''
                    if ( part4.includes(part3[k])){
                        domain= 'This is a Domain Hack ' + part1[i] + part2[j] + "." + part3[k]
                        if (listDomains.includes(domain)){}
                        else (listDomains.push(domain))
                    }
                    else{
                        domain =part1[i] + part2[j] + part3[k] + "." + part4[l]
                        listDomains.push(domain)
                    }
                }
            }
        }    
    }
    return listDomains
}
console.log (domainGenerator(pronoun, adj, noun,ext))