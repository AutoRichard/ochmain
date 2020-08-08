import React from 'react';
import { hydrate } from 'react-dom';
import Meeting from '../zoom/meeting';

hydrate(<Meeting />,document.getElementById('main'));