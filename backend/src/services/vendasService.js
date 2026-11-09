import bd_venda from '../models/bd_venda.js'



export async function listarvenda() {
    return await bd_venda.findAll({ order: [['id', 'ASC']] })

}

export async function buscarcPornome(nome_produto/*nmproduto*/) {
    return await bd_produto.findAll({
        where: { nome_produto }
    })

}

export async function cadastrarvenda(dados) {
    const { nome_produto, tipo, cor, quantidade_vendida, preco } = dados
    return await bd_venda.create({ 
         nome_produto,
         tipo,
         cor,
         quantidade_vendida,
         preco 
        })

}

// export async function removervenda(nmproduto) {
//     const produtoec = await buscarcPornome(nmproduto)
//     if (produtoec) {
//         produtoec.destroy()
//         return produtoec
//     }

//     return null

// }

// export async function atualizarvenda(nmproduto, dados) {
//     const { nome_produto, tipo, cor, quantidade, preco } = dados

//     const produtoec = await buscarcPornome(nmproduto)
//     if (produtoec) {
//         produtoec.update({ nome_produto, tipo, cor, quantidade, preco })
//         return produtoec
//     }

// }
