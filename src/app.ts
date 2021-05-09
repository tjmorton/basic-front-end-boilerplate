import SomeClass from './lib/SomeClass';
import Heading from './lib/Heading';

// load styles
import './styles/style.css';

// Just a test class
new SomeClass().printUuid();

const appHandle: HTMLElement | null = document.getElementById('app');
const heading: HTMLElement = new Heading('This is a heading').elem;

if (appHandle) appHandle.appendChild(heading);
