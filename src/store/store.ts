import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ContactSlice } from "./features/contactSlice.ts";
import { SelectSlice } from "./features/selectSlice.ts";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
    contact: ContactSlice.reducer,
    selected: SelectSlice.reducer,
});
// console.log("selected", SelectSlice.reducer);
export const store = configureStore({
    reducer: rootReducer
});

// export const useAppDispatch :()=> typeof store.dispatch = useDispatch;
export type AppDispatch = typeof store.dispatch; // Define type for dispatch function

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;