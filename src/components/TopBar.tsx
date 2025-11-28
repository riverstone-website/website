import { Phone } from "lucide-react";

const TopBar = () => {
  const barHeightClass = "h-10";

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground px-4 ${barHeightClass}`}
      >
        <div className="container mx-auto flex h-full items-center justify-center gap-2 text-sm font-medium">
          <Phone className="h-4 w-4" />
          <a href="tel:+918088281908" className="hover:underline">
            For Quick Response Call: +91 80882 81908
          </a>
        </div>
      </div>
      {/* Spacer keeps the layout from jumping underneath the fixed bar */}
      <div className={barHeightClass} aria-hidden="true" />
    </>
  );
};

export default TopBar;
