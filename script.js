/* 
 * CLICK ROBOT TO SPEAK
 * Change text in message.text
 * variable to alter robot message
 *
 * CONFIG.DEFAULT: false, will override
 * system default voice
 */

let body = document.getElementById("body");
body.innerHTML = `
<style id = "style">
</style>
<header id="header">
    
</header>
<section id="section">


</section>
<footer id="footer">
</footer>
`;

let style = document.getElementById('style');
style.innerHTML = `
input {
    color: initial;
    display: inline-block;
    text-align: start;
    background-color: white;
    cursor: text;
    font: 400 13.3333px Arial;
    padding: 100px 50px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
}

html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    background-color: grey;
}

.robot {
    box-sizing: border-box;
    position: absolute;
    width: 160px;
    height: 180px;
    bottom: 0;
    left: calc(50% - 80px);
}

.head {
    position: absolute;
    width: 160px;
    height: 100px;
    background-color: #ccc;
    border-radius: 6px;
    overflow: hidden;
    background: linear-gradient(to right, #ccc 0%, #e6e6e6 40%, #e6e6e6 60%, #ccc 100%);
    transform-origin: 50% 100%;
    -webkit-animation: bob 8000ms ease-in-out alternate infinite -1000ms;
    animation: bob 8000ms ease-in-out alternate infinite -1000ms;
}

.eyes {
    position: absolute;
    top: calc(25% - 10px);
    right: 30px;
    left: 30px;
    height: 20px;
    -webkit-animation: blink 10000ms linear forwards infinite;
    animation: blink 10000ms linear forwards infinite;
}

.eyeball {
    position: absolute;
    width: 12px;
    height: 20px;
    border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
    background-color: black;
}

.eyeball_left {
    left: 0;
    transition: transform 100ms ease-in-out;
}

.eyeball_right {
    right: 0;
    transition: transform 100ms ease-in-out;
}

.mouth {
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: 150px;
    height: 20px;
    background-color: black;
    overflow: hidden;
    border-radius: 5px;
    transition: height 100ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.mouth-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.robot_speaking .mouth {
    height: 40px;
}

.robot_speaking .mouth-container {
    -webkit-animation: speakingAnim 0.3s infinite;
    animation: speakingAnim 0.3s infinite;
}

.mouth-container-line {
    position: absolute;
    top: 50%;
    height: 2px;
    background-color: limegreen;
    width: 100%;
    margin-top: -1px;
}

.torso {
    position: absolute;
    bottom: 0;
    left: calc(50% - 40px);
    width: 80px;
    height: 60px;
    border-radius: 6px 6px 0 0;
    background: linear-gradient(to right, #ccc 0%, #e6e6e6 40%, #e6e6e6 60%, #ccc 100%);
}

.neck {
    position: absolute;
    bottom: 45px;
    left: calc(50% - 15px);
    width: 30px;
    height: 50px;
    border-radius: 15px;
    background: repeating-linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 7%, #646464 10%), linear-gradient(to right, #ccc 0%, #e6e6e6 40%, #e6e6e6 60%, #ccc 100%);
}

.arms {
    position: absolute;
    bottom: 0;
    left: 30px;
    right: 30px;
    height: 50px;
}

.arm {
    position: absolute;
    top: 0;
    width: 20px;
    height: 50px;
    border-radius: 10px 10px 0 0;
    background: repeating-linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 7%, #646464 10%), linear-gradient(to right, #ccc 0%, #e6e6e6 40%, #e6e6e6 60%, #ccc 100%);
}

.arm_left {
    left: 0;
}

.arm_right {
    right: 0;
}

@-webkit-keyframes lowAnim {
    0% {
        filter: url("#low-0");
    }
    25% {
        filter: url("#low-1");
    }
    50% {
        filter: url("#low-2");
    }
    75% {
        filter: url("#low-3");
    }
    100% {
        filter: url("#low-4");
    }
}

@keyframes lowAnim {
    0% {
        filter: url("#low-0");
    }
    25% {
        filter: url("#low-1");
    }
    50% {
        filter: url("#low-2");
    }
    75% {
        filter: url("#low-3");
    }
    100% {
        filter: url("#low-4");
    }
}

@-webkit-keyframes listeningAnim {
    0% {
        filter: url("#listening-0");
    }
    25% {
        filter: url("#listening-1");
    }
    50% {
        filter: url("#listening-2");
    }
    75% {
        filter: url("#listening-3");
    }
    100% {
        filter: url("#listening-4");
    }
}

@keyframes listeningAnim {
    0% {
        filter: url("#listening-0");
    }
    25% {
        filter: url("#listening-1");
    }
    50% {
        filter: url("#listening-2");
    }
    75% {
        filter: url("#listening-3");
    }
    100% {
        filter: url("#listening-4");
    }
}

@-webkit-keyframes speakingAnim {
    0% {
        filter: url("#speaking-0");
    }
    25% {
        filter: url("#speaking-1");
    }
    50% {
        filter: url("#speaking-2");
    }
    75% {
        filter: url("#speaking-3");
    }
    100% {
        filter: url("#speaking-4");
    }
}

@keyframes speakingAnim {
    0% {
        filter: url("#speaking-0");
    }
    25% {
        filter: url("#speaking-1");
    }
    50% {
        filter: url("#speaking-2");
    }
    75% {
        filter: url("#speaking-3");
    }
    100% {
        filter: url("#speaking-4");
    }
}

@-webkit-keyframes bob {
    0% {
        transform: rotate(-3deg);
    }
    40% {
        transform: rotate(-3deg);
        -webkit-animation-timing-function: cubic-bezier(1, 0, 0, 1);
        animation-timing-function: cubic-bezier(1, 0, 0, 1);
    }
    60% {
        transform: rotate(3deg);
    }
    100% {
        transform: rotate(3deg);
    }
}

@keyframes bob {
    0% {
        transform: rotate(-3deg);
    }
    40% {
        transform: rotate(-3deg);
        -webkit-animation-timing-function: cubic-bezier(1, 0, 0, 1);
        animation-timing-function: cubic-bezier(1, 0, 0, 1);
    }
    60% {
        transform: rotate(3deg);
    }
    100% {
        transform: rotate(3deg);
    }
}

@-webkit-keyframes blink {
    50% {
        transform: scale(1, 1);
    }
    51% {
        transform: scale(1, 0.1);
    }
    52% {
        transform: scale(1, 1);
    }
}

@keyframes blink {
    50% {
        transform: scale(1, 1);
    }
    51% {
        transform: scale(1, 0.1);
    }
    52% {
        transform: scale(1, 1);
    }
}



`;

let header = document.getElementById("header");
header.innerHTML = `
<h1>Web Reader - Chitalka</h1>
<br>
<p id = 'p1'>Введите текст, который вы хотите прослушать и нажмите 'ok':</p>
<br>
<input id="text">

<button type="button" onclick="createText()">OK</button>

`;
header.style.textAlign = 'center';
header.style.color = '#ffffff';
header.style.fontSize = '30px';
let p1 = document.getElementById("p1");
p1.style.fontSize = '20px';
p1.style.color = '#000438';


let section = document.getElementById("section");
section.innerHTML = `
<br>
<p id = 'p2'>Нажмите на робота, чтобы прослушать введенный вами текст.</p>
<br>
<div class="robot">


<div class="neck"></div>
<div class="arms">
    <div class="arm arm_left"></div>
    <div class="arm arm_right"></div>
</div>
<div class="torso"></div>
<div class="head">
    <div class="eyes">
        <div class="eyeball eyeball_left"></div>
        <div class="eyeball eyeball_right"></div>
    </div>
    <div class="mouth">
        <div class="mouth-container">
            <div class="mouth-container-line"></div>
        </div>
    </div>
</div>
</div>



<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none">
<defs>
<!-- Low -->
<filter id="low-0">
<feTurbulence id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="0"/>
<feDisplacementMap id="displacement"
                   in="SourceGraphic"
                   in2="noise"
                   scale="1" />
</filter>
<filter id="low-1">
<feTurbulence id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="30"/>
<feDisplacementMap in="SourceGraphic"
                   in2="noise"
                   scale="1.5" />
</filter>
<filter id="low-2">
<feTurbulence id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"/>
<feDisplacementMap in="SourceGraphic"
                   in2="noise"
                   scale="1" />
</filter>
<filter id="low-3">
<feTurbulence id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="30"/>
<feDisplacementMap in="SourceGraphic"
                   in2="noise"
                   scale="1.5" />
</filter>
<filter id="low-4">
<feTurbulence id="turbulence"
              baseFrequency="0.1"
              numOctaves="3"
              result="noise"
              seed="4"/>
<feDisplacementMap in="SourceGraphic"
                   in2="noise"
                   scale="0.5" />
</filter>
<!-- Listening -->
<filter id="listening-0">
<feTurbulence id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="0"/>
<feDisplacementMap id="displacement"
                   in="SourceGraphic"
                   in2="noise"
                   scale="2" />
</filter>
<filter id="listening-1">
<feTurbulence id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="30"/>
<feDisplacementMap in="SourceGraphic"
                   in2="noise"
                   scale="3" />
</filter>
<filter id="listening-2">
<feTurbulence id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"/>
<feDisplacementMap in="SourceGraphic"
                   in2="noise"
                   scale="2" />
</filter>
<filter id="listening-3">
<feTurbulence id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="30"/>
<feDisplacementMap in="SourceGraphic"
                   in2="noise"
                   scale="3" />
</filter>
<filter id="listening-4">
<feTurbulence id="turbulence"
              baseFrequency="0.1"
              numOctaves="3"
              result="noise"
              seed="4"/>
<feDisplacementMap in="SourceGraphic"
                   in2="noise"
                   scale="1" />
</filter>
<!-- Speaking -->
<filter id="speaking-0">
<feTurbulence id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="0"/>
<feDisplacementMap id="displacement"
                   in="SourceGraphic"
                   in2="noise"
                   scale="12" />
</filter>
<filter id="speaking-1">
<feTurbulence id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="30"/>
<feDisplacementMap in="SourceGraphic"
                   in2="noise"
                   scale="13" />
</filter>
<filter id="speaking-2">
<feTurbulence id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"/>
<feDisplacementMap in="SourceGraphic"
                   in2="noise"
                   scale="12" />
</filter>
<filter id="speaking-3">
<feTurbulence id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="30"/>
<feDisplacementMap in="SourceGraphic"
                   in2="noise"
                   scale="13" />
</filter>
<filter id="speaking-4">
<feTurbulence id="turbulence"
              baseFrequency="0.1"
              numOctaves="3"
              result="noise"
              seed="4"/>
<feDisplacementMap in="SourceGraphic"
                   in2="noise"
                   scale="11" />
</filter>
</defs>
</svg>`;
let p2 = document.getElementById('p2');
p2.style.color = '#000438';
p2.style.fontSize = '20px';
p2.style.textAlign = 'center';

let footer = document.getElementById('footer');
footer.innerHTML = `
<br>
<p>C уважением, Берлин Андрей.</p>

`;

footer.style.textAlign = 'center';

function createText() {
    const CONFIG = {
        DEFAULT: false,
        VOICE: 'Fred'
    };


    const robot = document.querySelector('.robot');


    let a = document.getElementById("text").value;

    let message = new SpeechSynthesisUtterance();

    message.text = a /* `Дорогой Даниель! Приветик! Я робот ботик. Твои Родители меня просили передать тебе, что они тебя очень любят и   поздравляют тебя С новым Годом! И я желаю тебе самого наилучшего!`*/ ;

    let voices = [];


    speechSynthesis.addEventListener('voiceschanged', event => {
        voices = speechSynthesis.getVoices();
        if (!CONFIG.DEFAULT) {
            message.voice = voices.find(voice => voice.name === CONFIG.VOICE);
        }
    });

    message.onend = function(event) {
        robot.classList.remove('robot_speaking');
    };

    robot.addEventListener('click', event => {
        if (speechSynthesis.speaking) {
            robot.classList.remove('robot_speaking');
            speechSynthesis.cancel();
        } else {
            robot.classList.add('robot_speaking');
            speechSynthesis.speak(message);
        }
    })
};