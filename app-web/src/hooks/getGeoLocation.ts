import { useState, useEffect } from 'react';

const useGeoLocation = () => {
    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();
    const [permissionDenied, setPermissionDenied] = useState(false);

    useEffect(() => {
        const getLocation = () => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);
                    },
                    function (error) {
                        console.error(error)
                        if (error.code === error.PERMISSION_DENIED) {
                            setPermissionDenied(true);
                        }
                    }
                );
            } else {
                console.log("Geolocalização não é suportada pelo seu navegador.");
            }
        };

        if (permissionDenied === false) {
            getLocation();
        }
    }, [permissionDenied]);

    return { latitude, longitude };
};

export default useGeoLocation;
