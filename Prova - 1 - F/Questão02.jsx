import { useEffect, useState } from "react"

const PokemonFrenteCostas = () => {

    // Variável de estado Flag que controla o estado do botão, ou seja, se o botão for clicado, o estado do botão é alterado, inicialmente setamos como true.
    const [Flag, setFlag] = useState(true) 
    // Variável de estado para armazenar a imagem do pokemon
    const [pokemon, setPokemon] = useState("")

    useEffect(() => {
        // No useEffect, colocamos a condição que se o estado do botão for true, a imagem do pokemon é a frente, se não, a imagem do pokemon é a costas, assim, sempre que o botão for clicado, o estado do botão é alterado e a imagem do pokemon também.
        if (Flag) {
            setPokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
        } else {
            setPokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png")
        }
    }, [Flag]) // Aqui colocamos o estado do botão como dependência do useEffect, assim, sempre que o estado do botão for alterado, o useEffect é executado.

    return (
        <div>
            <h1>Questão 02 - Prova F</h1>
            <h1>Pokemon de Frente e de costas</h1>
            <img src={pokemon} alt="Pokémon Pikachu" style={{width:"400px"}}/>
            <br />
            {/**
             * Sempre que o botão for clicado, o estado do botão é alterado, assim, o useEffect é executado e a imagem do pokemon é alterada.
             */
            }
            <button style={{background: "#4895ff",color: "white", padding: "15px", borderRadius: "7px", fontSize: "15px", cursor: "pointer", outline: "none", transition: "0.2s"}} onClick={() => setFlag(!Flag)}>Virar o Pokémon</button>
            <hr />
        </div>
    )

}

export default PokemonFrenteCostas