import React from 'react';
import "../Style/Map.css";

const Map = () => {
  return (
    <div>
      {/* Combined Map with Two Locations */}
      <iframe
        title="Combined Locations"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.985353631336!2d74.476802003163!3d21.547428002258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf6c8ac8008bc9%3A0x9f5cf67293af3fee!2sAditya%20Maternity%20and%20Eye%20Hospital!5e0!3m2!1sen!2sin!4v1710942495829!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
