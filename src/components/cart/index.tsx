import { useFormik } from 'formik'
import { useState } from 'react'
import ImportMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { RootReducer } from '../../store'
import { formatPrice } from '../product'
import * as style from './styles'
import removeImg from '../../assets/images/remove.svg'
import { usePurchaseMutation } from '../../services/api'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [menu, setMenu] = useState('cart')
  const [paymentMenu, setPaymentMenu] = useState(false)
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 letras')
        .required('Campo obrigatório'),
      address: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O CEP precisa ter 8 números')
        .max(9, 'O CEP precisa ter 8 números')
        .required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório'),

      cardName: Yup.string().when((values, schema) =>
        paymentMenu ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        paymentMenu ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        paymentMenu ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        paymentMenu ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        paymentMenu ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            number: Number(values.number),
            city: values.city,
            zipCode: values.zipCode,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: Number(values.cardNumber),
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 99
          }
        ]
      })
    }
  })

  const closeCart = () => {
    dispatch(close())
  }

  const removeProduct = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, curr) => acc + curr.preco, 0)
  }

  const getError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const goToPaymentMenu = () => {
    if (
      form.values.receiver &&
      form.values.address &&
      form.values.city &&
      form.values.zipCode &&
      form.values.number
    ) {
      setMenu('payment')
      setPaymentMenu(true)
    } else {
      alert('Preencha os campos obrigatórios')
    }
  }

  console.log(form)

  return (
    <style.CartContainer className={isOpen ? 'is-open' : ''}>
      <style.Overlay onClick={closeCart}></style.Overlay>
      <style.CartStyle>
        {isSuccess ? (
          <style.ConfirmationMenu>
            <>
              <h3>Pedido realizado - {data?.orderId || 'ORDER_ID'}</h3>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </>
            <style.CardBtn>
              <style.CardBtnLink to={'/'} onClick={closeCart}>
                Concluir
              </style.CardBtnLink>
            </style.CardBtn>
          </style.ConfirmationMenu>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {menu == 'cart' && (
              <style.CartMenu>
                <ul>
                  {items.map((product) => {
                    return (
                      <li key={product.id}>
                        <style.Img src={product.foto} alt={product.nome} />
                        <div>
                          <h3>{product.nome}</h3>
                          <p>{formatPrice(product.preco)}</p>
                        </div>
                        <style.RemoveBtn
                          onClick={() => removeProduct(product.id)}
                        >
                          <img
                            src={removeImg}
                            alt="Clique aqui para remover o produto do carrinho"
                          />
                        </style.RemoveBtn>
                      </li>
                    )
                  })}
                </ul>
                <style.Total>
                  <p>Valor</p>
                  <p>{formatPrice(getTotalPrice())}</p>
                </style.Total>
                <style.CardBtn
                  type="button"
                  onClick={() => {
                    if (items.length > 0) {
                      setMenu('delivery')
                    } else {
                      alert('Adicione produtos para prosseguir com a compra')
                    }
                  }}
                >
                  Continuar com a entrega
                </style.CardBtn>
              </style.CartMenu>
            )}
          </form>
        )}
      </style.CartStyle>
    </style.CartContainer>
  )
}
