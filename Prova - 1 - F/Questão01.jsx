const { useEffect, useState } = require("react")

function Questao01X() {

    // Variável de estado o qual organiza as medias dos alunos vindas do componente Filho
    const [medias, setMedias] = useState([])

    // Função que recebe as medias dos alunos do componente Questao01Y
    function MensagemFilho(medias) {
        setMedias(medias)
    }

    // Array de objetos que armazena os alunos e suas notas
    const alunos = [
        { nome: "Sicrano", notas: { ap1: 4.4, ap2: 5.4 } },
        { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
        { nome: "Fulano", notas: { ap1: 1.3, ap2: 7.2 } }
    ]

    return (
        <div>
            <h1>Questão 01 - Prova F</h1>
            <Questao01Y alunos={alunos} MensagemPai={MensagemFilho} />
            <h2>Alunos com média menor ou igual a 5:</h2>
            <hr />
            {medias.map( // Aqui é realizado um map para mostrar os alunos com média menor ou igual a 5
                (media) => {
                    // CSS inline, para aumentar o tamanho da fonte em 50px
                    return media.media <= 5 ? <p style={{fontSize: "50px"}}>{media.nome}</p> : null
                }
            )}
            <hr />
        </div>
    )
}

const Questao01Y = ({ alunos, MensagemPai }) => {  // Desestruturação de props

    // Variável de estado que armazena as medias dos alunos feitas neste componente para passar para o componente Questao01X
    const [medias, setMedias] = useState([])

    useEffect(() => {
        /**
         *  Aqui realizamos um map para calcular a média de cada aluno e retornar um objeto com o nome e *  a média do aluno colocando-os em um array
         * */ 
        const medias = alunos.map((aluno) => { 
            const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2
            return { nome: aluno.nome, media }
        })
        setMedias(medias)
    }, [alunos])

    // Função que passa as medias dos alunos do componente Questao01Y para o componente Questao01X
    function MensagemFilho(medias) {
        MensagemPai(medias)
    }

    //Aqui é passado o array de objetos com os alunos e suas medias para o componente Questao01X
    return (
        <div>
            {MensagemFilho(medias)}
        </div>
    )

}

export default Questao01X