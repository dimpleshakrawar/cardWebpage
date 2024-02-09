import CustomizeCardSection from "@/components/CustomizeCardSection";
import EligibilityFormSection from "@/components/EligibiltyFormSection";
import FaqSection from "@/components/FaqSection";
import IntroSection from "@/components/IntroSection";
import OneSyncCardBenefitsSection from "@/components/OneSyncCardBenefitsSection";
import SlideshowSection from "@/components/SlideshowSection";
import StyleCardSection from "@/components/StyleCardSection";

export default function Home() {
  return (
    <>
      <IntroSection />
      <CustomizeCardSection />
      <EligibilityFormSection />
      <SlideshowSection />
      <StyleCardSection />
      <OneSyncCardBenefitsSection />
      <FaqSection />
    </>
  );
}
