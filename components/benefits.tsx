import { UserPlus, Calendar, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: UserPlus,
    title: "Movimentações",
    description:
      "Você conta com a nossa ajuda para processos de inclusões e exclusões de beneficiários no contrato, além de solicitações de cancelamentos.",
  },
  {
    icon: Calendar,
    title: "Agendamentos",
    description:
      "Cuidamos do agendamento e remarcação das suas consultas. Você não se preocupa com a burocracia, o tempo e desgaste para marcar uma consulta.",
  },
  {
    icon: FileText,
    title: "Boletos",
    description:
      "Para agilizar a sua rotina, contamos com um time dedicado para o envio de boleto e segunda via. Você nunca esquece o vencimento do seu plano.",
  },
]

export function Benefits() {
  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-amber-500 font-semibold text-sm uppercase tracking-wider mb-4">
              Sistema de Relacionamento
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Suporte <span className="text-primary">Personnalité</span> Completo
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ao contratar o seu seguro conosco, você recebe não apenas um 
              atendimento pós-venda, e sim um suporte personalizado completo 
              para todas as suas demandas.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                // href="https://wa.me/5511994330821"
                href="https://wa.me/5511994330821?text=Olá,%20gostaria%20de%20receber%20mais%20informações%20sobre%20os%20planos%20de%20saúde."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold"
                >
                  Quero este Atendimento
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative bg-gradient-to-br from-[#D4AF37] via-[#F4E27A] to-[#C89B2C] rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">LMR</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Porque Você Merece Saúde!
                </h3>
                <p className="text-muted-foreground mb-8">
                  Nossa missão é garantir que você e sua família tenham acesso 
                  aos melhores planos de saúde do mercado, com atendimento 
                  humanizado e personalizado.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">+10</p>
                    <p className="text-xs text-muted-foreground">Anos</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">+1000</p>
                    <p className="text-xs text-muted-foreground">Clientes</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">+20</p>
                    <p className="text-xs text-muted-foreground">Parceiros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
