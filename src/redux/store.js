import {configureStore} from '@reduxjs/toolkit'
import quickSlice from './quickSlice'

const store = configureStore({
    reducer:
    {
        quick:quickSlice
    }
})



export default store








