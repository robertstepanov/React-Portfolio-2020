import mockup from '../images/Mockup.PNG';

let list = {
    mockup: {
        title: 'Mockup',
        image: mockup,
        alt: 'mockup',
        desc: 'test project',
        repo: 'http://google.com',
        url: 'http://google.com'
    }
}

export const projects = Object.values(list);