import { Chat, Newspaper, Package } from "phosphor-react";
import { ProjectCard } from "../components/project-card";
import { SecondaryProjectCard } from "../components/secondary-project-card";

export function Projects() {
  return (
    <main className="min-h-[calc(100vh-150px)] max-w-[760px] flex flex-col gap-8 mx-auto w-screen">
      <div className="flex flex-col gap-3 h-full justify-start">
        <h1 className="font-bold text-4xl text-zinc-100 mt-16">Projetos.Hobbies</h1>
        <div className="w-3/4 flex flex-col gap-4">
          <p className="font-light text-base text-zinc-400 leading-relaxed">
            Sou obcecado por <span className="text-zinc-100">side projects</span> e por sempre continuar aprender . Aqui você poderá ver meus projetos. Alguns estão no ar , outras tendo somente o repositório .
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <ProjectCard
          icon={<Chat className="w-6 h-6" />}
          link="/projects/communities"
          subject="Esse é um projeto de forum , muito baseado no stackoverflow"
          title="Communities"
        />
        <ProjectCard
          icon={<Package className="w-6 h-6" />}
          link="/projects/box-delivery"
          subject="Feito pensado em empresas de frete. Com todo o dashboard e acompanhamento."
          title="Box.delivery"
        />
        <ProjectCard
          icon={<Newspaper className="w-6 h-6" />}
          link="/projects/jr-panfletos"
          subject="Feito na faculdade , para um empresa de panfletagem."
          title="JRPanfletos"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg text-zinc-100 ">Outros projetos</h3>
        <div className="flex flex-col w-100 gap-3 pt-6 pb-12">
          <SecondaryProjectCard
            link="https://github.com/Gabriel-Aparecido03/bookwise"
            title="bookwise"
            date="Jan 20 2024"
          />
          <SecondaryProjectCard
            title="gym-app"
            date="Jan 3 2024"
            link="https://github.com/Gabriel-Aparecido03/gym-app"
          />
          <SecondaryProjectCard
            link="https://github.com/Gabriel-Aparecido03/clean-arch-and-tdd"
            date="Jan 3 2024"
            title="Clean arch and tdd"
          />
          <SecondaryProjectCard
            link="https://github.com/Gabriel-Aparecido03/solid-and-tdd"
            date="Jan 3 2024"
            title="Solid-and-tdd"
          />
          <SecondaryProjectCard
            link="https://github.com/Gabriel-Aparecido03/rocketseat-challenge"
            date="Dec 28 2023"
            title="Rocketseat Challenge"
          />
          <SecondaryProjectCard
            link="https://github.com/Gabriel-Aparecido03/CoffeeDelivery---React-Native"
            date="Dec 16 2023"
            title="CoffeeDelivery React-Native"
          />
          <SecondaryProjectCard
            link="https://github.com/Gabriel-Aparecido03/ignite-gym"
            date="Dec 9 2023"
            title="Ignite Gym"
          />
          <SecondaryProjectCard
            link="https://github.com/Gabriel-Aparecido03/marketspace"
            date="Dec 7 2023"
            title="Marketspace"
          />
          <SecondaryProjectCard
            link="https://github.com/Gabriel-Aparecido03/DailyDiet"
            date="Nov 14 2023"
            title="Daily Diet"
          />
          <SecondaryProjectCard
            link="https://github.com/Gabriel-Aparecido03/Design-System"
            date="Nov 14 2023"
            title="Design System"
          />
          <SecondaryProjectCard
            link="https://github.com/Gabriel-Aparecido03/Capputeeno"
            date="Aug 19 2023"
            title="Capputeeno"
          />
          <SecondaryProjectCard
            link="https://github.com/Gabriel-Aparecido03/ignite-shop"
            date="Aug 19 2023"
            title="Ignite Shop"
          />
          <SecondaryProjectCard
            link="https://github.com/Gabriel-Aparecido03/coffe-delivery"
            date="Aug 3 2023"
            title="Coffe Delivery"
          />
        </div>
      </div>
    </main>
  )
}