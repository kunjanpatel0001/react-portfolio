// This component is for animating letter where a string of characters will be given to the component and it will return the animated letters

import './index.scss';

// 3 args - class to which we want to apply, the array that has to animated, index that will set the delay of the animation 
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    // span type will be returned. it will be an inline element
    return ( 
        <span>
            {
                strArray.map((char, i) => (
                    // every element in react needs to have a key inside the map
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters