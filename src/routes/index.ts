import express from 'express';
import LoginRoutes from './login.routes';
import OperatorsRoutes from './operators.routes'
import UsersRoutes from './users.routes'
const router = express.Router();

router.use('/login',LoginRoutes)
router.use('/operators', OperatorsRoutes)
router.use('/users',UsersRoutes)

export default router;
