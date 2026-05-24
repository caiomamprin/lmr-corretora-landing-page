import Image from "next/image"

export function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <span className="text-amber-500 font-semibold uppercase tracking-wider">
            Principais Parceiros
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
            Operadoras Parceiras
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Trabalhamos com as principais operadoras do mercado para oferecer
            as melhores soluções em saúde para você e sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center h-48">
            <Image
              src="/medsenior.jpeg"
              alt="MedSênior"
              width={170}
              height={50}
              className="object-contain"
            />
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center h-48">
            <Image
              src="/vumi3.jpeg"
              alt="VUMI"
              width={140}
              height={100}
              className="object-contain rounded-2xl"
            />
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center h-48">
            <Image
              src="/bliss_saude.png"
              alt="Bliss"
              width={180}
              height={80}
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  )
}