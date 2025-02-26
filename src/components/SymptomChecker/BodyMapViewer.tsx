
import { useState } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Plus 
} from "lucide-react";

interface BodyPartHighlight {
  id: string;
  name: string;
  active: boolean;
}

const BodyMapViewer = () => {
  const [view, setView] = useState<'front' | 'back'>('front');
  const [highlightedParts, setHighlightedParts] = useState<BodyPartHighlight[]>([
    { id: 'arms', name: 'Arms', active: false },
    { id: 'legs', name: 'Legs', active: false },
    { id: 'abdomen', name: 'Abdomen', active: false },
    { id: 'chest', name: 'Chest', active: false },
    { id: 'neck', name: 'Neck', active: false },
    { id: 'back', name: 'Back', active: false },
  ]);

  const toggleView = () => {
    setView(view === 'front' ? 'back' : 'front');
  };

  const toggleBodyPart = (id: string) => {
    setHighlightedParts(
      highlightedParts.map(part => 
        part.id === id ? { ...part, active: !part.active } : part
      )
    );
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 animate-fade-in">
      <div className="text-center mb-2 text-sm font-medium text-gray-700 bg-gray-50 py-2 rounded">
        {view === 'front' ? 'FRONT VIEW' : 'BACK VIEW'}
      </div>
      
      <div className="relative h-[400px] mx-auto w-full max-w-[280px]">
        {/* The human body SVG would go here - using a placeholder */}
        <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
          <svg
            width="200"
            height="380"
            viewBox="0 0 200 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-opacity duration-300"
          >
            {/* Simple body outline */}
            <path
              d="M100 30C113.807 30 125 18.8071 125 5C125 -8.80712 113.807 -20 100 -20C86.1929 -20 75 -8.80712 75 5C75 18.8071 86.1929 30 100 30Z"
              fill="#E4E4E4"
              stroke="#CCCCCC"
              className="cursor-pointer hover:fill-medical-primary/30"
              onClick={() => toggleBodyPart('neck')}
            />
            <path
              d="M100 30L100 100L140 170L100 170L100 280L130 350L70 350L100 280L100 170L60 170L100 100L100 30Z"
              fill="#E4E4E4"
              stroke="#CCCCCC"
            />
            {/* Arms */}
            <path
              d="M60 170L20 120M140 170L180 120"
              stroke="#CCCCCC"
              strokeWidth="30"
              strokeLinecap="round"
              className="cursor-pointer hover:stroke-medical-primary/30"
              onClick={() => toggleBodyPart('arms')}
            />
            {/* Legs */}
            <path
              d="M70 350L50 380M130 350L150 380"
              stroke="#CCCCCC"
              strokeWidth="30"
              strokeLinecap="round"
              className="cursor-pointer hover:stroke-medical-primary/30"
              onClick={() => toggleBodyPart('legs')}
            />
            {/* Chest area */}
            <rect
              x="75"
              y="50"
              width="50"
              height="50"
              fill="transparent"
              className="cursor-pointer hover:fill-medical-primary/30"
              onClick={() => toggleBodyPart('chest')}
            />
            {/* Abdomen area */}
            <rect
              x="75"
              y="115"
              width="50"
              height="50"
              fill="transparent"
              className="cursor-pointer hover:fill-medical-primary/30"
              onClick={() => toggleBodyPart('abdomen')}
            />
            {/* Back area (only visible in back view) */}
            {view === 'back' && (
              <rect
                x="75"
                y="90"
                width="50"
                height="100"
                fill="transparent"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('back')}
              />
            )}
          </svg>
        </div>
        
        {/* Navigation buttons */}
        <button 
          onClick={toggleView}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow border border-gray-200"
        >
          <ArrowLeft size={16} />
        </button>
        <button 
          onClick={toggleView}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow border border-gray-200"
        >
          <ArrowRight size={16} />
        </button>
        
        {/* Body part list */}
        <div className="absolute right-[-80px] top-0 space-y-2">
          {/* This would show different body regions */}
          <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow border border-gray-200">
            <Plus size={16} />
          </button>
        </div>
      </div>
      
      {/* Selected body parts */}
      <div className="mt-4">
        {highlightedParts.filter(part => part.active).length > 0 ? (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-700">Selected areas:</h3>
            <div className="flex flex-wrap gap-2">
              {highlightedParts
                .filter(part => part.active)
                .map(part => (
                  <span 
                    key={part.id} 
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-medical-primary text-white"
                  >
                    {part.name}
                  </span>
                ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center p-6 border border-dashed border-gray-300 rounded-lg bg-gray-50">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 text-gray-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-gray-500 text-sm">No body parts selected</p>
              <p className="text-gray-400 text-xs mt-1">Click on the body model to select areas</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyMapViewer;
