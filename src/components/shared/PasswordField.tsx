"use client";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";

const PasswordField = () => {
  const [passwordField, setPasswordField] = useState(true);
  return (
    <div className="cover__grp inputPassword">
      <label
        htmlFor="phones"
        className="mb-16 fs-18 d-block fw-500 white bodyfont"
      >
        Password <span className="base2">*</span>
      </label>
      <input
        className="inputPassword"
        type={passwordField ? "password" : "text"}
        id="phones"
        placeholder="Type Your Password"
      />
      <div className="toggle-icon">
        {passwordField ? (
          <IconEyeOff onClick={() => setPasswordField(!passwordField)} />
        ) : (
          <IconEye onClick={() => setPasswordField(!passwordField)} />
        )}
      </div>
    </div>
  );
};

export default PasswordField;
