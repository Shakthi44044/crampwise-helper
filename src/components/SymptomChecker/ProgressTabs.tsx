
import { cn } from "@/lib/utils";

interface ProgressTabsProps {
  currentStep: number;
  steps: string[];
}

const ProgressTabs = ({ currentStep, steps }: ProgressTabsProps) => {
  return (
    <div className="w-full bg-gray-50 rounded-t-lg overflow-hidden">
      <div className="flex w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className={cn(
              "flex-1 text-center py-3 px-2 text-sm font-medium transition-colors duration-300 border-b-2",
              index === currentStep
                ? "text-medical-primary border-medical-primary bg-white"
                : index < currentStep
                ? "text-medical-primary border-gray-200 bg-gray-50"
                : "text-gray-500 border-gray-200 bg-gray-50"
            )}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTabs;
