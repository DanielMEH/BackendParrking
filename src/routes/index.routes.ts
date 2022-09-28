import {Router} from 'express';

import {welcome} from '../controllers/index.controller';
import { getUser } from '../controllers/user.controller';

const router:Router = Router();

router.route('/') 
  .get (welcome);
router.route('/user/').get (getUser);


export default router;
