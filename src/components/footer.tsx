import { FooterLink } from "./footer-link";

export function Footer() {
  return (
    <footer className="flex items-center justify-center gap-12 mx-auto h-[50px] w-[760px]">
      <FooterLink text="Linkedin" link="https://www.linkedin.com/in/gabriel-aparecido-dev/" />
      <FooterLink text="Gmail" link="mailto:gabriel.aparecido.silva03@gmail.com" />
      <FooterLink text="Github" link="https://github.com/Gabriel-Aparecido03" />
    </footer>
  )
}