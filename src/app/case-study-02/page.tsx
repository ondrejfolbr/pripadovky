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
            <span className="text-grey"> / Menstruační den</span>
          </p>
          <h1 className="font-primary text-[40px] md:text-[60px] lg:text-[80px] text-black tracking-[-3px] lg:tracking-[-5.6px] leading-[1.1] mb-12 lg:mb-16">
            Menstruační den v (ant):<br />
            interní rozhodnutí,<br />
            které rozjelo lavinu
          </h1>
          <ImagePlaceholder className="w-full h-[250px] md:h-[400px] lg:h-[500px]" label="hero_menstrual_01" />
        </section>

        {/* ============================================ */}
        {/* KONTEXT */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="kontext" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* LEFT - big description */}
            <p className="font-body font-medium text-[28px] lg:text-[40px] text-black tracking-[-1.6px] leading-[1.2]">
              Nevzniklo to jako marketingový kalkul. Na teambuildingu jsme otevřeli téma, které většina firem ignoruje – reálný dopad menstruace na výkon a energii v práci.
            </p>
            {/* RIGHT - project meta */}
            <div className="font-body font-medium text-[16px] lg:text-[20px] text-black tracking-[-0.8px] leading-[1.3] space-y-0.5">
              <p>Klient: (ant)</p>
              <p>CEO: Petr Zápotocký</p>
              <p>Copy: ANT Copy tým</p>
              <p>Kreativa: (ant) interní tým</p>
              <p>Social: Instagram, LinkedIn</p>
              <p>PR: tisková zpráva</p>
              <p className="mt-4">Typ: Interní změna, PR, Social media, Employer branding</p>
              <p>Rok: 2026</p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* VÝZVA */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto">
          <SectionDivider label="výzva" />
          <h2 className="font-primary text-[40px] lg:text-[60px] text-black tracking-[-3.6px] leading-[1.1] mb-10 lg:mb-14 max-w-[1260px]">
            Přestat ignorovat<br />
            biologická fakta.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div />
            <p className="font-body font-medium text-[18px] lg:text-[24px] text-black tracking-[-0.96px] leading-[1.3]">
              Mnoho žen během cyklu prostě nemá 100% výkon. Tlačit to na sílu není efektivní pro ně, ani pro firmu. Chtěli jsme vytvořit prostředí, kde se o tom mluví otevřeně a kde se výkon posuzuje v kontextu zdraví.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 lg:mt-16">
            <ImagePlaceholder className="h-[300px] lg:h-[500px]" label="vyzva_01" />
            <ImagePlaceholder className="h-[300px] lg:h-[500px]" label="vyzva_02" />
          </div>
        </section>

        {/* ============================================ */}
        {/* ŘEŠENÍ */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="řešení" />
          <h2 className="font-primary text-[40px] lg:text-[60px] text-black tracking-[-3.6px] leading-[1.1] mb-12 lg:mb-16 max-w-[1260px]">
            Žádná byrokracie,<br />
            jen respekt.
          </h2>
          {/* Image left + text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-12">
            <ImagePlaceholder className="h-[300px] lg:h-[500px]" label="reseni_koncept" />
            <p className="font-body font-medium text-[18px] lg:text-[24px] text-black tracking-[-0.96px] leading-[1.3] self-start">
              Zavedli jsme Menstruační den – den volna navíc pro ženy, bez nutnosti vysvětlování nebo papírování. Téma jsme pak autenticky sdíleli na LinkedInu. Žádná kampaň, jen snaha přiznat barvu.
            </p>
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
        {/* REAKCE */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="reakce" />
          <h2 className="font-primary text-[40px] lg:text-[60px] text-black tracking-[-3.6px] leading-[1.1] mb-10 lg:mb-14 max-w-[1260px]">
            Polarizace,<br />
            kterou jsme nečekali.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16">
            <div />
            <p className="font-body font-medium text-[18px] lg:text-[24px] text-black tracking-[-0.96px] leading-[1.3]">
              Jeden příspěvek na sítě spustil masivní lavinu. Od absolutního nadšení a tleskání až po drsné hejty a obviňování z diskriminace mužů. Stali jsme se centrem debaty o moderním HR a tabuizovaných tématech.
            </p>
          </div>
          {/* Galerie screenshotů z diskuzí */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="space-y-4 lg:space-y-6">
              <ImagePlaceholder className="w-full h-[260px] lg:h-[379px]" label="ig_komentare_01" />
              <ImagePlaceholder className="w-full h-[200px] lg:h-[287px]" label="ig_komentare_02" />
              <ImagePlaceholder className="w-full h-[120px] lg:h-[168px]" label="li_komentar_mlckova" />
            </div>
            <div className="space-y-4 lg:space-y-6">
              <ImagePlaceholder className="w-full h-[170px] lg:h-[245px]" label="li_komentar_chlubnova_bartova" />
              <ImagePlaceholder className="w-full h-[230px] lg:h-[323px]" label="li_komentar_bednar" />
              <ImagePlaceholder className="w-full h-[370px] lg:h-[538px]" label="li_komentare_dalsi" />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* DOPAD */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 bg-light-green">
          <div className="px-5 lg:px-20 max-w-[1920px] mx-auto">
            <SectionDivider label="dopad" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-8">
              <div>
                <h2 className="font-primary text-[40px] lg:text-[60px] text-black tracking-[-3.6px] leading-[1.1] mb-6 lg:mb-10">
                  Masivní<br />
                  virální zásah.
                </h2>
                <p className="font-body font-medium text-[18px] lg:text-[22px] text-black tracking-[-0.88px] leading-[1.3] mb-6">
                  O (ant) psali v <strong>Hospodářských novinách</strong>, <strong>Forbesu</strong>, <strong>CzechCrunchi</strong> i na <strong>Refresheru</strong>.
                </p>
                <p className="font-body font-medium text-[14px] lg:text-[16px] text-black tracking-[-0.64px] leading-[1.4] opacity-70">
                  Čísla jsou k 30. březnu 2026.
                </p>
              </div>
              <div>
                {[
                  { label: "LinkedIn", value: "260 000+", desc: "zhlédnutí postu" },
                  { label: "Reakce", value: "2 000+", desc: "liků na příspěvku" },
                  { label: "Komentáře", value: "330+", desc: "v diskusi pod postem" },
                  { label: "Sdílení", value: "40+", desc: "dál do feedu" },
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
        {/* ZÁVĚR */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="závěr" />
          <h2 className="font-primary text-[48px] lg:text-[80px] text-black tracking-[-5.6px] leading-[1.1] mb-10 lg:mb-16 max-w-[1400px]">
            Lidskost je<br />
            nejsilnější branding.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16">
            <p className="font-body font-medium text-[20px] lg:text-[28px] text-black tracking-[-1.12px] leading-[1.3] italic">
              „Ukázali jsme, že v (ant) jsme nejdřív lidi a pak až specialisté. To, co začalo u nás v kuchyňce, otevřelo oči tisícům dalších firem.“
            </p>
            <p className="font-body font-medium text-[18px] lg:text-[24px] text-black tracking-[-0.96px] leading-[1.3] self-end">
              Přišly desítky zpráv od žen, které nám děkovaly za otevření tématu, a (ant) má jasnou pozici progresivního zaměstnavatele.
            </p>
          </div>
          <ImagePlaceholder className="w-full h-[300px] lg:h-[466px]" label="zaver_final" />
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
