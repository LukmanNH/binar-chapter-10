import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/userSlice";

export default function NavBar() {
  const user = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const authSignOut = useSelector((state) => state.user);
  return (
    <>
      <div className="bg-[#161616] flex w-full px-28 py-6 justify-between">
        <div className="">
          <Link href={"/"}>
            <img
              src="logo.svg"
              alt="logo"
              className="cursor-pointer"
              height={32}
              width={150}
            />
          </Link>
        </div>
        <div>
          <ul className="flex font-medium text-white text-[1.3rem]">
            <li className="mr-[3.125rem] hover:text-sky-600 transition-colors">
              <Link href={"/GameList"}>Games</Link>
            </li>
            <li className="mr-[3.125rem] hover:text-sky-600 transition-colors">
              <Link href={"/LeaderBoard"}>LeaderBoard</Link>
            </li>
            <li className="mr-[3.125rem] hover:text-sky-600 transition-colors cursor-pointer">
              Support
            </li>
          </ul>
        </div>

        {user.length == 0 ? (
          <div className="flex font-medium text-white text-[1.3rem]">
            <h4 className="mr-3 hover:text-sky-600 transition-colors">
              <Link href={"/SignIn"}>Login</Link>
            </h4>
            <h4 className="mr-3 "> | </h4>
            <h4 className="hover:text-sky-600 transition-colors">
              <Link href={"/SignUp"}>Register</Link>
            </h4>
          </div>
        ) : (
          <div className="flex items-center">
            <Link href="/Profile">
              <h4 className="mr-3 text-white text-[1.3rem] cursor-pointer hover:text-sky-600 transition-colors">
                Howdy, {user.username}
              </h4>
            </Link>
            <div className="">
              <button
                disabled={user.isSignOutLoading}
                onClick={() => {
                  dispatch(logoutUser());
                }}
                className="bg-[#F1B03D] text-[#161616] font-medium text-xl rounded-[18px] px-[30px] py-[5px]"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
