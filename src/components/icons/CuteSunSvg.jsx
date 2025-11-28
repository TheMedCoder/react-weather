const CuteSunSvg = ({ size = 120, className = "" }) => {
  // Pastel color palette defined here for easy adjustments
  const colors = {
    body: '#FFF59D',  // Butter Yellow
    rays: '#FFCCBC',  // Apricot Pastel
    blush: '#FFAB91', // Deep Pastel Peach
    features: '#795548' // Soft Brown
  };

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* The Wavy Rays (Background Layer) */}
      <path 
        d="M60 10 C 75 10, 85 20, 95 30 C 105 40, 110 50, 110 60 C 110 75, 100 85, 90 95 C 80 105, 70 110, 60 110 C 45 110, 35 100, 25 90 C 15 80, 10 70, 10 60 C 10 45, 20 35, 30 25 C 40 15, 50 10, 60 10 Z" 
        fill={colors.rays}
        stroke={colors.rays}
        strokeWidth="8" 
        strokeLinejoin="round"
        // Optional: Add a slow rotation animation to the rays only
        // style={{ transformOrigin: 'center', animation: 'spin 20s linear infinite' }}
      />

      {/* Main Body Circle */}
      <circle cx="60" cy="60" r="38" fill={colors.body}/>
      
      {/* Face */}
      <g id="kawaii-face">
        <ellipse cx="38" cy="68" rx="7" ry="4.5" fill={colors.blush} opacity="0.8"/>
        <ellipse cx="82" cy="68" rx="7" ry="4.5" fill={colors.blush} opacity="0.8"/>
        
        <ellipse cx="44" cy="58" rx="5" ry="6" fill={colors.features}/>
        <ellipse cx="76" cy="58" rx="5" ry="6" fill={colors.features}/>
        
        <g fill="white">
            <circle cx="46" cy="56" r="2"/>
            <circle cx="78" cy="56" r="2"/>
            <circle cx="43" cy="61" r="1"/>
            <circle cx="75" cy="61" r="1"/>
        </g>

        <path d="M56 68 Q60 71 64 68" stroke={colors.features} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </g>
    </svg>
  );
};

export default CuteSunSvg;