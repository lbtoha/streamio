"use client";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <React.Fragment>
      {" "}
      {children}
      <ToastContainer />
    </React.Fragment>
  );
}
