import { configureStore } from '@reduxjs/toolkit'
import faders from './faders'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import targets from './targets'

export const store = configureStore({
  reducer: {
    faders: faders,
    targets:targets
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector