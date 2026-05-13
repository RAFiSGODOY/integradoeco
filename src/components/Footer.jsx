const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Metodologia', href: '#como-funciona' },
  { label: 'Sobre', href: '#beneficios' },
  { label: 'Avaliação', href: '#resultado' },
]

const legalLinks = [
  { label: 'Privacidade', href: '#' },
  { label: 'Termos de Uso', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-foreground text-paper">
      <div className="container-main py-14 lg:py-16">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          <div className="md:col-span-2">
            <a href="#inicio" className="mb-4 inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L17 6V14L10 18L3 14V6L10 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M10 7V13M7 10H13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[17px] font-bold leading-none text-paper">
                Somos<span className="text-secondary">Sustentáveis</span>
              </span>
            </a>
            <p className="max-w-[320px] text-[14px] text-tertiary" style={{ lineHeight: '1.65' }}>
              Plataforma SaaS de avaliação e diagnóstico ESG para instituições que buscam desempenho, credibilidade e sustentabilidade.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="mailto:contato@somossustentaveis.com.br"
                className="text-[13px] text-muted transition-colors hover:text-paper"
              >
                contato@somossustentaveis.com.br
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-muted">Navegação</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[14px] text-tertiary transition-colors hover:text-paper">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-muted">Legal</p>
            <ul className="mb-7 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[14px] text-tertiary transition-colors hover:text-paper">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-muted">Score ESG</p>
              <div className="inline-flex items-center gap-2 rounded-xl border border-paper/15 bg-paper/5 px-3 py-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary">
                  <span className="text-[10px] font-bold text-paper">72</span>
                </div>
                <div>
                  <p className="text-[11px] font-medium leading-none text-paper">Nível Silver</p>
                  <p className="mt-0.5 text-[10px] leading-none text-muted">Demonstrativo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-paper/10 pt-7 sm:flex-row">
          <p className="text-[13px] text-muted">© {new Date().getFullYear()} SomosSustentáveis. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-positive" />
            <span className="text-[13px] text-muted">Plataforma operacional</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
