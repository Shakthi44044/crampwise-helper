import { useRef } from "react";
import { CheckIcon, Info } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface Symptom {
  id: string;
  name: string;
}

interface Condition {
  id: string;
  name: string;
  description: string;
  likelihood: "high" | "medium" | "low";
  symptoms: string[];
  treatments: string[];
}

interface ResultsStepProps {
  selectedSymptoms: Symptom[];
  age: number | null;
  gender: string;
  patientName: string;
}

const getMatchingConditions = (symptoms: Symptom[], age: number | null, gender: string): Condition[] => {
  // In a real app, this would call an API or use a more sophisticated algorithm
  // For now, we'll return some sample conditions based on symptoms
  const conditions: Condition[] = [
    {
      id: "1",
      name: "Dehydration",
      description: "Low body fluid levels causing muscle cramps.",
      likelihood: "high",
      symptoms: ["Muscle cramp in leg", "Muscle cramp in arm", "Foot cramp"],
      treatments: ["Increase fluid intake", "Rest", "Electrolyte supplements"]
    },
    {
      id: "2", 
      name: "Electrolyte Imbalance",
      description: "Imbalance of minerals like potassium, calcium, or magnesium.",
      likelihood: "medium",
      symptoms: ["Muscle cramp in leg", "Abdominal cramp", "Hand cramp"],
      treatments: ["Balanced diet", "Electrolyte supplements", "Medical evaluation"]
    },
    {
      id: "3",
      name: "Overexertion",
      description: "Muscle fatigue from excessive physical activity.",
      likelihood: "medium",
      symptoms: ["Muscle cramp in leg", "Foot cramp", "Back cramp"],
      treatments: ["Rest", "Gentle stretching", "Cold or hot compress"]
    }
  ];
  
  // Filter conditions based on matching symptoms
  return conditions.filter(condition => {
    const symptomNames = symptoms.map(s => s.name);
    return condition.symptoms.some(s => symptomNames.includes(s));
  });
};

const ResultsStep = ({ selectedSymptoms, age, gender, patientName }: ResultsStepProps) => {
  const conditions = getMatchingConditions(selectedSymptoms, age, gender);
  const resultsRef = useRef<HTMLDivElement>(null);

  const getLikelihoodColor = (likelihood: string) => {
    switch (likelihood) {
      case "high": return "text-medical-warning";
      case "medium": return "text-yellow-500";
      case "low": return "text-green-500";
      default: return "text-gray-500";
    }
  };

  const handlePrintPDF = async () => {
    if (resultsRef.current) {
      const canvas = await html2canvas(resultsRef.current);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${patientName}.pdf`);
    }
  };
  
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="animate-slide-up">
      <div className="text-center mb-6">
        <h2 className="text-xl font-medium text-gray-800">Possible Conditions</h2>
        <p className="text-gray-600 text-sm mt-1">
          Based on your symptoms, age, and sex, the following conditions may be related
        </p>
      </div>
      
      <div ref={resultsRef}>
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800">Patient Information</h3>
          <p className="text-gray-700">Name: {patientName}</p>
          <p className="text-gray-700">Age: {age}</p>
          <p className="text-gray-700">Gender: {gender}</p>
          <p className="text-gray-700">Date: {currentDate}</p>
          <p className="text-gray-700">Time: {currentTime}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800">Selected Symptoms</h3>
          <ul className="text-gray-700 list-disc list-inside">
            {selectedSymptoms.map((symptom) => (
              <li key={symptom.id}>{symptom.name}</li>
            ))}
          </ul>
        </div>

        {conditions.length > 0 ? (
          <div className="space-y-4">
            {conditions.map((condition) => (
              <div key={condition.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-medium text-gray-800">{condition.name}</h3>
                  <span className={`font-medium ${getLikelihoodColor(condition.likelihood)}`}>
                    {condition.likelihood.charAt(0).toUpperCase() + condition.likelihood.slice(1)} likelihood
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-4">{condition.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Matching symptoms:</h4>
                      <ul className="text-sm space-y-1">
                        {condition.symptoms.map((symptom, index) => (
                          <li key={index} className="flex items-start">
                            <CheckIcon size={14} className="text-medical-primary mr-2 mt-1 flex-shrink-0" />
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Potential treatments:</h4>
                      <ul className="text-sm space-y-1">
                        {condition.treatments.map((treatment, index) => (
                          <li key={index} className="flex items-start">
                            <CheckIcon size={14} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>{treatment}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center p-8 border border-dashed border-gray-300 rounded-lg bg-gray-50">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 text-gray-400 mb-2">
                <Info size={24} />
              </div>
              <p className="text-gray-500">No matching conditions found</p>
              <p className="text-gray-400 text-sm mt-1">Try selecting different symptoms</p>
            </div>
          </div>
        )}
        
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex text-sm text-blue-800">
            <Info size={16} className="flex-shrink-0 mr-2 mt-0.5" />
            <p>
              <strong>Important:</strong> This tool provides general information only and is not a substitute for professional medical advice. 
              If you're experiencing severe or persistent symptoms, please consult a healthcare professional.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handlePrintPDF}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ResultsStep;