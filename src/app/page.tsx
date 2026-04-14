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
            <span className="text-grey"> / MyMD21</span>
          </p>
          <h1 className="font-primary text-[40px] md:text-[60px] lg:text-[80px] text-black tracking-[-3px] lg:tracking-[-5.6px] leading-[1.1] mb-12 lg:mb-16">
            Náš bronzový<br />
            úspěch v soutěži WebTop100<br />
            lorem ispum
          </h1>
          <ImagePlaceholder className="w-full h-[250px] md:h-[400px] lg:h-[500px]" label="md21_01" />
        </section>

        {/* ============================================ */}
        {/* KLIENT & TÝM */}
        {/* Figma: big text LEFT, team info RIGHT */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="klient&tým" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* LEFT - big description */}
            <p className="font-body font-medium text-[28px] lg:text-[40px] text-black tracking-[-1.6px] leading-[1.2]">
              DinoPark chtěl osvěžit svůj online marketing a přivést více návštěvníků do svých zábavních parků. Postavili jsme výkonnou digitální strategii, která spojila kreativní obsah, cílenou reklamu a chytrou analytiku, aby oslovila rodiny i mladé dobrodruhy.
            </p>
            {/* RIGHT - team info */}
            <div className="font-body font-medium text-[16px] lg:text-[20px] text-black tracking-[-0.8px] leading-[1.3] space-y-0.5">
              <p>Klient: Film Servis Festival Karlovy Vary</p>
              <p>Designer: Jonatan Kuna</p>
              <p>Art director: Aleš Najbrt</p>
              <p>3D: Jonatan Kuna, Zdeněk Trinkewitz</p>
              <p>Animace: Jonatan Kuna, Zdeněk Trinkewitz</p>
              <p>DTP: Mária Černá, Jiří Veselka</p>
              <p>Produkce: Adéla Pěchočová</p>
              <p>Spolupráce: Lukáš Skála (foto dokumentace)</p>
              <p className="mt-4">Typ: Interiér, Plakát, Značka, Festival, Program, Sociální média</p>
              <p>Rok: 2024</p>
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
              Znáte soutěž WebTop100? Ne? Využijeme slova, s nimiž se sami prezentují: „WebTop100 je galerií skvělých nápadů a inovativních řešení. Na jednom místě je shromážděno to nejzajímavější z digitálního marketingu." A my jsme chtěli ukázat, že máme co nabídnout. Přihlásili jsme se do kategorie Firemní web s projektem pro klienta MyMD21, jež je dynamickou společností specializující se na výstavbu technologicky vyspělých domů 21. století s důrazem na kvalitu a inovativní řešení.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 lg:mt-16">
            <ImagePlaceholder className="h-[300px] lg:h-[500px]" label="md21_02" />
            <ImagePlaceholder className="h-[300px] lg:h-[500px]" label="md21_03" />
          </div>
        </section>

        {/* ============================================ */}
        {/* ŘEŠENÍ - CÍLE */}
        {/* Figma: image LEFT + list RIGHT side by side, then full img, then 2 imgs */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="řešení" />
          {/* Image left + list right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-12">
            <ImagePlaceholder className="h-[300px] lg:h-[500px]" label="md21_04" />
            <ul className="font-body font-medium text-[16px] lg:text-[20px] text-black tracking-[-0.8px] leading-[1.3] list-disc pl-8 space-y-2 self-start">
              <li>Vytvořit atraktivní web pro zájemce o nadstandardní bydlení.</li>
              <li>Moderním webem odrážet využití moderních technologií při realizaci projektů.</li>
              <li>Dodat konfigurační řešení s generováním orientační cenové nabídky dle uživatelem zadaných parametrů.</li>
              <li>Zájemcům poskytnout ucelený přehled o fungování společnosti a průběhu spolupráce.</li>
              <li>Zlepšit uživatelský zážitek z procházení webu doplněním o možnost přepínání světlého/tmavého režimu.</li>
            </ul>
          </div>
          {/* Full-width image */}
          <ImagePlaceholder className="w-full h-[400px] lg:h-[687px] mb-8 lg:mb-12" label="md21_05" />
          {/* Two images side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ImagePlaceholder className="h-[400px] lg:h-[687px]" label="md21_06" />
            <ImagePlaceholder className="h-[400px] lg:h-[687px]" label="md21_07" />
          </div>
        </section>

        {/* ============================================ */}
        {/* ŘEŠENÍ - LOGO */}
        {/* Figma: image LEFT + text RIGHT side by side, then full img */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="řešení" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-12">
            <ImagePlaceholder className="h-[250px] lg:h-[400px]" label="md21_08" />
            <p className="font-body font-medium text-[20px] lg:text-[30px] text-black tracking-[-1.2px] leading-[1.2] self-start">
              Dodat logo evokující komplexní přístup společnosti v rámci nabízených služeb.
            </p>
          </div>
          <ImagePlaceholder className="w-full h-[400px] lg:h-[687px]" label="md21_09" />
        </section>

        {/* ============================================ */}
        {/* HIGHLIGHTS */}
        {/* Figma: green bg, text left, stats right with proper layout */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 bg-light-green">
          <div className="px-5 lg:px-20 max-w-[1920px] mx-auto">
            <SectionDivider label="highlights" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-8">
              <p className="font-body font-medium text-[28px] lg:text-[40px] text-black tracking-[-1.6px] leading-[1.2]">
                Tyto prvky přesvědčily porotu soutěže k udělení skóre 75 % a celkově umístění na 3. pozici! A to není vše.
              </p>
              <div>
                {[
                  { label: "WebTOP100", value: "75%", desc: "skóre  WebTop100" },
                  { label: "Návštěvnost", value: "20 000", desc: "návštěv na webu" },
                  { label: "Kontakty", value: "1 400", desc: "zobrazených kontaktů" },
                  { label: "Poptávky", value: "240", desc: "přijatých  poptávek" },
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
        {/* CO JSME DĚLALI */}
        {/* Figma: centered list, dividers between items, + buttons on RIGHT */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <div className="max-w-[1260px] mx-auto">
            <SectionDivider label="co jsme dělali" />
            <div>
              {[
                { num: "01.", title: "Technický audit", expanded: false },
                { num: "02.", title: "Analýza klíčových slov a analýza konkurence", expanded: false },
                { num: "03.", title: "Organická návštěvnost po úpravách webu", expanded: true },
                { num: "04.", title: "Rebranding a strategie převodu na novou doménu", expanded: false },
                { num: "05.", title: "Sloučení subdomény blog.", expanded: false },
                { num: "06.", title: "Citlivá optimalizace", expanded: false },
                { num: "07.", title: "301 a rušení (převod) subdomén", expanded: false },
                { num: "08.", title: "Technické SEO, alty a strukturovaná data", expanded: false },
                { num: "09.", title: "Spouštění", expanded: false },
              ].map((item, i) => (
                <div key={i}>
                  <div className="border-t border-light-grey" />
                  <div className="flex items-center py-5 lg:py-6 group cursor-pointer">
                    <span className="font-primary text-[28px] lg:text-[40px] text-grey tracking-[-2.8px] leading-[1.1] shrink-0 w-[60px] lg:w-[84px]">
                      {item.num}
                    </span>
                    <span className="font-primary text-[28px] lg:text-[40px] text-black tracking-[-2.8px] leading-[1.1] flex-1">
                      {item.title}
                    </span>
                    <div className={`${item.expanded ? 'bg-light-grey rotate-45' : 'bg-ant-green'} rounded-full size-[44px] lg:size-[56px] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ml-4`}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1V15M1 8H15" stroke="#191a1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  {/* Expanded content for item 03 */}
                  {item.expanded && (
                    <div className="pb-8 pl-[60px] lg:pl-[84px]">
                      <p className="font-body font-medium text-[18px] lg:text-[22px] text-black tracking-[-0.88px] leading-[1.4] mb-6 max-w-[1011px]">
                        <strong>Naše úpravy na původní doméně sodexo.cz a původní webové prezentace</strong>{" "}
                        se začaly pozitivně podepisovat na organické návštěvnosti a počtu rankujících klíčových slov:
                      </p>
                      <ImagePlaceholder className="max-w-[1011px] h-[200px] lg:h-[316px] border border-light-grey" label="Analytics screenshot" />
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-light-grey" />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* GALERIE */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="galerie" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="space-y-4 lg:space-y-6">
              <ImagePlaceholder className="w-full h-[120px] lg:h-[168px]" label="image 47" />
              <ImagePlaceholder className="w-full h-[200px] lg:h-[287px]" label="image 48" />
              <ImagePlaceholder className="w-full h-[260px] lg:h-[379px]" label="image 51" />
            </div>
            <div className="space-y-4 lg:space-y-6">
              <ImagePlaceholder className="w-full h-[170px] lg:h-[245px]" label="image 49" />
              <ImagePlaceholder className="w-full h-[230px] lg:h-[323px]" label="image 50" />
              <ImagePlaceholder className="w-full h-[370px] lg:h-[538px]" label="image 52" />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CO DÁL */}
        {/* Figma: text LEFT (not right!), image below full-width */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 px-5 lg:px-20 max-w-[1920px] mx-auto bg-white">
          <SectionDivider label="co dál?" />
          <div className="mb-12 lg:mb-16 max-w-[710px]">
            <p className="font-body font-medium text-[16px] lg:text-[20px] text-black tracking-[-0.8px] leading-[1.3] text-justify">
              Úspěch v soutěži je pro nás velkým milníkem a zároveň potvrzením našich schopností. V rámci projektu MyMD21 máme za sebou dost práce. To ale neznamená, že končíme. Nyní energii vložíme do rozšíření referencí, tvorby blogových článků, vylepšení SEO a dalšího rozvoje webu.
            </p>
          </div>
          <ImagePlaceholder className="w-full h-[300px] lg:h-[466px]" label="Co dál image" />
        </section>

        {/* ============================================ */}
        {/* FEEDBACK – KLIENT */}
        {/* ============================================ */}
        <section className="py-16 lg:py-24 bg-light-green">
          <div className="px-5 lg:px-20 max-w-[1920px] mx-auto">
            <SectionDivider label="feedback" />
            <div className="mt-12 lg:mt-16">
              <h2 className="font-primary text-[48px] lg:text-[80px] text-black tracking-[-5.6px] leading-none mb-8 lg:mb-12 max-w-[730px]">
                Co o projektu říká klient?
              </h2>
              <p className="font-body font-medium text-[18px] lg:text-[24px] text-black tracking-[-0.96px] leading-[1.3] max-w-[1141px]">
                Agenturu ANT Studio jsme oslovili, když jsme hledali pomoc při kompletním rebrandingu značky Sodexo na Pluxee. Úkolem bylo vybudování nového webu www.pluxee.cz. Mohu potvrdit, že spolupráce s agenturou je naprosto profesionální, postupy a komunikace výborná. Oceňuji obzvláště jejich dlouholeté zkušenosti v on-line oblasti i po kreativní stránce má agentura mnohé, co nabídnout. Spolupráci využíváme nadále, například při tvorbě a realizaci on-line reklamních kampaní a online strategie
              </p>
              {/* Client attribution - aligned right */}
              <div className="flex items-center gap-4 mt-12 lg:mt-16 justify-end">
                <ImagePlaceholder className="w-[120px] lg:w-[160px] h-[120px] lg:h-[160px] rounded-[10px]" label="Foto klienta" />
                <div>
                  <p className="font-primary font-bold text-[18px] lg:text-[20px] text-black tracking-[-1.6px] leading-[1.1]">
                    David Bednář
                  </p>
                  <p className="font-body font-medium text-[14px] lg:text-[16px] text-black tracking-[-0.64px] leading-[1.3]">
                    Pluxee Digital Marketing Manager
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
                Rebrand z jedné zavedené značky na druhou je vždy náročný proces. Bylo klíčové převést veškerou online přítomnost tak, aby se neztratil žádný výkon ani důvěra, kterou Sodexo za roky vybudovalo. Výsledek ukazuje, že když se to udělá pečlivě, přechod může být příležitostí k růstu.
              </p>
              <div className="flex items-center gap-4 mt-12 lg:mt-16 justify-end">
                <ImagePlaceholder className="w-[120px] lg:w-[160px] h-[120px] lg:h-[160px] rounded-[10px]" label="Foto konzultanta" />
                <div>
                  <p className="font-primary font-bold text-[18px] lg:text-[20px] text-black tracking-[-1.6px] leading-[1.1]">
                    Jméno konzultanta
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
        {/* Figma: big text left, small photo + contact info + button right */}
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
