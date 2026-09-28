import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar"

function PublicLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#eef8ff]">
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PublicLayout;