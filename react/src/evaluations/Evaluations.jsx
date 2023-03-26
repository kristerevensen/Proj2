import { Outlet } from "react-router-dom";
import PageComponent from "../components/PageComponent";

export default function Evaluations() {
  return (
    <>
      {/* Evaluations Component */}
      <PageComponent title="Evaluations" buttons="/evaluations/new" buttonTitle={'New Finding'}>
        children: 
      </PageComponent>
    </>
  )
}
