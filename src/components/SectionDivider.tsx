export default function SectionDivider({ label }: { label: string }) {
  return (
    <div className="mb-10 lg:mb-16">
      <p className="font-primary font-bold text-[24px] lg:text-[30px] text-black tracking-[-2.4px] leading-[1.1] mb-4">
        ({label})
      </p>
      <div className="w-full h-px bg-black" />
    </div>
  );
}
