import express from 'express'
import * as controller from './submission-controller'
import * as auth from '../../services/auth-service';

const router = express.Router()

router.post('/user_submit', auth.requireLogin, controller.userSubmit)
router.get('/user_submissions/:id', auth.requireLogin, controller.userSubmissions)
router.get('/submissions_to_process', auth.requireLogin, controller.submissionsToProcess)
router.put('/process/:id', auth.requireLogin, controller.process)
router.get('/past_submissions', auth.requireLogin, controller.pastSubmissions)

export default router