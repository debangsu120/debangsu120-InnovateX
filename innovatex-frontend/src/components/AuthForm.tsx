// src/components/AuthForm.tsx
import { useState } from "react";
import { authClient } from "../authClient";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    const res = await authClient.emailAndPassword.signUp({
      email,
      password,
    });
    setMessage(res.error ? res.error : "Registered successfully ✅");
  };

  const handleLogin = async () => {
    const res = await authClient.emailAndPassword.signIn({
      email,
      password,
    });
    setMessage(res.error ? res.error : "Logged in ✅");
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Auth Form</h2>
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 mb-2 w-full"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex gap-2">
        <button onClick={handleRegister} className="bg-green-500 text-white px-3 py-1">
          Register
        </button>
        <button onClick={handleLogin} className="bg-blue-500 text-white px-3 py-1">
          Login
        </button>
      </div>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}
