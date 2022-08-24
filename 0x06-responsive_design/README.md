# Responsive Design

<div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">Concepts</h3>
    </div>
    <div class="panel-body">
      <p>
        <em>For this project, we expect you to look at this concept:</em>
      </p>
      <ul>
          <li>
            <a href="https://intranet.hbtn.io/concepts/185">Responsive web design</a>
          </li>
      </ul>
    </div>
</div>

<div class="panel panel-default" id="project-description">
  <div class="panel-body">
    <p><img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/12/4fe027a0c298339cb4cb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220823%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20220823T001006Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=744c3a509e1f137f6c6f28fafc275ac756b2dfb26e958fb1a6ce840446ae3c75" alt="" loading="lazy" style=""></p>

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks" title="The building blocks of responsive design - Progressive web apps | MDN" target="_blank">The building blocks of responsive design - Progressive web apps | MDN</a></li>
<li><a href="https://developerlife.com/2019/08/25/guide-to-building-responsive-web-apps/" title="A pragmatic guide to designing and building responsive web applications | developerlife.com" target="_blank">A pragmatic guide to designing and building responsive web applications | developerlife.com</a></li>
<li><a href="https://fredericgonzalo.com/en/understanding-the-difference-between-mobile-first-adaptive-and-responsive-design/" title="Understanding the difference between mobile-first, adaptive and responsive design" target="_blank">Understanding the difference between mobile-first, adaptive and responsive design</a></li>
<li><a href="https://www.lukew.com/ff/entry.asp?933" title="LukeW | Mobile First" target="_blank">LukeW | Mobile First</a></li>
<li><a href="https://mediaqueri.es" title="Media Queries | A collection of inspirational websites using media queries and responsive web design" target="_blank">Media Queries | A collection of inspirational websites using media queries and responsive web design</a></li>
<li><a href="https://bytes.dev/?s=rwd" title="Responsive Design Newsletter" target="_blank">Responsive Design Newsletter</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="https://fs.blog/feynman-learning-technique/" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>Mobile-first design</li>
<li>Media-queries</li>
<li>Sizes to use for responsive web design</li>
<li>How to make a website responsive</li>
<li>The differences between responsive and adaptive design</li>
<li>CSS units that are used to make elements flexible</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code></li>
<li>A <code>README.md</code> at the root of the project directory is mandatory</li>
<li>HTML and CSS have been rendered on Chrome 78 or more.</li>
</ul>

<h2>Wireframe of the Techium project - mobile version</h2>

<p><img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/4/a1f906a6a39eba8cb2f3d2877abc9ea84be51d9d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220823%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20220823T001006Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=443736e4a20f230f2a4efe8adae4eddb02ba75a95045a17e7058a2dbd409ef98" alt="" loading="lazy" style=""></p>

<h2>Starter files</h2>

<h3><code>00-index.html</code></h3>

<p><textarea readonly="" rows="21" cols="81">&lt;!DOCTYPE html&gt;
&lt;html lang="en" dir="ltr"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"&gt;
    &lt;title&gt;Homepage - Techium&lt;/title&gt;
    &lt;meta name="description" content="Description of the page less than 150 characters"&gt;
    &lt;link rel="icon" type="image/png" href="images/favicon.jpg"&gt;
    &lt;link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:700&amp;display=swap" rel="stylesheet"&gt;
    &lt;link rel='stylesheet' href='00-styles.css'&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!– Header –&gt;
    &lt;header class="header" data-section-theme="dark"&gt;
      &lt;div class="container"&gt;
            &lt;div class="header-container"&gt;
        &lt;div class="header-logo"&gt;
          &lt;a href="#"&gt;
            &lt;img src="images/logo-white.png" alt="Techium logo" width="160" height="40"&gt;
          &lt;/a&gt;
        &lt;/div&gt;
        &lt;nav class="navbar-menu"&gt;
          &lt;ul class="nav"&gt;
            &lt;li class="nav-item"&gt;
              &lt;a href="#" class="nav-link"&gt;Home&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class="nav-item"&gt;
              &lt;a href="#services" class="nav-link"&gt;Services&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class="nav-item"&gt;
              &lt;a href="#works" class="nav-link"&gt;Works&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class="nav-item"&gt;
              &lt;a href="#about" class="nav-link"&gt;About&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class="nav-item"&gt;
              &lt;a href="#latest_news" class="nav-link"&gt;Latest news&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class="nav-item"&gt;
              &lt;a href="#testimonials" class="nav-link"&gt;Testimonials&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class="nav-item"&gt;
              &lt;a href="#contact" class="nav-link"&gt;Contact&lt;/a&gt;
            &lt;/li&gt;
                        &lt;li class="nav-item"&gt;
                &lt;form action="#" method="post" class="form-search"&gt;
                  &lt;input type="search" name="q" id="search-input" placeholder="Search..." aria-label="Search through site content"&gt;
                  &lt;button class="search-button"&gt;
                    &lt;svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="search-icon"&gt;
                      &lt;title&gt;
                        Search icon
                      &lt;/title&gt;
                      &lt;path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"&gt;&lt;/path&gt;
                    &lt;/svg&gt;
                  &lt;/button&gt;
                &lt;/form&gt;
              &lt;/li&gt;
          &lt;/ul&gt;
        &lt;/nav&gt;
      &lt;/div&gt;
            &lt;/div&gt;
    &lt;/header&gt;
    &lt;!– Main –&gt;
    &lt;main&gt;
      &lt;!– Hero section –&gt;
      &lt;section class="section-hero hero-homepage" data-section-theme="dark"&gt;
        &lt;div class="container"&gt;
          &lt;div class="section-body"&gt;
            &lt;section class="section-inner"&gt;
              &lt;h2 class="section-title"&gt;We help you building your brand&lt;/h2&gt;
              &lt;a href="#" class="button"&gt;Get Started&lt;/a&gt;
            &lt;/section&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
      &lt;!– Services section –&gt;
      &lt;section id="services" class="section section-services"&gt;
        &lt;div class="container"&gt;
          &lt;header class="section-header"&gt;
            &lt;h2 class="section-title"&gt;Services&lt;/h2&gt;
            &lt;p class="section-tagline"&gt;We work with you&lt;/p&gt;
          &lt;/header&gt;
          &lt;div class="section-body"&gt;
            &lt;ul class="row"&gt;
              &lt;li class="col-1-3"&gt;
                &lt;div class="card-services"&gt;
                  &lt;h3 class="card-title"&gt;&lt;a href="#"&gt;Design &amp; Concept&lt;/a&gt;&lt;/h3&gt;
                &lt;/div&gt;
              &lt;/li&gt;
              &lt;li class="col-1-3"&gt;
                &lt;div class="card-services"&gt;
                  &lt;h3 class="card-title"&gt;&lt;a href="#"&gt;Digital Strategy&lt;/a&gt;&lt;/h3&gt;
                &lt;/div&gt;
              &lt;/li&gt;
              &lt;li class="col-1-3"&gt;
                &lt;div class="card-services"&gt;
                  &lt;h3 class="card-title"&gt;&lt;a href="#"&gt;Content Strategy&lt;/a&gt;&lt;/h3&gt;
                &lt;/div&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
            &lt;ul class="row"&gt;
              &lt;li class="col-1-3"&gt;
                &lt;div class="card-services"&gt;
                  &lt;h3 class="card-title"&gt;&lt;a href="#"&gt;UX Design&lt;/a&gt;&lt;/h3&gt;
                &lt;/div&gt;
              &lt;/li&gt;
              &lt;li class="col-1-3"&gt;
                &lt;div class="card-services"&gt;
                  &lt;h3 class="card-title"&gt;&lt;a href="#"&gt;Web Development&lt;/a&gt;&lt;/h3&gt;
                &lt;/div&gt;
              &lt;/li&gt;
              &lt;li class="col-1-3"&gt;
                &lt;div class="card-services"&gt;
                  &lt;h3 class="card-title"&gt;&lt;a href="#"&gt;Social Media&lt;/a&gt;&lt;/h3&gt;
                &lt;/div&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
      &lt;!– Works section –&gt;
      &lt;section id="works" class="section section-works" data-section-theme="dark"&gt;
        &lt;div class="container"&gt;
          &lt;header class="section-header"&gt;
            &lt;h2 class="section-title"&gt;Works&lt;/h2&gt;
            &lt;p class="section-tagline"&gt;Take a look at our portfolio&lt;/p&gt;
          &lt;/header&gt;
          &lt;div class="section-body"&gt;
            &lt;ul class="row"&gt;
              &lt;li class="col-1-3"&gt;
                &lt;article class="card-work"&gt;
                  &lt;div class="card-outer"&gt;
                    &lt;div class="card-image"&gt;
                      &lt;img src="images/pic-work-01.jpg" alt=""&gt;
                    &lt;/div&gt;
                    &lt;div class="card-inner"&gt;
                      &lt;h3 class="card-title"&gt;&lt;a href="#"&gt;Interior Design&lt;/a&gt;&lt;/h3&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/article&gt;
              &lt;/li&gt;
              &lt;li class="col-1-3"&gt;
                &lt;article class="card-work"&gt;
                  &lt;div class="card-outer"&gt;
                    &lt;div class="card-image"&gt;
                      &lt;img src="images/pic-work-02.jpg" alt=""&gt;
                    &lt;/div&gt;
                    &lt;div class="card-inner"&gt;
                      &lt;h3 class="card-title"&gt;&lt;a href="#"&gt;Web Development&lt;/a&gt;&lt;/h3&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/article&gt;
              &lt;/li&gt;
              &lt;li class="col-1-3"&gt;
                &lt;article class="card-work"&gt;
                  &lt;div class="card-outer"&gt;
                    &lt;div class="card-image"&gt;
                      &lt;img src="images/pic-work-03.jpg" alt=""&gt;
                    &lt;/div&gt;
                    &lt;div class="card-inner"&gt;
                      &lt;h3 class="card-title"&gt;&lt;a href="#"&gt;Personal Development&lt;/a&gt;&lt;/h3&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/article&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
      &lt;!– About Us section –&gt;
      &lt;section id="about" class="section section-about-us"&gt;
        &lt;div class="container"&gt;
          &lt;header class="section-header"&gt;
            &lt;h2 class="section-title"&gt;About Us&lt;/h2&gt;
            &lt;p class="section-tagline"&gt;Everything about us&lt;/p&gt;
          &lt;/header&gt;
          &lt;div class="section-body"&gt;
            &lt;div class="row"&gt;
              &lt;div class="col-1-2"&gt;
                &lt;img src="images/pic-about-01.jpg" alt="" width="460" height="460"&gt;
              &lt;/div&gt;
              &lt;div class="col-1-2"&gt;
                &lt;h3&gt;Who are we&lt;/h3&gt;
                &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!&lt;/p&gt;
                &lt;h3&gt;Our culture&lt;/h3&gt;
                &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!&lt;/p&gt;
                &lt;h3&gt;How we work&lt;/h3&gt;
                &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!&lt;/p&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="section-footer"&gt;
            &lt;a href="#" class="button"&gt;Learn more about us&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
      &lt;!– Latest news section –&gt;
      &lt;section id="latest_news" class="section section-latest-news"&gt;
        &lt;div class="container"&gt;
          &lt;header class="section-header"&gt;
            &lt;h2 class="section-title"&gt;Latest News&lt;/h2&gt;
          &lt;/header&gt;
          &lt;div class="section-body"&gt;
            &lt;ul class="row"&gt;
              &lt;li class="col-1-3"&gt;
                &lt;article class="card-blog"&gt;
                  &lt;div&gt;
                    &lt;img src="images/pic-article-01.jpg" alt="" width="305" height="305"&gt;
                  &lt;/div&gt;
                  &lt;p class="card-category"&gt;Career&lt;/p&gt;
                  &lt;h3&gt;&lt;a href="#"&gt;Hoc loco tenere se Triarius non potuit.&lt;/a&gt;&lt;/h3&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?&lt;/p&gt;
                  &lt;small&gt;By Kelly D.&lt;/small&gt;
                &lt;/article&gt;
              &lt;/li&gt;
              &lt;li class="col-1-3"&gt;
                &lt;article class="card-blog"&gt;
                  &lt;div&gt;
                    &lt;img src="images/pic-article-02.jpg" alt="" width="305" height="305"&gt;
                  &lt;/div&gt;
                  &lt;p class="card-category"&gt;Digital Life&lt;/p&gt;
                  &lt;h3&gt;&lt;a href="#"&gt;Ut alios omittam, hunc appello, quem ille unum secutus est.&lt;/a&gt;&lt;/h3&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum mihi Piso: Quid ergo? Tum ille: Ain tandem? Non autem hoc: igitur ne illud quidem. Sed quod proximum fuit non vidit. Nos commodius agimus. An nisi populari fama?&lt;/p&gt;
                  &lt;small&gt;By William A.&lt;/small&gt;
                &lt;/article&gt;
              &lt;/li&gt;
              &lt;li class="col-1-3"&gt;
                &lt;article class="card-blog"&gt;
                  &lt;div&gt;
                    &lt;img src="images/pic-article-03.jpg" alt="" width="305" height="305"&gt;
                  &lt;/div&gt;
                  &lt;p class="card-category"&gt;Social&lt;/p&gt;
                  &lt;h3&gt;&lt;a href="#"&gt;Bestiarum vero nullum iudicium puto.&lt;/a&gt;&lt;/h3&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non igitur bene. Quid enim est a Chrysippo praetermissum in Stoicis? Pugnant Stoici cum Peripateticis. Prioris generis est docilitas, memoria; Apparet statim, quae sint officia, quae actiones.&lt;/p&gt;
                  &lt;small&gt;By Frances J.&lt;/small&gt;
                &lt;/article&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
      &lt;!– Testimonials section –&gt;
      &lt;section id="testimonial" class="section section-testimonial"&gt;
        &lt;div class="container"&gt;
          &lt;header class="section-header"&gt;
            &lt;h2 class="section-title"&gt;Testimonials&lt;/h2&gt;
            &lt;p class="section-tagline"&gt;We are more than a digital company&lt;/p&gt;
          &lt;/header&gt;
          &lt;div class="section-body"&gt;
            &lt;ul class="row"&gt;
              &lt;li class="col-1-3"&gt;
                &lt;article class="card-testimonial"&gt;
                  &lt;img src="images/pic-person-01.jpg" alt="Yuri Y. avatar" width="100" height="100" class="card-avatar"&gt;
                  &lt;blockquote class="card-quote"&gt;
                    &lt;p&gt;I am completely blown away. Thanks to Techium, we’ve just launched our 5th website!
                      &lt;cite&gt;Yuri Y.&lt;/cite&gt;
                    &lt;/p&gt;
                  &lt;/blockquote&gt;
                &lt;/article&gt;
              &lt;/li&gt;
              &lt;li class="col-1-3"&gt;
                &lt;article class="card-testimonial"&gt;
                  &lt;img src="images/pic-person-02.jpg" alt="Dorrie S. avatar" width="100" height="100" class="card-avatar"&gt;
                  &lt;blockquote class="card-quote"&gt;
                    &lt;p&gt;Thank you so much for your help. Techium company is awesome!
                      &lt;cite&gt;Dorrie S.&lt;/cite&gt;
                    &lt;/p&gt;
                  &lt;/blockquote&gt;
                &lt;/article&gt;
              &lt;/li&gt;
              &lt;li class="col-1-3"&gt;
                &lt;article class="card-testimonial"&gt;
                  &lt;img src="images/pic-person-03.jpg" alt="Sven H. avatar" width="100" height="100" class="card-avatar"&gt;
                  &lt;blockquote class="card-quote"&gt;
                    &lt;p&gt;I love your system. Definitely worth the investment. I’d be lost without Techium company.
                      &lt;cite&gt;Sven H.&lt;/cite&gt;
                    &lt;/p&gt;
                  &lt;/blockquote&gt;
                &lt;/article&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
      &lt;!– Contact section –&gt;
      &lt;section id="contact" class="section section-contact"&gt;
        &lt;div class="container"&gt;
          &lt;header class="section-header"&gt;
            &lt;h2 class="section-title"&gt;Contact&lt;/h2&gt;
            &lt;p class="section-tagline"&gt;We’d love to hear from you!&lt;/p&gt;
          &lt;/header&gt;
          &lt;div class="section-body"&gt;
            &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?&lt;/p&gt;
          &lt;/div&gt;
          &lt;div class="section-footer"&gt;
            &lt;a href="#" class="button"&gt;Get in touch&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
    &lt;/main&gt;
    &lt;!– Footer –&gt;
    &lt;footer class="footer" data-section-theme="dark"&gt;
      &lt;div  class="container"&gt;
        &lt;div class="row"&gt;
          &lt;div class="col-1-2"&gt;
            &lt;img src="images/logo-white.png" alt="Techium logo" width="160" height="40"&gt;
            &lt;address class="footer-address"&gt;
              972 Mission St&lt;br&gt;
              San Francisco, CA&lt;br&gt;
              94103
            &lt;/address&gt;
          &lt;/div&gt;
          &lt;div class="col-1-2"&gt;
            &lt;ul class="social nav"&gt;
              &lt;li class="social-item nav-item"&gt;
                &lt;a href="https://www.facebook.com/HolbertonSchool/" class="social-link"&gt;
                  &lt;svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25"&gt;
                    &lt;title&gt;
                      Facebook icon
                    &lt;/title&gt;
                    &lt;path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/&gt;
                  &lt;/svg&gt;
                &lt;/a&gt;
              &lt;/li&gt;
              &lt;li class="social-item nav-item"&gt;
                &lt;a href="https://twitter.com/holbertonschool" class="social-link"&gt;
                  &lt;svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25"&gt;
                    &lt;title&gt;
                      Twitter icon
                    &lt;/title&gt;
                    &lt;path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/&gt;
                  &lt;/svg&gt;
                &lt;/a&gt;
              &lt;/li&gt;
              &lt;li class="social-item nav-item"&gt;
                &lt;a href="https://www.instagram.com/holbertonschool/" class="social-link"&gt;
                  &lt;svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25"&gt;
                    &lt;title&gt;
                      Instagram icon
                    &lt;/title&gt;
                    &lt;path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/&gt;
                  &lt;/svg&gt;
                &lt;/a&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;hr&gt;
        &lt;div class="row"&gt;
          &lt;div class="col-1-2"&gt;
            &lt;p class="footer-copyright"&gt;© 2020 Techium, made with ♥ by students at Holberton School.&lt;/p&gt;
          &lt;/div&gt;
          &lt;div class="col-1-2"&gt;
            &lt;ul class="footer-nav nav"&gt;
              &lt;li class="footer-nav-item nav-item"&gt;
                &lt;a href="#" class="footer-nav-link"&gt;Terms of use&lt;/a&gt;
              &lt;/li&gt;
              &lt;li class="footer-nav-item nav-item"&gt;
                &lt;a href="#" class="footer-nav-link"&gt;Privacy Policy&lt;/a&gt;
              &lt;/li&gt;
              &lt;li class="footer-nav-item nav-item"&gt;
                &lt;a href="#" class="footer-nav-link"&gt;Cookie Policy&lt;/a&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/footer&gt;
  &lt;/body&gt;
&lt;/html&gt;
</textarea></p>

<h3><code>00-styles.css</code></h3>

<details>
<summary>Click to expand/hide file contents</summary>
<pre><code>
/* SUMMARY
1. GLOBAL
2. LAYOUT
3. SECTION
4. CARD
*/


/*** 1. GLOBAL ***/

/* Reset / Normalize
  ============================= */

/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}

/* Variables
  ============================= */

  :root {
    --color-primary: #D73953;
    --color-black:  #090909;
    --color-white: #ffffff;
    --color-grey: #a0a0a0;
    --color-light-grey: #f3f3f3;
    --color-dark-grey: #353535;
    --color-red: #cd3e65;
    --color-green: #08805b;
  
    --text-color: var(--color-black);
    --valid-color: var(--color-green);
    --error-color: var(--color-red);
  
    --font-family-base: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    --font-family-title: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  
    --font-size-small: 1.2rem;
    --font-size-medium: 1.6rem;
    --font-size-large: 1.8rem;
    --font-size-x-large: 2.3rem;
    --font-size-xx-large: 4.8rem;
  
    --font-weight-regular: 400;
    --font-weight-bold: 700;
  
    --line-height-small: 1.2;
    --line-height-base: 1.5;
    --line-height-big: 1.8;
  
    /** SECTION **/
    --section-padding: 5rem 0;
    --section-header-padding: 0 0 3rem;
    --section-header-align: center;
    --section-title-font-size: var(--font-size-xx-large);
    --section-title-font-weight: var(--font-weight-bold);
    --section-title-line-height: var(--line-height-small);
    --section-title-margin: 0;
    --section-title-color: var(--color-black);
    --section-tagline-transform: uppercase;
    --section-tagline-color: var(--color-primary);
    --section-tagline-font-family: var(--font-family-headings);
    --section-tagline-font-weight: var(--font-weight-bold);
    --section-tagline-margin: 0;
    --section-body-padding: 2rem 0 4rem;
    --section-footer-padding: 3rem 0 0;
    --section-footer-align: center;
  
    /** HEADER **/
    --header-padding: 4rem 0 0;
  
    /** FOOTER **/
    --footer-padding: 5rem 0 1rem;
  
    /** NAVBAR **/
    --nav-item-font-family: var(--font-family-headings);
    --nav-item-font-weight: var(--font-weight-bold);
    --nav-item-font-size: var(--font-size-medium);
    --nav-item-letter-spacing: .04rem;
    --nav-item-display: inline-block;
    --nav-item-margin: 0 0 0 2rem;
    --nav-item-link-hover: var(--color-white);
  
    /** BUTTON **/
    --button-display: inline-block;
    --button-padding: 1.5rem 3rem;
    --button-border: var(--color-primary) solid 0.2rem;
    --button-color: var(--color-black);
    --button-text-decoration: none;
    --button-font-size: var(--font-size-large);
    --button-hover-color: var(--color-white);
    --button-hover-text-decoration: none;
    --button-hover-background: var(--color-primary);
  
    /** MOTION **/
    --transition-duration: .3s;
    --transition-cubic-bezier: cubic-bezier(0.17, 0.67, 0, 1.01);
  }
  
  /* Base
      ============================= */
  
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  html {
  scroll-behavior: smooth;
  font-size: 62.5%;
  }
  
  body {
    color: var(--text-color);
    font-family: var(--font-family-base);
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-base);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-title);
    font-weight: var(--font-weight-bold);
  }
  
  a {
    color: var(--text-color);
    text-decoration: none;
  }
  
  a:visited {
    font-style: italic;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  a:active {
    background-color: var(--color-light-grey);
  }
  
  .button {
    display: var(--button-display);
    padding: var(--button-padding);
    border: var(--button-border);
    font-size: var(--button-font-size);
    color: var(--button-color);
    text-decoration: var(--button-text-decoration);
    cursor: pointer;
  }
  
  .button:hover {
    color: var(--button-hover-color);
    text-decoration: var(--button-hover-text-decoration);
    background: var(--button-hover-background);
    transition-duration: var(--transition-duration);
    transition-property: color, background-color;
  }
  
  .button-primary {
    color: var(--color-white);
    background: var(--color-primary);
  }
  
  .button-primary:hover {
    color: var(--color-primary);
    background: var(--color-white);
  }
  
  /* Helpers
      ============================= */
  
  .visually-hidden:not(:focus):not(:active) {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }
  
  /*** 2. LAYOUT ***/
  
  /* Layout
      ============================= */
  
  .container {
    width: 960px;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Grid
      ============================= */
  
  ul.row {
    margin: -1rem;
    padding: 0;
    list-style: none;
  }
  
  .row {
    display: flex;
  }
  
  [class*='col-'] {
    margin: 1rem;
  }
  
  .col-1-3 {
    width: calc((100% / 3) - 2rem);
  }
  
  .col-1-2 {
    width: calc((100% / 2) - 2rem);
  }
  
  /* Navbar
      ============================= */
  
  .nav {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
    display: flex;
  }
  
  .nav .nav-item {
    font-family: var(--nav-item-font-family);
    font-weight: var(--nav-item-font-weight);
    font-size: var(--nav-item-font-size);
    letter-spacing: var(--nav-item-letter-spacing);
  }
  
  .nav .nav-item + .nav-item {
    margin: var(--nav-item-margin);
  }
  
  .nav .nav-link {
    display: block;
    padding: 0.5rem 0;
    position: relative;
  }
  
  .nav .nav-link:hover {
    color: var(--nav-item-link-hover);
    text-decoration: none;
  }
  
  .nav .nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--color-white);
    width: 0;
    height: 0.2rem;
    transition: var(--transition-duration) var(--transition-cubic-bezier);
  }
  
  .nav .nav-item:hover .nav-link::before {
    background-color: var(--color-primary);
    width: 100%;
  }
  
  /* Header
      ============================= */
  
  .header {
    padding: var(--header-padding);
    position: relative;
    z-index: 3;
    background: transparent;
  }
  
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  /* Footer
      ============================= */
  
  .footer {
    --nav-item-font-weight: normal;
    --nav-item-font-size: var(--font-size-small);
    padding: var(--footer-padding);
  }
  
  .footer-copyright {
    margin: 0;
    font-size: var(--font-size-small);
    color: var(--text-color);
  }
  
  .footer ul {
    text-align: right;
  }
  
  .footer-address {
    color: var(--text-color);
  }
  
  .social-link {
    display: block;
  }
  
  .social-link &gt; svg {
    fill: var(--text-color);
  }
  
  /*** 3. SECTION ***/
  
  /* Section (all styles)
      ============================= */
  
  .section {
    padding: var(--section-padding);
  }
  
  .section-header {
    text-align: var(--section-header-align);
    padding: var(--section-header-padding);
  }
  
  .section-title {
    font-size: var(--section-title-font-size);
    font-weight: var(--section-title-font-weight);
    line-height: var(--section-title-line-height);
    margin: var(--section-title-margin);
    color: var(--section-title-color);
  }
  
  .section-tagline {
    color: var(--section-tagline-color);
    font-family: var(--section-tagline-font-family);
    text-transform: var(--section-tagline-transform);
    font-weight: var(--section-tagline-font-weight);
    margin: var(--section-tagline-margin);
  }
  
  .section-body {
    padding: var(--section-body-padding);
  }
  
  .section-footer {
    padding: var(--section-footer-padding);
    text-align: var(--section-footer-align);
  }
  
  /* Section theming
      ============================= */
  
  [data-section-theme="dark"] {
    --button-color: var(--color-white);
    --text-color: var(--color-white);
    --section-title-color: var(--color-white);
    background: var(--color-black);
  }
  
  /* Section HERO
      ============================= */
  
  .section-hero {
    position: relative;
    margin-top: -8.5rem;
  }
  
  .hero-homepage {
    background-image: url(images/banner-home.jpg);
    background-position: 75% 0;
    background-repeat: no-repeat;
    background-size: 90rem auto;
  }
  
  .section-hero .section-body {
    padding: 10rem 4rem;
  }
  
  .section-hero .section-category {
    color: var(--color-white);
    text-transform: uppercase;
  }
  
  .section-hero .section-title {
    margin-bottom: 5rem;
  }
  
  .section-hero .section-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: 50vh;
  }
  /* Section Latest news
      ============================= */
  
  .section-latest-news .row {
    flex-direction: row-reverse;
  }
  
  /* Section SERVICES
      ============================= */
  
  .section-services .row {
    flex-wrap: wrap;
  }
  
  /* Section ABOUT US
      ============================= */
  
  .section-about-us [class*='col-'] {
    align-self: center;
  }
  
  /*** 4. CARD ***/
  
  /* Card (all styles)
      ============================= */
  
  .card-category {
    color: var(--color-primary);
  }
  
  /* Card WORK
      ============================= */
  
  .card-work .card-outer {
    position: relative;
    overflow: hidden;
  }
  
  .card-work:hover .card-outer {
    transform: scale(0.95);
  }
  
  .card-work .card-image img {
    height: 30rem;
    width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
  
  .card-work:hover .card-image {
    transform: scale(1.2);
    transition: var(--transition-duration) var(--transition-cubic-bezier);
  }
  
  .card-work .card-inner {
    position: absolute;
    top: -0.1rem;
    left: -0.1rem;
    right: -0.1rem;
    bottom: -0.1rem;
    z-index: 1;
    transition: var(--transition-duration) var(--transition-cubic-bezier);
  }
  
  .card-work:hover .card-inner {
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  .card-work .card-title {
    text-align: center;
    margin: 0;
    opacity: 0;
    height: 100%;
    position: relative;
  }
  
  .card-work .card-title a {
    display: block;
    text-decoration: none;
    padding-top: 45%;
  }
  
  .card-work .card-title a::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
  }
  
  .card-work:hover .card-title {
    opacity: 1;
  }
  
  /* Card SERVICES
      ============================= */
  
  .card-services .card-title {
    margin: 0;
  }
  
  .card-services a {
    display: block;
    padding: 2rem;
    background-color: var(--color-light-grey);
  }
  
  .card-services a:hover {
    color: var(--color-white);
    background: var(--color-primary);
    text-decoration: none;
    transition-duration: 0.3s;
    transition-property: color, background-color;
  }
  
  /* Card TESTIMONIAL
      ============================= */
  
  .card-testimonial {
    text-align: center;
  }
  
  .card-testimonial .card-avatar {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
  }
  
  .card-testimonial .card-quote cite {
    display: block;
    padding-top: 1rem;
    color: var(--color-primary);
  }
  
  .card-testimonial .card-quote {
    position: relative;
  }
  
  .card-testimonial .card-quote::before {
    content: '\201C';
    position: absolute;
    top: -4.5rem;
    left: -1rem;
    color: #efeded;
    font-size: 10rem;
    z-index: -1;
  }
  
  /*** ARTICLE PAGE ***/
  
  /* Section HERO (article)
      ============================= */
  
  .hero-article {
    background-size: 150rem 100rem;
    background-position: 50% 0;
  }
  
  .hero-article::before {
    content: '';
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
  }
  
  .hero-article .section-inner {
    text-align: center;
    align-items: center;
    min-height: 40vh;
  }
  
  .hero-article .section-body {
    position: relative;
    padding: 7rem 0 0;
    z-index: 2;
  }
  
  .main-article {
    padding: 5rem 0;
  }
  
  /* Post
      ============================= */
  
  .post {
    display: flex;
    align-items: baseline;
  }
  
  .post-content {
    width: 100%;
    padding-left: 7rem;
  }
  
  .post-aside {
    order: -1;
    min-width: 20%;
  }
  
  .post img {
    width: 100%;
    height: auto;
  }
  
  .post-content p:first-child {
    font-size: var(--font-size-x-large);
  }
  
  .post-content .img-caption {
    margin: 1rem 0;
    padding: 0 0.5rem;
    font-size: var(--font-size-small);
    color: var(--color-grey);
    text-align: center;
  }
  
  /* Post Meta
      ============================= */
  
  .post-meta-list {
    flex-direction: column;
  }
  
  .post-meta-list strong {
    color: var(--color-primary);
    font-size: 1.3rem;
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    letter-spacing: normal;
    display: block;
  }
  
  .post-meta-list [class*='post-meta'] {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 0.2rem solid var(--color-light-grey);
  }
  
  .post-meta-list [class*='post-meta']:last-child {
    border: none;
    margin-bottom: 3rem;
  }
  
  /* Tag list
      ============================= */
  
  .tag-list {
    padding: 0;
    list-style: none;
  }
  
  .tag-list li {
    display: inline;
  }
  
  .tag-list li::after {
    content: ", ";
  }
  
  .tag-list li:last-child::after {
    content: "";
  }
  
  /*** FORM ***/
  
  /* Comment section
      ============================= */
  
  .post-comments {
    width: 80%;
    margin: 10rem 0 0 auto;
    padding-left: 7rem;
  }
  
  .post-comments .section-title {
    font-variant: small-caps;
  }
  
  /* Basic form
      ============================= */
  
  form {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    margin: 0;
  }
  
  fieldset {
    border: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 0 2rem;
  }
  
  label {
    cursor: pointer;
    display: block;
    white-space: nowrap;
    font-size: 1.4rem;
    padding: 0 0 .5rem;
  }
  
  input[type=text],
  input[type=email],
  textarea {
    position: relative;
    width: 100%;
    padding: 1.2rem;
    line-height: 1;
    border: .1rem solid var(--color-black);
    background-color: var(--color-white);
    box-shadow: none;
    outline: 0;
  }
  
  input[type=text],
  input[type=email] {
    padding-right: 3rem;
  }
  
  input[type=text]:focus,
  input[type=email]:focus,
  textarea:focus {
    border: .1rem solid var(--color-grey);
  }
  
  ::placeholder {
    font-style: italic;
    font-size: var(--font-size-small);
  }
  
  /* Form group
      ============================= */
  
  .form-group {
    padding: 1rem;
    margin: 0;
    background-color: var(--color-white);
  }
  
  .form-group:focus-within {
    background-color: var(--color-light-grey);
    transition: .3s;
  }
  
  /* Form field
      ============================= */
  
  .form-field-container {
    position: relative;
  }
  
  .form-field-icon {
    font-style: normal;
  }
  
  /* Form help
      ============================= */
  
  .form-group .form-help {
    margin: 0;
    line-height: 1.3;
    letter-spacing: .019rem;
    color: var(--color-dark-grey);
    font-size: var(--font-size-small);
    max-height: 0;
    transition: .3s;
    overflow: hidden;
  }
  
  .form-group:focus-within .form-help {
    max-height: 20rem;
    margin: .4rem 0 0;
  }
  
  /* Form error handling
      ============================= */
  
  input:not(:placeholder-shown) ~ .form-field-icon::after {
    height: 100%;
    right: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 1.3em;
  }
  
  input:required:invalid:not(:focus):not(:placeholder-shown) ~ .form-field-icon::after {
    content: '✘';
    color: var(--error-color);
  }
  
  input:required:valid ~ .form-field-icon::after {
    content: '✔';
    color: var(--valid-color);
  }
  
  input:required:valid ~ .form-help {
    max-height: 0;
  }
  
  input:required:invalid:not(:focus):not(:placeholder-shown),
  textarea:invalid:not(:focus):not(:placeholder-shown) {
    border: 0.1rem solid var(--error-color);
  }
  
  input:required:valid:not(:placeholder-shown),
  textarea:valid:not(:placeholder-shown) {
    border: 0.1rem solid var(--valid-color);
  }
  
  /*** SEARCH FORM ***/
  
  .form-search {
    display: block;
    padding: .5rem 0;
    position: relative;
  }
  
  .form-search .search-button {
    display: inline-block;
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0;
  }
  
  .search-button .search-icon {
    fill: var(--color-white);
    width: 1.5rem;
    height: 1.5rem;
  }
  
  .form-search input[type="search"] {
    display: inline-block;
    color: var(--color-white);
    padding-right: 2rem;
    height: 3rem;
    border: 0;
    outline: none;
    position: absolute;
    width: 0;
    right: 0;
    background: none;
    cursor: pointer;
    z-index: 3;
    transition: width .4s cubic-bezier(0, 0.795, 0, 1);
  }
  
  .form-search input[type="search"]:focus {
    position: relative;
    width: 15rem;
    z-index: 1;
    border-bottom: .1rem solid var(--color-grey);
    padding: 0;
    cursor: text;
    margin: 0 1rem;
  }
    </code></pre>
    </details>
    

<h3>Images</h3>

<p>Use the images that you downloaded in the <a href="https://intranet.hbtn.io/projects/583" title="CSS Advanced" target="_blank">CSS Advanced</a> project and place them into an <code>images</code> directory at the root of the project.</p>

  </div>
</div>