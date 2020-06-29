import ebs from '../images/ebs.PNG';
import key from '../images/key.png';
import gol from '../images/GOL.PNG'

let list = {
    ebs: {
        title: 'EBS Pest Control',
        image: ebs,
        alt: 'ebs pest control',
        skills: 'Tech Stack: HTML, CSS, Javascript, PHP',
        desc: 'This is a project I worked on for a client that was unhappy with their current website. I believe it turned out well and learned some PHP while making it as well as creating a custom Logo that they were interested in updating.',
        repo: 'https://github.com/robertstepanov/Brantley-and-Sons-Project',
        url: 'https://ebs-pestcontrol.netlify.app/'
    },

     key: {
        title: 'Key Conservation',
        image: key,
        alt: 'key conservation',
        skills: 'Tech Stack: React Native, NodeJS',
        desc: 'Learned React Native and worked on a team to satisify the stakeholders requests prior to launch in the App Store and Google Playstore. We researched and tested implementation of a Donation/Payment solution. Also, implemented an emoji library that was added to diferent components of the application.',
        repo: 'http://google.com',
        url: 'http://keyconservation.org'
    },

     GOL: {
        title: "Conway's Game of Life",
        image: gol,
        alt: 'game of life',
        skills: 'Tech Stack: React',
        desc: 'test project',
        repo: 'https://github.com/robertstepanov/Game-Of-Life-React',
        url: 'https://rs-game-of-life.netlify.app/'
    }
}

export const projects = Object.values(list);