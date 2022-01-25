import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cars: [ "Model S", "Model Y", "Model S", "Model 3", "Model X"  ]
}

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.carsssss


export default carSlice.reducer