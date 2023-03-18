import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import ABTestingForm from "./components/NewTest";

export default function Growth() {
  return (
    <>
    <TopBar />
    <ABTestingFormcd  />
    <Outlet />
    </>
  )
}
