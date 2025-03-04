
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

interface BodyPart {
  id: string;
  name: string;
  active: boolean;
  frontPath?: string;
  backPath?: string;
  frontColor: string;
  backColor: string;
  strokeColor: string;
}

const BodyMapViewer = () => {
  const [view, setView] = useState<'front' | 'back'>('front');
  const [bodyParts, setBodyParts] = useState<BodyPart[]>([
    { 
      id: 'head', 
      name: 'Head', 
      active: false,
      frontPath: "M100,30 C120,30 130,50 130,70 C130,90 120,110 100,110 C80,110 70,90 70,70 C70,50 80,30 100,30z",
      backPath: "M100,30 C120,30 130,50 130,70 C130,90 120,110 100,110 C80,110 70,90 70,70 C70,50 80,30 100,30z",
      frontColor: "#F2CEBA", 
      backColor: "#F2CEBA",
      strokeColor: "#C4A99A" 
    },
    { 
      id: 'neck', 
      name: 'Neck', 
      active: false,
      frontPath: "M90,110 L90,130 L110,130 L110,110z",
      backPath: "M90,110 L90,130 L110,130 L110,110z",
      frontColor: "#F2CEBA", 
      backColor: "#F2CEBA",
      strokeColor: "#C4A99A" 
    },
    { 
      id: 'shoulders', 
      name: 'Shoulders', 
      active: false,
      frontPath: "M70,135 C80,130 90,130 110,130 C130,130 140,130 150,135 C140,145 130,150 120,153 L110,153 C110,153 90,153 90,153 C80,150 70,145 70,135z",
      backPath: "M70,135 C80,130 90,130 110,130 C130,130 140,130 150,135 C140,145 130,150 120,153 L110,153 C110,153 90,153 90,153 C80,150 70,145 70,135z",
      frontColor: "#E27E60", 
      backColor: "#D2694B",
      strokeColor: "#A84831" 
    },
    { 
      id: 'chest', 
      name: 'Chest', 
      active: false,
      frontPath: "M90,153 L90,220 L110,220 L110,153z",
      frontColor: "#E27E60",
      backColor: "#D2694B",
      strokeColor: "#A84831" 
    },
    { 
      id: 'back', 
      name: 'Back', 
      active: false,
      backPath: "M90,153 L90,220 L110,220 L110,153z",
      frontColor: "#E27E60", 
      backColor: "#D2694B",
      strokeColor: "#A84831" 
    },
    { 
      id: 'arms', 
      name: 'Arms', 
      active: false,
      frontPath: "M70,135 C60,145 50,165 45,190 C40,210 40,230 40,250 M150,135 C160,145 170,165 175,190 C180,210 180,230 180,250",
      backPath: "M70,135 C60,145 50,165 45,190 C40,210 40,230 40,250 M150,135 C160,145 170,165 175,190 C180,210 180,230 180,250",
      frontColor: "#E27E60", 
      backColor: "#D2694B",
      strokeColor: "#A84831" 
    },
    { 
      id: 'forearms', 
      name: 'Forearms', 
      active: false,
      frontPath: "M40,250 C38,270 35,290 35,300 M180,250 C182,270 185,290 185,300",
      backPath: "M40,250 C38,270 35,290 35,300 M180,250 C182,270 185,290 185,300",
      frontColor: "#E27E60", 
      backColor: "#D2694B",
      strokeColor: "#A84831" 
    },
    { 
      id: 'hands', 
      name: 'Hands', 
      active: false,
      frontPath: "M35,300 C34,310 30,320 32,330 C35,335 45,335 50,330 C52,325 48,315 46,310 M185,300 C186,310 190,320 188,330 C185,335 175,335 170,330 C168,325 172,315 174,310",
      backPath: "M35,300 C34,310 30,320 32,330 C35,335 45,335 50,330 C52,325 48,315 46,310 M185,300 C186,310 190,320 188,330 C185,335 175,335 170,330 C168,325 172,315 174,310",
      frontColor: "#F2CEBA", 
      backColor: "#F2CEBA",
      strokeColor: "#C4A99A" 
    },
    { 
      id: 'abdomen', 
      name: 'Abdomen', 
      active: false,
      frontPath: "M90,220 L90,280 L110,280 L110,220z",
      frontColor: "#E27E60", 
      backColor: "#D2694B",
      strokeColor: "#A84831" 
    },
    { 
      id: 'lowerBack', 
      name: 'Lower Back', 
      active: false,
      backPath: "M90,220 L90,280 L110,280 L110,220z",
      frontColor: "#E27E60", 
      backColor: "#D2694B",
      strokeColor: "#A84831" 
    },
    { 
      id: 'hips', 
      name: 'Hips', 
      active: false,
      frontPath: "M90,280 C85,285 80,290 75,300 L125,300 C120,290 115,285 110,280z",
      backPath: "M90,280 C85,285 80,290 75,300 L125,300 C120,290 115,285 110,280z",
      frontColor: "#3877B7", 
      backColor: "#2B5C8C",
      strokeColor: "#1F4266" 
    },
    { 
      id: 'thighs', 
      name: 'Thighs', 
      active: false,
      frontPath: "M75,300 L70,370 L85,370 L90,300z M110,300 L115,370 L130,370 L125,300z",
      backPath: "M75,300 L70,370 L85,370 L90,300z M110,300 L115,370 L130,370 L125,300z",
      frontColor: "#3877B7", 
      backColor: "#2B5C8C",
      strokeColor: "#1F4266" 
    },
    { 
      id: 'knees', 
      name: 'Knees', 
      active: false,
      frontPath: "M70,370 C70,380 75,390 85,390 C95,390 100,380 100,370z M115,370 C115,380 120,390 130,390 C140,390 145,380 145,370z",
      backPath: "M70,370 C70,380 75,390 85,390 C95,390 100,380 100,370z M115,370 C115,380 120,390 130,390 C140,390 145,380 145,370z",
      frontColor: "#F2CEBA", 
      backColor: "#F2CEBA",
      strokeColor: "#C4A99A" 
    },
    { 
      id: 'calves', 
      name: 'Calves', 
      active: false,
      frontPath: "M85,390 L83,450 L97,450 L100,390z M130,390 L133,450 L147,450 L145,390z",
      backPath: "M85,390 L83,450 L97,450 L100,390z M130,390 L133,450 L147,450 L145,390z",
      frontColor: "#3877B7", 
      backColor: "#2B5C8C",
      strokeColor: "#1F4266" 
    },
    { 
      id: 'feet', 
      name: 'Feet', 
      active: false,
      frontPath: "M83,450 L78,465 L102,465 L97,450z M133,450 L128,465 L152,465 L147,450z",
      backPath: "M83,450 L78,465 L102,465 L97,450z M133,450 L128,465 L152,465 L147,450z",
      frontColor: "#F2CEBA", 
      backColor: "#F2CEBA",
      strokeColor: "#C4A99A" 
    },
  ]);

  const toggleView = () => {
    setView(view === 'front' ? 'back' : 'front');
  };

  const toggleBodyPart = (id: string) => {
    setBodyParts(
      bodyParts.map(part => 
        part.id === id ? { ...part, active: !part.active } : part
      )
    );
  };

  // Define muscle definition paths for anatomical detail
  const muscleDefinition = {
    front: [
      // Abs definition
      "M100,153 L100,220 M95,180 L105,180 M95,200 L105,200",
      // Chest definition
      "M95,165 C98,170 102,170 105,165",
      // Arm muscle definition
      "M65,160 C60,170 58,180 60,190 M155,160 C160,170 162,180 160,190",
      // Leg muscle definition - quadriceps
      "M80,330 C83,338 88,338 90,330 M120,330 C123,338 128,338 130,330",
      // Calf muscle definition
      "M88,420 C90,430 93,430 95,420 M135,420 C137,430 140,430 142,420",
    ],
    back: [
      // Upper back definition
      "M95,140 L105,140 M95,160 L105,160 M100,130 L100,220",
      // Lat muscle definition
      "M85,160 C80,170 78,180 80,190 M115,160 C120,170 122,180 120,190",
      // Lower back definition
      "M95,240 L105,240 M95,260 L105,260",
      // Hamstring definition
      "M80,330 C83,338 88,338 90,330 M120,330 C123,338 128,338 130,330",
      // Calf muscle definition (back)
      "M88,420 C90,430 93,430 95,420 M135,420 C137,430 140,430 142,420",
    ]
  };

  // Facial features for the front view
  const facialFeatures = {
    eyes: "M90,55 C92,53 96,53 98,55 M110,55 C112,53 116,53 118,55",
    nose: "M100,65 L96,75 L104,75",
    mouth: "M95,85 C98,88 102,88 105,85"
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 animate-fade-in">
      <div className="text-center mb-2 text-sm font-medium text-gray-700 bg-gray-50 py-2 rounded">
        {view === 'front' ? 'FRONT VIEW' : 'BACK VIEW'}
      </div>
      
      <div className="relative h-[500px] mx-auto w-full max-w-[300px]">
        <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
          <svg 
            width="230" 
            height="480" 
            viewBox="0 0 230 480" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transition-opacity duration-300"
          >
            <g transform="translate(15,10)">
              {/* Render body parts based on current view */}
              {bodyParts.map(part => {
                const currentPath = view === 'front' ? part.frontPath : part.backPath;
                const currentColor = view === 'front' ? part.frontColor : part.backColor;
                
                if (!currentPath) return null;
                
                return (
                  <path
                    key={part.id}
                    d={currentPath}
                    fill={part.active ? "#1EAEDB80" : currentColor}
                    stroke={part.strokeColor}
                    strokeWidth="1.5"
                    className={`cursor-pointer hover:fill-medical-primary/50 transition-colors duration-200`}
                    onClick={() => toggleBodyPart(part.id)}
                  />
                );
              })}
              
              {/* Render muscle definition lines for anatomical detail */}
              {view === 'front' ? (
                muscleDefinition.front.map((path, index) => (
                  <path
                    key={`muscle-front-${index}`}
                    d={path}
                    fill="none"
                    stroke={view === 'front' ? "#A84831" : "#935338"}
                    strokeWidth="0.8"
                    opacity="0.7"
                    className="pointer-events-none"
                  />
                ))
              ) : (
                muscleDefinition.back.map((path, index) => (
                  <path
                    key={`muscle-back-${index}`}
                    d={path}
                    fill="none"
                    stroke={view === 'front' ? "#A84831" : "#935338"}
                    strokeWidth="0.8"
                    opacity="0.7"
                    className="pointer-events-none"
                  />
                ))
              )}
              
              {/* Render facial features only in front view */}
              {view === 'front' && (
                <>
                  <path
                    d={facialFeatures.eyes}
                    fill="none"
                    stroke="#6D4C41"
                    strokeWidth="1"
                    className="pointer-events-none"
                  />
                  <path
                    d={facialFeatures.nose}
                    fill="none"
                    stroke="#6D4C41"
                    strokeWidth="1"
                    className="pointer-events-none"
                  />
                  <path
                    d={facialFeatures.mouth}
                    fill="none"
                    stroke="#6D4C41"
                    strokeWidth="1"
                    className="pointer-events-none"
                  />
                </>
              )}
            </g>
          </svg>
        </div>
        
        {/* Navigation buttons */}
        <button 
          onClick={toggleView}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow border border-gray-200"
          aria-label={view === 'front' ? "View back side" : "View front side"}
        >
          <ArrowLeft size={16} />
        </button>
        <button 
          onClick={toggleView}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow border border-gray-200"
          aria-label={view === 'front' ? "View back side" : "View front side"}
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
        {bodyParts.filter(part => part.active).length > 0 ? (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-700">Selected areas:</h3>
            <div className="flex flex-wrap gap-2">
              {bodyParts
                .filter(part => part.active)
                .map(part => (
                  <span 
                    key={part.id} 
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-medical-primary text-white"
                  >
                    {part.name}
                    <button 
                      onClick={() => toggleBodyPart(part.id)}
                      className="ml-1.5 hover:bg-medical-primary/80 rounded-full inline-flex items-center justify-center w-4 h-4"
                    >
                      ✕
                    </button>
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
