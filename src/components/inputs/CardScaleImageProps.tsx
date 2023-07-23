import './masonry.sass';

type CardScaleImageProps = {
  href: string,
  imageSrc: string,
  title: string,
  header: string,
  filter?: string,
}

function CardScaleImage({
  href, imageSrc, title, filter, header,
}: CardScaleImageProps) {
  return (
    <a className={`h-64 filterable w-1/3 ${filter}`} href={href} target="_blank" rel="noreferrer">
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
    </a>
  );
}

CardScaleImage.defaultProps = {
  filter: '',
};

export default CardScaleImage;
