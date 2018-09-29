/* Each category has a number of stories and subscribers to the category
    I will only use 2 examples for simplicity but my main focus is 
    to explore the observer design pattern and to see if I can manipulate
    the subscribers count.
*/
const { categories } = require('../../utility/mock-data');

const Get_categories = (req, res) => {
  
    res.json(categories)

}

module.exports= {Get_categories }