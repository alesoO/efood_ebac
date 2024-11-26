import { useParams } from 'react-router-dom'
import { useGetRestaurantSelectedQuery } from '../../services/api'
import Footer from '../../components/Footer'
import HeaderProfile from '../../components/HeaderProfile'
import ProductList from '../../components/ProductList'

const Profile = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantSelectedQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <HeaderProfile restaurant={restaurant} />
      <ProductList product={restaurant.menu} />
      <Footer />
    </>
  )
}

export default Profile
