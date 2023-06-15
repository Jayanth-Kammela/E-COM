import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const url = 'http://localhost:8086/ecom'

//product
export const GetProduct = createAsyncThunk('ecom/get', async (id) => {
    id = id || "";
    try {
        const wholeData = await axios.get(`${url}/product/${id}`);
        return wholeData.data
    } catch (error) {
        console.log(error);
    }
})

//cart
export const AddCart = createAsyncThunk('cart/post', async (data) => {
    try {
        const newData = axios.post(`${url}/cart`, data);
        return (await newData).data
    } catch (error) {
        console.log(error);
    }
})


export const GetCart = createAsyncThunk('cart/get', async () => {
    try {
        const cartData = await axios.get(`${url}/cart`);
        return cartData.data;
    } catch (error) {
        console.log(error);
    }
})

export const DeleteCart = createAsyncThunk('cart/delete', async (id) => {
    try {
        await axios.delete(`${url}/cart/${id}`)
        return id
    } catch (error) {

    }
})