---
layout: default
title: References
permalink: /references/
order: 6
description: Ricardo Jorge Gil Ramos - Personal Page
tags:
- References
---
<div id="center-body" class="wrap">
  <div id="{{area.permalink | replace '/' ''}}-page" class="content-body" style="margin:20px 0px">
    <!--<h2><i class="fa fa-warning fa-lg"></i> References: You are in the References area.</h2>-->
    {% for post in site.posts %}
      {% if post.tags contains "References" %}
      <hr/>
      <article class="blog-post">
        <div class="row entry">
          <div class="col-sm-1 scrollimation fade-up in">
            <div id="{{ post.entry }}" class="media">
              <div style="overflow: hidden" class="media-body">
                <h4>{{ post.title }}</h4>
                <time datetime="{{ post.date | date: "%F" }}">{{ post.date | date: "%b %-d, %Y" }}{% if post.author %} - {{ post.author }}{% endif %}{% if post.meta %} - {{ post.meta }}{% endif %}</time>
                {% if post.tags.size > 0 %}
                  <ul class="post-tags">
                    {% for tag in post.tags %}
                      <li><a href="{{ site.baseurl }}/tags/#{{ tag }}-ref">#{{ tag }}</a></li>
                    {% endfor %}
                  </ul>
                {% endif %}          
                {{ post.content | markdownify }}
              </div>
            </div>
          </div>
        </div>
      </article>
      {% endif %}
    {% endfor %}
  </div>
</div>