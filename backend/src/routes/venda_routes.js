import * as vendas_controllers from '../controllers/vendas_controllers.js'
import { Router } from 'express'

const router = Router()

router.get('/', vendas_controllers.listar )

router.get('/:venda', vendas_controllers.buscarcPornome )

router.post('/', vendas_controllers.cadastrar)

// router.delete('/:venda', vendas_controllers.remover)

// router.put('/:venda', vendas_controllers.atualizar)

export default router