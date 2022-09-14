import {createSlice} from '@reduxjs/toolkit'

const quickSlice = createSlice(
    {
        name:"quick",
        initialState:
        {
            quickArr:JSON.parse(localStorage.getItem("filterCar"))
        },
        reducers:
        {
            setQuick:(state,action)=>
            {
                state.quickArr=action.payload
            }
        }
    }
)


export default quickSlice.reducer;
export const {setQuick} = quickSlice.actions



