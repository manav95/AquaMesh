'use client';

import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./map'), {
  ssr: false,
});


export default function Home() {
  return (
    <HelmetProvider>
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>AquaMesh</title>
                <link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin=""/>
                <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossOrigin=""></script>
      </Helmet>
      <Map></Map>
    </div>
    </HelmetProvider>
  )
}
