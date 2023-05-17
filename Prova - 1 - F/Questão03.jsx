import { useState, useEffect } from "react"

const Populacao = () => {

    // Variáveis de estado para armazenar os dados(nome e população) do país com maior e menor população
    const [maiorPopulacao, setMaiorPopulacao] = useState({})
    const [menorPopulacao, setMenorPopulacao] = useState({})

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            .then(
                (response) => {
                    return response.json()
                }
            )
            .then(
                (data) => {
                    /**
                     * Variáveis de controle. A partir delas é possível saber onde
                     * os países com maior e menor população estão no array data
                     * 
                     * iniciando as variáveis numéricas locais (let) para armazenar a maior e menor
                     * population e também os seus índices do vetor data, Como pede na questão.
                     */
                    
                    let maiorPopulacao = data[0].population
                    let indiceMaiorPopulacao = 0
                    let menorPopulacao = data[0].population
                    let indiceMenorPopulacao = 0
                    // Aqui é feito um for para encontrar o país com maior e menor população e alimentando seus dados nas variáveis de estado
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].population > maiorPopulacao) {
                            maiorPopulacao = data[i].population
                            indiceMaiorPopulacao = i
                        }
                        if (data[i].population < menorPopulacao) {
                            menorPopulacao = data[i].population
                            indiceMenorPopulacao = i
                        }
                    }

                    /**
                     * Aqui setamos um objeto com o nome e a população do país com maior e menor população
                     * cujos dados foram encontrados no for acima.
                     */
                    setMaiorPopulacao({ nome: data[indiceMaiorPopulacao].capital[0], populacao: maiorPopulacao })
                    setMenorPopulacao({ nome: data[indiceMenorPopulacao].capital[0], populacao: menorPopulacao })

                }
            )
            // tratamento de erro
            .catch(error => console.log(error))

    }, [maiorPopulacao, menorPopulacao])

    return (
        <div>
            <h1>Questão 03 - Prova F</h1>
            <h1>Países com Maior e Menor População</h1>
            <h2>Maior População: {maiorPopulacao.nome}, com {maiorPopulacao.populacao} habitantes</h2>
            <h2>Menor População: {menorPopulacao.nome}, com {menorPopulacao.populacao} habitantes</h2>
        </div>
    )
}

export default Populacao