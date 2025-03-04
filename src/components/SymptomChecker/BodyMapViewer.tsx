import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

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
    { id: 'torso', name: 'Torso', active: false },
    { id: 'leftArm', name: 'Left Arm', active: false },
    { id: 'rightArm', name: 'Right Arm', active: false },
    { id: 'leftLeg', name: 'Left Leg', active: false },
    { id: 'rightLeg', name: 'Right Leg', active: false },
    { id: 'hands', name: 'Hands', active: false },
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
              <circle cx="100" cy="50" r="40" fill="#f5f5f5" />
              
              {/* Face */}
              <path d="M80 60 Q100 80 120 60" fill="#ffffff" />
              <path d="M100 80 Q110 90 120 80" fill="#ffffff" />
              <path d="M100 80 Q90 90 90 100" fill="#ffffff" />
              <path d="M110 80 Q100 90 100 100" fill="#ffffff" />
              
              {/* Eyes */}
              <circle cx="90" cy="70" r="10" fill="#000000" />
              <circle cx="110" cy="70" r="10" fill="#000000" />
              
              {/* Nose */}
              <rect x="100" y="80" width="20" height="20" fill="#ffffff" />
              
              {/* Mouth */}
              <path d="M100 100 Q90 110 110 100" fill="#ffffff" />
              
              {/* Neck */}
              <path d="M80 100 L80 120 L120 120" fill="#f5f5f5" />
              
              {/* Torso */}
              <rect x="80" y="120" width="40" height="160" fill="#f5f5f5" />
              
              {/* Left Arm */}
              <path d="M80 280 L60 320" fill="#f5f5f5" />
              <path d="M60 320 L50 350" fill="#f5f5f5" />
              <path d="M50 350 L40 380" fill="#f5f5f5" />
              
              {/* Right Arm */}
              <path d="M120 280 L140 320" fill="#f5f5f5" />
              <path d="M140 320 L150 350" fill="#f5f5f5" />
              <path d="M150 350 L160 380" fill="#f5f5f5" />
              
              {/* Left Leg */}
              <path d="M80 360 L60 400" fill="#f5f5f5" />
              <path d="M60 400 L50 420" fill="#f5f5f5" />
              
              {/* Right Leg */}
              <path d="M120 360 L140 400" fill="#f5f5f5" />
              <path d="M140 400 L150 420" fill="#f5f5f5" />
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
              {/* Head */}
              <circle cx="100" cy="30" r="40" fill="#f5f5f5" />
              
              {/* Neck */}
              <path d="M80 30 L80 50 L120 50" fill="#f5f5f5" />
              
              {/* Torso */}
              <rect x="80" y="50" width="40" height="180" fill="#f5f5f5" />
              
              {/* Left Arm */}
              <path d="M80 210 L60 250" fill="#f5f5f5" />
              <path d="M60 250 L50 280" fill="#f5f5f5" />
              <path d="M50 280 L40 310" fill="#f5f5f5" />
              
              {/* Right Arm */}
              <path d="M120 210 L140 250" fill="#f5f5f5" />
              <path d="M140 250 L150 280" fill="#f5f5f5" />
              <path d="M150 280 L160 310" fill="#f5f5f5" />
              
              {/* Left Leg */}
              <path d="M80 310 L60 350" fill="#f5f5f5" />
              <path d="M60 350 L50 370" fill="#f5f5f5" />
              
              {/* Right Leg */}
              <path d="M120 310 L140 350" fill="#f5f5f5" />
              <path d="M140 350 L150 370" fill="#f5f5f5" />
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
              <p className="text-gray-400 text-xs mt-1">Click on the body model to select areas with cramps</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyMapViewer;