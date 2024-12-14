import stars from '../../assets/images/estrela.svg'
import * as Style from './styles'

type Props = {
  title: string
  rating: string
  description: string
  cover: string
  id: number
}

const Restaurant = ({ title, rating, description, cover, id }: Props) => (
  <Style.Card>
    <Style.CardImage>
      <img src={cover} alt='"Foto do restaurante' />
    </Style.CardImage>
    <Style.CardInfos>
      <Style.CardHeader>
        <h3>{title}</h3>
        <div>
          <h3>{rating}</h3>
          <img src={stars} alt="avaliação" />
        </div>
      </Style.CardHeader>
      <p>{description}</p>
      <Style.ButtonLink to={`/profile/${id}`}>Saiba mais</Style.ButtonLink>
    </Style.CardInfos>
  </Style.Card>
)

export default Restaurant
