import Router from 'express'

import { CidadesControler } from './../controllers'

const router = Router()

router.get('/',(req, res) => res.send('Hello, world!'))
router.post('/cidades', CidadesControler.create)

export { router }