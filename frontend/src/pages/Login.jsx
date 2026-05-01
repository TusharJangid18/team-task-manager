import { useState } from "react";
import axios from "axios";

export default function Login() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const login = async () => {

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successful 🚀");

      window.location.href = "/";

    } catch (err) {

      alert(
        err.response?.data?.message || "Invalid Credentials"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">

      <div className="bg-white text-black p-10 rounded-3xl shadow-2xl w-[400px]">

        <h1 className="text-4xl font-bold text-center mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to continue managing tasks
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 border rounded-xl mb-4 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 border rounded-xl mb-6 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          onClick={login}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition duration-300"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?
          <a
            href="/signup"
            className="text-blue-600 font-bold ml-2 hover:underline"
          >
            Signup
          </a>
        </p>

      </div>

    </div>
  );
}