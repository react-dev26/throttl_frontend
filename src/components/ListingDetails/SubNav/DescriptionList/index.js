import React from 'react';
import { print } from 'utils';

export const desktopDescriptionList = [
  { id: 1, label: <span>Phtos</span>, action: () => { print('Photos Clicked'); } },
  { id: 2, label: <span>About this bike</span>, action: () => { print('About this bike Clicked'); } },
  { id: 3, label: <span>About the seller</span>, action: () => { print('About the seller Clicked'); } },
  { id: 4, label: <span>Detailed specs</span>, action: () => { print('Detailed specs Clicked'); } },
];
export const mobileDescriptionList = [
  { id: 1, label: <span>Phtos</span>, action: () => { print('Photos Clicked'); } },
  { id: 2, label: <span>About this bike</span>, action: () => { print('About this bike Clicked'); } },
  { id: 3, label: <span>Message Seller</span>, action: () => { print('Message seller Clicked'); } },
];
