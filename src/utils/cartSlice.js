import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, actions) => {
            if (!state.items.some(item => item.title === actions.payload.title)) {
                state.items.push(actions.payload);
            }
        },
        deleteItems: (state, actions) => {
             const filteredData = state.items.filter((indiProd) => { return indiProd.title !== actions.payload.title});
             state.items = filteredData;
        },
        clearAllItems: (state) => {
             state.items = [];
        }
    }
})

export const { addItems, deleteItems, clearAllItems } = cartSlice.actions;

export default cartSlice.reducer;