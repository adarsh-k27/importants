import {
    configureStore
} from '@reduxjs/toolkit'

import Auth_Reducer from '../reducers/auth'
import Post_Reducer from '../reducers/post'

const store = configureStore({
    reducer: {
      AUTH:Auth_Reducer,
      POSTS:Post_Reducer
    }
})

export default store ;

//import @reduxjs/toolkit from npm 

//wrap Provider From 'react-redux' in index.js