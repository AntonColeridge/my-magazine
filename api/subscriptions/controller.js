//SETUP========================================================================

    const {categorySubscriptions,categories}= require('../../utility/mock-data');

//CONFIGURATION================================================================
//for each category object store the name[x]
//for each category object store the id[X]
//for each category object get the number of subscibers 
//that match the id (filter>count new array to get#)[x]
const numberOfSubscibers = (categorySubscriptions, categories) => {
    const results = [];
    let name, id, subCount, listOfSubs;

    categories.forEach(element => {
        name = element.name;
        id = element.id;
        listOfSubs = categorySubscriptions.filter(element => {
            return element.categoryId == id;
        })

        //build object with name, id,subsciber count and push to results array[x]
        subCount = listOfSubs.length;
        results.push({
            name,
            subCount

        })

    });

    return results;

}

const GET_numberOfSubscibers = (req, res) => {
    res.json(numberOfSubscibers(categorySubscriptions,categories))

}
const POST_unsub = (req, res) => { }
const POST_sub = (req, res) => { }

module.exports = {
    GET_numberOfSubscibers,
    POST_sub,                                                
    POST_unsub

}