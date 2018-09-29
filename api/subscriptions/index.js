const subscriptionRouter = require('express').Router();

subscriptionController = require('./controller')

subscriptionRouter.get('/', subscriptionController.GET_numberOfSubscibers)
subscriptionRouter.post('/unsub', subscriptionController.POST_unsub)
subscriptionRouter.post('/sub', subscriptionController.POST_unsub)

module.exports=subscriptionRouter;
