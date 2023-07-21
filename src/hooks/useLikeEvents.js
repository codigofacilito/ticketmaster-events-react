import { useState } from "react";

import { LIKED_EVENTS_STORAGE_KEY } from '../utils/constants';

const checkIsEventLiked = (eventId) => {
    const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
    return likedEvents.includes(eventId);
};

const useLikeEvents = (eventId) => {
    const [isEventLiked, setIsEventLiked] = useState(checkIsEventLiked(eventId));

    const toggleEventLike = () => {
        const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
        const eventIndex = likedEvents.indexOf(eventId);

        if (eventIndex !== -1) {
            likedEvents.splice(eventIndex, 1);
            setIsEventLiked(false);
        } else {
            likedEvents.push(eventId);
            setIsEventLiked(true);
        }

        localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(likedEvents));
    };

    return {
        isEventLiked,
        toggleEventLike,
    };
};

export default useLikeEvents;