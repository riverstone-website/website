import { Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm">
        <Phone className="h-4 w-4" />
        <span>For Quick Response Call: +91 80882 81908</span>
      </div>
    </div>
  );
};

export default TopBar;
