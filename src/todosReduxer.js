import React from "react";
import { ADD_TODO } from "./actions";

const initialState = [];
export const todosReduxer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === ADD_TODO) {
    const todos = state;
    const todo = payload;

    return [...todos, todo];
  }
  return state;
};
