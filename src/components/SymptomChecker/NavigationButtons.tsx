
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  disableNext?: boolean;
}

const NavigationButtons = ({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  disableNext = false
}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between mt-6 border-t pt-4">
      {currentStep > 0 ? (
        <Button
          variant="outline"
          className="flex items-center gap-2 border-gray-300"
          onClick={onPrevious}
        >
          <ArrowLeft size={16} />
          Previous
        </Button>
      ) : (
        <div></div>
      )}
      
      <Button
        variant="default"
        className="bg-medical-primary hover:bg-medical-primary/90 text-white"
        onClick={onNext}
        disabled={disableNext}
      >
        {currentStep === totalSteps - 1 ? "See Results" : "Continue"}
      </Button>
    </div>
  );
};

export default NavigationButtons;
