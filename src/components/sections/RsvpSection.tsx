export default function RsvpSection() {
  const phone = "77085514251";

  const message = encodeURIComponent(
    "Сәлеметсіз бе! Абайдың 50 жас мерейтойына қатысатынымды растаймын."
  );

  const whatsappLink = `https://wa.me/${phone}?text=${message}`;

  return (
    <section className="section-space relative z-10">
      <div className="container-main px-4">
        <div className="glass-card relative mx-auto max-w-5xl overflow-hidden rounded-[28px] p-6 md:rounded-[32px] md:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute left-0 top-0 h-24 w-24 border-l-2 border-t-2 border-[#d7bc8a] rounded-tl-[28px]" />
            <div className="absolute right-0 top-0 h-24 w-24 border-r-2 border-t-2 border-[#d7bc8a] rounded-tr-[28px]" />
            <div className="absolute bottom-0 left-0 h-24 w-24 border-b-2 border-l-2 border-[#d7bc8a] rounded-bl-[28px]" />
            <div className="absolute bottom-0 right-0 h-24 w-24 border-b-2 border-r-2 border-[#d7bc8a] rounded-br-[28px]" />
          </div>

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="text-center lg:text-left">
              <div className="ornament-line mb-6 lg:justify-start lg:before:w-16 lg:after:hidden">
                <span className="kazakh-ornament" />
              </div>

              <p className="text-xs uppercase tracking-[0.32em] text-[#9b7b45]">
                RSVP
              </p>

              <h2 className="script-title mt-4 text-4xl text-[#8d6421] md:text-5xl lg:text-6xl">
                Қатысуыңызды растаңыз
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5e4a38] md:text-lg lg:mx-0">
                Құрметті қонақтар, мерейтойға келетініңізді алдын ала
                WhatsApp арқылы хабарлап қоюыңызды сұраймыз.
              </p>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#7a634c] md:text-base lg:mx-0">
                Бұл бізге қонақтар санын нақтылап, дастарханды ыңғайлы
                ұйымдастыруға көмектеседі.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#e0c89e] bg-white/60 p-5 text-center shadow-sm md:p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-[#9b7b45]">
                WhatsApp арқылы
              </p>

              <div className="mt-4 text-[#5a432d]">
                <p className="text-lg font-semibold md:text-xl">
                  Келетініңізді растаңыз
                </p>
                <p className="mt-2 text-sm leading-6 text-[#7a634c] md:text-base">
                  Төмендегі батырманы басып, дайын хабарламаны жіберіңіз
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#b88a3b] bg-gradient-to-r from-[#b88a3b] to-[#8d6421] px-5 py-3 text-sm font-medium text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg md:px-6 md:py-4 md:text-base"
              >
                Қатысатынымды растау
              </a>

              <p className="mt-4 text-xs leading-5 text-[#8b7357] md:text-sm">
                Батырманы басқанда WhatsApp ашылып, хабарлама автоматты түрде
                дайын тұрады.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}