import express from 'express'
import * as controller from './food-item-controller'
import * as auth from '../../services/auth-service';

const router = express.Router()

router.post('/food_item', auth.requireLogin, controller.create)
router.get('/food_item', auth.requireLogin, controller.index)
router.get('/food_item/:id', auth.requireLogin, controller.getById)
router.put('/food_item/:id', auth.requireLogin, controller.update)
router.delete('/food_item/:id', auth.requireLogin, controller.deleteItem)

// router.post('/checkout', controller.checkout)
// router.get('/order/user/:user_id', controller.user_orders)

export default router