import { all } from "redux-saga/effects";
import { watchFetchCharacters } from "./starwarSaga"; // ✅ Ensure correct import

export default function* rootSaga() { // ✅ Default export
  yield all([watchFetchCharacters()]);
}
