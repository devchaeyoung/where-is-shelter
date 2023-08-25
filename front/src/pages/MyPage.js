import { React } from "react";
import User from "../components/MyPage/User";
import UserReviews from "../components/MyPage/UserReviews";
import UserFavorite from "../components/MyPage/UserFavorite";
import LoginForm from "../components/MyPage/LoginForm";

function MyPage() {
  const user = "로그인";
  return (
    <>
      {user === "로그인" ? (
        <div className="grow overflow-y-auto flex flex-row">
          <User />
          <div className="scroll-smooth overflow-y-scroll">
            <UserFavorite />
            <UserReviews />
          </div>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default MyPage;
