document.write('<h1>Array Assignment</h1>');

const dogs = ["Frenchie", " Pitbull", "Lab ", "Shih Tzu ", "Yorkie"];
dogs.push('Great Dane')
for(let i=0; i<6; i++){
    document.write("<ul>", dogs[i], "</ul>");
} 

const cats = ["Sphinx", " Ragdoll", "Tabby ", "Persian ", "Siamese"];
let start = 2;
let deleatItem = 1;
cats.splice(start, deleatItem);
for(let i=0; i<4; i++){
    document.write("<ul>", cats[i], "</ul>");
} 

console.log(dogs);
console.log(cats);