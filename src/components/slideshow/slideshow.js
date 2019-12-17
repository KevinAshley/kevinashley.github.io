import React from 'react';

import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'images/old-sacramento.jpeg',
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: 'images/sky.jpeg',
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: 'images/solar-system.jpeg',
    altText: '',
    caption: '',
    header: ''
  }
];

const Slideshow = () => <UncontrolledCarousel items={items} />;

export default Slideshow;
