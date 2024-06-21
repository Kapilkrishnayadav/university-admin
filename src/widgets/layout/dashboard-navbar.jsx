import { useLocation, Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";




export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

 
  const  handleLogout=()=>{
    function extractToken(cookieString) {
      const cookies = cookieString.split(';'); // Split into individual cookies
      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('='); // Split each cookie into name-value pair
        if (name === 'token') { // Check if the name matches the token cookie
          return value;
        }
      }
      return null; // If token cookie not found, return null
    } 
     const token=extractToken(document.cookie);
     document.cookie = `token=${token}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
     window.location.reload()
  }

  return (  
    <div>

    <Navbar
    
      >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
              >
              {page}
            </Typography>
          </Breadcrumbs>
        
        </div>
        <div className="flex items-center">
          {/* <div className="mr-auto md:mr-4 md:w-56">
            <Input label="Search" />
          </div> */}
         
          <Link 
          // to="/auth/sign-in"
          >
            <Button
            
              variant="text"
              color="blue-gray"
              className=" items-center gap-1 px-4 flex normal-case"
              onClick={handleLogout} 
            >
              <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
              Log out
            </Button>
           
          </Link>
                  
        </div>
      </div>
    </Navbar>
  
    </div>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
