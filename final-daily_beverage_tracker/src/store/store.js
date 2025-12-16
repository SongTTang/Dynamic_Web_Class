import { configureStore, combineReducers } from "@reduxjs/toolkit";
import drinksReducer from "./drinkSlice";
import filterReducer from "./filterSlice";
import themeReducer from "./themeSlice"

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["drinks", "themes"], 
};

const rootReducer = combineReducers({
  drinks: drinksReducer,
  filters: filterReducer,
  themes: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
