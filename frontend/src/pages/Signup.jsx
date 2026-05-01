import { useState } from "react";
import axios from "axios";

export default function Signup() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signup = async () => {
    try {

      await axios.post(
        "http://localhost:5000/api/auth/signup",
        form
      );

      alert("Signup Successful");

      window.location.href = "/login";

    } catch (err) {
      alert("Signup Failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-600">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[400px] text-black">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded-xl mb-4"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-xl mb-4"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-xl mb-6"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          onClick={signup}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-bold"
        >
          Signup
        </button>

      </div>
    </div>
  );
}