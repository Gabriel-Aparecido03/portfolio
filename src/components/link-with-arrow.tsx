import { ArrowUpRight } from "phosphor-react"

interface LinkWithArrowPropsType {
  text: string
  linkText: string
  link: string
}

export function LinkWithArrow({ link, linkText, text }: LinkWithArrowPropsType) {
  return (
    <div className="flex gap-1">
      <span className="text-zinc-400 font-light text-sm">{text}</span>
      <a href={link} className="font-semibold text-zinc-100 text-sm underline flex items-center gap-1">{linkText} <ArrowUpRight /></a>
    </div>
  )
}