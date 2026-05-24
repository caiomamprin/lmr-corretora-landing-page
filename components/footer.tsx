import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="bg-[#0f172a] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Image
              // src="/logo-lmr.jpeg"
              src="/Logo_LMR_Transparente.png"
              alt="LMR Planos de Saúde"
              width={340}
              height={120}
              className="h-38 w-auto mb-6 rounded-lg bg-white p-2"
            />
            <p className="text-white/60 leading-relaxed mb-6">
              A LMR Corretora de Seguros oferece as melhores soluções em planos 
              de saúde para você, sua família e sua empresa.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/corretoralmrsaude/"
                target="_blank"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a> */}
              {/* <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#inicio"
                  className="text-white/60 hover:text-amber-400 transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="text-white/60 hover:text-amber-400 transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre"
                  className="text-white/60 hover:text-amber-400 transition-colors"
                >
                  Por que nós?
                </Link>
              </li>
              <li>
                <Link
                  href="#diferenciais"
                  className="text-white/60 hover:text-amber-400 transition-colors"
                >
                  Diferenciais
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-white/60">Planos Empresariais</span>
              </li>
              <li>
                <span className="text-white/60">Planos PME</span>
              </li>
              <li>
                <span className="text-white/60">Seguro de Vida</span>
              </li>
              <li>
                <span className="text-white/60">Seguro Odontológico</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60">(11) 99433-0821</p>
                  {/* <p className="text-white/60">(00) 00000-0000</p> */}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <a
                    href="https://www.instagram.com/corretoralmrsaude/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-amber-400 transition-colors"
                  >
                  @corretoralmrsaude
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-white/60">contato@lmrseguros.com.br</p>
              </li>
              {/* Redericiona para o email com assunto preenchido */}
              {/* <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@lmrseguros.com.br?subject=Solicitação%20de%20Cotação&body=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20planos%20de%20saúde."
                  className="text-white/60 hover:text-amber-400 transition-colors"
                >
                  contato@lmrseguros.com.br
                </a>
              </li> */}
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-white/60">
                 Avenida Paulista, 1912 - 7º andar,
                  <br />
                  São Paulo - SP
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} LMR Planos de Saúde - Corretora de Seguros. 
              Todos os direitos reservados.
            </p>
            <p className="text-white/40 text-sm">
              Desenvolvido por Caio Henrique Mamprin
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
