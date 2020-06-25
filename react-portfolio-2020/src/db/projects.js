import ebs from '../images/ebs.PNG';
import key from '../images/key.png';

let list = {
    ebs: {
        title: 'EBS Pest Control',
        image: ebs,
        alt: 'ebs pest control',
        skills: 'Tech Stack: HTML, CSS, Javascript, PHP',
        desc: 'test project',
        repo: 'https://github.com/robertstepanov/Brantley-and-Sons-Project',
        url: 'https://ebs-pestcontrol.netlify.app/'
    },

     key: {
        title: 'Key Conservation',
        image: key,
        alt: 'key conservation',
        skills: 'Tech Stack: React Native, NodeJS',
        desc: 'test project',
        repo: 'http://google.com',
        url: 'http://keyconservation.org'
    }
}

export const projects = Object.values(list);