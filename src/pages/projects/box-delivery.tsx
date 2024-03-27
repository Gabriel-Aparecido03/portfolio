import { LinkWithArrow } from "../../components/link-with-arrow";

export function BoxDelivery() {
  return (
    <div className="min-h-[calc(100vh-150px)] max-w-[760px] flex flex-col gap-8 mx-auto w-screen">
      <div className="h-[calc(100vh-100px)] flex items-center justify-center">
        <h1 className="text-zinc-100 font-bold text-6xl text-center ">Box delivery</h1>
      </div>
      <div>
        <h2 className="font-bold text-2xl">Visão geral</h2>
        <p className="font-light text-zinc-400  leading-relaxed mt-6">Box.delivery é uma plataforma para controle de encomendas . Onde podemos acompanhar as encomendas, mudar status das encomendas , fazer gerenciamento dos clientes, gerenciamentos do entregadores .</p>
        <p className="font-light text-zinc-400 ">Foi criado pensado em melhorar a minhas habilidades de fullstack , principalmente trabalhando com o backend .</p>
      </div>
      <div>
        <h2 className="font-bold text-2xl mt-6">Tecnologias usadas</h2>
        <div className="mt-4">
          <h3 className="font-bold text-lg">Frontend</h3>
          <ul className="p-2 mt-3 flex gap-3 flex-col">
            <li className="font-light text-zinc-400 ">React</li>
            <li className="font-light text-zinc-400 ">Mock para testes</li>
            <li className="font-light text-zinc-400 ">Testes e2e</li>
            <li className="font-light text-zinc-400 ">Testes unitários</li>
            <li className="font-light text-zinc-400 ">React Query ( tanstack )</li>
            <li className="font-light text-zinc-400 ">Compound pattern</li>
            <li className="font-light text-zinc-400 ">Container/presentation pattern</li>
            <li className="font-light text-zinc-400 ">Render props pattern</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-lg">Backend</h3>
          <ul className="p-2 mt-3 flex gap-3 flex-col">
            <li className="font-light text-zinc-400 ">Clean Architure ( Presenter , Controllers, use cases , entities e etc. )</li>
            <li className="font-light text-zinc-400 ">Domain Events</li>
            <li className="font-light text-zinc-400 ">Testes e2e</li>
            <li className="font-light text-zinc-400 ">Testes unitários</li>
            <li className="font-light text-zinc-400 ">SOLID principles</li>
            <li className="font-light text-zinc-400 ">Conceitos de DDD</li>
            <li className="font-light text-zinc-400 ">Factories Pattern</li>
            <li className="font-light text-zinc-400 ">Rotas públicas , rotas privadas</li>
          </ul>
        </div>
        <div className="mt-8">
          <LinkWithArrow
            link="https://github.com/Gabriel-Aparecido03/box-delivery"
            linkText="Github"
            text=""
          />
        </div>
      </div>
    </div>
  )
}