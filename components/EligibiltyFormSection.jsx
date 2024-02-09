import Image from "next/image";
import form from "@/images/form.png";
import insurance from "@/images/insurance.jpg";
import Animation from "@/images/Animation.jpg";
import MobileViewSection from "./MobileViewSection";

export default function EligibilityFormSection() {
  return (
    <>
      {/* desktop view */}
      <div className="flex flex-wrap max-sm:hidden">
        <div className="md:w-[50%] flex justify-center bg-[#c0e2ff]">
          <Image src={form} alt="form-image" width={600} height={600} />
        </div>
        <div className="w-[50%] p-12 flex flex-col justify-center">
          <Image
            src={insurance}
            alt="insurance icon"
            width={60}
            height={60}
            className="mb-6"
          />
          <h2 className="text-3xl font-semibold mb-4">Fill Eligibility Form</h2>
          <h2 className="text-lg font-medium">
            Tell us about yourself, to find out if you're eligible to apply
          </h2>
        </div>
      </div>

      {/* mobile view */}
      <div className="p-4 md:hidden">
        <h2 className="text-xl font-semibold mb-4">
          Create your own credit card in three easy steps
        </h2>
        <Image
          src={Animation}
          alt="form-page"
          width={300}
          height={300}
          className="mb-2"
        />
        <MobileViewSection
          heading={"Fill Eligibility Form"}
          subheading={
            "Please fill an application form to make sure you’re eligible for the card. You can fill this later as well"
          }
        />
      </div>
    </>
  );
}
