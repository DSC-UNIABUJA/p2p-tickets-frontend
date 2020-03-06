import { ADD } from "./types";

export const addSomething = value => {
  return {
    type: ADD,
    payload: value
  }
}
