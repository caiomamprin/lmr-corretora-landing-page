import { Button } from "@/components/ui/button"
import { Phone, Shield, Users, Heart } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#1e40af_0%,#1e3a8a_50%,#172554_100%)]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-medium">Corretora de Seguros</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              O Cuidado que{" "}
              <span className="text-amber-400">Você Merece!</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              Nós cuidamos de tudo para você, sua família e empresa. 
              Atendemos com excelência desde a cotação, migração, até a 
              solução de problemas com seu seguro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                // href="https://wa.me/5511994330821"
                href="https://wa.me/5511994330821?text=Olá,%20gostaria%20de%20receber%20mais%20informações%20sobre%20os%20planos%20de%20saúde."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-amber-950 font-semibold text-lg px-8"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Solicite uma Cotação
                </Button>
              </a>
              <a href="#servicos">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-lg px-8"
                  // className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8"
                >
                  Conheça Nossos Serviços
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="font-bold text-xl">+1000</p>
                  <p className="text-white/60 text-sm">Clientes Atendidos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="font-bold text-xl">98%</p>
                  <p className="text-white/60 text-sm">Satisfação</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="font-bold text-xl">+10</p>
                  <p className="text-white/60 text-sm">Anos de Experiência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Decorative Element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-amber-400/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl" />
              <div className="relative w-96 h-96 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Shield className="w-24 h-24 text-amber-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Proteção Completa
                  </h3>
                  <p className="text-white/70">
                    Para você e sua família
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-sm">Role para baixo</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div> */}
    </section>
  )
}
