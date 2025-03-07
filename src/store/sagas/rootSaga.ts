import { all } from "redux-saga/effects";
import { watchFetchCharacters } from "./starwarSaga"; 

export default function* rootSaga() { 
  yield all([watchFetchCharacters()]);
}
