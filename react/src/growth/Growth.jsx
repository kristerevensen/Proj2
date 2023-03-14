import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";

export default function Growth() {
  return (
    <>
    <TopBar />
    <Outlet />
    </>
  )
}
