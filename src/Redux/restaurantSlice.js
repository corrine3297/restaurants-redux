import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api call - createAsyncThunk
export const fetchRestaurants = createAsyncThunk('restaurantList/fetchRestaurants',()=>{
// api call
    return axios.get('/restaurants.json').then(response=>response.data.restaurants)
})

const restaurantSlice = createSlice({
    name:'restaurantList',
    initialState:{
        loading:false,
        allRestaurants:[],
        allRestaurantContainer:[],
        error:''
    },
    reducers:{
        searchRestaurant:(state,action)=>{
            state.allRestaurants = state.allRestaurantContainer.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurants.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchRestaurants.fulfilled,(state,action)=>{
            state.loading = false
            state.allRestaurants = action.payload
            state.allRestaurantContainer = action.payload
            state.error = ''
        })
        builder.addCase(fetchRestaurants.rejected,(state,action)=>{
            state.loading = false
            state.allRestaurants = []
            state.error = action.error.message
        })
    }
})

export const {searchRestaurant} = restaurantSlice.actions
export default restaurantSlice.reducer