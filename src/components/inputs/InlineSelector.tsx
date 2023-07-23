import React, { DetailedReactHTMLElement, ReactElement, useState } from 'react';

type InlineSelectorProps = {
  children: ReactElement | ReactElement[],
  containerClassName?: string,
}

function InlineSelector({ children, containerClassName }: InlineSelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  function onSelect(index: number) {
    setSelectedIndex(index);
  }
  return (
    <div className={`inline-flex ${containerClassName}`}>
      {React.Children.map(children, (child, index) => React.cloneElement(child as DetailedReactHTMLElement<any, any>, {
        onClick: () => {
          onSelect(index);
          child.props?.onClick();
        },
        className: `${child.props.className} ${index === selectedIndex ? 'selected' : ''}`,
      }))}
    </div>
  );
}

InlineSelector.defaultProps = {
  containerClassName: '',
};

export default InlineSelector;
