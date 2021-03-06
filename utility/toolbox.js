// place to store all function definitions 
// keeping mainfiles short and clean

const numberOfSubscibers = (categorySubscibers, categories) => {
    const results = [];
    let name, id, listOfSubs;

    categories.forEach(element => {
        name = element.name;
        id = element.id;
        listOfSubs = categorySubscibers.filter(element => {
            return element.categoryId == id;
        })



        results.push({
            name,
            subscribers: listOfSubs.length

        })

    });

    return results;

}

module.exports={
    numberOfSubscibers

}