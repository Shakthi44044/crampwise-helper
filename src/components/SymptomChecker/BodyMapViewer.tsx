
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
              {/* Head - Frontal View */}
              <path
                d="M100 15 C85 15, 75 30, 75 45 C75 60, 85 70, 100 70 C115 70, 125 60, 125 45 C125 30, 115 15, 100 15"
                fill={highlightedParts.find(p => p.id === 'head')?.active ? "#1EAEDB80" : "#E8B496"}
                stroke="#B28B6B"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('head')}
              />
              <path
                d="M87 35 C90 40, 95 42, 100 42 C105 42, 110 40, 113 35"
                fill="none"
                stroke="#B28B6B"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <ellipse cx="90" cy="30" rx="2" ry="3" fill="#66320E" className="pointer-events-none" />
              <ellipse cx="110" cy="30" rx="2" ry="3" fill="#66320E" className="pointer-events-none" />

              {/* Neck - Frontal View */}
              <path
                d="M90 70 L90 80 L110 80 L110 70"
                fill={highlightedParts.find(p => p.id === 'neck')?.active ? "#1EAEDB80" : "#E8B496"}
                stroke="#B28B6B"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('neck')}
              />

              {/* Shoulders - Frontal View */}
              <path
                d="M65 85 C75 80, 85 80, 90 80 L110 80 C115 80, 125 80, 135 85"
                fill={highlightedParts.find(p => p.id === 'shoulders')?.active ? "#1EAEDB80" : "#D05D3B"}
                stroke="#A04931"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('shoulders')}
              />

              {/* Chest - Frontal View */}
              <path
                d="M90 80 L90 130 L110 130 L110 80"
                fill={highlightedParts.find(p => p.id === 'chest')?.active ? "#1EAEDB80" : "#D05D3B"}
                stroke="#A04931"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('chest')}
              />
              {/* Muscle definition lines for chest */}
              <path
                d="M95 95 C98 100, 102 100, 105 95"
                fill="none"
                stroke="#A04931"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M92 110 C97 115, 103 115, 108 110"
                fill="none"
                stroke="#A04931"
                strokeWidth="0.7"
                className="pointer-events-none"
              />

              {/* Arms - Frontal View */}
              <path
                d="M65 85 C60 95, 55 115, 50 135 C48 145, 47 155, 45 165"
                fill={highlightedParts.find(p => p.id === 'arms')?.active ? "#1EAEDB80" : "#D05D3B"}
                stroke="#A04931"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('arms')}
              />
              <path
                d="M135 85 C140 95, 145 115, 150 135 C152 145, 153 155, 155 165"
                fill={highlightedParts.find(p => p.id === 'arms')?.active ? "#1EAEDB80" : "#D05D3B"}
                stroke="#A04931"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('arms')}
              />
              {/* Muscle definition for arms */}
              <path
                d="M55 115 C58 118, 60 120, 58 125"
                fill="none"
                stroke="#A04931"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M145 115 C142 118, 140 120, 142 125"
                fill="none"
                stroke="#A04931"
                strokeWidth="0.7"
                className="pointer-events-none"
              />

              {/* Hands - Frontal View */}
              <path
                d="M45 165 C43 175, 40 180, 38 185 C35 190, 40 195, 45 193 C50 191, 53 185, 55 180"
                fill={highlightedParts.find(p => p.id === 'hands')?.active ? "#1EAEDB80" : "#E8B496"}
                stroke="#B28B6B"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('hands')}
              />
              <path
                d="M155 165 C157 175, 160 180, 162 185 C165 190, 160 195, 155 193 C150 191, 147 185, 145 180"
                fill={highlightedParts.find(p => p.id === 'hands')?.active ? "#1EAEDB80" : "#E8B496"}
                stroke="#B28B6B"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('hands')}
              />

              {/* Abdomen - Frontal View */}
              <path
                d="M90 130 L90 190 L110 190 L110 130"
                fill={highlightedParts.find(p => p.id === 'abdomen')?.active ? "#1EAEDB80" : "#D05D3B"}
                stroke="#A04931"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('abdomen')}
              />
              {/* Muscle definition for abs */}
              <path
                d="M95 145 L105 145"
                fill="none"
                stroke="#A04931"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M95 160 L105 160"
                fill="none"
                stroke="#A04931"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M95 175 L105 175"
                fill="none"
                stroke="#A04931"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M100 145 L100 175"
                fill="none"
                stroke="#A04931"
                strokeWidth="0.7"
                className="pointer-events-none"
              />

              {/* Hips - Frontal View */}
              <path
                d="M90 190 C85 195, 80 200, 75 210 L125 210 C120 200, 115 195, 110 190"
                fill={highlightedParts.find(p => p.id === 'hips')?.active ? "#1EAEDB80" : "#3A6EA0"}
                stroke="#28466A"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('hips')}
              />

              {/* Legs - Frontal View */}
              <path
                d="M75 210 L70 280 L87 280 L90 210"
                fill={highlightedParts.find(p => p.id === 'legs')?.active ? "#1EAEDB80" : "#3A6EA0"}
                stroke="#28466A"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('legs')}
              />
              <path
                d="M110 210 L113 280 L130 280 L125 210"
                fill={highlightedParts.find(p => p.id === 'legs')?.active ? "#1EAEDB80" : "#3A6EA0"}
                stroke="#28466A"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('legs')}
              />
              {/* Muscle definition for quads */}
              <path
                d="M77 240 C80 245, 85 245, 87 240"
                fill="none"
                stroke="#28466A"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M113 240 C115 245, 120 245, 123 240"
                fill="none"
                stroke="#28466A"
                strokeWidth="0.7"
                className="pointer-events-none"
              />

              {/* Knees - Frontal View */}
              <ellipse
                cx="78.5"
                cy="290"
                rx="8.5"
                ry="10"
                fill={highlightedParts.find(p => p.id === 'knees')?.active ? "#1EAEDB80" : "#E8B496"}
                stroke="#B28B6B"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('knees')}
              />
              <ellipse
                cx="121.5"
                cy="290"
                rx="8.5"
                ry="10"
                fill={highlightedParts.find(p => p.id === 'knees')?.active ? "#1EAEDB80" : "#E8B496"}
                stroke="#B28B6B"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('knees')}
              />
              
              {/* Lower Legs - Frontal View */}
              <path
                d="M77 300 L75 350 L85 350 L87 300"
                fill={highlightedParts.find(p => p.id === 'legs')?.active ? "#1EAEDB80" : "#3A6EA0"}
                stroke="#28466A"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('legs')}
              />
              <path
                d="M113 300 L115 350 L125 350 L123 300"
                fill={highlightedParts.find(p => p.id === 'legs')?.active ? "#1EAEDB80" : "#3A6EA0"}
                stroke="#28466A"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('legs')}
              />
              {/* Muscle definition for calves */}
              <path
                d="M78 320 C80 325, 83 325, 85 320"
                fill="none"
                stroke="#28466A"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M115 320 C117 325, 120 325, 123 320"
                fill="none"
                stroke="#28466A"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              
              {/* Feet - Frontal View */}
              <path
                d="M75 350 L70 360 L90 360 L85 350"
                fill={highlightedParts.find(p => p.id === 'feet')?.active ? "#1EAEDB80" : "#E8B496"}
                stroke="#B28B6B"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('feet')}
              />
              <path
                d="M115 350 L110 360 L130 360 L125 350"
                fill={highlightedParts.find(p => p.id === 'feet')?.active ? "#1EAEDB80" : "#E8B496"}
                stroke="#B28B6B"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
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
              {/* Head - Back View */}
              <path
                d="M100 15 C85 15, 75 30, 75 45 C75 60, 85 70, 100 70 C115 70, 125 60, 125 45 C125 30, 115 15, 100 15"
                fill={highlightedParts.find(p => p.id === 'head')?.active ? "#1EAEDB80" : "#E8B496"}
                stroke="#B28B6B"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('head')}
              />
              
              {/* Neck - Back View */}
              <path
                d="M90 70 L90 80 L110 80 L110 70"
                fill={highlightedParts.find(p => p.id === 'neck')?.active ? "#1EAEDB80" : "#E8B496"}
                stroke="#B28B6B"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('neck')}
              />

              {/* Shoulders - Back View */}
              <path
                d="M65 85 C75 80, 85 80, 90 80 L110 80 C115 80, 125 80, 135 85"
                fill={highlightedParts.find(p => p.id === 'shoulders')?.active ? "#1EAEDB80" : "#B8461B"}
                stroke="#8F3717"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('shoulders')}
              />

              {/* Back - Upper */}
              <path
                d="M90 80 L90 130 L110 130 L110 80"
                fill={highlightedParts.find(p => p.id === 'back')?.active ? "#1EAEDB80" : "#B8461B"}
                stroke="#8F3717"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('back')}
              />
              {/* Muscle definition lines for upper back */}
              <path
                d="M95 90 L105 90"
                fill="none"
                stroke="#8F3717"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M93 105 L107 105"
                fill="none"
                stroke="#8F3717"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M90 90 L90 130"
                fill="none"
                stroke="#8F3717"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M110 90 L110 130"
                fill="none"
                stroke="#8F3717"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M100 80 L100 130"
                fill="none"
                stroke="#8F3717"
                strokeWidth="0.7"
                className="pointer-events-none"
              />

              {/* Arms - Back View */}
              <path
                d="M65 85 C60 95, 55 115, 50 135 C48 145, 47 155, 45 165"
                fill={highlightedParts.find(p => p.id === 'arms')?.active ? "#1EAEDB80" : "#B8461B"}
                stroke="#8F3717"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('arms')}
              />
              <path
                d="M135 85 C140 95, 145 115, 150 135 C152 145, 153 155, 155 165"
                fill={highlightedParts.find(p => p.id === 'arms')?.active ? "#1EAEDB80" : "#B8461B"}
                stroke="#8F3717"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('arms')}
              />
              {/* Tricep muscle definition */}
              <path
                d="M52 120 C55 125, 58 130, 55 140"
                fill="none"
                stroke="#8F3717"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M148 120 C145 125, 142 130, 145 140"
                fill="none"
                stroke="#8F3717"
                strokeWidth="0.7"
                className="pointer-events-none"
              />

              {/* Hands - Back View */}
              <path
                d="M45 165 C43 175, 40 180, 38 185 C35 190, 40 195, 45 193 C50 191, 53 185, 55 180"
                fill={highlightedParts.find(p => p.id === 'hands')?.active ? "#1EAEDB80" : "#E8B496"}
                stroke="#B28B6B"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('hands')}
              />
              <path
                d="M155 165 C157 175, 160 180, 162 185 C165 190, 160 195, 155 193 C150 191, 147 185, 145 180"
                fill={highlightedParts.find(p => p.id === 'hands')?.active ? "#1EAEDB80" : "#E8B496"}
                stroke="#B28B6B"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('hands')}
              />

              {/* Lower Back */}
              <path
                d="M90 130 L90 190 L110 190 L110 130"
                fill={highlightedParts.find(p => p.id === 'lowerBack')?.active ? "#1EAEDB80" : "#B8461B"}
                stroke="#8F3717"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('lowerBack')}
              />
              {/* Muscle definition for lower back */}
              <path
                d="M95 145 L105 145"
                fill="none"
                stroke="#8F3717"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M95 160 L105 160"
                fill="none"
                stroke="#8F3717"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M95 175 L105 175"
                fill="none"
                stroke="#8F3717"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M100 130 L100 190"
                fill="none"
                stroke="#8F3717"
                strokeWidth="0.7"
                className="pointer-events-none"
              />

              {/* Hips - Back View */}
              <path
                d="M90 190 C85 195, 80 200, 75 210 L125 210 C120 200, 115 195, 110 190"
                fill={highlightedParts.find(p => p.id === 'hips')?.active ? "#1EAEDB80" : "#2F5680"}
                stroke="#1E3553"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('hips')}
              />

              {/* Legs - Back View */}
              <path
                d="M75 210 L70 280 L87 280 L90 210"
                fill={highlightedParts.find(p => p.id === 'legs')?.active ? "#1EAEDB80" : "#2F5680"}
                stroke="#1E3553"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('legs')}
              />
              <path
                d="M110 210 L113 280 L130 280 L125 210"
                fill={highlightedParts.find(p => p.id === 'legs')?.active ? "#1EAEDB80" : "#2F5680"}
                stroke="#1E3553"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('legs')}
              />
              {/* Hamstring muscle definition */}
              <path
                d="M77 240 C80 245, 85 245, 87 240"
                fill="none"
                stroke="#1E3553"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M113 240 C115 245, 120 245, 123 240"
                fill="none"
                stroke="#1E3553"
                strokeWidth="0.7"
                className="pointer-events-none"
              />

              {/* Knees - Back View */}
              <ellipse
                cx="78.5"
                cy="290"
                rx="8.5"
                ry="10"
                fill={highlightedParts.find(p => p.id === 'knees')?.active ? "#1EAEDB80" : "#E8B496"}
                stroke="#B28B6B"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('knees')}
              />
              <ellipse
                cx="121.5"
                cy="290"
                rx="8.5"
                ry="10"
                fill={highlightedParts.find(p => p.id === 'knees')?.active ? "#1EAEDB80" : "#E8B496"}
                stroke="#B28B6B"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('knees')}
              />
              
              {/* Lower Legs - Back View */}
              <path
                d="M77 300 L75 350 L85 350 L87 300"
                fill={highlightedParts.find(p => p.id === 'legs')?.active ? "#1EAEDB80" : "#2F5680"}
                stroke="#1E3553"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('legs')}
              />
              <path
                d="M113 300 L115 350 L125 350 L123 300"
                fill={highlightedParts.find(p => p.id === 'legs')?.active ? "#1EAEDB80" : "#2F5680"}
                stroke="#1E3553"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('legs')}
              />
              {/* Calf muscle definition */}
              <path
                d="M77 315 C80 325, 83 330, 85 325"
                fill="none"
                stroke="#1E3553"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              <path
                d="M123 315 C120 325, 117 330, 115 325"
                fill="none"
                stroke="#1E3553"
                strokeWidth="0.7"
                className="pointer-events-none"
              />
              
              {/* Feet - Back View */}
              <path
                d="M75 350 L70 360 L90 360 L85 350"
                fill={highlightedParts.find(p => p.id === 'feet')?.active ? "#1EAEDB80" : "#E8B496"}
                stroke="#B28B6B"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
                onClick={() => toggleBodyPart('feet')}
              />
              <path
                d="M115 350 L110 360 L130 360 L125 350"
                fill={highlightedParts.find(p => p.id === 'feet')?.active ? "#1EAEDB80" : "#E8B496"}
                stroke="#B28B6B"
                strokeWidth="1"
                className="cursor-pointer hover:fill-medical-primary/50"
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
