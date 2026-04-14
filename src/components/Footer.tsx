import Link from "next/link";
import ArrowButton from "./ArrowButton";

export default function Footer() {
  return (
    <footer className="relative bg-ant-green min-h-screen overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-30 bg-[url('/images/footer-pattern.svg')] bg-cover" />

      <div className="relative z-10 px-5 lg:px-20 pt-20 lg:pt-[100px] pb-20 lg:pb-[100px] max-w-[1920px] mx-auto min-h-screen flex flex-col justify-between">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          <div>
            <h2 className="font-primary text-[60px] lg:text-[120px] text-black tracking-[-4px] lg:tracking-[-8.4px] leading-[0.9]">
              Pojďme<br />se pobavit
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="font-body font-medium text-[28px] lg:text-[40px] text-black tracking-[-1.6px] leading-[1.2]">
              Dáme hlavy dohromady,<br />
              jak společně vytvořit<br />
              něco nezapomenutelného!
            </p>
          </div>
        </div>

        {/* Middle section - contact info */}
        <div className="mt-16 lg:mt-0">
          <div className="font-body font-medium text-[18px] lg:text-[20px] text-black tracking-[-0.8px] leading-[1.3] space-y-0.5">
            <p>Slovanská alej 2182/30, 326 00 Plzeň</p>
            <p>
              <a href="mailto:info@antstudio.cz" className="hover:underline">info@antstudio.cz</a>
            </p>
            <p>
              <a href="tel:+420774828242" className="hover:underline">+420 774 828 242</a>
            </p>
            <p>8-17:00</p>
          </div>
          <div className="mt-8">
            <ArrowButton label="Kontakty" variant="primary" href="#" />
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 lg:mt-0">
          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 lg:gap-10 mb-10 font-body font-medium text-[16px] lg:text-[18px] text-black tracking-[-0.72px]">
            <Link href="#" className="hover:opacity-60 transition-opacity">případovky</Link>
            <Link href="#" className="hover:opacity-60 transition-opacity">studio</Link>
            <Link href="#" className="hover:opacity-60 transition-opacity">kariéra <span className="text-[14px]">(4)</span></Link>
            <Link href="#" className="hover:opacity-60 transition-opacity">blog <span className="text-[14px]">(11)</span></Link>
            <Link href="#" className="hover:opacity-60 transition-opacity">kontakt</Link>
          </nav>

          {/* Bottom bar */}
          <div className="flex flex-col lg:flex-row justify-between gap-4 font-body font-medium text-[14px] lg:text-[16px] text-black tracking-[-0.64px]">
            <p>Copyright © 2006 - 2024 ANT studio s.r.o.</p>
            <p>Nastavení cookies / Prohlášení o ochraně osobních údajů</p>
            <div className="flex flex-col lg:flex-row lg:gap-6 text-right">
              <Link href="#" className="hover:underline">Instagram</Link>
              <Link href="#" className="hover:underline">LinkedIn</Link>
              <Link href="#" className="hover:underline">Twitter</Link>
              <Link href="#" className="hover:underline">Facebook</Link>
              <Link href="#" className="hover:underline">YouTube</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
