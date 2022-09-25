export default function ContactUs() {
  return (
    <div className="bg-yellow-400">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[#252525] sm:text-4xl">
          <span className="block">Une réservation?</span>
          <span className="block">Contactez nous</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-[#252525]">
          Notre restaurant, situé au 135 avenue de Villiers Paris 75017, est ouvert du lundi au samedi de 9h jusqu&apos;à 23h.
        </p><div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="mailto:lafavola.ghali@hotmail.com"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#252525] px-5 py-3 text-base font-medium text-white hover:bg-gray-700"
            >
              Mail
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="tel:+33611145890"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#252525] px-5 py-3 text-base font-medium text-white hover:bg-gray-700"
            >
              Portable
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="tel:+33145772731"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#252525] px-5 py-3 text-base font-medium text-white hover:bg-gray-700"
            >
              Téléphone
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

