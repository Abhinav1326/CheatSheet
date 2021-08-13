import React from 'react';
import Prism from "prismjs";
import '../rtm_cards/prism.css';
import './forms.css';

function Dis_forms(props) {

    return (
        <>
            <div className="form1">

                <div className="cont_form1">
                    <div className="form_container">
                        <h2>Contact Us</h2>
                        <div className="row100">
                            <div className="col">
                                <div className="inputBox">
                                    <input type="text" name="" required="required" />
                                    <span className="text">First Name</span>
                                    <span className="line"></span>
                                </div>
                            </div>

                            <div className="col">
                                <div className="inputBox">
                                    <input type="text" name="" required />
                                    <span className="text">Last Name</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>


                        <div className="row100">
                            <div className="col">
                                <div className="inputBox">
                                    <input type="text" name="" required />
                                    <span className="text">Email</span>
                                    <span className="line"></span>
                                </div>
                            </div>

                            <div className="col">
                                <div className="inputBox">
                                    <input type="text" name="" required />
                                    <span className="text">Mobile</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row100">
                            <div className="col">
                                <div className="inputBox textarea">
                                    <textarea required></textarea>
                                    <span className="text">Type Your Message Here...</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row100">
                            <div className="col">
                                <input type="submit" value="Send" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;div class="container"&gt;
                            &lt;h2&gt;Contact Us&lt;/h2&gt;
                            &lt;div class="row100"&gt;
                            &lt;div class="col"&gt;
                            &lt;div class="inputBox"&gt;
                            &lt;input type="text" name="" required&gt;
                            &lt;span class="text"&gt;First Name&lt;/span&gt;
                            &lt;span class="line"&gt;&lt;/span&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;

                            &lt;div class="col"&gt;
                            &lt;div class="inputBox"&gt;
                            &lt;input type="text" name="" required&gt;
                            &lt;span class="text"&gt;Last Name&lt;/span&gt;
                            &lt;span class="line"&gt;&lt;/span&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;


                            &lt;div class="row100"&gt;
                            &lt;div class="col"&gt;
                            &lt;div class="inputBox"&gt;
                            &lt;input type="text" name="" required&gt;
                            &lt;span class="text"&gt;Email&lt;/span&gt;
                            &lt;span class="line"&gt;&lt;/span&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;

                            &lt;div class="col"&gt;
                            &lt;div class="inputBox"&gt;
                            &lt;input type="text" name="" required&gt;
                            &lt;span class="text"&gt;Mobile&lt;/span&gt;
                            &lt;span class="line"&gt;&lt;/span&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;
                            &lt;div class="row100"&gt;
                            &lt;div class="col"&gt;
                            &lt;div class="inputBox textarea"&gt;
                            &lt;textarea required&gt;&lt;/textarea&gt;
                            &lt;span class="text"&gt;Type Your Message Here...&lt;/span&gt;
                            &lt;span class="line"&gt;&lt;/span&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;
                            &lt;div class="row100"&gt;
                            &lt;div class="col"&gt;
                            &lt;input type="submit" value="send"&gt;
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
                            background: #03080a;
                            &#125;

                            .container &#123;
                            width: 80%;
                            padding: 20px;
                            &#125;

                            .container h2 &#123;
                            width: 100%;
                            color: #45f3ff;
                            font-size: 36px;
                            text-align: center;
                            margin-bottom: 10px;
                            &#125;

                            .container .row100 &#123;
                            position: relative;
                            width: 100%;
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                            &#125;

                            .container .row100 .col &#123;
                            position: relative;
                            width: 100%;
                            padding: 0 10px;
                            margin: 30px 0 10px;
                            transition: 0.5s;
                            &#125;

                            .container .row100 .inputBox &#123;
                            position: relative;
                            width: 100%;
                            height: 40px;
                            color: #45f3ff;
                            &#125;

                            .container .row100 .inputBox input,
                            .container .row100 .inputBox.textarea textarea &#123;
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            background: transparent;
                            box-shadow: none;
                            border: none;
                            outline: none;
                            font-size: 18px;
                            padding: 0 10px;
                            z-index: 1;
                            color: #fff;
                            &#125;

                            .container .row100 .inputBox .text &#123;
                            position: absolute;
                            top: 0;
                            left: 0;
                            line-height: 40px;
                            font-size: 18px;
                            padding: 0 10px;
                            display: block;
                            transition: 0.5s;
                            pointer-events: none;
                            &#125;

                            .container .row100 .inputBox input:focus + .text,
                            .container .row100 .inputBox input:valid + .text &#123;
                            top: -35px;
                            left: -10px;
                            &#125;

                            .container .row100 .inputBox .line &#123;
                            position: absolute;
                            bottom: 0;
                            display: block;
                            width: 100%;
                            height: 2px;
                            background: #45f3ff;
                            transition: 0.5s;
                            border-radius: 2px;
                            pointer-events: none;
                            &#125;

                            .container .row100 .inputBox input:focus ~ .line,
                            .container .row100 .inputBox input:valid ~ .line &#123;
                            height: 100%;
                            &#125;

                            .container .row100 .inputBox.textarea &#123;
                            position: relative;
                            width: 100%;
                            height: 100px;
                            padding: 10px 0;
                            &#125;

                            .container .row100 .inputBox.textarea textarea &#123;
                            height: 100%;
                            resize: none;
                            &#125;

                            .container .row100 .inputBox textarea:focus + .text,
                            .container .row100 .inputBox textarea:valid + .text &#123;
                            top: -35px;
                            left: -10px;
                            &#125;

                            .container .row100 .inputBox textarea:focus ~ .line,
                            .container .row100 .inputBox textarea:valid ~ .line &#123;
                            height: 100%;
                            &#125;

                            input[type="submit"] &#123;
                            border: none;
                            padding: 7px 35px;
                            cursor: pointer;
                            outline: none;
                            background: #45f3ff;
                            color: #fff;
                            font-size: 18px;
                            border-radius: 2px;
                            &#125;
                    </code>
                    </pre>
                </div>
            </div> <br /><hr /><br />

            {/* --------------------------------------- Forms 2 ------------------------------- */}


            <div className="form_2">

                <div className="cont_form2">
                    <div className="form_container2">
                        <div className="form2">
                            <h2>Login</h2>
                            <div className="input">
                                <div className="inputBox">
                                    <label>Username</label>
                                    <input type="text" name="" placeholder="example@xyz.com" />
                                </div>
                                <div className="inputBox">
                                    <label>Password</label>
                                    <input type="text" name="" placeholder="******" />
                                </div>
                                <div className="inputBox">
                                    <input type="submit" name="" value="Sign In" />
                                </div>
                            </div>
                            <p className="forget">Forget Password ? <a href="#">Click Here</a></p>
                        </div>
                    </div>
                </div>
                <div className="display">
                    <h5 className="title"> Html </h5>
                    <pre className="language-html">
                        <code>
                            &lt;div class="form"&gt;
                            &lt;h2&gt;Login&lt;/h2&gt;
                            &lt;div class="input"&gt;
                            &lt;div class="inputBox"&gt;
                            &lt;label&gt;Username&lt;/label&gt;
                            &lt;input type="text" name="" placeholder="example@xyz.com"&gt;
                            &lt;/div&gt;
                            &lt;div class="inputBox"&gt;
                            &lt;label&gt;Password&lt;/label&gt;
                            &lt;input type="text" name="" placeholder="******"&gt;
                            &lt;/div&gt;
                            &lt;div class="inputBox"&gt;
                            &lt;input type="submit" name="" value="Sign In"&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;
                            &lt;p class="forget"&gt;Forget Password ? &lt;a href="#"&gt;Click Here&lt;/a&gt;&lt;/p&gt;
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
                            background: #131419;
                            &#125;

                            .form &#123;
                            position: relative;
                            width: 350px;
                            padding: 40px 40px 60px;
                            background: #131419;
                            border-radius: 10px;
                            text-align: center;
                            box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.05),
                            5px 5px 10px rgba(0, 0, 0, 0.5);
                            &#125;

                            .form h2 &#123;
                            color: #c7c7c7;
                            font-weight: 500;
                            text-transform: uppercase;
                            letter-spacing: 4px;
                            &#125;

                            .form .input &#123;
                            text-align: left;
                            margin-top: 40px;
                            &#125;

                            .form .input .inputBox &#123;
                            margin-top: 20px;
                            &#125;

                            .form .input .inputBox label &#123;
                            display: block;
                            color: #868686;
                            margin-bottom: 5px;
                            font-size: 18px;
                            &#125;

                            .form .input .inputBox input &#123;
                            width: 100%;
                            height: 50px;
                            background: #131419;
                            border: none;
                            outline: none;
                            border-radius: 40px;
                            padding: 5px 15px;
                            color: #fff;
                            font-size: 18px;
                            color: #03a9f4;
                            box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.05),
                            inset 2px 2px 6px rgba(0, 0, 0, 0.5);
                            &#125;

                            .form .input .inputBox input[type="submit"] &#123;
                            margin-top: 20px;
                            box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.05),
                            2px 2px 6px rgba(0, 0, 0, 0.5);
                            &#125;

                            .form .input .inputBox input[type="submit"]:active &#123;
                            color: #006c9c;
                            margin-top: 20px;
                            box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.05),
                            inset 2px 2px 6px rgba(0, 0, 0, 0.5);
                            &#125;

                            .form .input .inputBox input::placeholder &#123;
                            color: #555;
                            font-size: 18px;
                            &#125;

                            .form .forget &#123;
                            margin-top: 30px;
                            color: #555;
                            &#125;

                            .form .forget a &#123;
                            color: #ff0047;
                            &#125;
                    </code>
                    </pre>
                </div>
            </div> <br /><hr /><br />

        </>
    );
};

export default Dis_forms;