import Footer from '../../components/Footer'
import RestaurantList from '../../components/RestaurantList'
import HeaderHome from '../../components/HeaderHome'
import { useGetRestaurantQuery } from '../../services/api'

export type Menu = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Menu[]
}

const Home = () => {
  const { isLoading, error, data: restaurants } = useGetRestaurantQuery()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Ocorreu um erro ao carregar os restaurantes.</p>
  }

  return (
    <>
      <HeaderHome />
      {restaurants && <RestaurantList restaurants={restaurants} />}
      <Footer />
    </>
  )
}

export default Home
