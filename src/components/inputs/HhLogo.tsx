type HhLogoProps = {
  color?: string,
  textColor?: string,
}

function HhLogo({ color, textColor } : HhLogoProps) {
  return <span className={`${color} text-xs rounded-full ${textColor} p-1`}>hh</span>;
}

HhLogo.defaultProps = {
  color: 'white',
  textColor: 'red-500',
};

export default HhLogo;
