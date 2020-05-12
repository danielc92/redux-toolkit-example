import React, { useEffect } from "react";
import { fetchTodos, selectTodos } from "./todosSlice";
import { useSelector, useDispatch } from "react-redux";
import './index.css'

interface Props {}

const LOADING_MESSAGE = "Results are loading...";

const Todos: React.FC<Props> = (props) => {
  const state = useSelector(selectTodos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="container">
      {state.error ? (
        <p>{state.error}</p>
      ) : state.loading ? (
        <p>{LOADING_MESSAGE}</p>
      ) : (
        state.results.map((r) => (
          <div className="card">
            <h2>{r.title}</h2>
            <p>Posted by user with id {r.userId}</p>
            <p
              className={r.completed ? 'tag tag-green' : 'tag tag-grey'}
            >
              {r.completed ? "complete" : "in progress"}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Todos;
