import Image from "next/image";
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

export default function CaseStudy01Page() {
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
            <span className="text-grey"> / Ráno to nesmažeš</span>
          </p>
          <h1 className="font-primary text-[40px] md:text-[60px] lg:text-[80px] text-black tracking-[-3px] lg:tracking-[-5.6px] leading-[1.1] mb-12 lg:mb-16">
            Sexting, policie<br />
            a prevence
          </h1>
          <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] rounded-[10px] overflow-hidden">
            <Image src="/images/hero_img_mobile.png" alt="Ráno to nesmažeš – hero" fill className="object-cover md:hidden" unoptimized />
            <Image src="/images/hero_img.png" alt="Ráno to nesmažeš – hero" fill className="object-cover hidden md:block" unoptimized />
          </div>
        </section>

        {/* ============================================ */}
        {/* KLIENT & TÝM */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="klient&tým" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* LEFT - big description */}
            <p className="font-body font-medium text-[28px] lg:text-[40px] text-black tracking-[-1.6px] leading-[1.2]">
              Jak varovat především mladé před riziky sextingu tak, aby to brali vážně a nezavírali oči? Společný cíl byl jasný: šířit osvětu, otevřít diskuzi a mluvit k mladým jejich jazykem.
            </p>
            {/* RIGHT - team info */}
            <div className="font-body font-medium text-[16px] lg:text-[20px] text-black tracking-[-0.8px] leading-[1.3] space-y-0.5">
              <p>Klient: Policie ČR, Plzeňský kraj</p>
              <p>Koncept & strategie: ANT studio</p>
              <p>Produkce videí: ANT studio</p>
              <p>Distribuce: TikTok, Seznam.cz</p>
              <p>Web: www.ranotonesmazes.cz</p>
              <p className="mt-4">Typ: Preventivní kampaň, Video, Sociální média, Online reklama</p>
              <p>Rok: Q4 2025</p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* VÝZVA */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto">
          <SectionDivider label="výzva" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* LEFT - fotka */}
            <div className="relative rounded-[10px] overflow-hidden h-[400px] lg:h-full lg:min-h-[500px]">
              <Image src="/images/IMG05.png" alt="Výzva" fill className="object-cover" unoptimized />
            </div>
            {/* RIGHT - text + stat karty */}
            <div>
              <div className="font-body font-medium text-[16px] lg:text-[20px] text-black tracking-[-0.8px] leading-[1.3] space-y-4">
                <p>U mladé generace se sexting bohužel stal běžnou součástí online komunikace. Následky mohou být ale velmi kruté. Od studu přes šikanu až po zneužití.</p>
                <p>Policie nás oslovila s cílem vytvořit preventivní kampaň, která upozorní na dopady sdílení intimních materiálů a bude podpůrným edukačním bodem pro školy i rodiče.</p>
                <p>Protože když neřešíte, jak mluví vaše cílovka, pravděpodobně vás nebude ani poslouchat a message zapadne.</p>
              </div>
              {/* Stat cards - 2+1 grid */}
              <div className="grid grid-cols-2 gap-6 mt-12 lg:mt-16">
                <div>
                  <p className="font-primary text-[48px] lg:text-[60px] text-black tracking-[-4px] leading-[1]">1 z 5</p>
                  <p className="font-body font-medium text-[14px] lg:text-[16px] text-black tracking-[-0.64px] leading-[1.3] mt-2 max-w-[220px]">Mladých přiznává odeslání nahé fotky bez plného vědomí důsledků</p>
                </div>
                <div>
                  <p className="font-primary text-[48px] lg:text-[60px] text-black tracking-[-4px] leading-[1]">Tenká</p>
                  <p className="font-body font-medium text-[14px] lg:text-[16px] text-black tracking-[-0.64px] leading-[1.3] mt-2 max-w-[220px]">Hranice souhlasu v online světě</p>
                </div>
                <div>
                  <p className="font-primary text-[48px] lg:text-[60px] text-black tracking-[-4px] leading-[1]">Ráno</p>
                  <p className="font-body font-medium text-[14px] lg:text-[16px] text-black tracking-[-0.64px] leading-[1.3] mt-2 max-w-[220px]">Co jednou pošleš… to nesmažeš</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* ŘEŠENÍ - PŘÍKLADY MÍSTO TEORETIZOVÁNÍ */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="řešení" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-12">
            <div>
              <Image src="/images/IMG04_mobile.png" alt="TikTok profil @ranotonesmazes" width={400} height={600} className="w-full h-auto rounded-[10px] md:hidden" unoptimized />
              <Image src="/images/IMG04.png" alt="TikTok profil @ranotonesmazes" width={700} height={500} className="w-full h-auto rounded-[10px] hidden md:block" unoptimized />
            </div>
            <div className="lg:self-center">
              <p className="font-body font-medium text-[20px] lg:text-[30px] text-black tracking-[-1.2px] leading-[1.2] mb-6">
                Příklady místo teoretizování
              </p>
              <p className="font-body font-medium text-[16px] lg:text-[20px] text-black tracking-[-0.8px] leading-[1.3]">
                Zvolili jsme formát, který nepůsobí jako prevence… ale funguje jako prevence! Krátké příběhy vyprávěné z pohledu kluka. V hlavní roli TikTok reels a Seznam reklamy. Jazyk cílovky. Formát, který mladí znají.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <span className="font-body font-medium text-[16px] text-black tracking-[-0.64px] bg-light-grey rounded-full px-5 py-2">@ranotonesmazes</span>
                <span className="font-body font-medium text-[16px] text-black tracking-[-0.64px] bg-light-grey rounded-full px-5 py-2">www.ranotonesmazes.cz</span>
              </div>
            </div>
          </div>
          {/* TikTok reels carousel */}
          <div>
            <Image src="/images/carousel_mobile.png" alt="TikTok reels – Ráno to nesmažeš" width={800} height={1200} className="w-full h-auto rounded-[10px] lg:hidden" unoptimized />
            <Image src="/images/carousel.png" alt="TikTok reels – Ráno to nesmažeš" width={1920} height={500} className="w-full h-auto rounded-[10px] hidden lg:block" unoptimized />
            <p className="font-body font-medium text-[14px] lg:text-[16px] text-grey tracking-[-0.64px] mt-3 text-center">
              Ukázky TikTok reels z kampaně @ranotonesmazes – celkem přes 2.9M zhlédnutí
            </p>
          </div>
        </section>

        {/* ============================================ */}
        {/* ŘEŠENÍ - DISTRIBUCE */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="řešení" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-12">
            <Image src="/images/IMG06.png" alt="Seznam.cz banner" width={700} height={500} className="w-full h-auto rounded-[10px]" unoptimized />
            <p className="font-body font-medium text-[20px] lg:text-[30px] text-black tracking-[-1.2px] leading-[1.2] self-center">
              Všude tam, kde to dává smysl. Z online pekla rovnou do ulic a zpět. Kampaň se objevila jako bannery na Seznamu, obsadila telefony přes TikTok, rezonovala ve zprávách a vyvolala reálné diskuze.
            </p>
          </div>
          {/* Media placements */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ImagePlaceholder className="h-[300px] lg:h-[400px]" label="TV Reportáž – screenshot z vysílání" />
            <ImagePlaceholder className="h-[300px] lg:h-[400px]" label="Reálné komentáře – anonymizovaná diskuze" />
            <ImagePlaceholder className="h-[300px] lg:h-[400px]" label="TikTok screenshot – @ranotonesmazes feed" />
          </div>
        </section>

        {/* ============================================ */}
        {/* HIGHLIGHTS - KAMPAŇ V ČÍSLECH */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 bg-light-green">
          <div className="px-5 lg:px-20 max-w-[1920px] mx-auto">
            <SectionDivider label="highlights" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-8">
              <div>
                <p className="font-body font-medium text-[28px] lg:text-[40px] text-black tracking-[-1.6px] leading-[1.2]">
                  Kampaň v číslech. Musí to být slyšet. A bylo.
                </p>
                <p className="font-body font-medium text-[18px] lg:text-[24px] text-black tracking-[-0.96px] leading-[1.3] mt-6">
                  Tohle nebyla jen kampaň. Tohle je funkční prevence ve světě, kde jedno video může všechno změnit. Mluvili jsme nahlas. Ale bez křiku. S respektem. A s dopadem, který ráno nezmizí.
                </p>
              </div>
              <div>
                {[
                  { label: "TikTok", value: "953K+", desc: "zhlédnutí celkem" },
                  { label: "Seznam.cz", value: "1.9M+", desc: "zobrazení celkem" },
                  { label: "Prokliky", value: "4 700+", desc: "celkem prokliků na Seznamu" },
                  { label: "Engagement", value: "5 900+", desc: "liků na TikToku" },
                ].map((stat, i) => (
                  <div key={i} className={`${i > 0 ? 'border-t border-black' : ''} py-6 lg:py-8`}>
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
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* GALERIE */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="galerie" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[40px] items-start">
            <Image src="/images/01.png" alt="Galerie 1" width={400} height={710} className="w-full h-auto rounded-[10px]" unoptimized />
            <Image src="/images/IMG08.png" alt="Mockup" width={400} height={640} className="w-full h-auto rounded-[10px]" unoptimized />
            <Image src="/images/03.png" alt="Galerie 3" width={400} height={710} className="w-full h-auto rounded-[10px]" unoptimized />
            <Image src="/images/04.png" alt="Galerie 4" width={400} height={710} className="w-full h-auto rounded-[10px]" unoptimized />
          </div>
        </section>

        {/* ============================================ */}
        {/* CO DÁL */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="co dál?" />
          <div className="mb-12 lg:mb-16 max-w-[710px]">
            <p className="font-body font-medium text-[16px] lg:text-[20px] text-black tracking-[-0.8px] leading-[1.3] text-justify">
              Kampaň Ráno to nesmažeš ukázala, že prevence nemusí být nudná a může reálně zasáhnout mladou generaci. Už teď společně s Policií ČR přemýšlíme nad rozšířením spolupráce do dalších krajů a novými formáty, které téma posunou ještě dál. Na stole leží i offline aktivity ve školách a návazné edukační materiály pro rodiče a pedagogy.
            </p>
          </div>
          <Image src="/images/IMG10_mobile.png" alt="Co dál – vizuál budoucnosti projektu" width={400} height={600} className="w-full h-auto rounded-[10px] md:hidden" unoptimized />
          <Image src="/images/IMG10.png" alt="Co dál – vizuál budoucnosti projektu" width={1400} height={466} className="w-full h-auto rounded-[10px] hidden md:block" unoptimized />
        </section>

        {/* ============================================ */}
        {/* FEEDBACK */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 bg-light-green">
          <div className="px-5 lg:px-20 max-w-[1920px] mx-auto">
            <SectionDivider label="feedback" />
            <div className="mt-12 lg:mt-16">
              <h2 className="font-primary text-[48px] lg:text-[80px] text-black tracking-[-5.6px] leading-none mb-8 lg:mb-12 max-w-[730px]">
                Co o kampani říká klient?
              </h2>
              <p className="font-body font-medium text-[18px] lg:text-[24px] text-black tracking-[-0.96px] leading-[1.3] max-w-[1141px]">
                Díky formátu kampaně Ráno to nesmažeš jsme konečně dokázali oslovit cílovou skupinu v Plzeňském kraji napřímo. Otevřeli jsme důležitou debatu a navíc jsme získali skvělé ocenění.
              </p>
              {/* Client attribution - aligned right */}
              <div className="flex items-center gap-4 mt-12 lg:mt-16 justify-end">
                <ImagePlaceholder className="w-[120px] lg:w-[160px] h-[120px] lg:h-[160px] rounded-[10px]" label="Foto klienta" />
                <div>
                  <p className="font-primary font-bold text-[18px] lg:text-[20px] text-black tracking-[-1.6px] leading-[1.1]">
                    Jan Mrvka
                  </p>
                  <p className="font-body font-medium text-[14px] lg:text-[16px] text-black tracking-[-0.64px] leading-[1.3]">
                    Policie ČR · 2. místo Certifikát
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* FEEDBACK – KONZULTANT (ant) */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 bg-[#e8f5e9]">
          <div className="px-5 lg:px-20 max-w-[1920px] mx-auto">
            <div>
              <h2 className="font-primary text-[48px] lg:text-[80px] text-black tracking-[-5.6px] leading-none mb-8 lg:mb-12 max-w-[730px]">
                Taky k tomu v (ant) máme co říct...
              </h2>
              <p className="font-body font-medium text-[18px] lg:text-[24px] text-black tracking-[-0.96px] leading-[1.3] max-w-[1141px]">
                O sextingu se často mluví až ve chvíli, kdy je pozdě. Proto jsme vytvořili kampaň, která pomáhá dětem i rodičům rozpoznat rizika dřív, než se z virtuální chyby stane reálný problém. Otevřeně a citlivě. Pro mě – jakožto tátu – má tento projekt ještě osobnější rozměr.
              </p>
              <div className="flex items-center gap-4 mt-12 lg:mt-16 justify-end">
                <ImagePlaceholder className="w-[120px] lg:w-[160px] h-[120px] lg:h-[160px] rounded-[10px]" label="Foto konzultanta" />
                <div>
                  <p className="font-primary font-bold text-[18px] lg:text-[20px] text-black tracking-[-1.6px] leading-[1.1]">
                    Zástupce agentury ANT
                  </p>
                  <p className="font-body font-medium text-[14px] lg:text-[16px] text-black tracking-[-0.64px] leading-[1.3]">
                    Pozice v ANT studio
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
                Mějte vizuály,<br />
                co drží krok<br />
                s budoucností!
              </h2>
              <p className="font-body font-medium text-[28px] lg:text-[40px] text-black tracking-[-1.6px] leading-[1.2] max-w-[730px]">
                Projdeme společně vaše potřeby, přání i možné obavy. Navrhneme řešení, sestavíme tým.
              </p>
            </div>
            {/* RIGHT - photo + contact + button */}
            <div className="flex flex-col lg:flex-row gap-6 items-start self-center">
              <ImagePlaceholder className="w-[140px] lg:w-[180px] h-[180px] lg:h-[230px] shrink-0" label="Photo" />
              <div>
                <p className="font-primary font-bold text-[18px] lg:text-[20px] text-black tracking-[-1.6px] leading-[1.1]">
                  Ing. Michaela Bílková
                </p>
                <div className="font-body font-medium text-[16px] lg:text-[20px] text-black tracking-[-0.8px] leading-[1.3] mt-2">
                  <p>Backoffice Manager</p>
                  <a href="mailto:kariera@antstudio.cz" className="underline block">kariera@antstudio.cz</a>
                  <a href="tel:+420725100271" className="underline block">+420 725 100 271</a>
                </div>
                <div className="mt-6">
                  <ArrowButton label="Napsat Míše" variant="primary" href="mailto:kariera@antstudio.cz" />
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
