import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterText = () => {
    const textPhrases = [
        "Photography is the art of freezing moments in time...",
        "Capture memories that last a lifetime...",
        "Unleash your creativity through the lens...",
        "Explore the world through a different perspective...",
        "Discover the beauty in the details...",
        "Unlock the power of visual storytelling...",
        "Let your passion for photography ignite...",
        "Join a community of like-minded shutterbugs...",
        "Embrace the art of capturing fleeting moments...",
        "Unleash your imagination and see the world differently..."
    ];
    return (
        <div className='lg:relative lg:-top-32 lg:ml-6 lg:mx-auto mx-6'>
            <h1 className='lg:text-2xl text-xl font-roboto italic text-center lg:text-left'>
                <Typewriter
                    words={textPhrases}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h1>
        </div>
    );
};

export default TypewriterText;