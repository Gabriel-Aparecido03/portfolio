export function Articles() {
  return (
    <main className="min-h-[calc(100vh-150px)] max-w-[760px] flex flex-col gap-8 mx-auto w-screen">
      <div className="flex flex-col gap-3 h-full justify-start">
        <h1 className="font-bold text-4xl text-zinc-100 mt-16">Estudos.Aprender.Praticar</h1>
        <div className="w-3/4 flex flex-col gap-4">
          <p className="font-light text-base text-zinc-400 leading-relaxed">
            Você pode ler sobre desenvolvimento web, engenharia de software e carreira tecnológica em português.
          </p>
        </div>
      </div>
    </main>
  )
}