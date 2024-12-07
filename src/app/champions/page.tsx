import { MainDisplay } from "@/components/champion/MainDisplay.component";
import Sidebar from "@/components/champion/Sidebar.component";
import Navbar from "@/components/common/ChildNavbar.component";

const Champions = () => {
  return (
    <div>
      <Navbar title={"Champion"} />
      <div className="flex">
        <Sidebar />
        <MainDisplay content={""} />
      </div>
    </div>
  );
};

export default Champions;
