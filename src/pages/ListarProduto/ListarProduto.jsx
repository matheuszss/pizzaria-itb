import React, {useState, useEffect} from "react"

import { link } from "react-router-dom"

import api from "../../services/api"

import MenuFuncinario from '../MenuFuncionario/MenuFuncionario'

const ListarProduto = () => {

  // useState: é um hook do react que serve para armazenar e controlar o estado de uma variável
  // composição ->  const [ nome da variável , nome da função para alterar o valor da variável] = useState(valor inicial da variável)
  // Obs: SEMPRE o nome da função começa com "set"
  // Exemplo: Quero declarar uma variável numero cujo valor inicie com 0
  // const [numero, setNumero] = (0)

  // useEffect: é um hook que serve para executar códigos que ficam fora do controle direto da renderização visual, os chamados
  //            "efeitos colaterais". Exemplo: buscar dados em uma API, configurar cronômetros, fazer algo quando usuário aperta uma tecla
  // composição -> useEffect (função que será executada, [quando esse valor é alterado a função é chamada novamente])  
  // Obs: []  manter vazio, quando você quiser que o seu código rode exatamente uma única vez, geralmente ao carregar a página


  const [produtos, setProdutos] = useState([])

  useEffect(()=>{
    api
    .get("/produtos")
    .then((response)=>{
      // deu certo :)
      // console.log(response.data.data)
      setProdutos(response.data.data)

    })
    .catch((error)=>{
      // deu ruim :(
      console.error("Erro ao buscar a lista de produtos. " + error)

    })

  }, [])

   /*

    const arrayProdutos = [
        {
            id: 1,
            nome: "Pizza de Calabresa",
            precoVenda: 54.90,
            descricao: "Pizza de calabresa com cebola e azeitonas sem caroço"
        },
        {
            id: 2,
            nome: "Pizza de Muçarela",
            precoVenda: 64.90,
            descricao: "Pizza de muçarela com bastante queijo e tomate"
        },
        {
            id: 3,
            nome: "Pizza de Frango",
            precoVenda: 44.90,
            descricao: "Pizza de frango com catupiry"
        }
    ] */

    return (

       <div className='container'>
            <MenuFuncinario/>
           
           <div className="table-responsive"> 
        <table className="table table-bordered table-striped table-hover"> 
          <thead className="table-success"> 
            <tr> 
              <th>Nome</th> 
              <th>Preço</th> 
              <th>Descrição</th> 
              <th>Ações</th> {/* Nova coluna de Ações */} 
            </tr> 
          </thead> 
          <tbody> 
          
          { produtos.map((produto) => ( 
                   <tr key={produto.id}> 
                <td style={{ fontSize: "13px" }}>{produto.nome}</td> 
                <td style={{ fontSize: "13px" }}> 
                    {
                        new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(produto.precoVenda)
                    }
                </td> 
                <td style={{ fontSize: "13px" }}>{produto.descricao}</td>
                <td className="text-center fs-6" style={{ width: "100px" }}> 
                  {/* Botão de Editar */} 
                  <button 
                    className="btn btn-sm btn-primary me-2"> 
                    <i className="fas fa-pencil-alt"></i>{" "} 
                    {/* Ícone de editar */} 
                  </button> 
 
                  {/* Botão de Excluir */} 
                  <button 
                    className="btn btn-sm btn-danger"> 
                    <i className="fas fa-trash-alt"></i>{" "} 
                    {/* Ícone de excluir */} 
                  </button> 
                </td> 
              </tr> 

            ) ) }
             
          </tbody> 
        </table> 
      </div> 

            <div className="text-end mt-3">
              <link
              to="/produtos/novo"
              className={'btn btn-success'}
              >
                <i className="fas fa-plus"></i>
                Novo Produto
              </link>


            </div>
                 
        </div>
    )
}
export default ListarProduto