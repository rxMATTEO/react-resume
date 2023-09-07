import './masonry.sass';
import { ReactElement } from 'react';

export type CardScaleImageProps<T extends string> = {
  href: string,
  imageSrc: string,
  title: string,
  header: string,
  filter?: T,
  logo?: ReactElement,
}

function CardScaleImage<T extends string>({
  href, imageSrc, title, filter, header, logo,
}: CardScaleImageProps<T>) {
  return (
    <a className={`block mb-5 sm:h-[300px] h-[240px] filterable transition-colors duration-700 ease-in-out hover:!bg-purple w-full lg:w-1/3 ${filter}`} href={href} target="_blank" rel="noreferrer">
      <div className="h-full p-6 content shadow-ambient bg-fade">
        <div className="h-full z-10 relative">
          <div className="h-2/3 thumbnail">
            <img src={imageSrc} className="img" alt={filter} />
          </div>
          <div className="h-1/3 pt-5">
            <div className="flex place-content-between items-center">
              <p className="font-normal text-sm uppercase text-purple">{title}</p>
              <p>
                { logo }
              </p>
            </div>
            <p className="font-bold text-xl">{header}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

CardScaleImage.defaultProps = {
  filter: '',
  logo: null,
};

export default CardScaleImage;
