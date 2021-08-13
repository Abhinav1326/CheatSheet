import React from 'react';
import Prism from "prismjs";
import '../rtm_cards/prism.css';
import './navex.css';

function Dis_navbar(props) {

    return (
        <>
            <div className="navbar1">

                <div className="cont_navbar">
                    <header className="header1">
                        <a href="#" className="logo">Logo</a>
                        <div className="menu_toggle"></div>
                        <nav>
                            <ul>
                                <li><a href="#" className="active">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                        <div className="clearfix"></div>
                    </header>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;header&gt;
                            &lt;a href="#" class="logo"&gt;Logo&lt;/a&gt;
                            &lt;div class="menu_toggle"&gt;&lt;/div&gt;
                            &lt;nav&gt;
                            &lt;ul&gt;
                            &lt;li&gt;&lt;a href="#" class="active"&gt;Home&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a href="#"&gt;Services&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a href="#"&gt;Team&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a href="#"&gt;Portfolio&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a href="#"&gt;Contact&lt;/a&gt;&lt;/li&gt;
                            &lt;/ul&gt;
                            &lt;/nav&gt;
                            &lt;div class="clearfix"&gt;&lt;/div&gt;
                            &lt;/header&gt;
                            &lt;script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"&gt;&lt;/script&gt;
                            &lt;script type="text/javascript"&gt;
                            &#36;&#40;document&#41;.ready&#40;function&#40;&#41;&#123;
                            &#36;&#40;".menu_toggle"&#41;.click&#40;function &#40;&#41; &#123;
                            &#36;&#40;'.menu_toggle'&#41;.toggleClass&#40;'active'&#41;
                            &#36;&#40;'nav'&#41;.toggleClass&#40;'active'&#41;
                            &#125;&#41;
                            &#125;&#41;
                            &lt;/script&gt;
                    </code>
                    </pre>

                    <h5 className="title"> Css </h5>
                    <pre className="language-css">
                        <code>
                            header &#123;
                            position: relative;
                            max-width: 1200px;
                            margin: 20px auto;
                            background: #fff;
                            padding: 10px;
                            border-radius: 4px;
                            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                            &#125;

                            header .logo &#123;
                            color: #069370;
                            height: 60px;
                            font-size: 36px;
                            line-height: 60px;
                            padding: 0 20px;
                            text-align: center;
                            float: left;
                            font-weight: 700;
                            text-decoration: none;

                            &#125;

                            header nav &#123;
                            float: right;
                            &#125;

                            .clearfix &#123;
                            clear: both;
                            &#125;

                            header nav ul &#123;
                            display: flex;
                            &#125;

                            header nav ul li &#123;
                            list-style: none;
                            &#125;

                            header nav ul li a &#123;
                            display: block;
                            margin: 10px 0;
                            padding: 10px 20px;
                            text-decoration: none;
                            color: #262626;
                            &#125;

                            header nav ul li a.active,
                            header nav ul li a:hover &#123;
                            background: #069370;
                            color: #fff;
                            transition: 0.5s;
                            &#125;

                            @media (max-width: 1200px) &#123;
                            header &#123;
                            margin: 20px;
                            &#125;
                            &#125;

                            @media (max-width: 768px) &#123;
                            header .menu_toggle &#123;
                            display: block;
                            width: 40px;
                            height: 40px;
                            margin: 10px;
                            float: right;
                            cursor: pointer;
                            text-align: center;
                            font-size: 30px;
                            color: #069370;
                            &#125;
                            .menu_toggle.active:before &#123;
                            content: "X";
                            line-height: 40px;
                            &#125;

                            .menu_toggle:before &#123;
                            content: "M";
                            line-height: 40px;
                            &#125;

                            nav &#123;
                            display: none;
                            &#125;
                            nav.active &#123;
                            display: block;
                            width: 100%;
                            &#125;

                            nav.active ul &#123;
                            display: block;
                            &#125;

                            nav.active ul li a &#123;
                            margin: 0;

                            &#125;
                            &#125;

                    </code>
                    </pre>
                </div>
            </div> <br /><hr /><br />

            {/* ---------------------------------------Navbar 2------------------------------- */}

        </>
    );
};

export default Dis_navbar;