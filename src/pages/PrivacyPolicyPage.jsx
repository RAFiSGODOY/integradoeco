import LegalPageLayout, { LegalSection, listClass } from '../components/LegalPageLayout'

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Política de Privacidade"
      description="Esta política descreve como o Somos Sustentáveis trata os dados pessoais no uso da plataforma de diagnóstico ESG e nos canais de contato."
    >
      <LegalSection title="1. Quem somos">
        <p>
          O Somos Sustentáveis é uma plataforma de avaliação e diagnóstico ESG voltada a
          instituições que desejam compreender sua maturidade em práticas ambientais, sociais e de
          governança. Esta política se aplica ao site, à avaliação gratuita e aos demais pontos de
          contato oficiais da marca.
        </p>
      </LegalSection>

      <LegalSection title="2. Dados que podemos coletar">
        <p>Dependendo da sua interação conosco, podemos tratar:</p>
        <ul className={listClass}>
          <li>Dados de identificação e contato (nome, e-mail, telefone, instituição);</li>
          <li>Dados informados no questionário de avaliação ESG;</li>
          <li>Dados técnicos de navegação (endereço IP, tipo de navegador, páginas visitadas);</li>
          <li>Registros de comunicação quando você entra em contato conosco.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Finalidades do tratamento">
        <p>Utilizamos os dados para:</p>
        <ul className={listClass}>
          <li>Realizar o diagnóstico ESG e apresentar score, pilares e recomendações;</li>
          <li>Melhorar a experiência, segurança e desempenho da plataforma;</li>
          <li>Responder solicitações, dúvidas e pedidos de suporte;</li>
          <li>Cumprir obrigações legais e exercer direitos em processos regulatórios;</li>
          <li>Enviar comunicações relacionadas ao serviço, quando autorizado.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Base legal (LGPD)">
        <p>
          O tratamento pode ocorrer com fundamento no consentimento, na execução de contrato ou de
          procedimentos preliminares, no legítimo interesse (como melhoria do serviço e prevenção a
          fraudes) e no cumprimento de obrigação legal, conforme o caso.
        </p>
      </LegalSection>

      <LegalSection title="5. Compartilhamento">
        <p>
          Não vendemos dados pessoais. Podemos compartilhar informações apenas com prestadores de
          serviço essenciais (hospedagem, e-mail, analytics), sempre sob obrigações de
          confidencialidade e segurança, ou quando exigido por lei ou ordem de autoridade competente.
        </p>
      </LegalSection>

      <LegalSection title="6. Armazenamento e segurança">
        <p>
          Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados contra acesso
          não autorizado, perda ou uso indevido. Os dados são mantidos pelo tempo necessário para as
          finalidades descritas ou conforme exigências legais.
        </p>
      </LegalSection>

      <LegalSection title="7. Seus direitos">
        <p>
          Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar
          confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação,
          informação sobre compartilhamentos e revogação de consentimento, quando aplicável.
        </p>
      </LegalSection>

      <LegalSection title="8. Cookies e tecnologias similares">
        <p>
          Podemos utilizar cookies e ferramentas de medição para entender o uso do site e aprimorar
          conteúdos. Você pode gerenciar cookies nas configurações do seu navegador; a desativação
          pode afetar algumas funcionalidades.
        </p>
      </LegalSection>

      <LegalSection title="9. Alterações desta política">
        <p>
          Esta política pode ser atualizada periodicamente. A data da última revisão será indicada
          no topo da página. Recomendamos a leitura periódica do documento.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
