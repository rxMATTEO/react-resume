import {
  ReactElement, useEffect, useRef, useState,
} from 'react';
import Isotope from 'isotope-layout';

type IsotopeProps = {
  items: ReactElement | ReactElement[],
  filterKey?: string
}

function IsotopeLayout({ items, filterKey }: IsotopeProps) {
  const isotope = useRef(null);

  useEffect(() => {
    isotope.current = new Isotope('.isotope', {
      itemSelector: '.filterable',
      containerStyle: {
        position: 'relative',
      },
      initLayout: true,
      originLeft: true,
      originTop: true,
      resize: true,
      resizeContainer: true,
      transitionDuration: '0.4s',
      hiddenStyle: {
        opacity: 0,
        transform: 'scale(0.001)',
      },
      visibleStyle: {
        opacity: 1,
        transform: 'scale(1)',
      },
      layoutMode: 'masonry',
      isJQueryFiltering: true,
      sortAscending: true,
      percentPosition: true,
      masonry: {
        columnWidth: '.filterable',
      },
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false,
      },
      fitRows: {},
      vertical: {
        horizontalAlignment: 0,
      },
      filter: '*',
    });
  }, []);

  useEffect(() => {
    isotope.current.arrange({ filter: filterKey === '*' ? '*' : `.${filterKey}` });
  }, [isotope, filterKey]);
  return (
    <div className="isotope">
      {items}
    </div>
  );
}

IsotopeLayout.defaultProps = {
  filterKey: '*',
};

export default IsotopeLayout;
