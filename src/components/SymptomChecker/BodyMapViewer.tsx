
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
    { id: 'head', name: 'Head', active: false },
    { id: 'neck', name: 'Neck', active: false },
    { id: 'shoulders', name: 'Shoulders', active: false },
    { id: 'arms', name: 'Arms', active: false },
    { id: 'hands', name: 'Hands', active: false },
    { id: 'chest', name: 'Chest', active: false },
    { id: 'abdomen', name: 'Abdomen', active: false },
    { id: 'back', name: 'Back', active: false },
    { id: 'lowerBack', name: 'Lower Back', active: false },
    { id: 'hips', name: 'Hips', active: false },
    { id: 'legs', name: 'Legs', active: false },
    { id: 'knees', name: 'Knees', active: false },
    { id: 'feet', name: 'Feet', active: false },
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
        <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center">
          {view === 'front' ? (
            <svg
              width="200"
              height="380"
              viewBox="0 0 200 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-opacity duration-300"
            >
              {/* Head */}
              <ellipse
                cx="100"
                cy="30"
                rx="25"
                ry="30"
                fill={highlightedParts.find(p => p.id === 'head')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('head')}
              />
              
              {/* Neck */}
              <rect
                x="90"
                y="60"
                width="20"
                height="15"
                fill={highlightedParts.find(p => p.id === 'neck')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('neck')}
              />
              
              {/* Torso */}
              <path
                d="M65 75 L135 75 L140 190 L60 190 Z"
                fill="#E4E4E4"
                stroke="#CCCCCC"
              />
              
              {/* Shoulders */}
              <path
                d="M65 75 L40 90 M135 75 L160 90"
                stroke={highlightedParts.find(p => p.id === 'shoulders')?.active ? "#1EAEDB90" : "#CCCCCC"}
                strokeWidth="15"
                strokeLinecap="round"
                className="cursor-pointer hover:stroke-medical-primary/30"
                onClick={() => toggleBodyPart('shoulders')}
              />
              
              {/* Arms */}
              <path
                d="M40 90 L40 160 M160 90 L160 160"
                stroke={highlightedParts.find(p => p.id === 'arms')?.active ? "#1EAEDB90" : "#CCCCCC"}
                strokeWidth="15"
                strokeLinecap="round"
                className="cursor-pointer hover:stroke-medical-primary/30"
                onClick={() => toggleBodyPart('arms')}
              />
              
              {/* Hands */}
              <circle
                cx="40"
                cy="175"
                r="15"
                fill={highlightedParts.find(p => p.id === 'hands')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('hands')}
              />
              <circle
                cx="160"
                cy="175"
                r="15"
                fill={highlightedParts.find(p => p.id === 'hands')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('hands')}
              />
              
              {/* Chest */}
              <rect
                x="75"
                y="85"
                width="50"
                height="40"
                fill={highlightedParts.find(p => p.id === 'chest')?.active ? "#1EAEDB50" : "transparent"}
                stroke="transparent"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('chest')}
              />
              
              {/* Abdomen */}
              <rect
                x="75"
                y="125"
                width="50"
                height="65"
                fill={highlightedParts.find(p => p.id === 'abdomen')?.active ? "#1EAEDB50" : "transparent"}
                stroke="transparent"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('abdomen')}
              />
              
              {/* Hips */}
              <path
                d="M60 190 L140 190 L130 220 L70 220 Z"
                fill={highlightedParts.find(p => p.id === 'hips')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('hips')}
              />
              
              {/* Legs */}
              <rect
                x="70"
                y="220"
                width="25"
                height="110"
                fill={highlightedParts.find(p => p.id === 'legs')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('legs')}
              />
              <rect
                x="105"
                y="220"
                width="25"
                height="110"
                fill={highlightedParts.find(p => p.id === 'legs')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('legs')}
              />
              
              {/* Knees */}
              <ellipse
                cx="82.5"
                cy="280"
                rx="12.5"
                ry="10"
                fill={highlightedParts.find(p => p.id === 'knees')?.active ? "#1EAEDB50" : "transparent"}
                stroke="transparent"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('knees')}
              />
              <ellipse
                cx="117.5"
                cy="280"
                rx="12.5"
                ry="10"
                fill={highlightedParts.find(p => p.id === 'knees')?.active ? "#1EAEDB50" : "transparent"}
                stroke="transparent"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('knees')}
              />
              
              {/* Feet */}
              <path
                d="M70 330 L70 350 L95 350 L95 330 Z"
                fill={highlightedParts.find(p => p.id === 'feet')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('feet')}
              />
              <path
                d="M105 330 L105 350 L130 350 L130 330 Z"
                fill={highlightedParts.find(p => p.id === 'feet')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('feet')}
              />
            </svg>
          ) : (
            <svg
              width="200"
              height="380"
              viewBox="0 0 200 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-opacity duration-300"
            >
              {/* Head - back view */}
              <ellipse
                cx="100"
                cy="30"
                rx="25"
                ry="30"
                fill={highlightedParts.find(p => p.id === 'head')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('head')}
              />
              
              {/* Neck */}
              <rect
                x="90"
                y="60"
                width="20"
                height="15"
                fill={highlightedParts.find(p => p.id === 'neck')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('neck')}
              />
              
              {/* Torso - back view */}
              <path
                d="M65 75 L135 75 L140 190 L60 190 Z"
                fill="#E4E4E4"
                stroke="#CCCCCC"
              />
              
              {/* Shoulders - back view */}
              <path
                d="M65 75 L40 90 M135 75 L160 90"
                stroke={highlightedParts.find(p => p.id === 'shoulders')?.active ? "#1EAEDB90" : "#CCCCCC"}
                strokeWidth="15"
                strokeLinecap="round"
                className="cursor-pointer hover:stroke-medical-primary/30"
                onClick={() => toggleBodyPart('shoulders')}
              />
              
              {/* Arms - back view */}
              <path
                d="M40 90 L40 160 M160 90 L160 160"
                stroke={highlightedParts.find(p => p.id === 'arms')?.active ? "#1EAEDB90" : "#CCCCCC"}
                strokeWidth="15"
                strokeLinecap="round"
                className="cursor-pointer hover:stroke-medical-primary/30"
                onClick={() => toggleBodyPart('arms')}
              />
              
              {/* Hands - back view */}
              <circle
                cx="40"
                cy="175"
                r="15"
                fill={highlightedParts.find(p => p.id === 'hands')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('hands')}
              />
              <circle
                cx="160"
                cy="175"
                r="15"
                fill={highlightedParts.find(p => p.id === 'hands')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('hands')}
              />
              
              {/* Upper Back */}
              <rect
                x="75"
                y="85"
                width="50"
                height="50"
                fill={highlightedParts.find(p => p.id === 'back')?.active ? "#1EAEDB50" : "transparent"}
                stroke="transparent"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('back')}
              />
              
              {/* Lower Back */}
              <rect
                x="75"
                y="135"
                width="50"
                height="55"
                fill={highlightedParts.find(p => p.id === 'lowerBack')?.active ? "#1EAEDB50" : "transparent"}
                stroke="transparent"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('lowerBack')}
              />
              
              {/* Hips - back view */}
              <path
                d="M60 190 L140 190 L130 220 L70 220 Z"
                fill={highlightedParts.find(p => p.id === 'hips')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('hips')}
              />
              
              {/* Legs - back view */}
              <rect
                x="70"
                y="220"
                width="25"
                height="110"
                fill={highlightedParts.find(p => p.id === 'legs')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('legs')}
              />
              <rect
                x="105"
                y="220"
                width="25"
                height="110"
                fill={highlightedParts.find(p => p.id === 'legs')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('legs')}
              />
              
              {/* Knees - back view */}
              <ellipse
                cx="82.5"
                cy="280"
                rx="12.5"
                ry="10"
                fill={highlightedParts.find(p => p.id === 'knees')?.active ? "#1EAEDB50" : "transparent"}
                stroke="transparent"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('knees')}
              />
              <ellipse
                cx="117.5"
                cy="280"
                rx="12.5"
                ry="10"
                fill={highlightedParts.find(p => p.id === 'knees')?.active ? "#1EAEDB50" : "transparent"}
                stroke="transparent"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('knees')}
              />
              
              {/* Feet - back view */}
              <path
                d="M70 330 L70 350 L95 350 L95 330 Z"
                fill={highlightedParts.find(p => p.id === 'feet')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('feet')}
              />
              <path
                d="M105 330 L105 350 L130 350 L130 330 Z"
                fill={highlightedParts.find(p => p.id === 'feet')?.active ? "#1EAEDB50" : "#E4E4E4"}
                stroke="#CCCCCC"
                className="cursor-pointer hover:fill-medical-primary/30"
                onClick={() => toggleBodyPart('feet')}
              />
            </svg>
          )}
        </div>
        
        {/* Navigation buttons */}
        <button 
          onClick={toggleView}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow border border-gray-200"
          aria-label="View front side"
        >
          <ArrowLeft size={16} />
        </button>
        <button 
          onClick={toggleView}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow border border-gray-200"
          aria-label="View back side"
        >
          <ArrowRight size={16} />
        </button>
        
        {/* Body part selection hint */}
        <div className="absolute right-[-80px] top-0 space-y-2">
          <button className="w-8 h-8 flex items-center justify-center bg-medical-primary text-white rounded-full shadow">
            <Plus size={16} />
          </button>
          <div className="absolute left-10 top-0 bg-white p-2 rounded shadow-md text-xs w-28 border border-gray-200">
            Click on body parts to select areas with cramps
          </div>
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
