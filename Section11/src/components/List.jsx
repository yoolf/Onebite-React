import { TodoStateContext } from "../App";
import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";

const List = () => {
  // 이제 todos를 value로 전달하기 때문에 객체가 아닌 todos를 받아오도록 한다
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterdData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filterdTodos = getFilterdData();

  const getAnalyzedData = () => {
    console.log("getAnalyzedData 호출");
    const totalCount = todos.length;
    // filter 함수는 배열 내 요소를 모두 순회하기 때문에 todo state에 보관하는 데이터의 개수가 늘어나면 더 오래걸린다
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출");
    const totalCount = todos.length;
    // filter 함수는 배열 내 요소를 모두 순회하기 때문에 todo state에 보관하는 데이터의 개수가 늘어나면 더 오래걸린다
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  // 의존성 배열: deps
  // deps에 포함된 값이 변경되었을 때만 콜백함수가 다시 실행된다
  // useMemo는 해당 콜백함수가 반환하는 값을 그대로 반환한다

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos-wrapper">
        {filterdTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
