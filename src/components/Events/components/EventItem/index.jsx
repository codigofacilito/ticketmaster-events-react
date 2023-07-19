import styles from './EventItem.module.css';

import useLikeEvents from '../../../../hooks/useLikeEvents';
import HearthFilled from '../../../../assets/hearth-filled.png';
import HearthUnfilled from '../../../../assets/hearth-unfilled.png';

const EventItem = ({ info, id, name, image, onEventClick }) => {
    const { isEventLiked, toggleEventLike } = useLikeEvents(id);
    
    const handleSeeMoreClick = (evt) => {
        evt.stopPropagation();
        onEventClick(id);
    };

    const handleHearthClick = () => {
        toggleEventLike();
    };
    
    return (
        <div onClick={() => console.log('padre clickeado')} className={`${styles.eventItemContainer} ${styles.anotherContainer}`}>
            <div className={styles.imageContainer}>
                <img src={isEventLiked ? HearthFilled : HearthUnfilled} alt="Hearth button" className={styles.hearthImage} onClick={handleHearthClick} />
                <img src={image} alt={name} width={200} height={200} />
            </div>
            <div className={styles.eventInfoContainer}>
                <h4 className={styles.eventName}>{name}</h4>
                <p className={styles.eventInfo}>{info}</p>
                <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>
                    {/*<Link to={`/detail/${id}`}>
                        Ver mas
                    </Link>*/}
                    Ver mas
                </button>
            </div>
        </div>
    );
};

export default EventItem;