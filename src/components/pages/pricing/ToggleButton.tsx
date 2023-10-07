"use client";
import { Switch } from "@headlessui/react";
import React from "react";

type Props = {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ToggleButton({ enabled, setEnabled }: Props) {
  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`toggle-button-area ${
          enabled ? "bg-teal-900" : "bg-teal-700"
        }`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`button ${enabled ? "toggle" : "translate-x-0"}`}
        />
      </Switch>
    </div>
  );
}
