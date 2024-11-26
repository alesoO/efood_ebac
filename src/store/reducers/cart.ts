import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Menu } from '../../pages/home'

type CartState = {
  items: Menu[]
  isOpen: boolean
  isPayed: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isPayed: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions

export default cartSlice.reducer
