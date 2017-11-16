//Good luck! Maybe start by making that fetch request ;)
const fetch = require('isomorphic-fetch');
fetch("https://opentdb.com/api.php?amount=10&category=18")
.then(res=>res.json())
.then(data=>logResults(data.results));

function logResults(results){

    const replaced = results.map(result=>{result.question = result.question.replace(/&quot;/g, '"'); return result;});
    console.log("Quotes replaced:");
    console.log(replaced);
    console.log("\n");

    const filtered = results.filter(result=>result.difficulty=="easy");
    console.log("Only easy questons:");
    console.log(filtered);
    console.log("\n");
    
    const sorted = [...results].sort((a,b)=>{
        if (a.difficulty > b.difficulty) {return 1}
        else if (a.difficulty < b.difficulty){return -1}
        else return 0
    });
    console.log("Sorted by difficulty:");
    console.log(sorted);
    console.log("\n");
    
    const subtotal = results.reduce((acc,cur)=>{
        if (cur.difficulty in acc){
            acc[cur.difficulty] += 1;
        }
        else {acc[cur.difficulty] = 1;}
        return acc;
    },{})
    console.log("Difficulty counts:");
    console.log(subtotal);
    console.log("\n");
    
    const allComputers = results.every(result=>result.category == 'Science: Computers');
    console.log("All in Science: Computers category?");
    console.log(allComputers);
    console.log("\n");
    
    const mediumByType = results.filter(result=>result.difficulty == "medium").sort((a,b)=>{
        if (a.type > b.type) {return 1}
        else if (a.type < b.type){return -1}
        else return 0
    });
    console.log("Medium questions sorted by type:");
    console.log(mediumByType);
}