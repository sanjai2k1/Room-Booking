import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginComponent from "../Components/LoginComponent";
import SigUpComponent from "../Components/SigUpComponent";
import MainDashBoard from "../Layout/MainDashBoard";
import AddRoomComponent from "../Components/AddRoomComponent";
import RoomComponent from "../Components/RoomComponent";
import PageNotFoundComponent from "../Components/PageNotFoundComponent";

const router = createBrowserRouter([
  {
    path: "",
    element: <Navigate to="/maindashboard" />,
  },

  {
    path: "login",
    element: <LoginComponent />,
  },
  {
    path: "signup",
    element: 
    <SigUpComponent />,
  },
  {
    path: "maindashboard",
    element: (
      
        <MainDashBoard />

    ),
    children: [
      {
        path: "addroom",
        
        element: <AddRoomComponent />,
      },
      {
        path: "room/:id",
        element: <RoomComponent />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFoundComponent />,
  },
]);

export default router;
