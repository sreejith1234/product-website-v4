class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="footer-main">
            <div class="footer">
                <div class="container-fluid">
                    <div class=" row">
                        <div class="col-md-6 col-sm-6 col-6 mb-6">
                            <div class="footer-logo">
                                <div class="footer-logo-img">
                                    <img src="logo.svg">
                                </div>
                                <div class="footer-logo-text">
                                    <h6 class="text-dark">
                                        <span class="txt-caps">A</span><span class="txt-reg">dvanced</span> 
                                        <span class="txt-caps">H</span><span class="txt-reg">ealth</span> 
                                        <span class="txt-caps">I</span><span class="txt-reg">nformation</span>
                                        <span class="txt-caps">M</span><span class="txt-reg">anagement</span><br><span class="txt-reg">&</span>
                                        <span class="txt-caps">S</span><span class="txt-reg">ocial</span> 
                                        <span class="txt-caps">A</span><span class="txt-reg">nalytics</span> 
                                        <span class="txt-reg">(ahimsa.global)</span>
                                    </h6>
                                </div>
                            </div>
                            <div class="footer-contact">
                                <p class="mt-3 mb-1 opacity-8">Jade 4, Roelofarendsveen, 2371 LB, Netherlands</p>
                                <p class="mt-2 mb-3 opacity-8">+31.643876161, info@ahimsa.global</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-6 mb-6">
                            <div class="footer-head">
                                <h6 class="text-sm">Our Products</h6>
                                <ul class="flex-column ms-n3 nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Tele Health
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            PREP
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" target="_blank">
                                            Structural Heart Disease - Asia Pacific
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Datavaultforhealth
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-6 mb-6">
                            <div class="footer-head">
                                <h6 class="text-sm">Quick Links</h6>
                                <ul class="flex-column ms-n3 nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Services
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="contact.html" >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Privacy Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12" style="background:#060814;padding:20px;">
                <div class="copyright-inner">
                    <p class="text-sm mb-0 copyright">
                        Copyright © 2022 ahimsa.global
                    </p>
                    <ul class="social-icon d-flex flex-row ms-n3 nav">
                        <li class="nav-item">
                            <a class="nav-link pe-1" href="" target="_blank">
                                <i class="fa fa-facebook text-lg opacity-8" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pe-1" href="" target="_blank">
                                <i class="fa fa-linkedin text-lg opacity-8" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pe-1" href="" target="_blank">
                                <i class="fa fa-twitter text-lg opacity-8" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pe-1" href="" target="_blank">
                                <i class="fa fa-youtube text-lg opacity-8" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    `;
  }
}
    
customElements.define('footer-component', MyComponent);