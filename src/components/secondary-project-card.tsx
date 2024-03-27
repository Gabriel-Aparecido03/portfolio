
interface SecondaryProjectCardParamType {
  link: string
  title: string
  date: string
}

export function SecondaryProjectCard({ date, link, title }: SecondaryProjectCardParamType) {

  return (
    <a target="_blank"  href={link} className="w-full justify-between px-4 h-16 transition-all duration-100 rounded-lg flex flex-col hover:bg-white/5 gap-3">
      <div className="flex items-center justify-between w-full rounded-lg flex-1 h-full">
        <h3 className="text-zinc-100 font-semibold text-base">{title}</h3>
        <span className="font-light text-sm text-zinc-400 leading-relaxed">{date}</span>
      </div>
    </a>
  )
}