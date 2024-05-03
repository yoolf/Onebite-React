import { useState } from "react";

function useInput() {
    // 커스텀 훅으로 만드는 방법, 함수 앞에 use를 붙인다
    const [input, setInput] = useState('');

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange];
}

export default useInput;