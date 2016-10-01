---
layout: default
permalink: /
title: Ricardo Jorge Gil Ramos - Personal Page
description: Ricardo Jorge Gil Ramos - Personal Page
urlprev: references
urlnext: bigdata
---

<section>
  <div id="" class="wrap">
{% include slider.html %}
{% include toc.html %}
    <div class="content-body">
      <section class="content-wellcome">
          <p>
            <a class="toc-item" title="Wellcome" id="wellcome"></a>
          </p>
          <h2>
            Wellcome
          </h2>
          <p><i class="fa fa-child fa-lg"></i>
          Wellcome to my personal site. My name is Ricardo Jorge Gil Ramos.</p>
          <p>
          I am a Technology Enthusiastic and Data Scientist. I consider Computer Science to be the subtle art between man and machine,
          an exciting communication path to share knowledge, information an emotions.</p>
          <p>
          I am mostly interested in Data Visualization, Big Data, Statistics and Machine Learning.<br/>Always on the run!<br/>
          I love working in a team, specially the multidisciplinary ones, learning and sharing know-how and expertise.
          </p>
          <p>
          </p>
      </section>
      <section class="content-features">
          <p>
            <a class="toc-item" title="Features" id="Features"></a>
          </p>
          <h2>
            Features
          </h2>
          <!-- Features 1 -->
          <div class="row features">
            <div class="col-sm-4 scrollimation fade-up in">
              <div class="media" id="bigdata-feature">
                <div class="icon pull-left" style="margin-right:10px">
                  <i class="media-object icon-1 fa fa-cube"></i>
                  <i class="media-object icon-2 fa fa-share-alt"></i>
                </div>
                <div class="media-body" style="overflow: hidden">
                  <h4>Big Data &amp; BI</h4>
                  <p>Jorge's expertise in Business Intelligence and Big Data arquitecture and software.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 scrollimation fade-up d1 in">
              <div class="media" id="datascience-feature">
                <div class="icon pull-left" style="margin-right:10px">
                  <i class="media-object icon-1 fa fa-area-chart"></i>
                  <i class="media-object icon-2 fa fa-bar-chart-o"></i>
                </div>
                <div class="media-body" style="overflow: hidden">
                  <h4>Data Science &amp; Dashboards</h4>
                  <p>Extract knowledge from data using statistical or machine learning tools.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 scrollimation fade-up d2 in">
              <div class="media" id="html5-feature">
                <div class="icon pull-left" style="margin-right:10px">
                  <i class="media-object icon-1 fa fa-html5"></i>
                  <i class="media-object icon-2 fa fa-css3"></i>
                </div>
                <div class="media-body" style="overflow: hidden">
                  <h4>HTML5 &amp; CSS3</h4>
                  <p>Jorge supports the latest in Browser based UI Technologies.</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Features 2 -->
          <div class="row features">
            <div class="col-sm-4 scrollimation fade-up in">
              <div class="media" id="javascript-feature">
                <div class="icon pull-left" style="margin-right:10px">
                  <i class="media-object icon-1 fa fa-code"></i>
                  <i class="media-object icon-2 fa fa-plug"></i>
                </div>
                <div class="media-body" style="overflow: hidden">
                  <h4>Javascript &amp; Json &amp; API</h4>
                  <p>Knowledge of javascript & Json for talking to RESTful Web Services. Also Web API technologies.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 scrollimation fade-up d1 in">
              <div class="media" id="responsive-feature">
                <div class="icon pull-left" style="margin-right:10px">
                  <i class="media-object icon-1 fa fa-mobile"></i>
                  <i class="media-object icon-2 fa fa-desktop"></i>
                </div>
                <div class="media-body" style="overflow: hidden">
                  <h4>Responsive Design</h4>
                  <p>Design with frameworks like Bootstrap for responsive Layouts.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 scrollimation fade-up d2 in">
              <div class="media" id="geolocalization-feature">
                <div class="icon pull-left" style="margin-right:10px">
                  <i class="media-object icon-1 fa fa-map-marker"></i>
                  <i class="media-object icon-2 fa fa-globe"></i>
                </div>
                <div class="media-body" style="overflow: hidden">
                  <h4>Geolocalization &amp; Maps</h4>
                  <p>For your localization business logic, and the latest in UI technologies for a mapping Design.</p>
                </div>
              </div>
            </div>
          </div>
          <p style="clear:both"></p>
      </section>
      <section class="content-posts">
        <p>
          <a class="toc-item" title="Posts" id="Posts"></a>
        </p>
        <h2>Posts</h2>
        <ul class="posts">
          {% for post in site.posts %}
            <li>
              <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
              <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
            </li>
          {% endfor %}
        </ul>
      </section>
    </div>
  </div>
</section>
<!--<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>-->

