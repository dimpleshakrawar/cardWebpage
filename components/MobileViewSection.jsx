export default function MobileViewSection({ heading, subheading }) {
  return (
    <div className="md:hidden p-4">
      <h2 className="text-lg font-semibold mb-4">{heading}</h2>
      <p className="text-md mb-4 font-medium">{subheading}</p>
      <a className="underline text-md font-medium">Get Started &gt;</a>
    </div>
  );
}
