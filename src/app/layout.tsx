import type { Metadata } from "next";
import { Providers } from './providers'

import "./globals.css";
import React from "react";


export const metadata: Metadata = {
  title: "Resource Management System",
  description: "The Resource Management System (RMS) is a web-based platform designed to streamline resource allocation and scheduling within the Arts Faculty. It provides an intuitive interface for managing lab allocations, creating and organizing timetables, and handling exam payment claims for lecturers. The system ensures efficient coordination between students, lecturers, and administrators, improving accessibility and reducing administrative workload.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <Providers>
        {children}
          
      </Providers>
      </body>
    </html>
  );
}
