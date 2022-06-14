import Image from "next/image"
import Link from "next/link"
// import { useRouter } from "next/dist/client/router"
import { useRouter } from "next/router"

const Pokemons = ({ data }) => {
 // console.log("data:", data)
 
 const router = useRouter()
 console.log('router:', router)
 
 /* If fallback is «blocking» there is no need to use the code below */
 /* If the fallback is «true», you can use the code below */
 // if(router.isFallback){
 //  return <p>Loading...</p>
 // }
 
 
 return (
  <div>
   <h1>Name: {data.name} </h1>
   <p>Number #{data.id}</p>
   <Image src={data.sprites.front_default} width={400} height={400} />
   <button>
    <Link href="/">To Root</Link>
   </button>
  </div>
 )
}

export default Pokemons

export const getStaticProps = async ({ params }) => {
 const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
 const data = await response.json()

 return { props: { data } }
}

export const getStaticPaths = async () => {
 const paths = [{ params: { id: "1" } }, { params: { id: "2" } }]

 return {
  paths,
  /* With fallback «false» you have to define all the routes you will access */
  fallback: "blocking",
 }
}

// export const getServerSideProps = async ({ params }) => {
//  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
//  const data = await response.json()

//  return { props: { data } }
// }
