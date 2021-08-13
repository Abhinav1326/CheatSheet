import React from 'react';
import Prism from "prismjs";
import '../rtm_cards/prism.css';
import './design.css';

function Dis_design(props) {

    return (
        <>

            <div className="Design">

                <div className="cont_design cont_design1">
                    <div class="drops">
                        <div class="drop"></div>
                        <div class="drop"></div>
                        <div class="drop"></div>
                        <div class="drop"></div>
                    </div>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;div class="drops"&gt;
                            &lt;div class="drop"&gt;&lt;/div&gt;
                            &lt;div class="drop"&gt;&lt;/div&gt;
                            &lt;div class="drop"&gt;&lt;/div&gt;
                            &lt;div class="drop"&gt;&lt;/div&gt;
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
                            background: #edeeed;
                            &#125;

                            .drops &#123;
                            position: relative;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            &#125;

                            .drop &#123;
                            position: absolute;
                            width: 150px;
                            height: 150px;
                            background: transparent;
                            border-radius: 57% 43% 37% 63% / 45% 52% 48% 55%;
                            box-shadow: inset 10px 10px 10px rgba(0 ,0, 0, 0.05),
                            15px 25px 10px rgba(0 ,0, 0, 0.1),
                            15px 20px 20px rgba(0, 0, 0, 0.05),
                            inset -10px -10px 15px rgba(255, 255, 255, 0.9);
                            &#125;

                            .drop::before &#123;
                            content: '';
                            position: absolute;
                            top: 25px;
                            left: 35px;
                            background: #fff;
                            width: 20px;
                            height: 20px;
                            border-radius: 42% 58% 37% 63% / 40% 43% 57% 60%;
                            &#125;

                            .drop::after &#123;
                            content: '';
                            position: absolute;
                            top: 25px;
                            left: 65px;
                            background: #fff;
                            width: 10px;
                            height: 10px;
                            border-radius: 57% 43% 37% 63% / 48% 37% 63% 52%;
                            &#125;

                            .drop:nth-child(2) &#123;
                            transform: scale(0.5) translate(-200px, 180px);
                            border-radius: 64% 36% 42% 58% / 42% 37% 63% 58%;
                            &#125;

                            .drop:nth-child(3) &#123;
                            transform: scale(0.5) translate(280px, 10px);
                            border-radius: 40% 51% 42% 58% / 56% 47% 53% 44%;
                            &#125;
                            .drop:nth-child(4) &#123;
                            transform: scale(0.35) translate(120px, -350px);
                            border-radius: 39% 61% 63% 37% / 77% 47% 53% 23%;
                            &#125;

                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />


        </>
    );
}

export default Dis_design;