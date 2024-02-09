import Image from "next/image";
import paintRoller from "@/images/paint-roller.jpg";
import MobileViewSection from "./MobileViewSection";
import ShowCard from "./ShowCard";

export default function StyleCardSection() {
  return (
    <>
      {/* desktop view */}
      <div className="flex flex-wrap md:h-[440px] max-sm:p-4 bg-lightblueBg">
        <div className="md:w-[50%] flex justify-center ">
          <ShowCard />
        </div>
        <div className="w-[50%] p-12 flex flex-col justify-center max-sm:hidden">
          <Image
            src={paintRoller}
            alt="paint roller icon"
            width={60}
            height={60}
            className="mb-6"
          />
          <h2 className="text-3xl font-semibold mb-4">Select Your Style</h2>
          <h2 className="text-lg font-medium">
            Match your card to your personality. Whether you like a minimal look
            or something that catches everyone’s eyes, we’ve got a style for
            you. You can update your style every year, for a small fee{" "}
          </h2>
        </div>
      </div>

      {/* mobile view */}
      <MobileViewSection
        heading={"Select Your Style"}
        subheading={
          "Whether you like a minimal look or something that catches everyone’s eyes. We have a Card design for you"
        }
      />
    </>
  );
}
