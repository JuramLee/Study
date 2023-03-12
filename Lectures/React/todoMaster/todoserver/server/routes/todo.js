import express from 'express';
import { jwtAuth } from '../middlewares/jwtAuth.js';
import { TodoService } from '../services/todoService.js';
const router = express.Router();

router.post('/', jwtAuth, TodoService.create);
	// post /todo body => {content, title}
router.get('/', jwtAuth, TodoService.read);
	// get /todo
router.put('/:todoId', jwtAuth, TodoService.update);
	// put /todo/id body => {content, state}
router.delete('/:todoId', jwtAuth, TodoService.delete);
	// delete /todo/id
export default router;
