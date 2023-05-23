import express from 'express';
import { createUser, getUserData, getUserId, updateUser, userDelete } from './user.controller';

const router = express.Router();

router.get('/', getUserData)
router.get('/u/:id', getUserId)
router.post('/create-user', createUser);
router.patch('/userId/:id', updateUser)
router.delete('/:id', userDelete)


export default router;