import { useEffect } from 'react';

const Even = () => {
    // useEffect가 반환하는 콜백 함수를 클린업, 정리 함수라고 하는데 이 함수는 useEffect가 끝날 때 실행된다
    useEffect(() => {
        return () => {
            console.log("unmount");
        };
    }, []);
    return <div>Even Number</div>
}

export default Even;
