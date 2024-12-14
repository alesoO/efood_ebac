import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/Instagram.svg'
import meta from '../../assets/images/Meta.svg'
import x from '../../assets/images/X.svg'
import * as style from './styles'
const Footer = () => (
  <style.FooterStyle>
    <style.Logo src={logo} alt="efood" />
    <style.List>
      <style.ListItem>
        <img src={instagram} alt="" />
      </style.ListItem>
      <style.ListItem>
        <img src={meta} alt="" />
      </style.ListItem>
      <style.ListItem>
        <img src={x} alt="" />
      </style.ListItem>
    </style.List>
    <style.Copyright>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </style.Copyright>
  </style.FooterStyle>
)

export default Footer
