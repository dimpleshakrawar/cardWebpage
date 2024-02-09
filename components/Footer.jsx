export default function Footer() {
  return (
    <div className="bg-[#12193b] text-white p-12">
      <div className="text-center mb-20">
        <h2 className="text-3xl max-sm:text-xl font-bold mb-2">
          OneSync Credit Card
        </h2>
        <p className="mb-6 text-xl max-sm:text-lg">Experience Freedom</p>
        <button className="rounded-3xl bg-purpleBg px-4 py-2">
          Get Started
        </button>
      </div>
      <hr className="h-2" />
      <div className="py-16 flex justify-between gap-4 w-full">
        <div className="flex flex-col gap-4 ">
          <p>ManageYour Card</p>
          <p>Track Your Application</p>
          <p>Contact Us</p>
        </div>
        <div className="flex flex-col gap-4 max-sm:hidden">
          <p>ManageYour Card</p>
          <p>Track Your Application</p>
          <p>Contact Us</p>
        </div>
        <div className="flex flex-col gap-4 max-sm:hidden">
          <p>ManageYour Card</p>
          <p>Track Your Application</p>
          <p>Contact Us</p>
        </div>
        <div className="flex flex-col gap-4 max-sm:hidden">
          <p>ManageYour Card</p>
          <p>Track Your Application</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}
