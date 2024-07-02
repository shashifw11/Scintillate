"use client";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Star Wars App</title>
      </head>
      <body>
        <ChakraProvider>
          <div id="root">{children}</div>
        </ChakraProvider>
      </body>
    </html>
  );
}
