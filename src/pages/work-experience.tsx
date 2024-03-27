/* eslint-disable no-irregular-whitespace */
import khanum from '../assests/khanum.png'
import congrats from '../assests/congras.jpeg'
import hackthon from '../assests/hackthon.jpeg'

import { CategoryCard } from '../components/category-card'
import { LinkWithArrow } from '../components/link-with-arrow'

export function WorkExperience() {
  return (
    <main>
      <div className="max-h-[780px] h-[calc(100vh-100px)] w-full flex items-center justify-center">
        <img src={khanum} alt="" className='w-[200px]' />
      </div>
      <div className='mt-16'>
        <div className='max-w-[1200px] mx-auto w-2/4 '>
          <h1 className='font-bold text-2xl mb-6'> Desenvolvedor front end e mobile.</h1>
          <div className='flex flex-col gap-3 font-light text-base text-zinc-400 leading-relaxed'>
            <p className='font-light text-base text-zinc-400 leading-relaxed'>
            A Khanum é uma empresa de consultoria que auxilia os clientes, dentre outros aspectos, na criação de departamento/setor interno de inovação, na capacitação intelectual do corpo de liderança dos colaboradores e na implementação da cultura de inovação institucional contínua.
            </p>

            <p className='font-light text-base text-zinc-400 leading-relaxed'>
              Desenvolvimento de uma plataforma de inovação para um dos <strong className='text-zinc-100'>
                maiores Hubs de inovação da América Latina </strong> . Corrigindo , <strong className='text-zinc-100'>problemas de perfomances e melhoria na experiência do usário</strong> , realizando refatorações , melhorias no design .Usando React e Typescript  <strong className='text-zinc-100'>
                , como melhores aboragens de hooks ( useContext, useMemo, useCallback e hooksCustomizados), lazy loadings e etc</strong>. Esse abordagem foi crucial para um melhor resultado dimunuindo o  <strong className='text-zinc-100'>tempo de resposta para menos de 3 segundos e também melhor experiência de usuário</strong><strong></strong>.
            </p>
            <p className='font-light text-base text-zinc-400 leading-relaxed'>
              Também ajudei no desenvolvimento de uma aplicação para celular <a href="https://www.linkedin.com/company/nacciapp/" className='underline text-zinc-100'>Nacci</a>,uma rede social voltada para estética, cirurgias plásticas,visa conectar as pessoas que buscam uma cirurgia plástica, com as pessoas que provêm o serviço.  Utlizando como <span className='text-zinc-100'>tecnologia de desenvolvimento React Native e Typescript</span> . Onde corrigi e implementei funcionalidades como : <strong className='text-zinc-100'>Acesso com a digital , melhorias nos gerenciamento de estados , trabalho de resolução imagem e etc</strong> . Essas ações tiveram um feedback bastante positivos ,<strong className='text-zinc-100'> melhorando a experiência do usuário e navegablidade fluída pelo app</strong>.
            </p>
          </div>
          <div className='flex justify-between mt-8'>
            <CategoryCard text='Tempo de experiência' subtext='Abr , 2022 - Atualmente' />
            <CategoryCard text='Cargo' subtext='Desenvolvedor front-end' />
            <CategoryCard text='Tecnologias' subtext='React, React Native, Typescript e Javascript' />
          </div>
        </div>
        <div className='text-zinc-100 w-full py-12 mt-8'>
          <div className='max-w-[1200px] mx-auto w-2/4'>
            <h3 className='font-semibold text-xl'>Meus impactos</h3>
            <div className='flex flex-col gap-3'>
              <div className='flex items-start gap-3 mt-6'>
                <span className='font-bold'>01</span>
                <p className='font-light text-base text-zinc-400 leading-relaxed'>
                  <strong>Desenvolvimente e participação em novas features</strong> . Coloborando desde a etapa de design até a execução da funcionalidade , em colaboração em uma equipe multifuncional
                </p>
              </div>
              <div className='flex items-start gap-3 mt-6'>
                <span className='font-bold'>01</span>
                <p className='font-light text-base text-zinc-400 leading-relaxed'>
                  <strong>Premiação e reconhecimento de empresa em um evento.</strong> Tive a feliz surpresa de ter recebido a premiação pelas meu destaque , devido principalmente a skill da comunição e trabalho em equipe, mas também sem deixar para trás as hard skills
                </p>
              </div>
              <div className='flex items-start gap-3 mt-6'>
                <span className='font-bold'>01</span>
                <p className='font-light text-base text-zinc-400 leading-relaxed'>
                  <strong>Melhorias em processo ,trazendo implementação de testes unitários.</strong> Em conversa com a equipe comentei que seria extremamente interessante a implementação de testes unitários , apoiando meu argumento em vídeo ,artigos e projetos open source do mercado .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full py-12'>
          <div className='max-w-[1200px] mx-auto w-2/4'>
            <h3 className='font-semibold text-xl'>Aprendizados</h3>
            <div className='flex flex-col gap-3'>
              <div className='flex items-start gap-3 mt-6'>
                <span className='font-bold'>01</span>
                <p className='font-light text-base text-zinc-400 leading-relaxed'>
                  <strong>De que adianta ter o conhecimento técnico se você não possui habilidades para se portar no mundo? </strong>Ao desenvolver funcionalidades , tive que sempre me manter alinhado com deadlines, cronogramas , conversas com PO e com clientes . E de tal modo , melhorando a minha comunição e tendo flexibilidade comportamental para cada situação
                </p>
              </div>
              <div className='flex items-start gap-3 mt-6'>
                <span className='font-bold'>02</span>
                <p className='font-light text-base text-zinc-400 leading-relaxed'>
                  <strong>Quando tudo é importante , nada é importante.</strong> Defino prioridades com base no cronograma do projeto, nas prioridades dos usuários e nas necessidades do negócio. Estabelecer prioridades e partilhá-las durante as reuniões também me ajudou a ser mais flexível.
                </p>
              </div>
              <div className='flex items-start gap-3 mt-6'>
                <span className='font-bold'>03</span>
                <p className='font-light text-base text-zinc-400 leading-relaxed'>
                  <strong>Ser proativo, criativo  e ousado .</strong> No início, foi um desafio explorar uma área que nunca havia sido explorada antes. Entrei em contato com parceiros multifuncionais dentro e fora de minha equipe para obter insights e feedback. Através desse processo, consegui trazer melhores soluções e ideias novas para equipe.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-[1200px] mx-auto w-2/4 mt-12 py-6'>
          <h3 className='font-semibold text-xl'>Experiência geral</h3>
          <div className='mt-6'>
            <p className='font-light text-sm'>Minha experiência foi repleta de aprendizado ,conhecer pessoas incríveis e ser ousado e criativo​</p>
            <div className='flex items-center justfy-center gap-3 mt-4'>
              <div className='flex flex-col gap-3 '>
                <img src={congrats} alt="" className='w-[350px] h-[250px] rounded-lg' />
                <LinkWithArrow
                  link='https://www.linkedin.com/posts/gabriel-aparecido-dev_ontem-foi-um-dia-09012023-muito-especial-activity-7018645052734255106-3hUg?utm_source=share&utm_medium=member_desktop'
                  linkText='hackthon'
                  text='Premiação do'
                />
              </div>
              <div className='flex flex-col gap-3 '>
                <img src={hackthon} alt="" className='w-[350px] h-[250px] rounded-lg' />
                <LinkWithArrow
                  text=''
                  link='https://www.linkedin.com/posts/gabriel-aparecido-dev_inovaaexaeto-oportunidade-desenvolvimento-activity-6982754190607429632-kpK5?utm_source=share&utm_medium=member_desktop'
                  linkText='hackthon'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}