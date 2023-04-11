import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage({globalState}) {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts globalState={globalState} />
        <Sidebar />
      </div>
    </>
  );
}
