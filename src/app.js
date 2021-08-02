/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["last", "first"];
  let adj = ["of", "call"];
  let noun = ["me", "us", "them"];
  let ext = ["com", "us", "uk", "es", "me"];

  function domainGenerator(part1, part2, part3, part4) {
    let listDomains = [];

    for (let i = 0; i < part1.length; i++) {
      for (let j = 0; j < part2.length; j++) {
        for (let k = 0; k < part3.length; k++) {
          for (let l = 0; l < part4.length; l++) {
            let domain = "";
            if (part4.includes(part3[k])) {
              domain =
                "This is a Domain Hack " + part1[i] + part2[j] + "." + part3[k];
              if (listDomains.includes(domain)) {
              } else listDomains.push(domain);
            } else {
              domain = part1[i] + part2[j] + part3[k] + "." + part4[l];
              listDomains.push(domain);
            }
          }
        }
      }
    }
    return listDomains;
  }
  document.getElementById("Domains").innerHTML = domainGenerator(
    pronoun,
    adj,
    noun,
    ext
  ).join(",</br>");
};
