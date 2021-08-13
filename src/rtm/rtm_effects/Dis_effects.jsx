import React from 'react';
import Prism from "prismjs";
import '../rtm_cards/prism.css';
import './effects.css';

function Dis_effects(props) {

    return (
        <> 
            <div className="effect1">

                <div className="cont_effects bg-dark effect_1">
                    <img src="https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                    <img src="https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;img src="https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"&gt;
                            &lt;img src="https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"&gt;
                            &lt;img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"&gt;
                        </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>
                            body &#123;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            background: #000;
                            flex-wrap: wrap;
                            &#125;

                            img &#123;
                            transition: 0.5s;
                            max-width: 25rem;
                            max-height: 25rem;
                            margin: 10px 10px;
                            &#125;

                            img:hover &#123;
                            filter: grayscale(1);
                            &#125;
                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />


            {/* ---------------------------------------Effect 2------------------------------- */}


            <div className="effect2">

                <div className="cont_effects bg-dark">
                    <h1 class="neon_effect1" data-text="[ Text_Effects ]">[ Text_Effects ]</h1>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;h1 class="neon_effect1" data-text="[ Text_Effects ]"&gt;[ Text_Effects ]&lt;/h1&gt;
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
                            &#125;

                            .neon_effect1 &#123;
                            display: grid;
                            place-items: center;
                            padding: 0 20px;
                            font-size: 6em;
                            color: #fff;
                            text-shadow: 0 0 20px #ff005b;
                            position: relative;
                            &#125;

                            .neon_effect1:after &#123;
                            content: attr(data-text);
                            position: absolute;
                            top: 0;
                            left: 0;
                            padding: 0 20px;
                            z-index: -1;
                            color: #ff005b;
                            filter: blur(15px);
                            &#125;

                            .neon_effect1:after &#123;
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: #fe3a80;
                            opacity: .5;
                            z-index: -2;
                            filter: blur(40px);
                            &#125;
                        </code>
                    </pre>
                </div>
            </div><br /><hr /><br />
            {/* ---------------------------------------Effect 2------------------------------- */}

        </>
    );
}

export default Dis_effects;