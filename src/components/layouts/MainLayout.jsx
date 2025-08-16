import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  const location = useLocation();
  const sidebarPages = ["/devices", "/videos"];
  const showSidebar = sidebarPages.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        {showSidebar && <Sidebar />}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>
      a
    </div>
  );
}
