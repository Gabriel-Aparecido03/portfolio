import { ArrowUpRight } from "phosphor-react";

export function About() {
  return (
    <main className="min-h-[calc(100vh-150px)] max-w-[760px] mx-auto w-screen flex mt-[5%]">
      <div className="flex flex-col gap-3 h-full justify-start">
        <h1 className="font-bold text-4xl text-zinc-100">Sobre mim .</h1>
        <div className="w-3/4 flex flex-col gap-4">
          <span className="font-light text-base text-zinc-400 leading-relaxed">
            Desenvolvedor web fullstack, combinando frameworks modernos com os melhores padrões de design.
          </span>
          <span className="font-light text-base text-zinc-400 leading-relaxed">
            Com <strong className="text-zinc-100">2 anos de experiência</strong>, ajudei no <strong className="text-zinc-100">desenvolvimento e manutenção em projeto</strong> que impactou mais de <strong className="text-zinc-100">250 empresas</strong> , mantive bons padrões de codigos, perfomance, experiência de usário e etc.
          </span>
          <span className="font-light text-base text-zinc-400 leading-relaxed">
            Atual trabalho com desenvolvedor front-end e mobile ,tive a honra de receber um <strong className="text-zinc-100">prêmio</strong> em um evento da empresa , <strong className="text-zinc-100">graças as minhas habilidades de comunição, trabalho em equipe e minhas hard skils </strong>.
          </span>
          <span className="font-light text-base text-zinc-400 leading-relaxed">
            Além da criação de interfaces e telas de responsivas , aprimoramento em habilidade para escrever código limpo, eficiente e performáticos , princípios da engenharia de software , identificação e resolução problemas/bugs .
          </span>
        </div>
        <h2 className="font-bold text-2xl text-zinc-100 mt-10">Carreira</h2>
        <div>
          <div className="flex flex-col gap-2 px-3">
            <h3 className="font-semibold text-lg">Desenvolvedor front-end e mobile.</h3>
            <p className="text-zinc-400 font-light text-sm"><a href="" className="underline text-zinc-100 ">Khanum</a> - São Paulo , Brasil</p>
            <span className="text-zinc-400 font-light text-sm">Mar 2022 - Atual</span>
            <div className="px-7 mt-2 w-3/4 flex flex-col gap-4">
              <span className="font-light text-base text-zinc-400 leading-relaxed">
                Desenvolvimento de uma plataforma de inovação para um
                dos maiores Hubs de inovação da América Latina , onde atuei ativamante
                em seu rebrands , problemas de performances e melhoria na experiência do usário .
              </span>
              <span className="font-light text-base text-zinc-400 leading-relaxed">
                Essa abordagem foi crucial para um
                melhor resultado diminuindo o tempo de resposta para menos de 3 segundos e também melhor
                experiência de usuário.
              </span>
              <a className="flex items-center gap-1 font-light text-sm text-zinc-400 underline leading-relaxed" href="/work-experience/khanum">Ver mais <ArrowUpRight /></a>
            </div>
          </div>
        </div>
        <h2 className="font-bold text-2xl text-zinc-100 mt-10">Academico</h2>
        <div className="px-3">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Analise e Desenvolvimento de sistemas</h3>
            <p className="text-zinc-400 font-light text-sm"><a href="" className="underline text-zinc-100 ">Facens</a> - Sorocaba , Brasil</p>
            <span className="text-zinc-400 font-light text-sm">Jan 2022 - Aug 2024</span>
          </div>
        </div>
      </div>
    </main>
  )
}