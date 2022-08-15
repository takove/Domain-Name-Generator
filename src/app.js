/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const h1 = document.querySelector("#domainGenerator");
  let pronoun = ["the", "our", "your"];
  let adj = ["great", "big", "awesome"];
  let noun = ["jogger", "raccoon", "page"];
  let domainName;
  let domainNameArr = [];
  for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
    for (let adjIndex = 0; adjIndex < adj.length; adjIndex++) {
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
        domainName = `${pronoun[pronounIndex]}${adj[adjIndex]}${noun[nounIndex]}.com`;

        domainNameArr.push(domainName);
        console.log(domainName);
      }
    }
  }
  domainNameArr.forEach((domain, index) => {
    const newP = document.createElement("p");
    newP.innerHTML = domain;
    document.body.appendChild(newP);
  });
};
