import { createSlice } from "@reduxjs/toolkit"
import { AddCart, DeleteCart, GetCart, GetProduct } from "../Services/Services"

const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
        data:[],
        loading: false,
    },
    extraReducers(builder) {

        builder.addCase(GetProduct.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(GetProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        }),
        builder.addCase(GetProduct.rejected, (state, action) => {
            state.loading = true;
        }),


        builder.addCase(AddCart.pending,(state,action)=>{
            state.loading=true;
        }),
        builder.addCase(AddCart.fulfilled,(state,action)=>{
            state.loading = false;
            // state.data.push(action.payload);
            Array.prototype.push.apply(state.data, [action.payload]);
            // It is used to push the action.payload item into the state.data array. The apply() method allows you to call the push() method on state.data and pass [action.payload] as the argument
        })
        builder.addCase(AddCart.rejected,(state,action)=>{
            state.loading=true;
        }),


        builder.addCase(GetCart.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(GetCart.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        }),
        builder.addCase(GetCart.rejected, (state, action) => {
            state.loading = true;
        })


        builder.addCase(DeleteCart.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(DeleteCart.fulfilled, (state, action) => {
            state.loading = false;
          }),          
        builder.addCase(DeleteCart.rejected, (state, action) => {
            state.loading = false
        })

    }
})

export default ProductsSlice.reducer