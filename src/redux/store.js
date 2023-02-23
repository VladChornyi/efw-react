import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";
import { rootReducer } from "./rootReducer";

export const store = configureStore({ reducer: rootReducer });
