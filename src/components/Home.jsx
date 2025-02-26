import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <button
        onClick={() => navigate("/register")}
        className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700"
      >
        Register
      </button>
    </div>
  );
}

export default Home;


