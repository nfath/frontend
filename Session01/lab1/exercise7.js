// const findFacts = (city) => {
//     let strText = city.name + " has a population of " + city.population + " and located in " + city.continent;
//     console.log(strText);
// }

// const findFacts = (city) => {
//     // use this character for string: ` and it is different from '
//     let strText = `${city.name} has a population of ${city.population} and located in ${city.continent}`;
//     console.log(strText);
// }

const findFacts = (city) => console.log(`${city.name} has a population of ${city.population} and located in ${city.continent}`);

findFacts({
    name: "Toronto",
    population: "6,197,000",
    continent: "North America"
}) 
  
findFacts({
    name: "Venice",
    population: "261,905",
    continent: "Europe"
})
