
const storiesRouter = require('express').Router();

const storiesController = require('./controller')

storiesRouter.get('/', storiesController.Get_categories) //expecting 'api/' to show data on pageload

module.exports = storiesRouter;