
import { useState } from "react";
import LogoBanner from "@/components/SymptomChecker/LogoBanner";
import ProgressTabs from "@/components/SymptomChecker/ProgressTabs";
import BasicInfoStep from "@/components/SymptomChecker/BasicInfoStep";
import SymptomsStep from "@/components/SymptomChecker/SymptomsStep";
import ResultsStep from "@/components/SymptomChecker/ResultsStep";
import NavigationButtons from "@/components/SymptomChecker/NavigationButtons";
import InfoPanel from "@/components/SymptomChecker/InfoPanel";

interface Symptom {
  id: string;
  name: string;
}

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<Symptom[]>([]);
  
  const steps = ["Basic Info", "Symptoms", "Results"];
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const isNextDisabled = () => {
    if (currentStep === 0) {
      return !age || !gender;
    }
    if (currentStep === 1) {
      return selectedSymptoms.length === 0;
    }
    return false;
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <LogoBanner />
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-10">
          <ProgressTabs currentStep={currentStep} steps={steps} />
          
          <div className="p-6">
            {currentStep === 0 && (
              <BasicInfoStep
                age={age}
                setAge={setAge}
                gender={gender}
                setGender={setGender}
              />
            )}
            
            {currentStep === 1 && (
              <SymptomsStep
                selectedSymptoms={selectedSymptoms}
                setSelectedSymptoms={setSelectedSymptoms}
              />
            )}
            
            {currentStep === 2 && (
              <ResultsStep
                selectedSymptoms={selectedSymptoms}
                age={age}
                gender={gender}
              />
            )}
            
            <NavigationButtons
              currentStep={currentStep}
              totalSteps={steps.length}
              onNext={handleNext}
              onPrevious={handlePrevious}
              disableNext={isNextDisabled()}
            />
          </div>
          
          <InfoPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;
