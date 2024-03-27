/* import { ExperienceCard } from "../components/experience-card";
import { LinkWithArrow } from "../components/link-with-arrow";
import { OpenToWorkTag } from "../components/open-to-work-tag";
import { ProjectCard } from "../components/project-card";

import jrImage from '../assests/Jr.png'
import box from '../assests/box.png'
import forum from '../assests/forum.png'

export function Home() {
  return (
    <main className="flex flex-col gap-16 max-w-[1200px] mx-auto w-2/4 mt-24">
      <div>
        <h1 className="font-bold text-2xl">Olá , sou Gabriel,{" "}
          {" "}desenvolveddor fullstack.<br />Entusiasta das melhores tecnologias de desenvolvimento web & mobile.</h1>
        <div className="flex flex-col gap-2 mt-8">
          <LinkWithArrow text='Desenvolvedor front-end na' linkText='Khanum' link='https://www.linkedin.com/company/khanumconsultoria' />
          <LinkWithArrow text='Análise e desenvolvimento de Sistema pela' linkText='Facens' link='https://facens.br/' />
        </div>
        <OpenToWorkTag />

      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-zinc-900">Sobre mim</h3>
        <div className="flex flex-col gap-5 mt-2 p-3">
          <p className="text-sm font-light leading-relaxed">Apaixonado por programação desde 2019 , tenho experiência emprojetos web de grande escala que impactammilhares de usuários diariamente, usando tecnologias comoJavascript, Typescript , React e React Native . Durante a universidadetive a oportunidade de ser um dos líderes e responsável pelo desenvolvimento de sistema web , para um pequena empresa da minha cidade , utilizando tecnologias e arquiteturas como :React , Fastify , TDD , SOLID , DDD e Arquitetura limpa .</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-zinc-900">Experiência</h3>
        <div className="p-3">
          <ExperienceCard />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-zinc-900">Sobre mim</h3>
        <div className="p-3 flex flex-col mt-3 gap-9">
          <ProjectCard
            title="Jr panfletos"
            image={jrImage}
            linkWithArrow={
              <>
                <LinkWithArrow
                  link="https://github.com/Gabriel-Aparecido03/JRPanfletos"
                  linkText="Ver mais"
                  text=""
                />
                <LinkWithArrow
                  link="https://github.com/Gabriel-Aparecido03"
                  linkText="Accessar github"
                  text=""
                />
              </>
            }
            subText="Projeto desenvolvimento na faculdade , onde fui responsável arquitetura e pela codificação , ajudei na montagem de documentos. Implementei politícas de testes  unitários , utlização de linguagem ubíqua em conversa com a CEO . Utilizamos principalmente tecnologias como : React , Fastify , Vitest , Prisma , React Query , Axios , JWT ."
          />

          <ProjectCard
            title="Box delivery"
            image={box}
            linkWithArrow={
              <>
                <LinkWithArrow
                  link="https://github.com/Gabriel-Aparecido03/forum"
                  linkText="Ver mais"
                  text=""
                />
                <LinkWithArrow
                  link="https://github.com/Gabriel-Aparecido03"
                  linkText="Accessar github"
                  text=""
                />
              </>
            }
            subText="Projetos fullstack desenvolvido utlizando React e NestJS . Foram usado as seguintes Ferramentas : Rotas públicas e private , testes unitários e testes E2E . arquitura limpa , domain eventes, patterns de factories , clean code ,principios solid , TDD . Ja no frontend foram usados : Cookies, gerencimentos de estados , compound pattern, render props pattern, testes unitários e testes E2E  , mocks e container/presentational Pattern "
          />

          <ProjectCard
            title="Forum"
            image={forum}
            linkWithArrow={
              <>
                <LinkWithArrow
                  link="https://github.com/Gabriel-Aparecido03/JRPanfletos"
                  linkText="Ver mais"
                  text=""
                />
                <LinkWithArrow
                  link="https://github.com/Gabriel-Aparecido03"
                  linkText="Accessar github"
                  text=""
                />
              </>
            }
            subText="Projetos fullstack desenvolvido utlizando React e NestJS . Foram usado as seguintes Ferramentas : Rotas públicas e private , testes unitários e testes E2E . arquitura limpa , domain eventes, patterns de factories , clean code ,principios solid , TDD . Ja no frontend foram usados : Cookies, gerencimentos de estados , compound pattern, render props pattern, testes unitários e testes E2E  , mocks e container/presentational Pattern "
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-base font-semibold text-zinc-900">Contatos</h3>
        <div className="p-3 flex flex-col gap-3 items-start">
          <p className="text-sm text-light">Se meu trabalho despertou seu interesse ou se você gostaria de compartilhar comentários neste site, ficarei feliz em trocar ideias.</p>
          <div className="flex gap-3 items-center">
            <LinkWithArrow link="https://www.linkedin.com/in/gabriel-aparecido-dev/" linkText="Linkedin" text="" />
            <LinkWithArrow link="https://github.com/Gabriel-Aparecido03" linkText="Github" text="" />
            <LinkWithArrow link="https://wa.me/+5515981305615" linkText="Whatsapp" text="" />
          </div>
        </div>
      </div>
    </main>
  )
} */


export function Home() {
  return (
    <main className="min-h-[calc(100vh-150px)] max-w-[760px] mx-auto w-screen bg-black flex justify-start items-center">
      <div className="flex flex-col gap-4 h-full justify-center">
        <h1 className="font-bold text-5xl text-zinc-100">Gabriel Aparecido</h1>
        <h2 className="font-light text-base text-zinc-100">Desenvolvedor front end e mobile na <a className="underline underline-offset-4" target="_blank" href="https://www.linkedin.com/company/khanumconsultoria">Khanum</a></h2>
        <h3 className="font-light text-base text-zinc-400 mt-4 w-2/3"> Entusiasta das melhores tecnologias de desenvolvimento web & mobile.</h3>
      </div>
    </main>
  )
}