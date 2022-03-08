
const Gallery = () => {
    return (
        <div className="card__photos gallery">
            <div className="gallery__display">
                <img src="http://lorempixel.com/570/525/animals/1" width="570" height="525" alt="" className="gallery__display-img" />
            </div>
            <div className="gallery__thumbnails-container">
                <ul className="gallery__thumbnails">
                    <li className="gallery__thumbnails-item gallery__thumbnails-item_active">
                        <img src="http://lorempixel.com/570/525/animals/1" alt="" className="gallery__thumbnails-img" />
                    </li>
                    <li className="gallery__thumbnails-item">
                        <img src="http://lorempixel.com/570/525/animals/2" alt="" className="gallery__thumbnails-img" />
                    </li>
                    <li className="gallery__thumbnails-item">
                        <img src="http://lorempixel.com/570/525/animals/3" alt="" className="gallery__thumbnails-img" />
                    </li>
                    <li className="gallery__thumbnails-item">
                        <img src="http://lorempixel.com/570/525/animals/4" alt="" className="gallery__thumbnails-img" />
                    </li>
                    <li className="gallery__thumbnails-item">
                        <img src="http://lorempixel.com/570/525/animals/5" alt="" className="gallery__thumbnails-img" />
                    </li>
                    <li className="gallery__thumbnails-item">
                        <img src="http://lorempixel.com/570/525/animals/6" alt="" className="gallery__thumbnails-img" />
                    </li>
                    <li className="gallery__thumbnails-item">
                        <img src="http://lorempixel.com/570/525/animals/7" alt="" className="gallery__thumbnails-img" />
                    </li>
                    <li className="gallery__thumbnails-item">
                        <img src="http://lorempixel.com/570/525/animals/8" alt="" className="gallery__thumbnails-img" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Gallery;