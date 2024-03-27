import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface ProjectCardPropsType {
  icon: ReactNode,
  title: string
  subject: string
  link: string
}

export function ProjectCard({ icon, link, subject, title }: ProjectCardPropsType) {

  const navigate = useNavigate()

  return (
    <div onClick={() => { navigate(link) }} className="flex flex-col gap-3 w-full rounded-lg hover:bg-white/5 cursor-pointer transition-all duration-300 p-6 px-5">
      {icon}
      <p className="font-bold text-base text-zinc-100">{title}</p>
      <span className="font-light text-zinc-400 text-sm"> {subject}</span>
    </div>
  )
}