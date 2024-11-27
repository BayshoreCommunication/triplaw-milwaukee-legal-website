import React from "react";

const GoogleMap = () => {
  return (
    <div className="">
      <iframe
        className="max-h-[300px] w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.1920590072073!2d-88.15000292339384!3d43.03894889194105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880507a18ccc89ef%3A0x7fd32640cfd5c7c2!2s675%20N%20Brookfield%20Rd%20%23102%2C%20Brookfield%2C%20WI%2053045%2C%20USA!5e1!3m2!1sen!2sbd!4v1732696020797!5m2!1sen!2sbd"
        width="600"
        height="600"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
