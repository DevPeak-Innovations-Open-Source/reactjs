import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCharactersRequest, fetchCharactersSuccess, fetchCharactersFailure } from "../slices/starwarSlice";

// ✅ API Call Function
const fetchCharactersApi = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("Failed to fetch Starwar characters");
  const data = await response.json();
  console.log("Fetched API Data:", data); // ✅ Debug log
  return data;
};

// ✅ Saga Worker Function
function* fetchCharactersSaga() {
  try {
    const data = yield call(fetchCharactersApi);
    const transformedData = data.map((character: any) => ({
      id: character.id,
      name: character.name,
      address: `${character.address.street}, ${character.address.suite}, ${character.address.city}`,
    }));
    console.log("Transformed Data:", transformedData); // ✅ Debug log
    yield put(fetchCharactersSuccess(transformedData));
  } catch (error: any) {
    console.error("API Fetch Error:", error.message);
    yield put(fetchCharactersFailure(error.message));
  }
}

// ✅ Saga Watcher
export function* watchFetchCharacters() {
  yield takeLatest(fetchCharactersRequest.type, fetchCharactersSaga);
}
