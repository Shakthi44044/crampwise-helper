
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import BodyMapViewer from "./BodyMapViewer";

interface Symptom {
  id: string;
  name: string;
}

interface SymptomsStepProps {
  selectedSymptoms: Symptom[];
  setSelectedSymptoms: (symptoms: Symptom[]) => void;
}

const commonCrampSymptoms: Symptom[] = [
  { id: "1", name: "Muscle cramp in leg" },
  { id: "2", name: "Muscle cramp in arm" },
  { id: "3", name: "Abdominal cramp" },
  { id: "4", name: "Menstrual cramp" },
  { id: "5", name: "Foot cramp" },
  { id: "6", name: "Hand cramp" },
  { id: "7", name: "Neck cramp" },
  { id: "8", name: "Back cramp" },
];

const SymptomsStep = ({ selectedSymptoms, setSelectedSymptoms }: SymptomsStepProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredSymptoms = commonCrampSymptoms.filter(symptom => 
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const toggleSymptom = (symptom: Symptom) => {
    const isSelected = selectedSymptoms.some(s => s.id === symptom.id);
    
    if (isSelected) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s.id !== symptom.id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
      <div>
        <div className="mb-4">
          <h2 className="text-xl font-medium text-gray-800 mb-1">What are your symptoms?</h2>
          <p className="text-gray-600 text-sm">Select areas on the body map or search for symptoms below</p>
        </div>
        
        <div className="space-y-4">
          <div className="relative">
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Type your main symptom here"
              className="w-full py-6 pl-4 pr-10 border border-gray-300 rounded-md"
            />
          </div>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {filteredSymptoms.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {filteredSymptoms.map((symptom) => {
                  const isSelected = selectedSymptoms.some(s => s.id === symptom.id);
                  
                  return (
                    <li key={symptom.id} className="hover:bg-gray-50">
                      <button
                        onClick={() => toggleSymptom(symptom)}
                        className="flex items-center justify-between w-full py-3 px-4 text-left"
                      >
                        <span className="text-gray-800">{symptom.name}</span>
                        {isSelected ? (
                          <span className="flex items-center justify-center w-6 h-6 bg-medical-primary text-white rounded-full">
                            <Check size={14} />
                          </span>
                        ) : (
                          <span className="flex items-center justify-center w-6 h-6 border border-gray-300 text-gray-400 rounded-full">
                            <Plus size={14} />
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="p-4 text-center text-gray-500">
                No matching symptoms found
              </div>
            )}
          </div>
          
          {selectedSymptoms.length > 0 && (
            <div className="mt-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h3 className="font-medium text-gray-700 mb-2">Selected symptoms:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedSymptoms.map(symptom => (
                  <span 
                    key={symptom.id} 
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-medical-primary text-white"
                  >
                    {symptom.name}
                    <button 
                      onClick={() => toggleSymptom(symptom)}
                      className="ml-1 hover:bg-medical-primary/80 rounded-full"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {selectedSymptoms.length === 0 && (
            <div className="flex items-center justify-center p-6 border border-dashed border-gray-300 rounded-lg bg-gray-50">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 text-gray-400 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">No symptoms added</p>
                <p className="text-gray-400 text-xs mt-1">Search and select symptoms above</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div>
        <BodyMapViewer />
      </div>
    </div>
  );
};

export default SymptomsStep;
