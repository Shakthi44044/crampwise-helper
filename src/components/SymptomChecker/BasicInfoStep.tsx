import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BasicInfoStepProps {
  age: number;
  setAge: (age: number) => void;
  gender: string;
  setGender: (gender: string) => void;
}

const BasicInfoStep = ({ age, setAge, gender, setGender }: BasicInfoStepProps) => {
  const [patientName, setPatientName] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="text-center">
        <h2 className="text-xl font-medium text-gray-800">
          Identify possible conditions and treatment related to your symptoms.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label htmlFor="patientName" className="text-base">Patient Name</Label>
          <Input 
            id="patientName"
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="w-full h-12 text-lg"
            placeholder="Enter your name"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="age" className="text-base">Age</Label>
          <Input 
            id="age"
            type="number" 
            min={0}
            max={120}
            value={age || ''}
            onChange={(e) => setAge(parseInt(e.target.value))} 
            className="w-full h-12 text-lg"
            placeholder="Enter your age"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-base">Sex</Label>
          <div className="flex gap-2">
            <Button
              type="button"
              className={`flex-1 h-12 text-lg ${
                gender === "male" 
                  ? "bg-medical-primary text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setGender("male")}
            >
              Male
            </Button>
            <Button
              type="button"
              className={`flex-1 h-12 text-lg ${
                gender === "female" 
                  ? "bg-medical-primary text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setGender("female")}
            >
              Female
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-base">Date and Time</Label>
          <div className="w-full h-12 text-lg flex items-center">
            {currentDateTime.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoStep;