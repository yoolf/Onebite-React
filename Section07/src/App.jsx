import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 이 컴포넌트가 아직 마운트 되지 않았다고 설정
  const isMount = useRef(false);

  // 1. 마운트: 탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트
  useEffect(() => {
    // 마운트 되는 경우(현재 레퍼런스의 값이 false일 경우)에만 true로 변경
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트

  // count의 값이 변할 때마다 첫번째 인수로 준 콜백 함수를 계속 실행시킨다 
  // useEffect (() => {
  //   console.log(`count: ${count} / input: ${input}`);''
  // }, [count, input]);
  // 두번째 인자로 주는 배열을 의존성 배열 dependency array(deps)라고 한다

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input 
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        { count % 2 === 0 ? <Even /> : null }
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  );
}

export default App;
