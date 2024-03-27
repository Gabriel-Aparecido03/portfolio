import { Link } from "react-router-dom";

export function ArticleCard() {
  return (
    <Link to="" className="w-full justify-between px-4 h-20 rounded-lg flex flex-col hover:bg-white/5 gap-3">
      <div className="flex items-center justify-between w-full rounded-lg flex-1 h-full">
        <h3 className="text-zinc-100 font-semibold text-base">Lorem ipsum, dolor sit amet</h3>
        <span className="font-light text-sm text-zinc-400 leading-relaxed">Feb 12, 2024</span>
      </div>
      <div className="w-[98%] mx-auto bg-zinc-600 h-[1px]"/>
    </Link>
  )
}