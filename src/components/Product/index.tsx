import { useState } from 'react'
import { Menu } from '../../pages/home'
import { Modal, ModalContent, ProductCard } from './styles'
import close from '../../assets/images/close.svg'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  id: number
  name: string
  description: string
  img: string
  portion: string
  price: number
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Product = ({ id, name, description, portion, img, price }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    const product: Menu = {
      id,
      nome: name,
      descricao: description,
      porcao: portion,
      foto: img,
      preco: price
    }
    dispatch(add(product))
    dispatch(open())
  }

  const showModal = () => {
    if (isVisible) {
      return 'isVisible'
    }
    return ''
  }

  const getDescription = (description: string) => {
    if (description.length > 150) {
      return description.slice(0, 150) + '...'
    }
    return description
  }

  return (
    <>
      <ProductCard>
        <img src={img} alt="Foto do restaurante" />
        <h2>{name}</h2>
        <p>{getDescription(description)}</p>
        <button onClick={() => setIsVisible(true)}>Adicione ao carrinho</button>
      </ProductCard>
      <Modal className={showModal()}>
        <ModalContent>
          <div>
            <img src={img} alt="Foto do prato" />
            <div>
              <div>
                <h2>{name}</h2>
                <img
                  src={close}
                  onClick={() => setIsVisible(false)}
                  alt="Clique para fechar"
                />
              </div>
              <p>{description}</p>
              <p>Porção: {portion}</p>
              <button
                onClick={addToCart}
              >{`Adicionar ao Carrinho - ${formatPrice(price)}`}</button>
            </div>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => setIsVisible(false)}></div>
      </Modal>
    </>
  )
}

export default Product
