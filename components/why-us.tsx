import { FileSearch, ClipboardList, FileText, FileSignature } from "lucide-react"

const steps = [
  {
    icon: FileSearch,
    number: "01",
    title: "Cotação",
    description:
      "Tratamos de todo o processo de cotação do seu plano de saúde, levando em conta a quantidade de vidas, idades, região e preferências. Você recebe as melhores opções de forma detalhada.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Estudo de Caso",
    description:
      "Realizamos todo um estudo para fornecer a você informações reais e condizentes com a cotação solicitada. É nesta etapa que fazemos o levantamento de todos os dados.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Propostas",
    description:
      "Preparamos diferentes propostas baseadas em suas necessidades e preferências. Você recebe opções completas que estarão de acordo com as suas expectativas.",
  },
  {
    icon: FileSignature,
    number: "04",
    title: "Contrato",
    description:
      "Esta é a etapa final — quando você escolhe a proposta que melhor lhe agrada. O contrato será enviado para colhida da assinatura e início do processo de contratação.",
  },
]

export function WhyUs() {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-amber-500 font-semibold text-sm uppercase tracking-wider mb-4">
            Por que nós?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Nos Preocupamos com{" "}
            <span className="text-primary">Cada Etapa</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Desde a cotação, resolução de problemas, proposta, até a assinatura 
            do contrato. Assim que se torna nosso cliente, passa a receber todo 
            o serviço exclusivo de pós-venda que oferecemos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            // <div key={index} className="relative group">
            <div key={index} className="relative group flex">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-border" />
              )}

              {/* <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"> */}
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-yellow-400">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
