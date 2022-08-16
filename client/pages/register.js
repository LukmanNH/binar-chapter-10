import Link from "next/link";
import { useState } from "react";
import axios from 'axios';

export default function register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password) return alert("email or password is empty");

    axios.post('http://localhost:8800/api/auth/signup', {
      email: email,
      name: name,
      username: username,
      password: password,
      phone: phone
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="h-full bg-[#252525] flex justify-between">
        <div>
          <div className="container pl-[4.5rem] pt-[3.75rem]">
            <Link href="/">
              <img src="logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="container">
            <div className="px-[11.875rem]">
              <div className="container max-w-[20.375rem] mt-[9.375rem]">
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-2xl font-bold mr-[10rem]">
                    Register
                  </h3>
                  <h3 className="text-[#FBBC05] text-base font-normal cursor-pointer">
                    <Link href="/login">Masuk</Link>
                  </h3>
                </div>
                <form onSubmit={handleRegister}>
                  <div className="pt-6">
                    <input
                      type="text"
                      name="nama_lengkap"
                      placeholder="Nama Lengkap"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="w-[20.375rem] h-12 p-[0.875rem] rounded-[0.25rem] text-sm"
                    />
                  </div>
                  <div className="pt-6 mb-4">
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      className="w-[20.375rem] h-12 p-[0.875rem] rounded-[0.25rem] text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Masukkan Email Anda"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="w-[20.375rem] h-12 p-[0.875rem] rounded-[0.25rem] text-sm"
                    />
                  </div>
                  <div className="mb-4">
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
                  <div>
                    <input
                      type="number"
                      name="telp"
                      placeholder="No. Telephone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      className="w-[20.375rem] h-12 p-[0.875rem] rounded-[0.25rem] text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-[2.25rem] w-[20.375rem] h-[2.875rem] text-white bg-[#F2C94C] py-3 rounded-[0.5rem]"
                  >
                    REGISTER
                  </button>
                </form>
                <div className="flex items-center mt-[2.125rem]">
                  <div className="flex-grow border-t border-gray-400"></div>
                  <p className="text-xs text-[#D0D0D0] mx-4">
                    atau masuk dengan
                  </p>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <div className="mt-[2.25rem] w-[20.375rem] h-[2.875rem] text-white py-3 rounded-[0.5rem] flex justify-center border border-gray-300 cursor-pointer">
                  <img src="google-icon.svg" alt="google-icon" />
                  <p className="ml-4">Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pr-6">
          <img
            src="bg-auth.png"
            className="w-[43.75rem] h-[61rem]"
            alt="bg-auth"
          />
        </div>
      </div>
    </div>
  );
}
