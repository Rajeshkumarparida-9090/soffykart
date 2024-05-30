// import {createSlice} from "@reduxjs/toolkit";

// const loginSlice = createSlice({
//     name:"loginSlice",
//     innitialState: {
//         name:"",
//         password:"",
//     },
//     reducers:{
//         login(state,action){
//             console.log(state.name, "=====", action)
//         }
//     }
// })

// export const {login} = loginSlice.actions;

// export default loginSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: {
        email:"",
        password:""
    },
    reducers: {
        userLogin(state,action) {
            state.email = action.payload.email;
            state.password = action.payload.password;
            // console.log(state)
        },
        
    }
});
export const { userLogin } = loginSlice.actions;
export default loginSlice.reducer;