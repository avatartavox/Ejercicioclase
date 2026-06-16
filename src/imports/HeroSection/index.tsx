import svgPaths from "./svg-aa8vh1nulc";
import imgHeroSection from "./3c88878a4ea6801a4c658def2cdb614f412adf0e.png";
import imgImageFlexiAcademy from "./8ffed22c8515c330303365bc08f39e282208d14b.png";

function ImageFlexiAcademy() {
  return (
    <div className="h-[48px] relative shrink-0 w-[250px]" data-name="Image (FlexiAcademy)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageFlexiAcademy} />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="min-h-[77px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <p className="[word-break:break-word] font-['Albert_Sans:SemiBold',sans-serif] font-semibold leading-[69.3px] relative shrink-0 text-[77px] text-center text-white whitespace-nowrap">Learn New Skills.</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="min-h-[77px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <p className="[word-break:break-word] font-['Albert_Sans:SemiBold',sans-serif] font-semibold leading-[69.3px] relative shrink-0 text-[77px] text-center text-white w-full">Advance Your</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="min-h-[77px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <p className="[word-break:break-word] font-['Albert_Sans:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[77px] text-center text-white whitespace-nowrap">
          <span className="leading-[69.3px]">{`Career. `}</span>
          <span className="leading-[69.3px] text-[#80f6b3]">Anytime</span>
        </p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="min-h-[77px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <p className="[word-break:break-word] font-['Albert_Sans:SemiBold',sans-serif] font-semibold leading-[69.3px] relative shrink-0 text-[#80f6b3] text-[77px] text-center w-full">Anywhere</p>
      </div>
    </div>
  );
}

function LearnNewSkillsAdvanceYourCareerAnytimeAnywhere() {
  return (
    <div className="relative shrink-0 w-full" data-name="Learn New Skills. Advance Your Career. Anytime Anywhere">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Paragraph />
        <Paragraph1 />
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function SearchInputSearchCourse() {
  return (
    <div className="flex-[277_0_0] h-[33px] min-w-px relative" data-name="Search Input - Search course">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Albert_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[22px] text-[rgba(255,255,255,0.8)] w-full">Search course</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p3a098740} id="Vector" stroke="var(--stroke-0, #E4E4E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M24.5 24.5L19.4833 19.4833" id="Vector_2" stroke="var(--stroke-0, #E4E4E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(174,174,174,0.46)] max-w-[357px] relative rounded-[30px] shrink-0 w-[357px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center max-w-[inherit] px-[20px] py-[12px] relative size-full">
        <SearchInputSearchCourse />
        <Icon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] items-center left-[482px] top-[161px] w-[603px]" data-name="Container">
      <ImageFlexiAcademy />
      <LearnNewSkillsAdvanceYourCareerAnytimeAnywhere />
      <Container1 />
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="relative size-full" data-name="HeroSection">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeroSection} />
      <Container />
    </div>
  );
}