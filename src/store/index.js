// import { configureStore } from "@reduxjs/toolkit";
// import loginSlice from "./slice/LoginSlice";


// const store = configureStore({
//     reducer:{
//         user:loginSlice,
//     }
// })
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slice/LoginSlice";

// import todoUser from "../store/slice/UserSlice";
// import dataSlice from "../store/slice/DataSlice";
// import counterSlice from "./slice/counterSlice";

const store = configureStore({
    reducer:{
        users: LoginSlice,

    }
})

export default store;