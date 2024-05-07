import React from 'react';

function Thumbnail({ link, imageSrc, alt, caption }) {
  return (
    <div className="col-md-4">
      <div className="thumbnail">
        <a href={link}>
          <img src={imageSrc} alt={alt} style={{ width: '100%' }} />
          <div className="caption">
            <p>{caption}</p>
          </div>
        </a>
      </div>
    </div>
  );
}

function RowWithThumbnails() {
  return (
    <div className="row">
      <Thumbnail
        link="melo.png"
        imageSrc="melo.png"
        alt="Lights"
        caption="Lorem ipsum..."
      />
      <Thumbnail
        link="msi.png"
        imageSrc="msi.png"
        alt="Nature"
        caption="Lorem ipsum..."
      />
      <Thumbnail
        link="monitor.jpeg"
        imageSrc="monitor.jpeg"
        alt="Fjords"
        caption="Lorem ipsum..."
      />
    </div>
  );
}

export default RowWithThumbnails;