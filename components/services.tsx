import { Building2, Users, Heart, Smile, Headphones, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Building2,
    title: "Planos de Saúde Empresariais",
    description:
      "Soluções completas para empresas de todos os portes, com as melhores operadoras do mercado.",
  },
  {
    icon: Users,
    title: "Planos de Saúde PME",
    description:
      "Planos especiais para pequenas e médias empresas com condições diferenciadas.",
  },
  {
    icon: Heart,
    title: "Seguro de Vida",
    description:
      "Proteção financeira para você e sua família em momentos de necessidade.",
  },
  {
    icon: Smile,
    title: "Seguro Odontológico",
    description:
      "Cuide do seu sorriso com os melhores planos odontológicos do mercado.",
  },
  {
    icon: Headphones,
    title: "Concierge",
    description:
      "Atendimento exclusivo e personalizado para todas as suas necessidades.",
  },
  {
    icon: Award,
    title: "Pós-Venda Exclusivo",
    description:
      "Suporte contínuo após a contratação para garantir sua total satisfação.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Soluções Completas em{" "}
            <span className="text-amber-500">Planos de Saúde</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Confira um pouco mais sobre os serviços oferecidos pela LMR 
            Corretora. Atendemos com excelência desde a cotação até a 
            resolução de problemas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-none bg-muted/50 hover:bg-white"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
