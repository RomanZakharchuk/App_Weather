import React, { useEffect, useState } from 'react'

const useGeoLocation = (options = {}) => {
    const [error, setError] = useState();
    const [location, setLocation] = useState();

    const onSuccess = location => {
        const { latitude, longitude } = location.coords;

        setLocation({
            latitude,
            longitude
        });
    };

    const onError = error => {
        setError(error.message);
    }

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation not supported");
            return;
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [options]);

    return { location, error };
}

export default useGeoLocation;