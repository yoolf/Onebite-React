import { useState } from "react";

const Register = () => {

    const [input, setInput] = useState({
        name: '',
        birth: '',
        country: ''
    })

    console.log(input);

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <div>
                <input 
                    name='name' 
                    value={input.name} 
                    onChange={onChange} placeholder="name" 
                />
            </div>

            <div>
                <input
                    name="birth"
                    value={input.birth}
                    onChange={onChange}
                    type="date"
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

        </div>
    );
};

export default Register;