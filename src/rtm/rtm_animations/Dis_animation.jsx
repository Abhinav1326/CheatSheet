import React from 'react';
import Prism from "prismjs";
import '../rtm_cards/prism.css';
import './animation.css';

function Dis_animation(props) {

    return (
        <>
            <div className="effect1">

                <div className="cont_effects">
                    <div className="loader1">
                        <div className="effectdiv"></div>
                        <div className="effectdiv"></div>
                        <div className="effectdiv"></div>
                        <div className="effectdiv"></div>
                        <div className="effectdiv"></div>
                    </div>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;div class="loader"&gt;
                            &lt;div style="--i:0"&gt;&lt;/div&gt;
                            &lt;div style="--i:1"&gt;&lt;/div&gt;
                            &lt;div style="--i:2"&gt;&lt;/div&gt;
                            &lt;div style="--i:3"&gt;&lt;/div&gt;
                            &lt;div style="--i:4"&gt;&lt;/div&gt;
                            &lt;/div&gt;
                        </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>

                            .loader &#123;
                            display: flex;
                            flex-direction: row;
                            &#125;

                            .loader div &#123;
                            position: relative;
                            width: 40px;
                            height: 200px;
                            margin: 20px;
                            border-radius: 40px;
                            overflow: hidden;
                            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05, #edf1f4));
                            border: 2px solid #edf1f4;
                            box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1),
                            -15px -15px 20px #fff,
                            inset -5px -5px 5px rgba(255, 255, 255, 0.5),
                            inset 5px 5px 5px rgba(0, 0, 0, 0.05);
                            &#125;

                            .loader div::before &#123;
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            z-index: 10;
                            border-radius: 40px;
                            box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1),
                            -15px -15px 20px #fff,
                            inset -5px -5px 5px rgba(255, 255, 255, 0.5),
                            inset 5px 5px 5px rgba(0, 0, 0, 0.05);
                            &#125;

                            .loader div::after &#123;
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 36px;
                            height: 36px;
                            background: #fff;
                            border-radius: 50%;
                            box-shadow: inset -5px -5px 5px rgba(0, 0, 0, 0.2),
                            0 420px 0 400px #2196f3;
                            animation: animate 2.5s ease-in-out infinite;
                            transform: translateY(160px);
                            animation-delay: calc(-0.5s * var(--i));
                            &#125;


                            @keyframes animate &#123;
                            0% &#123;
                            transform: translateY(160px);
                            filter: hue-rotate(180deg);
                            &#125;
                            50% &#123;
                            transform: translateY(0px);
                            &#125;
                            100% &#123;
                            transform: translateY(160px);
                            filter: hue-rotate(0deg);
                            &#125;

                            &#125;

                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* ---------------------------------------Animation 2------------------------------- */}
            <div className="effect2">

                <div className="cont_effects cont_effects2">
                    <div class="effect_container2">
                        <div class="effect_box2">
                            <div class="effect_cube2"></div>
                        </div>
                    </div>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;div class="container"&gt;
                            &lt;div class="box"&gt;
                            &lt;div class="cube"&gt;&lt;/div&gt;
                            &lt;/div&gt;
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
                            overflow: hidden;
                            &#125;

                            .container &#123;
                            position: relative;
                            width: 100%;
                            transform: rotate(-35deg);
                            &#125;

                            .container .box &#123;
                            position: relative;
                            left: -200px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: calc(100% + 400px);
                            height: 200px;
                            -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
                            animation: animateSurface2 1.5s ease-in-out infinite;
                            &#125;

                            .container .box .cube &#123;
                            position: relative;
                            width: 200px;
                            height: 200px;
                            background-color: #03e9f4;
                            box-shadow: 0 0 5px rgba(3, 233, 244, 1),
                            0 0 25px rgba(3, 233, 244, 1),
                            0 0 50px rgba(3, 233, 244, 1),
                            0 0 100px rgba(3, 233, 244, 1),
                            0 0 200px rgba(3, 233, 244, 0.5),
                            0 0 300px rgba(3, 233, 244, 0.5);
                            transform-origin: bottom right;
                            animation: effect_animate2 1.5s ease-in-out infinite;
                            &#125;

                            @keyframes animateSurface2 &#123;
                            0% &#123;
                            transform: translateX(0px);
                            &#125;
                            100% &#123;
                            transform: translateX(-200px);
                            &#125;
                            &#125;

                            @keyframes effect_animate2 &#123;
                            0% &#123;
                            transform: rotate(0deg);
                            &#125;
                            60% &#123;
                            transform: rotate(90deg);
                            &#125;
                            65% &#123;
                            transform: rotate(85deg);
                            &#125;
                            70% &#123;
                            transform: rotate(90deg);
                            &#125;
                            75% &#123;
                            transform: rotate(87.5deg);
                            &#125;
                            80%, 100% &#123;
                            transform: rotate(90deg);
                            &#125;
                            &#125;

                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* ---------------------------------------Animation 3------------------------------- */}
            <div className="effect3">

                <div className="cont_effects cont_effects3">
                    <div class="effect_container3">
                        <div class="infinite">
                            <div class="shadow"></div>
                        </div>
                        <div class="box">
                            <div class="square"></div>
                        </div>
                    </div>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;div class="effect_container3"&gt;
                            &lt;div class="infinite"&gt;
                            &lt;div class="shadow"&gt;&lt;/div&gt;
                            &lt;/div&gt;
                            &lt;div class="box"&gt;
                            &lt;div class="square"&gt;&lt;/div&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;
                        </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>
                            body &#123;
                            overflow: hidden;
                            &#125;

                            .effect_container3 &#123;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                            background: radial-gradient(#2e2e2e, #333);
                            &#125;

                            .effect_container3 .infinite &#123;
                            position: relative;
                            width: 800px;
                            height: 160px;
                            background: #525252;
                            transform-origin: bottom;
                            transform-style: preserve-3d;
                            transform: perspective(500px) rotateX(30deg);
                            &#125;

                            .effect_container3 .infinite::before &#123;
                            content: "";
                            position: absolute;
                            top: 50%;
                            left: 0;
                            transform: translateY(-50%);
                            width: 100%;
                            height: 10px;
                            background: linear-gradient(90deg, #fff 0%, #fff 70%, #525252 70%, #525252 100%);
                            background-size: 120px;
                            animation: animateRoad3 1s linear infinite;
                            &#125;

                            .effect_container3 .infinite::after &#123;
                            content: "";
                            position: absolute;
                            width: 100%;
                            height: 30px;
                            background: #333;
                            bottom: -30px;
                            transform-origin: top;
                            transform: perspective(500px) rotateX(-25deg);
                            &#125;

                            .effect_container3 .shadow &#123;
                            position: absolute;
                            bottom: -93px;
                            left: 50%;
                            width: 95%;
                            transform: translatex(-50%);
                            height: 60px;
                            background: linear-gradient(rgba(0, 0, 0, 0.25), transparent);

                            &#125;

                            .effect_container3 .box &#123;
                            position: absolute;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, transparent, #0004);
                            animation: animate_effect_box3 1s linear infinite;
                            &#125;

                            .effect_container3 .box .square &#123;
                            position: relative;
                            width: 100px;
                            height: 100px;
                            background-color: #fff;
                            transform-origin: bottom right;
                            animation: effect_animante3 1s linear infinite;
                            &#125;

                            @keyframes effect_animante3 &#123;
                            0% &#123;
                            transform: rotate(0deg);
                            &#125;
                            100% &#123;
                            transform: rotate(90deg);
                            &#125;
                            &#125;

                            @keyframes animate_effect_box3 &#123;
                            0% &#123;
                            transform: translateX(0);
                            &#125;
                            100% &#123;
                            transform: translateX(-100px);
                            &#125;

                            &#125;

                            @keyframes animateRoad3 &#123;
                            0% &#123;
                            background-position: 0;
                            &#125;
                            100% &#123;
                            background-position: -120px;
                            &#125;
                            &#125;


                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* ---------------------------------------Animation 4 ------------------------------- */}
            <div className="effect4">

                <div className="cont_effects cont_effects4">
                    <div class="effect_container4">
                        <div class="box">
                            <span><i>battlegrounds</i> mobile <i>india</i></span>
                            <span><i>battlegrounds</i> mobile <i>india</i></span>
                            <span><i>battlegrounds</i> mobile <i>india</i></span>
                            <span><i>battlegrounds</i> mobile <i>india</i></span>
                            <span><i>battlegrounds</i> mobile <i>india</i></span>
                            <span><i>battlegrounds</i> mobile <i>india</i></span>
                            <span><i>battlegrounds</i> mobile <i>india</i></span>
                            <span><i>battlegrounds</i> mobile <i>india</i></span>
                            <span><i>battlegrounds</i> mobile <i>india</i></span>
                            <span><i>battlegrounds</i> mobile <i>india</i></span>
                            <span><i>battlegrounds</i> mobile <i>india</i></span>
                            <span><i>battlegrounds</i> mobile <i>india</i></span>
                            <span><i>battlegrounds</i> mobile <i>india</i></span>
                        </div>
                    </div>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;div class="container"&gt;
                            &lt;div class="box"&gt;
                            &lt;span&gt;&lt;i&gt;battlegrounds&lt;/i&gt; mobile &lt;i&gt;india&lt;/i&gt;&lt;/span&gt;
                            &lt;span&gt;&lt;i&gt;battlegrounds&lt;/i&gt; mobile &lt;i&gt;india&lt;/i&gt;&lt;/span&gt;
                            &lt;span&gt;&lt;i&gt;battlegrounds&lt;/i&gt; mobile &lt;i&gt;india&lt;/i&gt;&lt;/span&gt;
                            &lt;span&gt;&lt;i&gt;battlegrounds&lt;/i&gt; mobile &lt;i&gt;india&lt;/i&gt;&lt;/span&gt;
                            &lt;span&gt;&lt;i&gt;battlegrounds&lt;/i&gt; mobile &lt;i&gt;india&lt;/i&gt;&lt;/span&gt;
                            &lt;span&gt;&lt;i&gt;battlegrounds&lt;/i&gt; mobile &lt;i&gt;india&lt;/i&gt;&lt;/span&gt;
                            &lt;span&gt;&lt;i&gt;battlegrounds&lt;/i&gt; mobile &lt;i&gt;india&lt;/i&gt;&lt;/span&gt;
                            &lt;span&gt;&lt;i&gt;battlegrounds&lt;/i&gt; mobile &lt;i&gt;india&lt;/i&gt;&lt;/span&gt;
                            &lt;span&gt;&lt;i&gt;battlegrounds&lt;/i&gt; mobile &lt;i&gt;india&lt;/i&gt;&lt;/span&gt;
                            &lt;span&gt;&lt;i&gt;battlegrounds&lt;/i&gt; mobile &lt;i&gt;india&lt;/i&gt;&lt;/span&gt;
                            &lt;span&gt;&lt;i&gt;battlegrounds&lt;/i&gt; mobile &lt;i&gt;india&lt;/i&gt;&lt;/span&gt;
                            &lt;span&gt;&lt;i&gt;battlegrounds&lt;/i&gt; mobile &lt;i&gt;india&lt;/i&gt;&lt;/span&gt;
                            &lt;span&gt;&lt;i&gt;battlegrounds&lt;/i&gt; mobile &lt;i&gt;india&lt;/i&gt;&lt;/span&gt;
                            &lt;/div&gt;
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
                            background: #222;
                            overflow: hidden;
                            &#125;



                            .effect_container4 &#123;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            &#125;

                            .effect_container4 .box &#123;
                            transform-style: preserve-3d;
                            animation: animate 25s linear infinite;
                            &#125;

                            @keyframes animate &#123;
                            0% &#123;
                            transform: perspective(1000px) rotateX(0deg) rotate(45deg);
                            &#125;
                            100% &#123;
                            transform: perspective(1000px) rotateX(360deg) rotate(45deg);
                            &#125;
                            &#125;

                            .effect_container4 .box span:nth-child(1)&#123;
                            --i:1;
                            &#125;
                            .effect_container4 .box span:nth-child(2)&#123;
                            --i:2;
                            &#125;
                            .effect_container4 .box span:nth-child(3)&#123;
                            --i:3;
                            &#125;
                            .effect_container4 .box span:nth-child(4)&#123;
                            --i:4;
                            &#125;
                            .effect_container4 .box span:nth-child(5)&#123;
                            --i:5;
                            &#125;
                            .effect_container4 .box span:nth-child(6)&#123;
                            --i:6;
                            &#125;
                            .effect_container4 .box span:nth-child(7)&#123;
                            --i:7;
                            &#125;
                            .effect_container4 .box span:nth-child(8)&#123;
                            --i:8;
                            &#125;
                            .effect_container4 .box span:nth-child(9)&#123;
                            --i:9;
                            &#125;
                            .effect_container4 .box span:nth-child(10)&#123;
                            --i:10;
                            &#125;
                            .effect_container4 .box span:nth-child(11)&#123;
                            --i:11;
                            &#125;
                            .effect_container4 .box span:nth-child(12)&#123;
                            --i:12;
                            &#125;
                            .effect_container4 .box span:nth-child(13)&#123;
                            --i:13;
                            &#125;
                            .effect_container4 .box span:nth-child(14)&#123;
                            --i:14;
                            &#125;
                            .effect_container4 .box span:nth-child(15)&#123;
                            --i:15;
                            &#125;
                            .effect_container4 .box span:nth-child(16)&#123;
                            --i:16;
                            &#125;

                            .effect_container4 .box span &#123;
                            position: absolute;
                            color: #fff;
                            font-size: 3.5em;
                            white-space: nowrap;
                            text-transform: uppercase;
                            font-weight: 900;
                            padding: 0 10px;
                            background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.5), transparent);
                            line-height: 0.76em;
                            transform-style: preserve-3d;
                            text-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
                            transform: translate(-50%, -50%) rotateX(calc(var(--i) * 27.6923076923deg)) translateZ(110px)
                            &#125;

                            .effect_container4 .box span i:nth-child(1) &#123;
                            font-style: initial;
                            color: #f16413;
                            &#125;

                            .effect_container4 .box span i:nth-child(2) &#123;
                            font-style: initial;
                            color: #17a00b;
                            &#125;
                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* ---------------------------------------Animation 5 ------------------------------- */}
            <div className="effect5">

                <div className="cont_effects cont_effects5">
                    <section class="animationSec5">
                        <div class="loader">
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                        </div>
                        <h2>Loading...</h2>
                        <div class="loader">
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                            <div class="dot" ></div>
                        </div>
                    </section>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;section&gt;
                            &lt;div class="loader"&gt;
                            &lt;div class="dot" style="--i:0;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:1;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:2;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:3;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:4;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:5;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:6;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:7;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:8;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:9;"&gt;&lt;/div&gt;
                            &lt;/div&gt;
                            &lt;h2&gt;Loading...&lt;/h2&gt;
                            &lt;div class="loader"&gt;
                            &lt;div class="dot" style="--i:0;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:1;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:2;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:3;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:4;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:5;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:6;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:7;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:8;"&gt;&lt;/div&gt;
                            &lt;div class="dot" style="--i:9;"&gt;&lt;/div&gt;
                            &lt;/div&gt;
                            &lt;/section&gt;
                        </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>

                            section &#123;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden;
                            min-height: 100vh;
                            width: 100%;
                            background: #001300;
                            animation: changeColor 5s linear infinite;
                            flex-direction: column;
                            &#125;

                            @keyframes changeColor &#123;
                            0% &#123;
                            filter: hue-rotate(0deg);
                            &#125;
                            100% &#123;
                            filter: hue-rotate(360deg);
                            &#125;

                            &#125;

                            section h2 &#123;
                            color: #00ff0a;
                            font-weight: 300;
                            letter-spacing: 10px;

                            &#125;

                            section .loader&#123;
                            position: relative;
                            display: flex;

                            &#125;

                            section .loader .dot &#123;
                            position: relative;
                            display: block;
                            width: 20px;
                            height: 20px;
                            background: #00ff0a;
                            box-shadow: 0 0 10px #00ff0a,
                            0 0 20px #00ff0a,
                            0 0 40px #00ff0a,
                            0 0 60px #00ff0a,
                            0 0 80px #00ff0a,
                            0 0 100px #00ff0a;
                            margin: 20px 10px;
                            transform: scale(0.1);
                            border-radius: 50%;
                            animation: animateDot 2s linear infinite;
                            animation-delay: calc(0.1s * var(--i));
                            &#125;

                            section .loader:last-child .dot &#123;
                            animation-delay: calc(-0.1s * var(--i));
                            &#125;

                            @keyframes animateDot &#123;
                            0%,50%,100% &#123;
                            transform: scale(0.1);
                            &#125;
                            10% &#123;
                            transform: scale(1);
                            &#125;
                            50%,100% &#123;
                            transform: scale(0.1);
                            &#125;
                            &#125;
                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* ---------------------------------------Animation 6 ------------------------------- */}

        </>
    );
}

export default Dis_animation;