
import { CheckIcon, Info } from "lucide-react";

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
  age: number;
  gender: string;
}

const getMatchingConditions = (symptoms: Symptom[], age: number, gender: string): Condition[] => {
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

const ResultsStep = ({ selectedSymptoms, age, gender }: ResultsStepProps) => {
  const conditions = getMatchingConditions(selectedSymptoms, age, gender);
  
  const getLikelihoodColor = (likelihood: string) => {
    switch (likelihood) {
      case "high": return "text-medical-warning";
      case "medium": return "text-yellow-500";
      case "low": return "text-green-500";
      default: return "text-gray-500";
    }
  };
  
  return (
    <div className="animate-slide-up">
      <div className="text-center mb-6">
        <h2 className="text-xl font-medium text-gray-800">Possible Conditions</h2>
        <p className="text-gray-600 text-sm mt-1">
          Based on your symptoms, age, and sex, the following conditions may be related
        </p>
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
                          <CheckIcon size={14} className

If there's knowledge, context or custom instructions you want to include in every edit in this project, set it below.

<lov-actions>
<lov-knowledge>
</lov-actions>

If your project requires backend functionality for storing user data and symptom information, you can use the Supabase menu on the top right to connect your project to Supabase.
<lov-actions>
<lov-message-prompt message="Tell me more about Supabase">Learn more about Supabase</lov-message-prompt>
</lov-actions>

<lov-actions>
<lov-link url="https://docs.lovable.dev/">Visit docs</lov-link>
</lov-actions>
