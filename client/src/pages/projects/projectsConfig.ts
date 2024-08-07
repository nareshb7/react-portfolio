import simpleChat from 'assets/simple-chat-app-welcome.jpg';
import taskTracker from "assets/task-tracker.jpg"
import socioMedia from "assets/socio-media-home.jpg"
import guessTheNumber from "assets/guess-the-number.jpg"
import reactBeginnerProjects from "assets/react-beginner-projects.jpg"
import { ProjectData } from './types';

export const projectConfig: ProjectData[] = [
  {
    id: 1,
    image: simpleChat,
    title: 'Chat Application',
    description: 'Simple Chat Application with friends and groups',
    url: 'https://simple-chatapplication.netlify.app/',
  },
  {
    id: 2,
    image: taskTracker,
    title: 'Task Tracker',
    description: 'Used to track daily tickets',
    url: 'https://ticket-task-tracker.netlify.app',
  },
  {
    id: 3,
    image: socioMedia,
    title: 'Socio Media',
    description: 'Linkedin like application we can post content, lie posts,  add friends',
    url: 'https://socio-media-app.netlify.app',
  },
  {
    id: 4,
    image: guessTheNumber,
    title: 'Guess the number',
    description: 'U have to guess the correct number that was generated in between 1 to 100',
    url: 'https://guessthenumbergame1.netlify.app/',
  },
  {
    id: 5,
    image: reactBeginnerProjects,
    title: 'React Beginner Projects',
    description: 'There is 20 react beginner projects like todo app, weather app and etc.',
    url: 'https://nareshb7.github.io/react-projects',
  },
  {
    id: 6,
    image: socioMedia,
    title: 'Insta Share',
    description: 'Its similar like a chat application, but works on basis of room id\'s, no authentication needed, even u can share files upto 3mb',
    url: 'https://socio-media-app.netlify.app',
  },
  {
    id: 7,
    image: socioMedia,
    title: 'Socio Media',
    description: 'Linkedin like application we can post content, lie posts,  add friends',
    url: 'https://socio-media-app.netlify.app',
  },
];
