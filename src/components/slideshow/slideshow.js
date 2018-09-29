import React from 'react';

import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'images/old-sacramento.jpeg',
    altText: 'with a fixed aspect ratio',
    caption: 'with a fixed aspect ratio',
    header: 'Responsive Slideshow'
  },
  {
    src: 'images/sky.jpeg',
    altText: 'different sized images ok',
    caption: 'different sized images ok',
    header: 'Responsive Slideshow'
  },
  {
    src: 'images/solar-system.jpeg',
    altText: 'images are cropped to fit the container',
    caption: 'images are cropped to fit the container',
    header: 'Responsive Slideshow'
  }
];

const Slideshow = () => <UncontrolledCarousel items={items} />;

export default Slideshow;
