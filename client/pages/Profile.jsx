import axios from "axios";
import { React, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import { updateRequested, updateSuccess } from "../redux/slices/userSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.users);
  const updateLoading = useSelector((state) => state.user.isLoadingProfile);
  console.log(updateLoading);
  const [name, setName] = useState(currentUser.name);
  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);
  const [isDisabled, setIsDisabled] = useState(true);
  const [credentials, setCredentials] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });

  const handleUpdate = () => {
    setIsDisabled(!isDisabled);
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    dispatch(updateRequested());
    const newProfile = axios
      .put(`http://localhost:8800/api/user/${currentUser._id}`, {
        name,
        username,
        email,
      })
      .then((res) => {
        dispatch(updateSuccess(res.data));
        setIsDisabled(!isDisabled);
      });
  };

  return (
    <>
      <NavBar />
      <div className="container-full bg-[#252525] w-full lg:h-[100vh] flex justify-between">
        <div className="pt-[6.25rem] pl-[9.375rem]">
          <div className="absolute bottom-64 left-0">
            <img src="dot-illustration.svg" alt="dot" />
          </div>
          <div className="flex">
            <img src="icon_hero.svg" alt="category icon" className="mr-3" />
          </div>
          <h4 className="font-bold text-5xl max-w-lg text-white mt-3 leading-[56px] mb-12">
            Profile
          </h4>

          <div className="pt-2 mb-4">
            <input
              type="text"
              name="text"
              placeholder="Masukkan Username"
              disabled={isDisabled}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setCredentials({ name: e.target.value });
              }}
              className="w-[20.375rem] h-12 p-[0.875rem] rounded-[0.25rem] text-sm"
            />
          </div>

          <div className="pt-2 mb-4">
            <input
              type="text"
              name="text"
              placeholder="Masukkan Username"
              disabled={isDisabled}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setCredentials({ username: e.target.value });
              }}
              className="w-[20.375rem] h-12 p-[0.875rem] rounded-[0.25rem] text-sm"
            />
          </div>
          <div className="pt-2 mb-4">
            <input
              type="text"
              name="text"
              placeholder="Masukkan Username"
              disabled={isDisabled}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setCredentials({ email: e.target.value });
              }}
              className="w-[20.375rem] h-12 p-[0.875rem] rounded-[0.25rem] text-sm"
            />
          </div>
          <div className="pt-2 mb-4">
            <input
              type="text"
              name="text"
              placeholder="Masukkan Username"
              disabled
              value={
                "RSP: " +
                currentUser.score[0].point +
                " - " +
                "Dummy: " +
                currentUser.score[1].point
              }
              className="w-[20.375rem] h-12 p-[0.875rem] rounded-[0.25rem] text-sm"
            />
          </div>
          <div>
            {isDisabled ? (
              <button
                onClick={handleUpdate}
                className="bg-[#F1B03D] text-[#161616] font-medium text-xl rounded-[10px] px-[25px] py-[7px] mt-2"
              >
                Update Profile
              </button>
            ) : updateLoading ? (
              <Spinner animation="border" />
            ) : (
              <button
                onClick={(e) => handleSubmitUpdate(e)}
                className="bg-teal-300 text-[#161616] font-medium text-xl rounded-[10px] px-[25px] py-[7px] mt-2"
              >
                Submit
              </button>
            )}
          </div>
        </div>
        <div>
          <img
            src="hero.png"
            alt="hero"
            className="w-[40.5rem] h-[37.406rem]"
          />
        </div>
      </div>
      <div className="container-full bg-[#161616] w-full lg:[45.625rem] flex relative justify-between px-[9.375rem]"></div>
    </>
  );
}

export async function getServerSideProps() {
  // console.log(currentUser);

  return {
    props: {},
  };
}
