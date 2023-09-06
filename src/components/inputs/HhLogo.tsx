type HhLogoProps = {
  color?: string,
  textColor?: string,
}

function HhLogo({ color, textColor } : HhLogoProps) {
  return <span className={`bg-${color} text-xs rounded-full text-${textColor} p-1`}>hh</span>;
}

HhLogo.defaultProps = {
  color: 'white',
  textColor: 'red-500',
};

export default HhLogo;
