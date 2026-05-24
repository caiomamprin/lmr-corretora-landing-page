import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function CTA() {
  return (
    // <section className="relative bg-gradient-to-br from-[#D4AF37] via-[#F4E27A] to-[#C89B2C] rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">
    <section className="py-20 bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-500"> 
    {/* <section className="py-20 bg-amber-500"> */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-950 mb-6 text-balance">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-6 text-balance"> */}
            Pronto para Cuidar da Sua Saúde?
          </h2>
          <p className="text-yellow-900 text-lg mb-10 max-w-2xl mx-auto">
          {/* <p className="text-amber-900 text-lg mb-10 max-w-2xl mx-auto"> */}
            Entre em contato conosco e solicite uma cotação gratuita. 
            Nossa equipe está pronta para encontrar o plano ideal para você, 
            sua família ou sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              // href="https://wa.me/5511994330821"
              href="https://wa.me/5511994330821?text=Olá,%20gostaria%20de%20receber%20mais%20informações%20sobre%20os%20planos%20de%20saúde."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                // className="bg-amber-950 hover:bg-amber-900 text-white font-semibold text-lg px-8"
                className="bg-green-600 hover:bg-green-700 text-black hover:text-white border border-green-500 font-semibold text-lg px-8"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar pelo WhatsApp
              </Button>
            </a>
            <a href="tel:+5511994330821">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary hover:bg-primary/90 text-white font-semibold vhover:text-white font-semibold text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
