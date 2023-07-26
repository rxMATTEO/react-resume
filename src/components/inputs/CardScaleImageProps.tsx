import './masonry.sass';

type CardScaleImageProps<T extends string> = {
  href: string,
  imageSrc: string,
  title: string,
  header: string,
  filter?: T,
}

function CardScaleImage<T extends string>({
  href, imageSrc, title, filter, header,
}: CardScaleImageProps<T>) {
  return (
    <div className={`block mb-5 sm:h-[300px] h-[240px] filterable w-full lg:w-1/3 ${filter}`} href={href} target="_blank" rel="noreferrer">
      <div className="p-6 content shadow-ambient bg-fade">
        <div className="h-full z-10 relative">
          <div className="thumbnail">
            <img src={imageSrc} className="img" alt={filter} />
          </div>
          <div className="h-1/3 pt-5">
            <p className="font-normal text-sm uppercase text-purple">{title}</p>
            <p className="font-bold text-xl">{header}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

CardScaleImage.defaultProps = {
  filter: '',
};

export default CardScaleImage;
