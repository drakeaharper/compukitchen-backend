import express from 'express'
import * as controller from './order-item-controller'
import * as auth from '../../services/auth-service';

const router = express.Router()

router.post('/checkout', auth.requireLogin, controller.checkout)
router.get('/order/user/:user_id', auth.requireLogin, controller.user_orders)

export default router