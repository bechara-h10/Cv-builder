import React from "react";
import "../styles/form.css";

function PersonalInfo({ personalInfo, setPersonalInfo }) {
  return (
    <form>
      <label htmlFor="fullname">
        <p>Fullname</p>
        <input
          id="fullname"
          name="fullname"
          placeholder="First and last name"
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, fullName: e.target.value })
          }
        />
      </label>
      <label htmlFor="email">
        <p>Email</p>
        <input
          id="email"
          name="email"
          placeholder="Enter email"
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, email: e.target.value })
          }
        />
      </label>
      <label htmlFor="phone">
        <p>Phone Number</p>
        <input
          id="phone"
          name="phone"
          placeholder="Enter phone number"
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })
          }
        />
      </label>
      <label htmlFor="address">
        <p>
          Address <span>(Optional)</span>
        </p>
        <input
          id="address"
          name="address"
          placeholder="Enter address"
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, address: e.target.value })
          }
        />
      </label>
    </form>
  );
}

export default PersonalInfo;
