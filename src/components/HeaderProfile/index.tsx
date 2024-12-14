import { Header, HeaderImg, HomeLink, Logo } from './styles'
import backgroundImg from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'
import { Restaurant } from '../../pages/home'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import { Link } from 'react-router-dom'

type Props = {
  restaurant: Restaurant
}

const HeaderProfile = ({ restaurant }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <Header style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div>
          <HomeLink to={'/'}>Restaurant</HomeLink>
          <Link to={'/'}>
            <Logo src={logo} alt="efood" />
          </Link>
          <p onClick={openCart}>{items.length} produto(s) no carrinho</p>
        </div>
      </Header>
      <HeaderImg style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <div>
          <h1>{restaurant.tipo}</h1>
          <h1>{restaurant.titulo}</h1>
        </div>
      </HeaderImg>
    </>
  )
}

export default HeaderProfile
