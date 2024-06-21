import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  DashboardNavbar,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      
      <div className="p-4">
        <DashboardNavbar />
    
        <Routes>

          
          {routes.map(({ layout, pages }) => {
            if (layout === "dashboard") {
              return pages.map(({ path, element }) => {
                
                return <Route exact path={path} element={element} />;
              });
            }
          })}


        </Routes>
       
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
