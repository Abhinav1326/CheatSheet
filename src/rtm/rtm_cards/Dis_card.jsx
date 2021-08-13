import React, { useState } from 'react';
import Prism from "prismjs";
import './prism.css';
import './cards.css';

function Dis_cards() {

    // battery percentage code
    const [perc, setPerc] = useState(0);
    navigator.getBattery().then(function (battery) {
        setPerc(battery.level * 100 + "%");
    })


    return (
        <>
            <div className="card">

                <div className="cont_cards1">
                    <div className="card1">
                        <div className="circle1">
                            <h2 className="h2_1">01</h2>
                        </div>
                        <div className="content_card1">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsam facere molestiae laudantium sunt culpa qui alias officiis autem atque!</p>
                            <a href="javascript:void(0)" className="a_1">Read More</a>
                        </div>
                    </div>

                    <div className="card1">
                        <div className="circle1">
                            <h2 className="h2_1">02</h2>
                        </div>
                        <div className="content_card1">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsam facere molestiae laudantium sunt culpa qui alias officiis autem atque!</p>
                            <a href="javascript:void(0)" className="a_1">Read More</a>
                        </div>
                    </div>

                    <div className="card1">
                        <div className="circle1">
                            <h2 className="h2_1">03</h2>
                        </div>
                        <div className="content_card1">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsam facere molestiae laudantium sunt culpa qui alias officiis autem atque!</p>
                            <a href="javascript:void(0)" className="a_1">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;div class="container"&gt;
                            &lt;div class="card"&gt;
                            &lt;div class="circle"&gt;
                            &lt;h2&gt;01&lt;/h2&gt;
                            &lt;/div&gt;
                            &lt;div class="content"&gt;
                            &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsam facere molestiae laudantium sunt culpa qui alias officiis autem atque!&lt;/p&gt;
                            &lt;a href="#"&gt;Read More&lt;/a&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;

                            &lt;div class="card"&gt;
                            &lt;div class="circle"&gt;
                            &lt;h2&gt;02&lt;/h2&gt;
                            &lt;/div&gt;
                            &lt;div class="content"&gt;
                            &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsam facere molestiae laudantium sunt culpa qui alias officiis autem atque!&lt;/p&gt;
                            &lt;a href="#"&gt;Read More&lt;/a&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;

                            &lt;div class="card"&gt;
                            &lt;div class="circle"&gt;
                            &lt;h2&gt;03&lt;/h2&gt;
                            &lt;/div&gt;
                            &lt;div class="content"&gt;
                            &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsam facere molestiae laudantium sunt culpa qui alias officiis autem atque!&lt;/p&gt;
                            &lt;a href="#"&gt;Read More&lt;/a&gt;
                            &lt;/div&gt;
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
                            background: linear-gradient(45deg, #ffaf00, #bb02ff);
                            background-attachment: fixed;
                            &#125;

                            .container &#123;
                            position: relative;
                            width: 1150px;
                            padding: 20px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-wrap: wrap;
                            &#125;

                            .container .card &#123;
                            position: relative;
                            width: 300px;
                            height: 420px;
                            background: #fff;
                            margin: 20px;
                            border-radius: 20px;
                            overflow: hidden;
                            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
                            transition: 0.5s;
                            &#125;

                            .container:hover .card &#123;
                            filter: blur(20px);
                            transform: scale(0.9);
                            opacity: 0.5;
                            &#125;

                            .container .card:hover &#123;
                            filter: blur(0px);
                            transform: scale(1.1);
                            opacity: 1;
                            &#125;

                            .container .card .circle &#123;
                            position: relative;
                            width: 100%;
                            height: 100%;
                            background: #000;
                            clip-path: circle(180px at center 0);
                            text-align: center;
                            &#125;

                            .container .card .circle h2 &#123;
                            color: #fff;
                            font-size: 4.5em;
                            padding: 30px 0;
                            &#125;

                            .container .card .content &#123;
                            position: absolute;
                            bottom: 10px;
                            padding: 20px;
                            text-align: center;
                            &#125;

                            .container .card .content p &#123;
                            color: #666;
                            &#125;

                            .container .card .content a &#123;
                            position: relative;
                            display: inline-block;
                            padding: 10px 20px;
                            background: #000;
                            color: #fff;
                            border-radius: 40px;
                            text-decoration: none;
                            margin-top: 20px;
                            &#125;

                            .container .card:nth-child(1) .circle,
                            .container .card:nth-child(1) .content a &#123;
                            background: #ffaf00;
                            &#125;

                            .container .card:nth-child(2) .circle,
                            .container .card:nth-child(2) .content a &#123;
                            background: #da2268;
                            &#125;

                            .container .card:nth-child(3) .circle,
                            .container .card:nth-child(3) .content a &#123;
                            background: #bb02ff;
                            &#125;

                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />

            {/* -------------------------------------------- Card 2 ------------------------------------------------------ */}

            <div className="cards ">

                <div className="cont_cards2 budy2 res">

                    <div className="card">
                        <div className="content">
                            <h2>01</h2>
                            <h3>Card One</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat esse hic, dignissimos impedit earum libero reprehenderit quisquam eos laborum!</p>
                            <a href="javascript:void(0)">Read More</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                            <h2>02</h2>
                            <h3>Card Two</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat esse hic, dignissimos impedit earum libero reprehenderit quisquam eos laborum!</p>
                            <a href="javascript:void(0)">Read More</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                            <h2>03</h2>
                            <h3>Card Three</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat esse hic, dignissimos impedit earum libero reprehenderit quisquam eos laborum!</p>
                            <a href="javascript:void(0)">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;div class="body"&gt;
                            &lt;div class="container"&gt;
                            &lt;div class="card"&gt;
                            &lt;div class="content"&gt;
                            &lt;h2&gt;01&lt;/h2&gt;
                            &lt;h3&gt;Card One&lt;/h3&gt;
                            &lt;p&gt;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat esse hic, dignissimos
                            impedit earum libero reprehenderit quisquam eos laborum!&lt;/p&gt;
                            &lt;a href="#"&gt;Read More&lt;/a&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;

                            &lt;div class="card"&gt;
                            &lt;div class="content"&gt;
                            &lt;h2&gt;02&lt;/h2&gt;
                            &lt;h3&gt;Card Two&lt;/h3&gt;
                            &lt;p&gt;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat esse hic, dignissimos
                            impedit earum libero reprehenderit quisquam eos laborum!&lt;/p&gt;
                            &lt;a href="#"&gt;Read More&lt;/a&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;

                            &lt;div class="card"&gt;
                            &lt;div class="content"&gt;
                            &lt;h2&gt;03&lt;/h2&gt;
                            &lt;h3&gt;Card Three&lt;/h3&gt;
                            &lt;p&gt;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat esse hic, dignissimos
                            impedit earum libero reprehenderit quisquam eos laborum!&lt;/p&gt;
                            &lt;a href="#"&gt;Read More&lt;/a&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;
                        </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>
                            .body &#123;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                            background: #161623;
                            &#125;

                            .body::before &#123;
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: linear-gradient(#f00, #f0f);
                            clip-path: circle(30% at right 70%);
                            &#125;

                            .body::after &#123;
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: linear-gradient(#2196f3, #e91e63);
                            clip-path: circle(20% at 10% 10%);
                            &#125;

                            .container &#123;
                            position: relative;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            max-width: 1200px;
                            flex-wrap: wrap;
                            z-index: 1;
                            &#125;

                            .container .card &#123;
                            position: relative;
                            width: 280px;
                            height: 400px;
                            margin: 30px;
                            box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
                            border-radius: 15px;
                            background: rgba(255, 255, 255, 0.1);
                            overflow: hidden;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-top: 1px solid rgba(255, 255, 255, 0.5);
                            border-left: 1px solid rgba(255, 255, 255, 0.5);
                            backdrop-filter: blur(5px);
                            &#125;

                            .container .card .content &#123;
                            padding: 20px;
                            text-align: center;
                            transform: translateY(100px);
                            opacity: 0;
                            transition: 0.5s;
                            &#125;

                            .container .card:hover .content &#123;
                            transform: translateY(0px);
                            opacity: 1;
                            &#125;

                            .container .card .content h2 &#123;
                            position: absolute;
                            top: -80px;
                            right: 30px;
                            font-size: 8em;
                            color: rgba(255, 255, 255, 0.05);
                            pointer-events: none;
                            &#125;

                            .container .card .content h3 &#123;
                            font-size: 1.8em;
                            color: #fff;
                            z-index: 1;
                            &#125;

                            .container .card .content p &#123;
                            font-size: 1em;
                            color: #fff;
                            font-weight: 300;
                            &#125;

                            .container .card .content a &#123;
                            position: relative;
                            display: inline-block;
                            padding: 8px 20px;
                            margin-top: 15px;
                            background: #fff;
                            color: #000;
                            border-radius: 20px;
                            text-decoration: none;
                            font-size: 500;
                            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                            &#125;
                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />

            {/* -------------------------------------------- Card 3 ------------------------------------------------------ */}

            <div className="cards ">

                <div className="cont_cards2 budy2">
                    <div className="card3_container">
                        <div className="box">
                            <span></span>
                            <div className="content">
                                <h2>Card One</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, autem a. Architecto ipsa ipsum in nostrum, ratione alias veniam quia.</p>
                                <a href="javascript:void(0)">Read More</a>
                            </div>
                        </div>
                        <div className="box">
                            <span></span>
                            <div className="content">
                                <h2>Card Two</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, autem a. Architecto ipsa ipsum in nostrum, ratione alias veniam quia.</p>
                                <a href="javascript:void(0)">Read More</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;div class="container"&gt;
                            &lt;div class="box"&gt;
                            &lt;span&gt;&lt;/span&gt;
                            &lt;div class="content"&gt;
                            &lt;h2&gt;Card One&lt;/h2&gt;
                            &lt;p&gt;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, autem a. Architecto ipsa ipsum in nostrum, ratione alias veniam quia.&lt;/p&gt;
                            &lt;a href="#"&gt;Read More&lt;/a&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;
                            &lt;div class="box"&gt;
                            &lt;span&gt;&lt;/span&gt;
                            &lt;div class="content"&gt;
                            &lt;h2&gt;Card Two&lt;/h2&gt;
                            &lt;p&gt;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, autem a. Architecto ipsa ipsum in nostrum, ratione alias veniam quia.&lt;/p&gt;
                            &lt;a href="#"&gt;Read More&lt;/a&gt;
                            &lt;/div&gt;
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
                            background: #1d061a;
                            &#125;

                            .container &#123;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-wrap: wrap;
                            padding: 40px 0;
                            &#125;

                            .container .box &#123;
                            position: relative;
                            width: 320px;
                            height: 400px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin: 40px 30px;
                            transition: 0.5s;
                            &#125;

                            .container .box::before &#123;
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 50px;
                            width: 50%;
                            height: 100%;
                            background: #fff;
                            border-radius: 8px;
                            transition: 0.5s;
                            &#125;

                            .container .box:nth-child(1):before &#123;
                            transform: skewX(15deg);
                            &#125;

                            .container .box:nth-child(2):before &#123;
                            transform: skewX(-15deg);
                            &#125;

                            .container .box::after &#123;
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 50px;
                            width: 50%;
                            height: 100%;
                            background: #fff;
                            border-radius: 8px;
                            transform: skewX(15deg);
                            transition: 0.5s;
                            filter: blur(30px);
                            transition: 0.5s;
                            &#125;

                            .container .box:nth-child(2):after &#123;
                            transform: skewX(-15deg);
                            &#125;

                            .container .box:hover:before,
                            .container .box:hover:after &#123;
                            transform: skewX(0deg);
                            left: 20px;
                            width: calc(100% - 90px);
                            &#125;

                            .container .box:nth-child(1):before,
                            .container .box:nth-child(1):after &#123;
                            background: linear-gradient(315deg, #ffbc00, #ff0058);
                            &#125;

                            .container .box:nth-child(2):before,
                            .container .box:nth-child(2):after &#123;
                            background: linear-gradient(315deg, #4dff03, #00d0ff);
                            &#125;

                            .container .box span &#123;
                            display: block;
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            z-index: 50;
                            pointer-events: none;
                            &#125;

                            .container .box span::before &#123;
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            border-radius: 8px;
                            background: rgba(255, 255, 255, 0.1);
                            backdrop-filter: blur(10px);
                            opacity: 0;
                            transition: 0.5s;
                            animation: animate_card3 2s ease-in-out infinite;
                            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                            &#125;

                            .container .box:hover span::before &#123;
                            top: -50px;
                            left: 50px;
                            width: 100px;
                            height: 100px;
                            opacity: 1;
                            &#125;


                            .container .box span::after &#123;
                            content: '';
                            position: absolute;
                            bottom: 0;
                            right: 0;
                            width: 100%;
                            height: 100%;
                            border-radius: 8px;
                            background: rgba(255, 255, 255, 0.1);
                            backdrop-filter: blur(10px);
                            opacity: 0;
                            transition: 0.5s;
                            animation: animate_card3 2s ease-in-out infinite;
                            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                            animation-delay: -1s;
                            &#125;

                            .container .box:hover span::after &#123;
                            bottom: -50px;
                            right: 50px;
                            width: 100px;
                            height: 100px;
                            opacity: 1;
                            &#125;

                            .container .box .content &#123;
                            position: relative;
                            left: 0;
                            padding: 20px 40px;
                            background: rgba(255, 255, 255, 0.05);
                            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                            border-radius: 8px;
                            backdrop-filter: blur(10px);
                            transition: 0.5s;
                            z-index: 1;
                            &#125;

                            .container .box:hover .content &#123;
                            left: -25px;
                            padding: 60px 40px;
                            &#125;

                            .container .box .content h2 &#123;
                            font-size: 2em;
                            color: #fff;
                            margin-bottom: 10px;
                            &#125;

                            .container .box .content p &#123;
                            font-size: 1.1em;
                            margin-bottom: 10px;
                            color: #fff;
                            line-height: 1.4em;
                            &#125;

                            .container .box .content a &#123;
                            display: inline-block;
                            font-size: 1.1em;
                            color: #111;
                            background: #fff;
                            padding: 10px;
                            border-radius: 4px;
                            text-decoration: none;
                            font-weight: 700;
                            margin-top: 5px;
                            &#125;

                            @keyframes animate_card3 &#123;
                            0%,100% &#123;
                            transform: translateY(10px);
                            &#125;
                            50% &#123;
                            transform: translateY(-10px);
                            &#125;
                            &#125;

                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* -------------------------------------------- Card 4 ------------------------------------------------------ */}

            <div className="cards ">
                <div className="cont_cards2 card_cont4">

                    <section class="card4_sec">
                        <div class="toggle"></div>
                        <div class="box">
                            <div class="content">
                                <h3>Battery</h3>
                                <div class="batteryShape">
                                    <div class="level">
                                        <div class="percentage" ></div>
                                    </div>
                                </div>
                                <div class="percent">{perc}</div>
                            </div>
                        </div>
                    </section>

                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;section class="card4_sec"&gt;
                            &lt;div class="toggle"&gt;&lt;/div&gt;
                            &lt;div class="box"&gt;
                            &lt;div class="content"&gt;
                            &lt;h3&gt;Battery&lt;/h3&gt;
                            &lt;div class="batteryShape"&gt;
                            &lt;div class="level"&gt;
                            &lt;div class="percentage"&gt;&lt;/div&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;
                            &lt;div class="percent"&gt;50%&lt;/div&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;
                            &lt;/section&gt;

                            &lt;script&gt;

                            let percentage = document.querySelector('.percentage');
                            let percent = document.querySelector('.percent');
                            navigator.getBattery().then(function(battery)&#123;
                            percentage.style.width = battery.level * 100 + '%';
                            percent.innerHTML = battery.level * 100 + '%';
                            &#123;)

                            let sec = document.querySelector('.card4_sec');
                            let toggle = document.querySelector('.toggle');
                            toggle.onclick = function()&#123;
                            sec.classList.toggle('dark_card4')
                            &#123;

                            &lt;/script&gt;

                        </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>

                            .card4_sec &#123;
                            position: relative;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                            &#125;
                            .card4_sec.dark_card4 &#123;
                            background: #161623;
                            &#125;

                            .card4_sec::before &#123;
                            content: "";
                            position: absolute;
                            width: 240px;
                            height: 240px;
                            background: linear-gradient(#f3f5f5, #c41e92);
                            border-radius: 50%;
                            transform: translate(-150px, -100px);
                            &#125;

                            .card4_sec.dark_card4::before &#123;
                            background: linear-gradient(#ffc107, #e91e63);
                            &#125;

                            .card4_sec::after &#123;
                            content: "";
                            position: absolute;
                            width: 250px;
                            height: 250px;
                            background: linear-gradient(#ff2371, rgba(255, 40, 113, .2));
                            border-radius: 50%;
                            transform: translate(150px, 150px);
                            &#125;

                            .card4_sec.dark_card4::after &#123;
                            background: linear-gradient(#2196f3, #31ff38);
                            &#125;

                            .card4_sec .box &#123;
                            position: relative;
                            width: 240px;
                            height: 300px;
                            background: rgba(255, 255, 255, 0.1);
                            z-index: 1;
                            box-shadow: 0 25px 45px rgba(0, 0, 0, 0.25);
                            border-right: 1px solid rgba(255, 255, 255, 0.1);
                            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                            backdrop-filter: blur(25px);
                            border-radius: 10px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            &#125;

                            .card4_sec .box .content &#123;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                            &#125;

                            .card4_sec .box h3 &#123;
                            color: #9d2cb1;
                            font-weight: 500;
                            font-size: 1.2em;
                            letter-spacing: 1px;
                            &#125;

                            .card4_sec.dark_card4 .box h3 &#123;
                            color: #fff;
                            &#125;

                            .card4_sec .box .batteryShape &#123;
                            position: relative;
                            width: 140px;
                            height: 65px;
                            margin: 20px 0;
                            border: 3px solid #333;
                            border-radius: 10px;
                            &#125;
                            .card4_sec.dark_card4 .batteryShape &#123;
                            border: 3px solid #fff;
                            &#125;

                            .card4_sec .box .batteryShape::before &#123;
                            content: "";
                            position: absolute;
                            top: 50%;
                            right: -12px;
                            transform: translateY(-50%);
                            width: 7px;
                            height: 16px;
                            background: #333;
                            border-top-right-radius: 4px;
                            border-bottom-right-radius: 4px;
                            &#125;
                            .card4_sec.dark_card4 .batteryShape::before &#123;
                            background: #fff;
                            &#125;

                            .card4_sec .box .batteryShape::after &#123;
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 50%;
                            background: rgba(255, 255, 255, 0.1);
                            &#125;

                            .card4_sec .level &#123;
                            position: absolute;
                            top: 4px;
                            left: 4px;
                            right: 4px;
                            bottom: 4px;
                            /* background: #333; */
                            border-radius: 4px;
                            overflow: hidden;
                            &#125;

                            .card4_sec .percentage &#123;
                            position: absolute;
                            top: 0;
                            left: 0;
                            height: 100%;
                            width: 50%;
                            border-radius: 4px;
                            background: linear-gradient(0deg, #9c28af, #fd2c72);
                            &#125;

                            .card4_sec.dark_card4 .percentage &#123;
                            background: linear-gradient(90deg, #ffeb3b, #27ff00);
                            &#125;

                            .card4_sec .percent &#123;
                            color: #fe3177;
                            font-size: 2em;
                            font-weight: 700;
                            &#125;

                            .card4_sec .card4_sec.dark_card4 .percent &#123;
                            color: #fff;
                            &#125;

                            .card4_sec .toggle &#123;
                            position: absolute;
                            top: 20px;
                            right: 20px;
                            background: #161623;
                            width: 30px;
                            height: 30px;
                            cursor: pointer;
                            border-radius: 50%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            &#125;
                            .dark_card4 .toggle &#123;
                            background: #fff;
                            &#125;
                            .card4_sec .toggle::before &#123;
                            content: "D";
                            color: #fff;
                            &#125;

                            .dark_card4 .toggle::before &#123;
                            content: "N";
                            color: #161623;
                            &#125;

                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* -------------------------------------------- Card 5 ------------------------------------------------------ */}

            <div className="cards ">
                <div className="cont_cards2 card_cont5">

                    <div class="card_5">
                        <div class="imgBox">
                            <img src="https://images.unsplash.com/photo-1554230505-919a13968970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" />
                            <img src="https://images.unsplash.com/photo-1554230505-906913b2e6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80" />
                        </div>
                        <div class="details">
                            <div class="content">
                                <h2>Someone Famous<br /><span>Graphic Designer</span></h2>
                                <div class="social-icons">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;div class="card"&gt;
                            &lt;div class="imgBox"&gt;
                            &lt;img src="https://images.unsplash.com/photo-1554230505-919a13968970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"&gt;
                            &lt;img src="https://images.unsplash.com/photo-1554230505-906913b2e6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80" alt=""&gt;
                            &lt;/div&gt;
                            &lt;div class="details"&gt;
                            &lt;div class="content"&gt;
                            &lt;h2&gt;Someone Famous&lt;br&gt;&lt;span&gt;Graphic Designer&lt;/span&gt;&lt;/h2&gt;
                            &lt;div class="social-icons"&gt;
                            &lt;a href="#"&gt;&lt;i class="fab fa-facebook-f"&gt;&lt;/i&gt;&lt;/a&gt;
                            &lt;a href="#"&gt;&lt;i class="fab fa-instagram"&gt;&lt;/i&gt;&lt;/a&gt;
                            &lt;a href="#"&gt;&lt;i class="fab fa-twitter"&gt;&lt;/i&gt;&lt;/a&gt;
                            &lt;a href="#"&gt;&lt;i class="fab fa-linkedin-in"&gt;&lt;/i&gt;&lt;/a&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;
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
                            background: #fbe9e7;
                            &#125;

                            .card &#123;
                            position: relative;
                            width: 300px;
                            height: 400px;
                            background: #fff;
                            transform-style: preserve-3d;
                            transform: perspective(1000px);
                            box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.25);
                            transition: 1s;
                            &#125;

                            .card .imgBox &#123;
                            position: relative;
                            width: 100%;
                            height: 100%;
                            z-index: 1;
                            transform-origin: left;
                            transform-style: preserve-3d;
                            background: #000;
                            transition: 1s;
                            box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.25);
                            &#125;
                            .card:hover &#123;
                            transform: translateX(50%);
                            &#125;
                            .card:hover .imgBox &#123;
                            transform: rotateY(-150deg);
                            &#125;

                            .card .imgBox img &#123;
                            position: absolute;
                            top: 0;
                            left: 0;
                            height: 100%;
                            width: 100%;
                            object-fit: cover;
                            transform-style: preserve-3d;
                            /* backface-visibility: hidden; */
                            &#125;
                            .card .imgBox img:nth-child(2) &#123;
                            transform: rotateY(180deg);
                            &#125;
                            .card .details &#123;
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            padding: 20px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            &#125;

                            .card .details .content &#123;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                            &#125;

                            .card .details .content h2 &#123;
                            text-align: center;
                            font-weight: 700;
                            line-height: 1em;
                            &#125;

                            .card .details .content h2 span &#123;
                            color: #e21212;
                            font-size: 0.8em;
                            &#125;

                            .card .details .content .social-icons &#123;
                            position: relative;
                            display: flex;
                            margin-top: 10px;
                            &#125;

                            .card .details .content .social-icons a &#123;
                            display: inline-block;
                            width: 35px;
                            height: 35px;
                            background: #333;
                            color: #fff;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            text-decoration: none;
                            margin: 5px;
                            font-size: 18px;
                            transition: 0.2s;
                            &#125;

                            .card .details .content .social-icons a:hover &#123;
                            background: #e21212;

                            &#125;

                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
        </>
    );
}

export default Dis_cards;