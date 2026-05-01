import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("http://localhost:5000/api/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setData(res.data));
    }
  }, []);

  return (
    <div className="p-10 bg-slate-900 min-h-screen text-white">
      <h1 className="text-5xl font-bold mb-10">
        Team Task Dashboard 🚀
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-blue-600 p-6 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold">Total Tasks</h2>
          <p className="text-5xl mt-4">{data.total || 0}</p>
        </div>

        <div className="bg-yellow-500 p-6 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold">To Do</h2>
          <p className="text-5xl mt-4">{data.todo || 0}</p>
        </div>

        <div className="bg-purple-600 p-6 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold">In Progress</h2>
          <p className="text-5xl mt-4">{data.progress || 0}</p>
        </div>

        <div className="bg-green-600 p-6 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold">Done</h2>
          <p className="text-5xl mt-4">{data.done || 0}</p>
        </div>

      </div>

      <div className="mt-10 bg-red-600 p-6 rounded-3xl shadow-xl w-[300px]">
        <h2 className="text-2xl font-bold">Overdue Tasks</h2>
        <p className="text-5xl mt-4">{data.overdue || 0}</p>
      </div>
    </div>
  );
}