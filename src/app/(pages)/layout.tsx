"use client";

import { Drawer } from "@mui/material";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Drawer />
      {children}
    </main>
  );
}
