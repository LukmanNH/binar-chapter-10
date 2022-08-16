import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

export default function leaderboard() {
  return (
    <>
      <NavBar />
      <table className="w-[70%] mx-auto mt-24 text-center">
        <thead className="border-b bg-gray-800">
          <tr>
            <th className="text-sm font-medium text-white px-6 py-4">No.</th>
            <th className="text-sm font-medium text-white px-6 py-4">Name</th>
            <th className="text-sm font-medium text-white px-6 py-4">Email</th>
            <th className="text-sm font-medium text-white px-6 py-4">Point</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}
