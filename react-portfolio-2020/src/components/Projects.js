import React from 'react'


export default function Projects() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
        <h1>Projects</h1>

        <button onClick={scrollToTop}>Back to top</button>
        </div>
    )
}