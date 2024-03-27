interface CategoryCardPropsType {
  text: string
  subtext: string
}

export function CategoryCard({ subtext, text }: CategoryCardPropsType) {
  return (
    <div className="w-[360px] flex flex-col gap-1">
      <span className="font-semibold text-zinc-100 text-base">{text}</span>
      <p className="text-zinc-400 font-light text-sm">{subtext}</p>
    </div>
  )
}