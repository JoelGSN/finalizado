import * as vendasService from '../services/vendasService.js'


export async function listar (req,res) {
    
const venda = await vendasService.listarvenda()
    
    return res.status(200).json(venda)

}

export async function buscarcPornome (req,res) {
const venda = await vendasService.buscarcPornome(req.params.venda)
   if(!venda){
    return res.status(404).json({Message: 'O Venda não foi encontrado.'} )
}
    return res.status(200).json(produto)
}

export async function cadastrar (req,res)  {
    const venda = await vendasService.cadastrarvenda(req.body)
    return res.status(201).json(venda)
}

// export async function remover(req, res) {
//     const venda = await produtoService.removervenda(req.params.produto)
//     if(!venda){
//         return res.status(404).json({ Message: 'O venda não foi encontrado.'})
//     }
//     return res.status(200).json(produto)
// }

// export async function atualizar(req, res) {
//     const venda = await vendasService.atualizarvenda(req.params.venda, req.body)
//     if(!venda) {
//         return res.status(404).json({Message: 'O venda não foi encontrado.'})

//     }
//     return res.status(200).json(venda)

    
// }

// export async function vender(req, res) {
//     const { produto } = req.params
//     const { quantidade } = req.body
//     const produtoAtualizado = await produtoService.venderproduto(produto, Number(quantidade))

//     return res.json(produtoAtualizado)
// }

// export async function comprar(req, res) {
//     const { produto } = req.params
//     const { quantidade } = req.body
//     const produtoAtualizado = await produtoService.comprarproduto(produto, Number(quantidade))

//     return res.json(produtoAtualizado)
// }