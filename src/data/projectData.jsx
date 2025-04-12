import twitterImg from "../assets/pics/twitter-clone.png";
import chatImg from '../assets/pics/webserver.png';
import sortingImg from '../assets/pics/sorting-visual.png';
import web3walletImg from '../assets/pics/web3-wallet.png'


const projects = [
  {
    title: "Twitter Clone",
    description: "A simple Twitter-like app built with React, Firebase, and Material-UI. Users can sign up, log in, post tweets, and view a timeline of tweets from others. It features responsive design and secure authentication using Firebase.",
    image: twitterImg,
    github: "https://github.com/your-github/twitter-clone",
    live: "https://thread-clone-8b0f9.web.app/",
  },
  {
    title: "Web3 Wallet",
    description: "Developing a secure and minimal multi-chain Web3 wallet focused on learning core blockchain concepts like BIP39 mnemonic generation, private/public key management, transaction signing, and Alchemy API integration.",
    image: web3walletImg,
    github: "https://github.com/Khizarshah01/web3-wallet",
    live: "",
  },
  {
    title: "Sorting Visualizer ",
    description: "Sorting Visualizer is a web app for visualizing a bunch of different sorting algorithms Like Selection Sort, Bubble Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort With the functionality of (Speed Control) and (Array Size Control) ",
    image: sortingImg,
    github: "https://github.com/Khizarshah01/SortingVisualizer",
    live: "https://projects.khizarshah01.me/",
  },
  {
    title: "Web Server",
    description: "A lightweight web server built in Java from scratch, capable of serving static HTML content. Developed to deepen understanding of HTTP protocols, socket programming, and core networking fundamentals.",
    image: chatImg,
    github: "https://github.com/Khizarshah01/WebServer",
    live: "",
  },
  
];

export default projects;
