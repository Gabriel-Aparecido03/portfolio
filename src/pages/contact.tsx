export function Contact() {
  return (
    <main className="min-h-[calc(100vh-150px)] max-w-[760px] flex flex-col gap-8 mx-auto w-screen">
      <h1 className=" mt-[20%] text-4xl text-zinc-100 font-bold">Se meu trabalho despertou seu interesse. Entre em contato comigo !</h1>
      <div className=" mt-6 flex flex-col w-1/2">
        <div className="flex items-center justify-between gap-24">
          <p className="text-zinc-100 font-bold">Github</p>
          <a className="text-zinc-100 font-bold underline" href="https://github.com/Gabriel-Aparecido03/JRPanfletos">@Gabriel-Aparecido03</a>
        </div>
        <div className="flex items-center justify-between gap-24">
          <p className="text-zinc-100 font-bold">Linkedin</p>
          <a className="text-zinc-100 font-bold underline" href="https://www.linkedin.com/in/gabriel-aparecido-dev/">Gabriel Aparecido</a>
        </div>
      </div>
    </main>
  )
}