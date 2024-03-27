import { LinkWithArrow } from "./link-with-arrow";

export function ExperienceCard() {
  return (
    <div className="p-6 flex gap-8 w-full items-center">
      <img src="https://media.licdn.com/dms/image/D4D0BAQFKoaPI4_wQaA/company-logo_200_200/0/1693578871513/khanumconsultoria_logo?e=1717632000&v=beta&t=AMREarx138dp1v5V5cur9skWHs_yH1ftcnAG5pVAiaA" alt="" />
      <div className="flex flex-col gap-2">
        <span className="font-bold text-zinc-800 text-lg">Desenvolvedor front-end</span>
        <p className="text-sm font-light mt-3">Trabalhando desde abril de 2022, atuo diretamente em projetos web e mobile. Atuando principalmente com :Typescript , React e React Native .</p>
        <p className="text-sm font-light mt-3">Premiado em Hackathon , feito pela empresa , graças as minhas habilidades de comunicação, trabalho em equipe e habilidades de codificação.
        </p>
        <LinkWithArrow text='' linkText='Ver experiêncaia completa' link='/work-experience/khanum' />
      </div>
    </div>
  )
}