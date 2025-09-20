interface LogoData {
  text: string;
  font: string;
  color: string;
  icon: string;
  layout: string;
  secondaryColor: string;
  iconOnly: boolean;
  textOnly: boolean;
}

interface LogoBuilderProps {
  logoData: LogoData;
}

const LogoBuilder = ({ logoData }: LogoBuilderProps) => {
  const getIconShape = () => {
    const gradient = logoData.secondaryColor !== logoData.color ?
      `url(#gradient-${logoData.icon})` : logoData.color;

    switch (logoData.icon) {
      case 'circle':
        return (
          <>
            <defs>
              <linearGradient id={`gradient-${logoData.icon}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={logoData.color} />
                <stop offset="100%" stopColor={logoData.secondaryColor} />
              </linearGradient>
            </defs>
            <circle cx="20" cy="20" r="15" fill={gradient} />
          </>
        );
      case 'square':
        return (
          <>
            <defs>
              <linearGradient id={`gradient-${logoData.icon}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={logoData.color} />
                <stop offset="100%" stopColor={logoData.secondaryColor} />
              </linearGradient>
            </defs>
            <rect x="5" y="5" width="30" height="30" rx="5" fill={gradient} />
          </>
        );
      case 'triangle':
        return (
          <>
            <defs>
              <linearGradient id={`gradient-${logoData.icon}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={logoData.color} />
                <stop offset="100%" stopColor={logoData.secondaryColor} />
              </linearGradient>
            </defs>
            <polygon points="20,5 35,32 5,32" fill={gradient} />
          </>
        );
      case 'hexagon':
        return (
          <>
            <defs>
              <linearGradient id={`gradient-${logoData.icon}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={logoData.color} />
                <stop offset="100%" stopColor={logoData.secondaryColor} />
              </linearGradient>
            </defs>
            <polygon points="20,2 32,9 32,23 20,30 8,23 8,9" fill={gradient} />
          </>
        );
      case 'diamond':
        return (
          <>
            <defs>
              <linearGradient id={`gradient-${logoData.icon}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={logoData.color} />
                <stop offset="100%" stopColor={logoData.secondaryColor} />
              </linearGradient>
            </defs>
            <polygon points="20,5 32,20 20,35 8,20" fill={gradient} />
          </>
        );
      case 'star':
        return (
          <>
            <defs>
              <linearGradient id={`gradient-${logoData.icon}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={logoData.color} />
                <stop offset="100%" stopColor={logoData.secondaryColor} />
              </linearGradient>
            </defs>
            <polygon points="20,2 24,14 36,14 27,22 31,34 20,28 9,34 13,22 4,14 16,14" fill={gradient} />
          </>
        );
      default:
        return <circle cx="20" cy="20" r="15" fill={logoData.color} />;
    }
  };

  const getLayoutClasses = () => {
    switch (logoData.layout) {
      case 'horizontal':
        return 'flex-row items-center gap-4';
      case 'vertical':
        return 'flex-col items-center gap-2';
      case 'stacked':
        return 'flex-col items-center gap-0';
      default:
        return 'flex-row items-center gap-4';
    }
  };

  return (
    <div className="bg-white p-12 rounded-lg shadow-lg border-2 border-gray-200 relative overflow-hidden">
      {/* Compact Development Banner */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-center justify-center py-1 px-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="font-medium text-[10px]">🔧 BETA</span>
          </div>
        </div>
      </div>

      {/* Logo Display */}
      <div className={`flex ${getLayoutClasses()} mt-8`}>
        {!logoData.textOnly && (
          <svg width="60" height="60" viewBox="0 0 40 40" className="flex-shrink-0">
            {getIconShape()}
          </svg>
        )}

        {!logoData.iconOnly && (
          <div className="text-center">
            <h2
              className="text-3xl font-bold"
              style={{
                fontFamily: logoData.font,
                color: logoData.color
              }}
            >
              {logoData.text}
            </h2>
            <div className="text-sm text-gray-600 mt-1">
              Professional Solutions
            </div>
          </div>
        )}
      </div>

      {/* Mockup Previews */}
      <div className="mt-12 grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="bg-gray-50 p-4 rounded-lg mb-2 h-20 flex items-center justify-center border border-gray-200">
            <div className="text-sm font-bold" style={{ color: logoData.color }}>
              {logoData.text.slice(0, 2).toUpperCase()}
            </div>
          </div>
          <div className="text-xs text-gray-600">Business Card</div>
        </div>

        <div className="text-center">
          <div className="bg-gray-50 p-4 rounded-lg mb-2 h-20 flex items-center justify-center border border-gray-200">
            <svg width="24" height="24" viewBox="0 0 40 40" className="flex-shrink-0">
              {getIconShape()}
            </svg>
          </div>
          <div className="text-xs text-gray-600">Letterhead</div>
        </div>

        <div className="text-center">
          <div className="bg-gray-50 p-4 rounded-lg mb-2 h-20 flex items-center justify-center border border-gray-200">
            <div className="text-xs font-bold" style={{ color: logoData.color }}>
              {logoData.text.slice(0, 3).toUpperCase()}
            </div>
          </div>
          <div className="text-xs text-gray-600">Social Media</div>
        </div>
      </div>

      {/* Real-time Preview Stats */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold">Font:</span> {logoData.font}
          </div>
          <div>
            <span className="font-semibold">Colors:</span>
            <span className="inline-flex items-center gap-1 ml-2">
              <div className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: logoData.color }}></div>
              <div className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: logoData.secondaryColor }}></div>
            </span>
          </div>
          <div>
            <span className="font-semibold">Icon:</span> {logoData.icon}
          </div>
          <div>
            <span className="font-semibold">Layout:</span> {logoData.layout}
          </div>
        </div>
      </div>

      {/* Development Status Info */}
      <div className="mt-4 p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded border border-blue-200">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs text-blue-800">
              Beta testing • Advanced features coming in 2-3 weeks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoBuilder;