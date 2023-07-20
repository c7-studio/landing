import React from "react";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'C7 Studio',
  description: 'C7 Studio is a creative agency based on collaboration. We associate with companies that need performant and enticing solutions for their digital products',
  icons: {
    icon: '/favicon3.png'
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}