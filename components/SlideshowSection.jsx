import Image from "next/image";
import networking from "@/images/networking.jpg";
import MobileViewSection from "./MobileViewSection";
import ImageSlider from "./ImageSlider";

export default function SlideshowSection() {
  return (
    <>
      <div className="flex flex-wrap h-[450px] max-sm:h-[215px] bg-pinkBg p-4">
        <div className="md:w-[50%] flex flex-col flex-wrap justify-center px-20 max-sm:hidden">
          <Image
            src={networking}
            alt="network icon"
            height={60}
            width={60}
            className="mb-6"
          />
          <h2 className="text-3xl font-semibold mb-4">Choose Your Rewards</h2>
          <h2 className="text-lg font-medium">
            Match your card to your lifestyle. We’ve got benefits from across
            brands & categories for you to choose from. Each benefit has an
            attached fee. Just add the ones you like to your card.
          </h2>
        </div>
        <div className="md:w-[50%]">
          <ImageSlider />
        </div>
      </div>

      <MobileViewSection
        heading={"Choose Your Rewards"}
        subheading={
          "Choose rewards from brands and categories that fit in with your personality. Your card’s annual fee will based on the rewards you select."
        }
      />
    </>
  );
}
