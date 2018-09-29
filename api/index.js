const storiesRouter = require('./stories');
const subscriptionRouter = require('./subscriptions');

const apiRouter = require('express').Router();

apiRouter.use('/stories', storiesRouter);
apiRouter.use('/subscriptions', subscriptionRouter);


module.exports = apiRouter;