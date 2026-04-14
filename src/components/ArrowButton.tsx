interface ArrowButtonProps {
  label?: string;
  variant?: "primary" | "outline" | "green";
  href?: string;
}

function ArrowIcon({ color = "currentColor" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusIcon({ color = "currentColor" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1V15M1 8H15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ArrowButton({ label, variant = "primary", href }: ArrowButtonProps) {
  const Tag = href ? "a" : "div";
  const arrowBg = variant === "primary" ? "bg-black" : variant === "green" ? "bg-ant-green" : "border border-black";
  const arrowColor = variant === "primary" ? "#5bffc4" : variant === "outline" ? "#191a1b" : "#191a1b";
  const isPlus = variant === "green";

  return (
    <Tag href={href} className="inline-flex items-center group cursor-pointer">
      {label && (
        <div className="bg-black flex items-center justify-center px-[30px] py-[26px] rounded-full">
          <span className="font-primary text-[18px] text-ant-green text-center tracking-[-0.72px] whitespace-nowrap">
            {label}
          </span>
        </div>
      )}
      <div className={`${arrowBg} rounded-full size-[56px] lg:size-[70px] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
        {isPlus ? <PlusIcon color={arrowColor} /> : <ArrowIcon color={arrowColor} />}
      </div>
    </Tag>
  );
}

export { ArrowIcon, PlusIcon };
