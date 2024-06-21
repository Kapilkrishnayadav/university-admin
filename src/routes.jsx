import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Student,Result } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
// import { Result } from "postcss";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "student",
        path: "/student",
        element: <Student />,
      },
      {
        name: "result",
        path: "/result/:_id",
        element: <Result />,
      },
     
    ],
  },
  {
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      
    ],
  },
];

export default routes;
