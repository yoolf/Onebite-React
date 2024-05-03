const Main = () => {
    const user = {
        name: "감자",
        isLogin: true,
    };

    if (user.isLogin) {
        return <div>log out</div>;
    } else {
        return <div>log in</div>
    }

    // return (
    //   <>
    //     {user.isLogin ? (
    //         <div>로그아웃</div>
    //     ) : (
    //         <div>로그인</div>
    //     )}
    //   </>
    // );
  }

export default Main;