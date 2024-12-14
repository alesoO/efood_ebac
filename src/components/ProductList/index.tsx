import { Menu } from '../../pages/home'
import Product from '../Product'
import { ProductListStyle } from './styles'

type Props = {
  products: Menu[]
}

const ProductList = ({ products }: Props) => {
  return (
    <ProductListStyle>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          description={product.descricao}
          name={product.nome}
          img={product.foto}
          portion={product.porcao}
          price={product.preco}
        />
      ))}
    </ProductListStyle>
  )
}

export default ProductList
