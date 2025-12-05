import { useAuth } from "@/store/userAuth";

export default function Login() {
  const handleLogin = async () => {
    const token = "FAKE_TOKEN_ABC";
    const user = { name: "Ghifar" };

    useAuth.getState().login(user, token);
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl">Login Page</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
