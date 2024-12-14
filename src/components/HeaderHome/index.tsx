import { Header, Logo, Slogan } from './styles'
import logo from '../../assets/images/logo.svg'
import bgImg from '../../assets/images/Vector.svg'

const HeaderHome = () => (
  <Header style={{ backgroundImage: `url(${bgImg})` }}>
    <Logo src={logo} alt="efood" />
    <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
  </Header>
)

export default HeaderHome
