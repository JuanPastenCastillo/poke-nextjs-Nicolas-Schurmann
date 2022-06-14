import Link from "next/link"

const Pokemon = ({ pokemon }) => {
 // console.log('pokemon:', pokemon.url.split("/").filter(x => x).pop())
 const id = pokemon.url.split("/").filter(x => x).pop()
 return (
  <li> <Link href={`/pokemons/${id}`}>
   {pokemon.name}
  </Link>
  </li>
 )
}
export default function Pokemons({ pokemons }) {
 return (
  <div>
   <p>Mi App of Pokemons</p>
   <ol>
    {pokemons.map((x) => (
     <Pokemon pokemon={x} key={x.name} />
    ))}
   </ol>
  </div>
 )
}

export const getStaticProps = async () => {
 const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
 const data = await response.json()
 return {
  props: { pokemons: data.results },
 }
}
