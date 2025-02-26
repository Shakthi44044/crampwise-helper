
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoPanelProps {
  className?: string;
}

const InfoPanel = ({ className }: InfoPanelProps) => {
  return (
    <div className={cn("text-sm text-center py-3 bg-gray-50 border-t border-gray-200", className)}>
      <div className="flex items-center justify-center gap-1.5 text-gray-600">
        <Info size={14} />
        <p>This tool does not provide medical advice. <span className="text-medical-primary cursor-pointer hover:underline">See additional information</span></p>
      </div>
    </div>
  );
};

export default InfoPanel;
