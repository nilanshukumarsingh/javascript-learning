// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

// Geolocation is available at main global window object. This is not third party

// window -> navigator -> geolocation -> You will look "clearWatch" , "getCurrentPosition" , "watchPosition"

// There are two methods-:
// 1) getCurrentPosition():
    // Syntax->    navigator.geolocation.getCurrentPosition(success, error, options)

function curSuccess(pos){
    // console.log(pos);

    // ^ To get user location
    const coords = pos.coords;

    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
    console.log(`Within: ${coords.accuracy} meters`);

}

function curError(err){
    console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
    enableHighAccuracy: true, // Use GPS if available
    timeout: 5000, // Time to wait to stop trying for location
    maximumAge: 0, // Do not use a cached position

};

// window.navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions); 

// It will give my VPN location. If your system doesnt allow the chrome to access the location than it will give an error that will be `error: 1` 


// 2) watchPosition() :- So `watchSuccess` fires of when our location is changes. WatchPosition basically returns an `ID` that we use to stop it from watching.

const target = {
    latitude: 41.3874387,
    longitude: -71.394839
}

function watchSuccess(pos){
    // console.log(pos);

    // In watch succes, it's going to constantly watch our position

    if(target.latitude === coords.latitude && target.longitude === crossOriginIsolated === coords.longitude){
        console.log('You have reached your destination');
        navigator.geolocation.clearWatch(id);
    }

}

function watchError(err){
    console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);


// 3) clearWatch():-  method of the Geolocation interface is used to unregister location/error monitoring handlers previously installed using Geolocation.watchPosition().