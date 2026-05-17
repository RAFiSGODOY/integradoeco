import { Link } from 'react-router-dom'
import LegalPageLayout, { LegalSection, listClass } from '../components/LegalPageLayout'
import { ROUTES } from '../constants/routes'

export default function TermsOfUsePage() {
  return (
    <LegalPageLayout
      title="Termos de Uso"
      description="Ao acessar o site e utilizar os recursos do Somos Sustentáveis, você concorda com os termos abaixo. Leia com atenção antes de usar a plataforma."
    >
      <LegalSection title="1. Aceitação dos termos">
        <p>
          Estes Termos de Uso regulam o acesso e a utilização do site Somos Sustentáveis, incluindo a
          avaliação ESG gratuita, materiais informativos e canais de contato. Se não concordar com
          alguma condição, interrompa o uso da plataforma.
        </p>
      </LegalSection>

      <LegalSection title="2. Sobre o serviço">
        <p>
          O Somos Sustentáveis oferece um diagnóstico estruturado de maturidade ESG com base em
          questionário e critérios definidos pela plataforma. O resultado (score, pilares, selos e
          recomendações) tem caráter informativo e de apoio à gestão, não substituindo auditorias
          certificadas, pareceres jurídicos ou consultoria especializada.
        </p>
      </LegalSection>

      <LegalSection title="3. Uso permitido">
        <p>Você concorda em utilizar a plataforma de forma lícita e responsável. É vedado:</p>
        <ul className={listClass}>
          <li>Fornecer informações falsas ou de terceiros sem autorização;</li>
          <li>Tentar acessar áreas restritas, interferir no funcionamento ou copiar o sistema;</li>
          <li>Reproduzir conteúdos da plataforma sem autorização prévia;</li>
          <li>Utilizar o serviço para fins ilícitos ou que violem direitos de terceiros.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Avaliação gratuita">
        <p>
          A avaliação gratuita pode ser alterada, suspensa ou descontinuada a qualquer momento,
          sem obrigação de contratação posterior. O acesso ao relatório depende do preenchimento
          adequado do questionário e da disponibilidade técnica do serviço.
        </p>
      </LegalSection>

      <LegalSection title="5. Propriedade intelectual">
        <p>
          Marcas, textos, layouts, metodologias, selos, imagens e demais conteúdos do Somos
          Sustentáveis são protegidos por direitos de propriedade intelectual. O uso não concede
          licença de reprodução além do necessário para navegação e uso pessoal ou institucional do
          diagnóstico gerado.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitação de responsabilidade">
        <p>
          Empregamos esforços para manter informações atualizadas e o funcionamento estável da
          plataforma, porém não garantimos ausência total de erros ou indisponibilidades. Na extensão
          permitida pela lei, não nos responsabilizamos por decisões tomadas exclusivamente com base
          no diagnóstico, por perdas indiretas ou por conteúdos de sites de terceiros vinculados.
        </p>
      </LegalSection>

      <LegalSection title="7. Privacidade">
        <p>
          O tratamento de dados pessoais é regido pela nossa{' '}
          <Link
            to={ROUTES.privacy}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline-offset-2 hover:underline"
          >
            Política de Privacidade
          </Link>
          . Ao utilizar a plataforma, você também declara ciência dessa política.
        </p>
      </LegalSection>

      <LegalSection title="8. Alterações dos termos">
        <p>
          Podemos atualizar estes Termos de Uso a qualquer momento. A versão vigente será publicada
          nesta página com indicação da data de atualização. O uso continuado após alterações
          constitui concordância com a nova versão.
        </p>
      </LegalSection>

      <LegalSection title="9. Legislação aplicável">
        <p>
          Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro
          da comarca do domicílio do usuário, quando aplicável às normas de defesa do consumidor, ou
          outro foro competente nos casos em que não se aplicar essa regra.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
