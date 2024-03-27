import { LinkWithArrow } from "../../components/link-with-arrow";

export function JrPanfletos() {
  return (
    <div className="min-h-[calc(100vh-150px)] max-w-[760px] flex flex-col gap-8 mx-auto w-screen">
      <div className="h-[calc(100vh-100px)] flex items-center justify-center">
        <h1 className="text-zinc-100 font-bold text-6xl text-center ">Communities</h1>
      </div>
      <div>
        <h2 className="font-bold text-2xl">Visão geral</h2>
        <p className="font-light text-zinc-400  leading-relaxed mt-6">Foi um projeto realizado em conjunto com a JRPanfletos para ajudar no controle interno da empresa , tendo funções como : controle de funcionários , controle de clientes, controle dos setores , controles das autorizações de distribuição e também tendo controle dos relatórios de distribuição </p>
        <p className="font-light text-zinc-400  leading-relaxed mt-6">Foram resolvidos problemas em questão do gerenciamento interno de uma empresa que faz panfletagem , trazendo inúmeras funcionalidades para axuiliar no dia a dia da empresa .</p>
      </div>
      <div>
        <h2 className="font-bold text-2xl mt-6">Tecnologias usadas</h2>
        <div className="mt-4">
          <h3 className="font-bold text-lg">Frontend</h3>
          <ul className="p-2 mt-3 flex gap-3 flex-col">
            <li className="font-light text-zinc-400 ">React</li>
            <li className="font-light text-zinc-400 ">Compound pattern</li>
            <li className="font-light text-zinc-400 ">Container/presentation pattern</li>
            <li className="font-light text-zinc-400 ">Render props pattern</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-lg">Backend</h3>
          <ul className="p-2 mt-3 flex gap-3 flex-col">
            <li className="font-light text-zinc-400 ">Testes unitários</li>
            <li className="font-light text-zinc-400 ">SOLID principles</li>
            <li className="font-light text-zinc-400 ">Factories Pattern</li>
            <li className="font-light text-zinc-400 ">Rotas públicas , rotas privadas</li>
            <li className="font-light text-zinc-400 ">Fastify</li>
          </ul>
        </div>
        <div className="mt-8">
          <LinkWithArrow
            link="https://github.com/Gabriel-Aparecido03/JRPanfletos"
            linkText="Github"
            text=""
          />
        </div>
      </div>
    </div>
  )
}