import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";

export function BaseLayout() {
  return (
    <div className="font-root relative bg-black text-zinc-100 leading-relaxed">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}