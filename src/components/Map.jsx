import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="my location"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCEO08g1j-s-1-hLydYQEg1NjFiSimjuKs&q=New+York+University+Tandon"
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
