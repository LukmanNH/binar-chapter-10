import axios from "axios";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";

function LeaderBoard({ UserScoreRSP, UserScoreDummy }) {
  const currentUser = useSelector((state) => state.user.users);
  return (
    <>
      <Head>
        <title>GameId | LeaderBoards</title>
      </Head>
      <NavBar />
      <div>
        <h1 className="text-center font-semibold text-3xl mt-20">
          RSP LeaderBoard
        </h1>
        <table className="w-[70%] mx-auto mt-5 text-center">
          <thead className="border-b bg-gray-800">
            <tr>
              <th className="text-sm font-medium text-white px-6 py-4">No.</th>
              <th className="text-sm font-medium text-white px-6 py-4">
                User ID
              </th>
              <th className="text-sm font-medium text-white px-6 py-4">
                Point
              </th>
            </tr>
          </thead>
          <tbody>
            {UserScoreRSP.map((item, index) => (
              <tr
                key={item.userId}
                className={`bg-white ${
                  item.userId === currentUser._id ? "font-medium" : "font-thin"
                } border-b`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.userId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.point}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="text-center font-semibold text-3xl mt-20">
          Dummy LeaderBoard
        </h1>
        <table className="w-[70%] mx-auto mt-5 text-center">
          <thead className="border-b bg-gray-800">
            <tr>
              <th className="text-sm font-medium text-white px-6 py-4">No.</th>
              <th className="text-sm font-medium text-white px-6 py-4">
                User ID
              </th>
              <th className="text-sm font-medium text-white px-6 py-4">
                Point
              </th>
            </tr>
          </thead>
          <tbody>
            {UserScoreDummy.map((item, index) => (
              <tr
                key={item.userId}
                className={`bg-white ${
                  item.userId === currentUser._id ? "font-medium" : "font-thin"
                } border-b`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.userId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.point}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default LeaderBoard;

export async function getServerSideProps() {
  const allUser = await axios.get("http://localhost:8800/api/user");
  const UserScoreRSP = allUser.data.data
    .map(({ score }) => score.filter((item) => item.gameName === "RSP"))
    .flat();
  const leaderBoardScore = UserScoreRSP.sort((a, b) =>
    a.point > b.point ? -1 : b.point > a.point ? 1 : 0
  );
  const UserScoreDummy = allUser.data.data
    .map(({ score }) => score.filter((item) => item.gameName === "Dummy"))
    .flat();
  return {
    props: { UserScoreRSP, UserScoreDummy },
  };
}
