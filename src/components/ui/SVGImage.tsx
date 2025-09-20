import React from 'react';

interface SVGImageProps {
  svg: React.ReactNode;
  alt: string;
  className?: string;
}

export default function SVGImage({ svg, alt, className = "" }: SVGImageProps) {
  // Convert SVG to data URL
  const svgString = React.Children.toArray(svg).map(child =>
    React.isValidElement(child) ?
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${child.props.viewBox || '0 0 400 400'}">${child.props.children}</svg>` :
    ''
  ).join('');

  const dataUrl = `data:image/svg+xml;base64,${btoa(svgString)}`;

  return (
    <div className={`svg-image-container ${className}`}>
      <img
        src={dataUrl}
        alt={alt}
        className="w-full h-full object-contain"
      />
    </div>
  );
}