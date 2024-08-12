
```jsx
// App.jsx

export const TodoContext = createContext();


      <TodoContext.Provider value={{
        todos, onCreate, onUpdate, onDelete,
      }}>
        <Editor/>
        <List/>
      </TodoContext.Provider>
```

TodoContext는 App 컴포넌트가 리렌더링될 때마다 다시 생성될 필요는 없기 때문에 컴포넌트 외부에 생성한다  
Provider는 Context가 공급할 데이터를 설정하거나 Context의 데이터를 공급받을 컴포넌트들을 설정하기 위해 사용한다.  
Provider 아래의 컴포넌트들은 TodoContext의 데이터를 받을 수 있게 된다  

```jsx
// List.jsx
  const { todos } = useContext(TodoContext);

    <TodoItem
        key={todo.id}
        {...todo}
    />
```

todos만 필요하기 때문에 todos만 사용  

```jsx
// TodoItem.jsx
  const { onUpdate, onDelete } = useContext(TodoContext);
```



```jsx
// App.jsx
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
```

컴포넌트가 리렌더링되면 함수가 다시 생성되고 그 내부의 변수, 함수들이 다시 생성된다. 따라서 value props로 객체를 생성해서 넣어주게 되면 마찬가지로 내부 함수들이 다시 생성된다.  
memo를 통해 다시 생성되지 않도록 한다. 
변하는 props와 변하지 않는 props를 분리해서 제공하면 된다  

```jsx
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const { onCreate } = useContext(TodoDispatchContext);
```

```jsx
// App.jsx
<TodoStateContext.Provider value={todos}>
```
변수에 객체가 아닌 배열을 담은 상태, 따라서 구조분해 할당이 아닌 직접 전달하는 형태로 변경된 것이다.  