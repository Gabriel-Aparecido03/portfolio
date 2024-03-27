import { Link } from "react-router-dom";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="flex justify-start items-center h-[100px]">
      <div className="w-[calc((100vw-760px)/2)]">
        <Logo />
      </div>
      <nav className="flex items-center w-full justify-start gap-24 max-w-[760px]">
        <Link to="/about" className="uppercase font-light rounded-lg p-3 px-6 text-sm text-zinc-400 hover:bg-white/10 transition-all duration-300 hover:text-zinc-300"
        >
          <span>Sobre</span>
        </Link>
        <Link to="/projects" className="uppercase font-light rounded-lg p-3 px-6 text-sm text-zinc-400 hover:bg-white/10 transition-all duration-300 hover:text-zinc-300">
          <span>Projetos</span>
        </Link>
        <Link to="/articles" className="uppercase font-light rounded-lg p-3 px-6 text-sm text-zinc-400 hover:bg-white/10 transition-all duration-300 hover:text-zinc-300">
          <span >Estudos</span>
        </Link>
        <Link to="/contacts" className="uppercase font-light rounded-lg p-3 px-6 text-sm text-zinc-400 hover:bg-white/10 transition-all duration-300 hover:text-zinc-300">
          <span >Contato</span>
        </Link>
      </nav>
      <div className="w-[calc((100vw-760px)/2)] flex justify-end px-2 mr-10 text-2xl ">
        <a href="../../public/curriculo.pdf" download className="">
          <span className="px-2 ml-10 text-lg font-bold text-zinc-100 hover:bg-white/10 transition-all duration-200 rounded-lg">CV</span>
        </a>
      </div>
    </header>
  )
}