import { TEST_ASYNC } from "./types";
import axios from "axios";

export const testAsync = url => async dispatch => {
  const res = await axios.get(url)
  dispatch( {
    type: TEST_ASYNC,
    payload: res
  })
}
