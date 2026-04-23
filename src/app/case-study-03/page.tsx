import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import ArrowButton from "@/components/ArrowButton";

function ImagePlaceholder({ className = "", label }: { className?: string; label?: string }) {
  return (
    <div className={`bg-light-grey rounded-[10px] flex items-center justify-center text-grey text-sm ${className}`}>
      {label && <span>{label}</span>}
    </div>
  );
}

export default function CaseStudyPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">
        {/* ============================================ */}
        {/* HERO */}
        {/* ============================================ */}
        <section className="pt-[140px] lg:pt-[200px] px-5 lg:px-20 max-w-[1920px] mx-auto">
          <p className="font-body font-medium text-[14px] lg:text-[16px] text-black tracking-[-0.64px] mb-6 lg:mb-8">
            <span>Projekty</span>
            <span className="text-grey"> / Menstruační den v (ant)</span>
          </p>
          <h1 className="font-primary text-[40px] md:text-[60px] lg:text-[80px] text-black tracking-[-3px] lg:tracking-[-5.6px] leading-[1.1] mb-12 lg:mb-16">
            Menstruační den v (ant):<br />
            jedno interní rozhodnutí,<br />
            které na sítích rozjelo lavinu
          </h1>
          <ImagePlaceholder className="w-full h-[250px] md:h-[400px] lg:h-[500px]" label="hero_menstrual_01" />
        </section>

        {/* ============================================ */}
        {/* KONTEXT */}
        {/* Figma: big text LEFT, project meta RIGHT */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="kontext" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* LEFT - big description */}
            <p className="font-body font-medium text-[28px] lg:text-[40px] text-black tracking-[-1.6px] leading-[1.2]">
              Nevzniklo to jako marketing. Na teambuildingu jsme otevřeli téma, které se ve firmách běžně neřeší – menstruace a její reálný dopad na výkon, energii a fungování v práci. Rozhodli jsme se reagovat na realitu, ne ji obcházet. A později: proč to nedat vědět alespoň českému rybníčku?
            </p>
            {/* RIGHT - project meta */}
            <div className="font-body font-medium text-[16px] lg:text-[20px] text-black tracking-[-0.8px] leading-[1.3] space-y-0.5">
              <p>Klient: (ant)</p>
              <p>CEO: Petr Zápotocký</p>
              <p>Copy: ANT Copy tým</p>
              <p>Kreativa: (ant) interní tým</p>
              <p>Kanály: Instagram, LinkedIn, PR</p>
              <p className="mt-4">Typ: Interní změna, Employer branding, Social, PR</p>
              <p>Rok: 2026</p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* VÝZVA */}
        {/* Figma: text RIGHT, images below full-width */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto">
          <SectionDivider label="výzva" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div />
            <p className="font-body font-medium text-[16px] lg:text-[20px] text-black tracking-[-0.8px] leading-[1.3] text-justify">
              Menstruační volno je v Česku stále téměř unikátní jev. Většina firem ho nenabízí a téma samotné zůstává spíš na okraji. Už ve chvíli, kdy jsme se rozhodli změnu sdílet, bylo jasné, že nepůjde o běžnou komunikaci. Nešlo o bezpečné PR téma, ale o něco, co může vyvolat silnou reakci. Silné (WOW), ale i silné (OMG). Otázka nebyla, jestli se to bude líbit. Otázka byla, co to otevře. Doufali jsme, že otevře srdce i oči žen i mužů bez ohledu na pozici ve firmě. Že přijde ten (AHA) moment, který dokáže nasměrovat ke změně.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 lg:mt-16">
            <ImagePlaceholder className="h-[300px] lg:h-[500px]" label="vyzva_01_ant_poster" />
            <ImagePlaceholder className="h-[300px] lg:h-[500px]" label="vyzva_02_teambuilding" />
          </div>
        </section>

        {/* ============================================ */}
        {/* POSTUP */}
        {/* Figma: image LEFT + list RIGHT side by side, then full img, then 2 imgs */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="postup" />
          <h2 className="font-primary text-[40px] lg:text-[60px] text-black tracking-[-3.6px] leading-[1.1] mb-12 lg:mb-16 max-w-[1260px]">
            Nejdřív změna,<br />
            potom komunikace.
          </h2>
          {/* Image left + list right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-12">
            <ImagePlaceholder className="h-[300px] lg:h-[500px]" label="postup_01_benefit" />
            <ul className="font-body font-medium text-[16px] lg:text-[20px] text-black tracking-[-0.8px] leading-[1.3] list-disc pl-8 space-y-2 self-start">
              <li>Zavedli jsme menstruační den jako reálný benefit uvnitř firmy – jeden den v měsíci volna, bez vysvětlování a bez potřeby cokoliv maskovat.</li>
              <li>Na LinkedInu sdílel téma CEO Petr Zápotocký formou osobního postu, čistě organicky.</li>
              <li>Na Instagramu jsme publikovali reel s placenou podporou, cílený primárně mimo naši stávající komunitu.</li>
              <li>Paralelně jsme vydali tiskovou zprávu, kterou převzala média.</li>
              <li>Nešlo o cílenou kampaň. Šlo o jedno rozhodnutí komunikované napříč kanály bez stylizace.</li>
            </ul>
          </div>
          {/* Full-width image: PZ LinkedIn post */}
          <ImagePlaceholder className="w-full h-[400px] lg:h-[687px] mb-8 lg:mb-12" label="pz_linkedin_post" />
          {/* Two images side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ImagePlaceholder className="h-[400px] lg:h-[687px]" label="instagram_reel" />
            <ImagePlaceholder className="h-[400px] lg:h-[687px]" label="ant_post_02" />
          </div>
        </section>

        {/* ============================================ */}
        {/* VÝSLEDKY */}
        {/* Figma: green bg, big text left, stats right */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 bg-light-green">
          <div className="px-5 lg:px-20 max-w-[1920px] mx-auto">
            <SectionDivider label="výsledky" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-8">
              <div>
                <p className="font-body font-medium text-[28px] lg:text-[40px] text-black tracking-[-1.6px] leading-[1.2] mb-6 lg:mb-10">
                  Téma, které většina firem neřeší, šlo ven. A přišla lavina. Obsah se stal spouštěčem veřejné diskuze – statisíce oslovených lidí, stovky reakcí, mediální zásah a otevřené téma napříč firmami.
                </p>
                <p className="font-body font-medium text-[14px] lg:text-[16px] text-black tracking-[-0.64px] leading-[1.4] opacity-70">
                  Čísla jsou k 30. březnu 2026.
                </p>
              </div>
              <div>
                {[
                  { label: "LinkedIn", value: "100 886", desc: "zobrazení organicky (post CEO)" },
                  { label: "Instagram", value: "175 041", desc: "zobrazení (ADS)" },
                  { label: "Reakce", value: "2 317", desc: "lajků na LinkedInu" },
                  { label: "Komentáře", value: "348", desc: "v diskusi pod postem" },
                ].map((stat, i) => (
                  <div key={i} className="border-t border-black py-6 lg:py-8">
                    <div className="flex items-baseline gap-6 lg:gap-10">
                      <p className="font-primary font-bold text-[20px] lg:text-[30px] text-black tracking-[-2.4px] leading-[1.1] w-[140px] lg:w-[200px] shrink-0">
                        {stat.label}
                      </p>
                      <div>
                        <p className="font-primary text-[36px] lg:text-[60px] text-black tracking-[-4.2px] leading-[1.1]">
                          {stat.value}
                        </p>
                        <p className="font-body font-medium text-[14px] lg:text-[16px] text-black tracking-[-0.64px] leading-[1.3] mt-1">
                          {stat.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="border-t border-black" />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* REAKCE – (WTF) téma, (WOW) reakce */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="reakce" />
          <h2 className="font-primary text-[40px] lg:text-[60px] text-black tracking-[-3.6px] leading-[1.1] mb-8 lg:mb-12 max-w-[1400px]">
            (WTF) téma,<br />
            (WOW) reakce.
          </h2>
          <p className="font-body font-medium text-[18px] lg:text-[24px] text-black tracking-[-0.96px] leading-[1.3] max-w-[1141px] mb-12 lg:mb-16">
            Diskuse byla různorodá. A silná. Vedle pozitivních reakcí přišla i kritika. Spousta názorů – dobrých i špatných. A přesně to je moment, kdy víte, že téma má váhu. Že někdo prolomil to, co silně rezonuje. Že někdo šel za hranu, (YES).
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="space-y-4 lg:space-y-6">
              <ImagePlaceholder className="w-full h-[260px] lg:h-[379px]" label="ig_komentare_01" />
              <ImagePlaceholder className="w-full h-[200px] lg:h-[287px]" label="ig_komentare_02" />
              <ImagePlaceholder className="w-full h-[120px] lg:h-[168px]" label="li_komentar_mlckova" />
            </div>
            <div className="space-y-4 lg:space-y-6">
              <ImagePlaceholder className="w-full h-[170px] lg:h-[245px]" label="li_komentar_chlubnova" />
              <ImagePlaceholder className="w-full h-[230px] lg:h-[323px]" label="li_komentar_bednar" />
              <ImagePlaceholder className="w-full h-[370px] lg:h-[538px]" label="li_komentare_dalsi" />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* AUTENTICITA JE (PROČ) – závěr */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 bg-light-green">
          <div className="px-5 lg:px-20 max-w-[1920px] mx-auto">
            <SectionDivider label="závěr" />
            <div className="mt-12 lg:mt-16">
              <h2 className="font-primary text-[48px] lg:text-[80px] text-black tracking-[-5.6px] leading-none mb-8 lg:mb-12 max-w-[1000px]">
                Autenticita je (PROČ).
              </h2>
              <p className="font-body font-medium text-[18px] lg:text-[24px] text-black tracking-[-0.96px] leading-[1.3] max-w-[1141px]">
                Proč se spustila lavina reakcí? Jak to, že se povedlo otevřít tak velkou diskuzi? Protože to nebyla kampaň. Bylo to rozhodnutí. Nejdřív jsme něco zavedli. Až potom to komunikovali. Obsah tak nevznikl, aby zaujal. Vycházel z reality. Autenticita nebyla styl. Byla základ. A přesně proto to fungovalo.
              </p>
              <div className="flex items-center gap-4 mt-12 lg:mt-16 justify-end">
                <ImagePlaceholder className="w-[120px] lg:w-[160px] h-[120px] lg:h-[160px] rounded-[10px]" label="Foto PZ" />
                <div>
                  <p className="font-primary font-bold text-[18px] lg:text-[20px] text-black tracking-[-1.6px] leading-[1.1]">
                    Petr Zápotocký
                  </p>
                  <p className="font-body font-medium text-[14px] lg:text-[16px] text-black tracking-[-0.64px] leading-[1.3]">
                    CEO, (ant)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* KONTAKT / CTA */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="kontakt" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-8 lg:mt-16">
            {/* LEFT - headlines */}
            <div>
              <h2 className="font-primary text-[48px] lg:text-[80px] text-black tracking-[-5.6px] leading-[1.1] mb-6 lg:mb-10">
                Máte téma,<br />
                co stojí za to<br />
                říct nahlas?
              </h2>
              <p className="font-body font-medium text-[28px] lg:text-[40px] text-black tracking-[-1.6px] leading-[1.2] max-w-[730px]">
                Pomůžeme vám ho otevřít – bez stylizace, s dopadem.
              </p>
            </div>
            {/* RIGHT - photo + contact + button */}
            <div className="flex flex-col lg:flex-row gap-6 items-start self-center">
              <ImagePlaceholder className="w-[140px] lg:w-[180px] h-[180px] lg:h-[230px] shrink-0" label="Foto PZ" />
              <div>
                <p className="font-primary font-bold text-[18px] lg:text-[20px] text-black tracking-[-1.6px] leading-[1.1]">
                  Petr Zápotocký
                </p>
                <div className="font-body font-medium text-[16px] lg:text-[20px] text-black tracking-[-0.8px] leading-[1.3] mt-2">
                  <p>CEO, (ant)</p>
                  <a href="mailto:petr@antstudio.cz" className="underline block">petr@antstudio.cz</a>
                </div>
                <div className="mt-6">
                  <ArrowButton label="Napsat Petrovi" variant="primary" href="mailto:petr@antstudio.cz" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
