import React from 'react'
// import "../Css/Footer.css"
export default function Footer() {
    return (
        <>
        <hr/>
            <div className="footer">
                <div className="box1">
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png" alt="" />
                    <p>Pricing</p>
                    <p>Contact Us</p>
                    <p>Templates</p>
                    <p>SMB</p>
                    <p>Enterprise</p>
                    <p>NonProfits</p>
                    <p>App MarketPlace</p>
                    <p>24/7 Supports</p>
                </div>
                <div className="box2">
                    <h5>Features</h5>
                    <p>Docs</p>
                    <p>Integration</p>
                    <p>Automation</p>
                    <p>Files</p>
                    <p>Dashboard</p>
                    <p>Kanban</p>
                    <p>Gantt</p>
                </div>
                <div className="box3">
                    <h5>Monday Products</h5>
                    <div className="mondayupper">
                        <p>Monday Work </p>
                        <p>Monday CRM</p>
                        <p>Monday Dev</p>
                    </div>
                    <h5>More by Monday.com</h5>
                    <div className="lower">
                        <p>Work Canvas</p>
                        <p>Work Forms</p>

                    </div>
                </div>
                <div className="box4">
                    <h5>Use Cases</h5>
                    <p>Marketing</p>
                    <p>Project Management</p>
                    <p>Sales</p>
                    <p>Developers</p>
                    <p>HR</p>
                    <p>IT</p>
                    <p>Operations</p>
                    <p>Constructions</p>
                </div>
                <div className="box5">
                    <h5>Company</h5>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Monday</p>
                    <p>Press</p>
                    <p>Costumer Stories</p>
                    <p>Become a Partner</p>
                    <p>ESG</p>
                    <p>Affiliation</p>
                    <p>Digital Lift</p>
                    <p>Investor</p>
                </div>
                <div className="box6">
                    <h5>Resources</h5>
                    <p>Help Center</p>
                    <p>Community</p>
                    <p>Blog</p>
                    <p>What's new</p>
                    <p>Monday</p>
                    <p>Webinears</p>
                    <p>Startups for Startup</p>
                    <p>Global events</p>
                    <p>App Development</p>
                    <p>Find a partner</p>
                    <p>Compare</p>
                </div>
            </div>
            <hr />

            <div className="footer_bottom">
                <div className="left">
                    <div className="lefttop">
                        <i class="bi bi-globe">&nbsp; English</i>
                    </div>
                    <div className="leftbottom">
                        <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/gdpr-logo.png" alt="Hello" />
                        <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/iso-logo1.png" alt="Hello" />
                        <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/soc-logo.png" alt="Hello" />
                        <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/hipaa-logo.png" alt="Hello" />
                    </div>
                </div>
                <div className="right">
                    <div className="rightTop">
                        <div className="icons">
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-twitter-x"></i>
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-whatsapp"></i>
                            <i class="bi bi-linkedin"></i>
                            <i class="bi bi-youtube"></i>
                        </div>
                        <div className="logo">
                            <div className="playstore">
                                <i class="bi bi-google-play">Get It On
                                    <br /> Google Play</i>
                            </div>
                            <div className="appstore">
                                <i class="bi bi-apple"> Download
                                    <br /> App Store</i>
                            </div>
                        </div>
                    </div>
                    <div className="rightbottom">
                        <p>Security</p>
                        <p>|</p>
                        <p>
                            Terms and privacy</p>
                        <p>|</p>
                        <p>
                            Privacy policy</p>
                        <p>|</p>
                        <p>Status
                        </p>
                        <p>|</p>
                        <p>All Rights Reserved © monday.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}