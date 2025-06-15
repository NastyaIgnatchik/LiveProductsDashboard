import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './services/product';
import { priceUpdatesApi } from './services/priceUpdate'

export function setupStore(preloadedState = {}) {
  return configureStore({
    reducer: {
      [productsApi.reducerPath]: productsApi.reducer,
      [priceUpdatesApi.reducerPath]: priceUpdatesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware).concat(priceUpdatesApi.middleware),
    preloadedState
  });
}

export const store = setupStore();
