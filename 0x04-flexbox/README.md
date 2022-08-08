# Flexbox

<div class="panel panel-default" id="project-description">
  <div class="panel-body">
    <p><img src="https://user-images.githubusercontent.com/90220978/183459087-cd395ad9-9f35-4732-9aef-a99effba669a.jpg" alt="" style=""></p>

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" title="A Complete Guide to Flexbox | CSS-Tricks" target="_blank">A Complete Guide to Flexbox | CSS-Tricks</a></li>
<li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" title="Flexbox Froggy - A game for learning CSS flexbox" target="_blank">Flexbox Froggy - A game for learning CSS flexbox</a> </li>
<li><a href="http://www.flexboxdefense.com" title="Flexbox Defense" target="_blank">Flexbox Defense</a> </li>
<li><a href="https://yoksel.github.io/flex-cheatsheet/" title="Flexbox Cheatsheet" target="_blank">Flexbox Cheatsheet</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout" title="CSS Flexible Box Layout - CSS: Cascading Style Sheets | MDN" target="_blank">CSS Flexible Box Layout - CSS: Cascading Style Sheets | MDN</a> </li>
<li><a href="https://github.com/afonsopacifer/awesome-flexbox" title="afonsopacifer/awesome-flexbox: A curated list of CSS Flexible Box Layout Module or only Flexbox." target="_blank">afonsopacifer/awesome-flexbox: A curated list of CSS Flexible Box Layout Module or only Flexbox.</a> </li>
<li><a href="/https://flexbox.buildwithreact.com" title="Build with Flexbox" target="_blank">Build with Flexbox</a></li>
<li><a href="https://bennettfeely.com/flexplorer/" title="Flexplorer" target="_blank">Flexplorer</a></li>
<li><a href="https://www.w3.org/TR/css-flexbox-1/#flex" title="CSS Flexible Box Layout Module Level 1" target="_blank">CSS Flexible Box Layout Module Level 1</a></li>
<li><a href="https://flexbox.malven.co" title="FLEX: A simple visual cheatsheet for flexbox" target="_blank">FLEX: A simple visual cheatsheet for flexbox</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="https://fs.blog/feynman-learning-technique/" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>What is Flexbox?</li>
<li>How to convert float positioning to a flex display</li>
<li>How to horizontally and vertically align elements using Flexbox</li>
<li>The difference between the main and cross axes</li>
<li>Properties that work on flex elements vs flex container</li>
<li>Shorthands for flex</li>
<li>How to create a new page with flex in mind</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code></li>
<li>A <code>README.md</code> at the root of the project directory is mandatory</li>
<li>All of your code will be executed on Ubuntu 18.04 using Python 3.7.x</li>
<li>All of your files should end with a new line</li>
</ul>

<h2>Files</h2>

<h3>Required images for your HTML files</h3>

<p>Download the images linked in the <a href="https://intranet.hbtn.io/projects/583" title="CSS Advanced" target="_blank">CSS Advanced</a> and place them into an images directory at the root of the project.</p>

<h3><code>HTML starter file</code></h3>

<p><textarea readonly="" rows="21" cols="81">&lt;!DOCTYPE html&gt;
&lt;html lang="en" dir="ltr"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"&gt;
    &lt;title&gt;Homepage - Techium&lt;/title&gt;
    &lt;meta name="description" content="Description of the page less than 150 characters"&gt;
    &lt;link rel="icon" type="image/png" href="images/favicon.jpg"&gt;
    &lt;link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:700&amp;display=swap" rel="stylesheet"&gt;
    &lt;link rel='stylesheet' href='styles.css'&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!– Header –&gt;
    &lt;header class="header" data-section-theme="dark"&gt;
      &lt;div class="container"&gt;
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
          &lt;/ul&gt;
        &lt;/nav&gt;
      &lt;/div&gt;
    &lt;/header&gt;
    &lt;!– Main –&gt;
    &lt;main&gt;
      &lt;!– Hero section –&gt;
      &lt;section class="section-hero" data-section-theme="dark"&gt;
        &lt;div class="container"&gt;
          &lt;div class="section-body"&gt;
            &lt;section class="section-inner"&gt;
              &lt;h2 class="section-title"&gt;We help you build your brand&lt;/h2&gt;
              &lt;a href="#" class="button"&gt;Get Started&lt;/a&gt;
            &lt;/section&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
      &lt;!– Services section –&gt;
      &lt;section id="services" class="section"&gt;
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
      &lt;section id="works" class="section" data-section-theme="dark"&gt;
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
      &lt;section id="about" class="section"&gt;
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
      &lt;section id="latest_news" class="section"&gt;
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
      &lt;section id="testimonial" class="section"&gt;
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
      &lt;section id="contact" class="section"&gt;
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

<h3><code>CSS starter file</code></h3>

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
  
    --text-color: var(--color-black);
  
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
    --header-logo-position: relative;
    --header-logo-link-display: inline-block;
    --header-logo-link-position: absolute;
    --header-logo-link-top: -1rem;
    --header-logo-link-left: 0;
  
    /** FOOTER **/
    --footer-padding: 5rem 0 1rem;
  
    /** NAVBAR **/
    --nav-item-font-family: var(--font-family-headings);
    --nav-item-font-weight: var(--font-weight-bold);
    --nav-item-font-size: var(--font-size-medium);
    --nav-item-letter-spacing: .04rem;
    --nav-item-display: inline-block;
    --nav-item-margin: 0 2rem 0 0;
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
  }
  
  .button:hover {
    color: var(--button-hover-color);
    text-decoration: var(--button-hover-text-decoration);
    background: var(--button-hover-background);
    transition-duration: var(--transition-duration);
    transition-property: color, background-color;
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
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .row::after {
    content: '';
    display: table;
    clear: both;
  }
  
  [class*='col-'] {
    float: left;
    padding: 0.5rem;
  }
  
  .col-1-3 {
    width: 33.33%;
  }
  
  .col-1-2 {
    width: 50%;
  }
  
  /* Navbar
      ============================= */
  
  .navbar-menu {
    float: right;
  }
  
  .nav {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
  }
  
  .nav .nav-item {
    font-family: var(--nav-item-font-family);
    font-weight: var(--nav-item-font-weight);
    font-size: var(--nav-item-font-size);
    letter-spacing: var(--nav-item-letter-spacing);
    display: var(--nav-item-display);
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
  
  .header-logo {
    position: var(--header-logo-position);
  }
  
  .header-logo a {
    display: var(--header-logo-link-display);
    position: var(--header-logo-link-position);
    top: var(--header-logo-link-top);
    left: var(--header-logo-link-left);
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
    background-color: #010101;
  }
  
  /* Section HERO
      ============================= */
  
  .section-hero {
    background-position: 75% 0;
    background-repeat: no-repeat;
    background-size: 90rem auto;
    background-color: #010101;
  }
  
  .section-hero .section-title {
    margin-bottom: 5rem;
  }
  
  .section-hero .section-inner {
    padding: 10rem 40rem 2rem 0;
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
    </code></pre>
    </details>

<h3>Files for tasks 10 and onward</h3>

<h4><code>article.html</code></h4>

<p><textarea readonly="" rows="21" cols="81">&lt;!DOCTYPE html&gt;
&lt;html lang="en" dir="ltr"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"&gt;
    &lt;title&gt;Article - Techium&lt;/title&gt;
    &lt;meta name="description" content="Description of the page less than 150 characters"&gt;
    &lt;link rel="icon" type="image/jpg" href="../images/favicon.jpg"&gt;
    &lt;link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:700&amp;display=swap" rel="stylesheet"&gt;
    &lt;link rel="stylesheet" href="00-styles.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!– Header –&gt;
    &lt;header class="header" data-section-theme="dark"&gt;
      &lt;div class="container"&gt;
        &lt;div class="header-container"&gt;
          &lt;div class="header-logo"&gt;
            &lt;a href="/"&gt;
              &lt;img src="images/logo-white.png" alt="Techium logo" width="160" height="40"&gt;
            &lt;/a&gt;
          &lt;/div&gt;
          &lt;nav class="navbar-menu"&gt;
            &lt;ul class="nav"&gt;
              &lt;li class="nav-item"&gt;
                &lt;a href="/" class="nav-link"&gt;Home&lt;/a&gt;
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
            &lt;/ul&gt;
          &lt;/nav&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/header&gt;
    &lt;!– Main –&gt;
    &lt;main&gt;
      &lt;!– Hero section –&gt;
      &lt;header class="section-hero" data-section-theme="dark"&gt;
        &lt;div class="container"&gt;
          &lt;div class="section-body"&gt;
            &lt;section class="section-inner"&gt;
            &lt;/section&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/header&gt;
    &lt;/main&gt;
    &lt;!– Footer –&gt;
    &lt;footer class="footer" data-section-theme="dark"&gt;
      &lt;div  class="container"&gt;
        &lt;div class="row"&gt;
          &lt;div class="col-1-2"&gt;
            &lt;img src="images/logo-white.png" alt="Techium logo" width="160" height="40"&gt;
            &lt;address class="footer-address"&gt;
              234 Washington Street&lt;br&gt;
              Urbana, Illinois
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

  </div>
</div>
