import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import starwarReducer from "./slices/starwarSlice";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    starwar: starwarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
