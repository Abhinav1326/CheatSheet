import React from 'react';
import Prism from "prismjs";
import '../prism/prism.css';
import '../rtm/buttons.css';

function Dis(props) {

    return (
        <>
            <div className="firstbutton">

                <div className="cont">
                    <div className="button1">Submit</div>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;div className="button1"&gt;Submit&lt;/div&gt;
                        </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>
                            .cont &#123;
                            background-color: #fff;
                            border: 1px solid #000;
                            width: 90%;
                            border-radius: .3rem;
                            &#125;

                            .button1 &#123;
                            height: 3.3rem;
                            width: 7.5rem;
                            margin: 1rem;
                            display: grid;
                            place-items: center;
                            font-size: 1.5rem;
                            position: relative;
                            color: black;
                            z-index: 1;
                            border: .2rem solid black;
                            overflow: hidden;
                            &#125;
                            .button1::before &#123;
                            content: "";
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            background-color: black;
                            z-index: -1;
                            transform: translateX(-100%);
                            transition: all .4s linear;
                            &#125;

                            .button1:hover:before &#123;
                            transform: translateX(0);
                            &#125;

                            .button1:hover &#123;
                            color: white;
                            cursor: pointer;
                            &#125;

                            .title &#123;
                            margin-top: 1rem;
                            &#125;
                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* ------------------------------------------ Button 2 ------------------------------------------------- */}
            <div className="secondbutton">

                <div className="cont bg-dark">
                    <a className="btn2" href="javascript:void(0)">
                        <span className="btnspan2"></span>
                        <span className="btnspan2"></span>
                        <span className="btnspan2"></span>
                        <span className="btnspan2"></span>
                        Neon Button
                    </a>
                    <a className="btn2" href="javascript:void(0)">
                        <span className="btnspan2"></span>
                        <span className="btnspan2"></span>
                        <span className="btnspan2"></span>
                        <span className="btnspan2"></span>
                        Neon Button
                    </a>
                    <a className="btn2" href="javascript:void(0)">
                        <span className="btnspan2"></span>
                        <span className="btnspan2"></span>
                        <span className="btnspan2"></span>
                        <span className="btnspan2"></span>
                        Neon Button
                    </a>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;a href="#"&gt;
                            &lt;span&gt;&lt;/span&gt;
                            &lt;span&gt;&lt;/span&gt;
                            &lt;span&gt;&lt;/span&gt;
                            &lt;span&gt;&lt;/span&gt;
                            Neon Button
                            &lt;/a&gt;
                        </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>
                            a &#123;
                            position: relative;
                            display: inline-block;
                            padding: 25px 30px;
                            margin: 40px 0;
                            color: #03e9f4;
                            text-decoration: none;
                            font-size: 24px;
                            text-transform: uppercase;
                            overflow: hidden;
                            transition: 0.5s;
                            letter-spacing: 4px;
                            -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
                            &#125;

                            a:hover &#123;
                            background: #03e9f4;
                            color: #050801;
                            box-shadow: 0 0 5px #03e9f4,
                            0 0 25px #03e9f4,
                            0 0 50px #03e9f4,
                            0 0 200px #03e9f4;
                            &#125;

                            a span &#123;
                            position: absolute;
                            display: block;
                            &#125;

                            a span:nth-child(1) &#123;
                            top: 0;
                            left: -100%;
                            width: 100%;
                            height: 2px;
                            background: linear-gradient(90deg, transparent, #03e9f4);
                            animation: animate1 1s linear infinite;
                            &#125;

                            @keyframes animate1 &#123;
                            0% &#123;
                            left: -100%;
                            &#125;
                            50%, 100% &#123;
                            left: 100%;
                            &#125;
                            &#125;

                            a span:nth-child(2) &#123;
                            top: -100%;
                            right: 0;
                            width: 2px;
                            height: 100%;
                            background: linear-gradient(180deg, transparent, #03e9f4);
                            animation: animate2 1s linear infinite;
                            animation-delay: 0.25s;
                            &#125;

                            @keyframes animate2 &#123;
                            0% &#123;
                            top: -100%;
                            &#125;
                            50%, 100% &#123;
                            top: 100%;
                            &#125;
                            &#125;

                            a span:nth-child(3) &#123;
                            bottom: 0;
                            right: -100%;
                            width: 100%;
                            height: 2px;
                            background: linear-gradient(270deg, transparent, #03e9f4);
                            animation: animate3 1s linear infinite;
                            animation-delay: 0.5s;
                            &#125;

                            @keyframes animate3 &#123;
                            0% &#123;
                            right: -100%;
                            &#125;
                            50%, 100% &#123;
                            right: 100%;
                            &#125;
                            &#125;

                            a span:nth-child(4) &#123;
                            left: 0;
                            bottom: -100%;
                            width: 2px;
                            height: 100%;
                            background: linear-gradient(360deg, transparent, #03e9f4);
                            animation: animate4 1s linear infinite;
                            animation-delay: 0.75s;
                            &#125;

                            @keyframes animate4 &#123;
                            0% &#123;
                            bottom: -100%;
                            &#125;
                            50%, 100% &#123;
                            bottom: 100%;
                            &#125;
                            &#125;
                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* ------------------------------------------ Button 3 ------------------------------------------------- */}
            <div className="thirdbutton">

                <div className="cont bg-dark">
                    <a href="avascript:void(0)" className="btn3">
                        <span className="btnspan3">Liquid</span>
                        <div className="liquid3"></div>
                    </a>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;a href="#"&gt;
                            &lt;span &gt;Liquid&lt;/span&gt;
                            &lt;div class="liquid"&gt;&lt;/div&gt;
                            &lt;/a&gt;
                        </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>
                            a &#123;
                            position: relative;
                            padding: 20px 50px;
                            display: block;
                            text-decoration: none;
                            text-transform: uppercase;
                            width: 200px;
                            overflow: hidden;
                            &#125;

                            a span &#123;
                            position: relative;
                            z-index: 1;
                            color: #fff;
                            font-size: 20px;
                            letter-spacing: 8px;
                            &#125;

                            a .liquid &#123;
                            position: absolute;
                            left: 0;
                            top: -80px;
                            width: 200px;
                            height: 200px;
                            background: #4973ff;
                            box-shadow: inset 0 0 50px rgba(0, 0, 0, .5);
                            transition: 0.5s;
                            &#125;
                            a:hover .liquid &#123;
                            top: -120px;
                            &#125;

                            a .liquid:before,
                            a .liquid:after &#123;
                            content: "";
                            position: absolute;
                            width: 200%;
                            height: 200%;
                            top: 0;
                            left: 50%;
                            transform: translate(-50%, -75%);
                            &#125;

                            a .liquid:before&#123;
                            border-radius: 45%;
                            background: rgba(20, 20, 20, 1);
                            animation: animate 5s linear infinite;
                            &#125;
                            a .liquid:after&#123;
                            border-radius: 40%;
                            background: rgba(20, 20, 20, 0.5);
                            animation: animate 10s linear infinite;
                            &#125;

                            @keyframes animate &#123;
                            0% &#123;
                            transform: translate(-50%, -75%) rotate(0deg);
                            &#125;
                            100% &#123;
                            transform: translate(-50%, -75%) rotate(360deg);
                            &#125;
                            &#125;
                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* ------------------------------------------ Button 4 ------------------------------------------------- */}
            <div className="forthbutton">

                <div className="cont bg-dark">
                    <div className="btn4div">
                        <a href="javascript:void(0)" className="btn4">Button</a>
                    </div>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;a href="#"&gt;Button&lt;/a&gt;
                        </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>
                            a &#123;
                            position: absolute;
                            top: 50%;
                            left: 50%;transform: translate(-50%, -50%);
                            padding: 15px 30px;
                            text-transform: uppercase;
                            text-decoration: none;
                            color: #fff;
                            letter-spacing: 2px;
                            font-size: 1.5rem;
                            &#125;

                            a:before &#123;
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: #03a9f4;
                            z-index: -1;
                            transition: transform 0.5s;
                            transform-origin: bottom right;
                            transform: scale(0);
                            &#125;

                            a:hover:before &#123;
                            transition: transform 0.5s;
                            transform-origin: top left;
                            transform: scale(1);
                            &#125;

                            a:after &#123;
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: transparent;
                            border: 2px solid #fff;
                            z-index: -1;
                            box-sizing: border-box;
                            transition: transform 0.5s;
                            transform-origin: top left;
                            transform: scale(1);
                            &#125;

                            a:hover:after &#123;
                            transition: transform 0.5s;
                            transform-origin: bottom right;
                            transform: scale(0);
                            &#125;
                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* ------------------------------------------ Button 5 ------------------------------------------------- */}
            <div className="fifthbutton">

                <div className="cont bg-dark">
                    <a href="javascript:void(0)" className="button_5">Pixel Hover</a>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;a href="#"&gt;Pixel Hover&lt;/a&gt;
                        </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>
                            body &#123;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            min-height: 100vh;
                            flex-direction: column;
                            background: #111;
                            &#125;
                            a &#123;
                            position: relative;
                            width: 180px;
                            height: 60px;
                            color: #fff;
                            text-decoration: none;
                            text-transform: uppercase;
                            text-align: center;
                            line-height: 60px;
                            letter-spacing: 2px;
                            margin: 20px;
                            transition: 0.5s;
                            &#125;

                            a:hover &#123;
                            background: #ec0b36 url(pixel.png);
                            transition-delay: 0.8s;
                            background-size: 180px;
                            animation: animate 0.8s steps(8) forwards;
                            &#125;

                            @keyframes animate &#123;
                            0% &#123;
                            background-position-y: 0;
                            &#125;
                            100% &#123;
                            background-position-y: -480px;
                            &#125;
                            &#125;
                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* ------------------------------------------ Button 6 ------------------------------------------------- */}
            <div className="sixthbutton">

                <div className="cont bg-dark">
                    <div className="container_6">
                        <a href="javascript:void(0)"><span>Read More</span></a>
                        <a href="javascript:void(0)"><span>Read More</span></a>
                        <a href="javascript:void(0)"><span>Read More</span></a>
                    </div>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;div class="container"&gt;
                            &lt;a href="#"&gt;&lt;span&gt;Read More&lt;/span&gt;&lt;/a&gt;
                            &lt;a href="#"&gt;&lt;span&gt;Read More&lt;/span&gt;&lt;/a&gt;
                            &lt;a href="#"&gt;&lt;span&gt;Read More&lt;/span&gt;&lt;/a&gt;
                            &lt;/div&gt;
                        </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>
                            body &#123;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                            background: #000;
                            &#125;

                            .container &#123;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-wrap: wrap;
                            &#125;

                            .container a &#123;
                            position: relative;
                            display: inline-block;
                            padding: 15px 30px;
                            border: 2px solid #0f0;
                            margin: 40px;
                            text-transform: uppercase;
                            font-weight: 600;
                            text-decoration: none;
                            letter-spacing: 2px;
                            color: #fff;
                            -webkit-box-reflect: below 0px linear-gradient(transparent, #0002);
                            transition: 0.5s;
                            transition-delay: 0s;
                            &#125;

                            .container a:hover &#123;
                            color: #000;
                            transition-delay: 1.5s;
                            box-shadow: 0 0 10px #0f0,
                            0 0 20px #0f0,
                            0 0 40px #0f0,
                            0 0 80px #0f0,
                            0 0 160px #0f0;
                            &#125;

                            .container a span &#123;
                            position: relative;
                            z-index: 100;
                            &#125;

                            .container a:nth-child(2) &#123;
                            filter: hue-rotate(80deg);
                            &#125;


                            .container a::before &#123;
                            content: "";
                            position: absolute;
                            left: -20px;
                            top: 50%;
                            transform: translateY(-50%);
                            width: 20px;
                            height: 2px;
                            background: #0f0;
                            box-shadow: 5px -8px 0 #0f0,
                            5px 8px 0 #0f0;
                            transition: width 0.5s, left 0.5s, height 0.5s, box-shadow 0.5s;
                            transition-delay: 1s, 0.5s, 0s, 0s;
                            &#125;

                            .container a:hover::before &#123;
                            width: 60%;
                            height: 100%;
                            left: -2px;
                            box-shadow: 5px 0 0 #0f0,
                            5px 0 0 #0f0;
                            transition-delay: 0s, 0.5s, 1s, 1s;
                            &#125;

                            .container a::after &#123;
                            content: "";
                            position: absolute;
                            right: -20px;
                            top: 50%;
                            transform: translateY(-50%);
                            width: 20px;
                            height: 2px;
                            background: #0f0;
                            box-shadow: -5px -8px 0 #0f0,
                            -5px 8px 0 #0f0;
                            transition: width 0.5s, left 0.5s, height 0.5s, box-shadow 0.5s;
                            transition-delay: 1s, 0.5s, 0s, 0s;
                            &#125;

                            .container a:hover::after &#123;
                            width: 60%;
                            height: 100%;
                            right: -2px;
                            box-shadow: -5px 0 0 #0f0,
                            -5px 0 0 #0f0;
                            transition-delay: 0s, 0.5s, 1s, 1s;
                            &#125;
                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* ------------------------------------------ Button 7 ------------------------------------------------- */}
            <div className="seventhbutton">

                <div className="cont bg-dark cont_btn_7">
                    <a href="javascript:void(0)" className="btn_7">
                        <span>Button</span>
                        <span>Button</span>
                        <span>Button</span>
                        <span>Button</span>
                    </a>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;a href="#"&gt;
                            &lt;span&gt;Button&lt;/span&gt;
                            &lt;span&gt;Button&lt;/span&gt;
                            &lt;span&gt;Button&lt;/span&gt;
                            &lt;span&gt;Button&lt;/span&gt;
                            &lt;/a&gt;
                        </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>
                            body &#123;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                            background: #222;
                            overflow: hidden;
                            &#125;

                            a &#123;
                            position: relative;
                            width: 150px;
                            height: 50px;
                            transform-style: preserve-3d;
                            transition: 4s;
                            &#125;

                            a:hover &#123;
                            transform: perspective(1000px) rotateX(360deg);

                            &#125;

                            a span &#123;
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            color: #000;
                            background: rgba(255, 255, 255, 0.9);
                            font-family: sans-serif;
                            text-transform: uppercase;
                            font-size: 22px;
                            letter-spacing: 2px;
                            transition: 0.5s;
                            border: 2px solid #000;
                            box-sizing: border-box;
                            box-shadow: inset 0 20px 50px rgba(0, 0, 0, 0.2);

                            &#125;

                            a:hover span &#123;
                            color: #fff;
                            background: rgba(3, 169, 244, .8);
                            &#125;

                            a span:nth-child(1) &#123;
                            transform: rotateX(360deg) translateZ(25px);
                            &#125;
                            a span:nth-child(2) &#123;
                            transform: rotateX(270deg) translateZ(25px);
                            &#125;
                            a span:nth-child(3) &#123;
                            transform: rotateX(180deg) translateZ(25px);
                            &#125;
                            a span:nth-child(4) &#123;
                            transform: rotateX(90deg) translateZ(25px);
                            &#125;
                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* ------------------------------------------ Button 8 ------------------------------------------------- */}
            <div className="eighthbutton">

                <div className="cont bg-dark cont_btn_8">
                    <a href="javascript:void(0)" class="btn_8">
                        <span>Button</span>
                        <span>Button</span>
                    </a>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;a href="#"&gt;
                            &lt;span&gt;Button&lt;/span&gt;
                            &lt;span&gt;Button&lt;/span&gt;
                            &lt;span&gt;Button&lt;/span&gt;
                            &lt;span&gt;Button&lt;/span&gt;
                            &lt;/a&gt;
                        </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>
                            body &#123;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                            background: #222;
                            overflow: hidden;
                            &#125;

                            a &#123;
                            position: relative;
                            width: 150px;
                            height: 50px;
                            transform-style: preserve-3d;
                            transition: 4s;
                            &#125;

                            a:hover &#123;
                            transform: perspective(1000px) rotateX(360deg);

                            &#125;

                            a span &#123;
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            color: #000;
                            background: rgba(255, 255, 255, 0.9);
                            font-family: sans-serif;
                            text-transform: uppercase;
                            font-size: 22px;
                            letter-spacing: 2px;
                            transition: 0.5s;
                            border: 2px solid #000;
                            box-sizing: border-box;
                            box-shadow: inset 0 20px 50px rgba(0, 0, 0, 0.2);

                            &#125;

                            a:hover span &#123;
                            color: #fff;
                            background: rgba(3, 169, 244, .8);
                            &#125;

                            a span:nth-child(1) &#123;
                            transform: rotateX(360deg) translateZ(25px);
                            &#125;
                            a span:nth-child(2) &#123;
                            transform: rotateX(270deg) translateZ(25px);
                            &#125;
                            a span:nth-child(3) &#123;
                            transform: rotateX(180deg) translateZ(25px);
                            &#125;
                            a span:nth-child(4) &#123;
                            transform: rotateX(90deg) translateZ(25px);
                            &#125;
                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* ------------------------------------------ Button 9 ------------------------------------------------- */}
            <div className="ninthbutton">

                <div className="cont bg-dark cont_btn_9">
                    <a href="javascript:void(0)" class="btn_9">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Button
                    </a>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;a href="#"&gt;
                            &lt;span&gt;Button&lt;/span&gt;
                            &lt;span&gt;Button&lt;/span&gt;
                            &lt;span&gt;Button&lt;/span&gt;
                            &lt;span&gt;Button&lt;/span&gt;
                            &lt;/a&gt;
                        </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>
                            body &#123;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                            background: #222;
                            overflow: hidden;
                            &#125;

                            a &#123;
                            position: relative;
                            width: 150px;
                            height: 50px;
                            transform-style: preserve-3d;
                            transition: 4s;
                            &#125;

                            a:hover &#123;
                            transform: perspective(1000px) rotateX(360deg);

                            &#125;

                            a span &#123;
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            color: #000;
                            background: rgba(255, 255, 255, 0.9);
                            font-family: sans-serif;
                            text-transform: uppercase;
                            font-size: 22px;
                            letter-spacing: 2px;
                            transition: 0.5s;
                            border: 2px solid #000;
                            box-sizing: border-box;
                            box-shadow: inset 0 20px 50px rgba(0, 0, 0, 0.2);

                            &#125;

                            a:hover span &#123;
                            color: #fff;
                            background: rgba(3, 169, 244, .8);
                            &#125;

                            a span:nth-child(1) &#123;
                            transform: rotateX(360deg) translateZ(25px);
                            &#125;
                            a span:nth-child(2) &#123;
                            transform: rotateX(270deg) translateZ(25px);
                            &#125;
                            a span:nth-child(3) &#123;
                            transform: rotateX(180deg) translateZ(25px);
                            &#125;
                            a span:nth-child(4) &#123;
                            transform: rotateX(90deg) translateZ(25px);
                            &#125;
                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* ------------------------------------------ Button 10 ------------------------------------------------- */}
            <div className="tenthbutton">

                <div className="cont bg-dark cont_btn_10">

                    <div class="center_btn_10">
                        <a href="#"><span></span>Click Here</a>
                    </div>
                    
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;div class="center"&gt;
                            &lt;a href="#"&gt;&lt;span&gt;&lt;/span&gt;Click Here&lt;/a&gt;
                            &lt;/div&gt;
                        </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>
                            body &#123;
                            font-family: Arial, Helvetica, sans-serif;
                            background: #262626;
                            &#125;

                            .center &#123;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            &#125;

                            .center a &#123;
                            display: inherit;
                            width: 150px;
                            height: 50px;
                            color: #ff0;
                            font-size: 20px;
                            background: transparent;
                            text-align: center;
                            line-height: 50px;
                            text-decoration: none;
                            text-transform: uppercase;
                            z-index: 1;
                            transition: .5s;
                            &#125;

                            .center a:before,
                            .center a:after &#123;
                            content: "";
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            background-color: #FF0;
                            opacity: 0;
                            transition: .3s;
                            z-index: -1;
                            overflow: hidden;
                            &#125;

                            .center a:before &#123;
                            left: 0;
                            box-shadow: -100px 0 0 #ff0;
                            &#125;
                            .center a:after &#123;
                            right: 0;
                            box-shadow: 100px 0 0 #ff0;
                            &#125;

                            .center a:hover:before &#123;
                            left: calc(50% - 10px);
                            opacity: 1;
                            box-shadow: 30px 0 0 #ff0;
                            &#125;

                            .center a:hover:after &#123;
                            right: calc(50% - 10px);
                            opacity: 1;
                            box-shadow: -30px 0 0 #ff0;
                            &#125;

                            span &#123;
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: #ff0;
                            z-index: -2;
                            transform: scale(0);
                            transition: .3s;
                            opacity: 0;
                            border-radius: 8px;
                            box-shadow: 0 10px 15px rgba(0, 0, 0, .5);
                            &#125;

                            .center a:hover span &#123;
                            opacity: 1;
                            transform: scale(1);
                            transition-delay: .3s;
                            &#125;

                            .center a:hover &#123;
                            color: #262626;
                            transition-delay: .3s;
                            &#125;
                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />

        </>
    );
}

export default Dis;