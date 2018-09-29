//SETUP========================================================================
const mockDataLocation = '../../utility/mock-data';
const toolboxLocation = '../../utility/toolbox';

const { categorySubscibers, categories } = require(mockDataLocation);
const { numberOfSubscibers } = require(toolboxLocation);

//CONFIGURATION================================================================



const GET_numberOfSubscibers = (req, res) => {
    res.json(numberOfSubscibers(categorySubscibers, categories))

}
const POST_unsub = (req, res) => { }
const POST_sub = (req, res) => { }

module.exports = {
    GET_numberOfSubscibers,
    POST_sub,
    POST_unsub

}