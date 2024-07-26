import { useState, useRef } from "react";

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });

    const countRef = useRef(0);
    let count = 0;
    // 렌더링은 한번뿐
    // console.log("Register 렌더링");

    // input 태그가 렌더링하는 DOM 요소가 inputRef라는 레퍼런스 오브젝트에 저장된다
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++;
        count++;
        console.log(countRef.current, count);
        // onChange에 따라 Register 함수가 매번 호출되는데 그 때마다 내부가 초기화 된다 따라서 count는 항상 1이다
        // 함수 내에서 사용하는 변수를 외부에 선언하면 컴포넌트가 중복 사용될 때 변수가 공유되기 때문에 올바르지 않다

        console.log(e.target.name, e.target.value);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = () => {
        if(input.name === "") {
            // 이름 입력 DOM 요소에 포커스한다
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <div>
                <input 
                    ref={inputRef}
                    name='name' 
                    value={input.name} 
                    onChange={onChange} placeholder={"name"} 
                />
            </div>

            <div>
                <input
                    name="birth"
                    value={input.birth}
                    onChange={onChange}
                    type={"date"}
                />
            </div>

            <div>
                <select
                    name="country" 
                    value={input.country} 
                    onChange={onChange}>
                    <option value="kr">Korea</option>
                    <option value="jp">Japan</option>
                    <option value="us">USA</option>
                </select> 
            </div>
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange} placeholder={"bio"} />
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    );
};

export default Register;