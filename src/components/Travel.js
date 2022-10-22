import { FaMapMarkerAlt } from "react-icons/fa";

const Travel = (props) => {
    return (
        <div className="travel-item">
            <div className="travel-image-wrapper">
                {props.imageUrl && (
                    <img
                        className="travel-image"
                        src={props.imageUrl}
                        alt={props.title}
                    />
                )}
            </div>
            <div className="travel-info-wrapper">
                {(props.location || props.googleMapsUrl) && (
                    <div className="location">
                        <FaMapMarkerAlt />
                        {props.location && (
                            <div className="location-name">
                                {props.location}
                            </div>
                        )}
                        {props.googleMapsUrl && (
                            <a
                                className="location-map-link"
                                href={props.googleMapsUrl}
                            >
                                View on Google Maps
                            </a>
                        )}
                    </div>
                )}
                {props.title && <h2 className="travel-title">{props.title}</h2>}
                {(props.startDate || props.endDate) && (
                    <div className="travel-period">
                        {props.startDate && (
                            <div className="travel-start-date">
                                {props.startDate}
                            </div>
                        )}
                        {props.startDate && props.endDate && (
                            <div className="travel-date-separator"> - </div>
                        )}
                        {props.endDate && (
                            <div className="travel-end-date">
                                {props.endDate}
                            </div>
                        )}
                    </div>
                )}
                {props.description && (
                    <div className="travel-description">
                        {props.description}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Travel;
