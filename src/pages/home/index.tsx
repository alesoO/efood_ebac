import Footer from '../../components/footer'
import RestaurantList from '../../components/restaurantList'
import HeaderHome from '../../components/headerHome'
import { useGetRestaurantsQuery } from '../../services/api'

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
  const { isLoading, error, data: restaurants } = useGetRestaurantsQuery()

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
