import { ThumbsUp, CheckCircle, Users, Smile } from "lucide-react"

const stats = [
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Satisfação dos Clientes",
    description:
      "Realizamos pesquisa de satisfação periodicamente para mensurar a probabilidade dos nossos clientes de nos indicarem.",
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "Reclamações Resolvidas",
    description:
      "Nos empenhamos em manter elevado o nosso padrão de atendimento, resolvendo todas as demandas pontualmente.",
  },
  {
    icon: Users,
    value: "80%",
    label: "Retenção de Clientes",
    description:
      "Alta taxa de retenção graças ao processo de fidelização e ampla comunicação realizada com nossos clientes.",
  },
  {
    icon: Smile,
    value: "100%",
    label: "Colaboradores Contentes",
    description:
      "Nosso ambiente de trabalho é altamente motivador, garantindo que você seja muito bem atendido por nós.",
  },
]

export function Stats() {
  return (
    <section className="py-20 bg-[linear-gradient(135deg,#1e40af_0%,#1e3a8a_50%,#172554_100%)] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Qualidade Garantida
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Nossos Números Falam por Nós
          </h2>
          <p className="text-white/70 text-lg">
            Confira os indicadores que demonstram nosso compromisso com a 
            excelência no atendimento e satisfação dos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors"
            >
              <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-amber-400" />
              </div>
              <p className="text-4xl font-bold text-amber-400 mb-2">
                {stat.value}
              </p>
              <h3 className="text-lg font-semibold mb-3">{stat.label}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
