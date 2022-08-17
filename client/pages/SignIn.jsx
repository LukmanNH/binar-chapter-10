import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";

export default function SignIn() {
  const currentUser = useSelector((state) => state.user.users);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const signIn = (e) => {
    e.preventDefault();
    const newUser = axios
      .post("http://localhost:8800/api/auth/signin", {
        username: username,
        password: password,
      })
      .then((res) => {
        dispatch(getUser(res.data));
        localStorage.setItem("access_token", res.data.token);
        router.push("/");
      });
  };

  return (
    <>
      <Head>
        <title>GameId | Sign In</title>
      </Head>
      <div className="h-full bg-[#252525] flex justify-between">
        <div>
          <div className="container pl-[4.5rem] pt-[3.75rem]">
            <Link href="/">
              <img src="logo.svg" className="cursor-pointer" alt="logo" />
            </Link>
          </div>
          <div className="container">
            <div className="px-[11.875rem]">
              <div className="container max-w-[20.375rem] mt-[9.375rem]">
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-2xl font-bold mr-[12rem]">
                    Masuk
                  </h3>
                  <h3 className="text-[#FBBC05] text-base font-normal cursor-pointer">
                    <Link href="/SignUp">Daftar</Link>
                  </h3>
                </div>
                <form
                  onSubmit={(e) => {
                    signIn(e);
                  }}
                >
                  <div className="pt-6 mb-4">
                    <input
                      type="text"
                      name="text"
                      placeholder="Masukkan Username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      className="w-[20.375rem] h-12 p-[0.875rem] rounded-[0.25rem] text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Kata Sandi"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="w-[20.375rem] h-12 p-[0.875rem] rounded-[0.25rem] text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-[2.25rem] w-[20.375rem] h-[2.875rem] text-white bg-[#F2C94C] py-3 rounded-[0.5rem]"
                  >
                    MASUK
                  </button>
                </form>
                <div className="flex items-center mt-[2.125rem]">
                  <div class="flex-grow border-t border-gray-400"></div>
                  <p className="text-xs text-[#D0D0D0] mx-4">
                    atau masuk dengan
                  </p>
                  <div class="flex-grow border-t border-gray-400"></div>
                </div>
                <div className="mt-[2.25rem] w-[20.375rem] h-[2.875rem] text-white py-3 rounded-[0.5rem] flex justify-center border border-gray-300 cursor-pointer">
                  <img src="google-icon.svg" alt="google-icon" />
                  <p className="ml-4">Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pr-6 pt-4 pb-4">
          <img
            src="bg-auth.png"
            className="w-[43.75rem] h-[57rem]"
            alt="bg-auth"
          />
        </div>
      </div>
    </>
  );
}
