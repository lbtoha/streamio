"use client";
import { Switch } from "@headlessui/react";
import React from "react";

type Props = {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ToggleButton({ enabled, setEnabled }: Props) {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`toggle-button-area `}
    >
      <span
        aria-hidden="true"
        className={`button ${enabled ? "toggle" : ""}`}
      />
    </Switch>
  );
}
