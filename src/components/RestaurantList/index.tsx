import { Restaurant as HomeRestaurant } from '../../pages/home'
import Restaurant from '../Restaurant'
import { List } from './styles'

export type Props = {
  restaurants: HomeRestaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <List>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          title={restaurant.titulo}
          rating={restaurant.avaliacao}
          description={restaurant.descricao}
          cover={restaurant.capa}
          id={restaurant.id}
        />
      ))}
    </List>
  )
}

export default RestaurantList
