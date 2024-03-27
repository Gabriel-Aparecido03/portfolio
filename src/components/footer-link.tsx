interface FooterLinkParamsType {
  link: string
  text: string
}

export function FooterLink({ link, text }: FooterLinkParamsType) {
  return (
    <a href={link} target="_blank" className="group text-zinc-600 transition-all duration-300 ease-in-out">
      <span className="text-sm font-light bg-left-bottom bg-gradient-to-r from-zinc-600 to-zinc-600 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
        {text}
      </span>
    </a>
  )
}