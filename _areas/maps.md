---
layout: default
title: Maps
permalink: /maps/
order: 4
description: Ricardo Jorge Gil Ramos - Personal Page
tags:
- Maps
---
<div id="center-body" class="wrap">
  <div id="{{permalink | replace '/' ''}}-page" class="content-body" style="margin:20px 0px">
    <!--<h2><i class="fa fa-warning fa-lg"></i> Design: You are in the Design area.</h2>-->
    {% for post in site.posts %}
      {% if post.tags contains "Maps" %}
      <hr/>
      <article class="blog-post">
        <div class="row entry">
          <div class="col-sm-1 scrollimation fade-up in">
            <div id="{{ post.entry }}" class="media">
              <div style="overflow: hidden" class="media-body">
                <h4>{{ post.title }}</h4>
                <time datetime="{{ post.date | date: "%F" }}">{{ post.date | date: "%b %-d, %Y" }}{% if post.author %} - {{ post.author }}{% endif %}{% if post.meta %} - {{ post.meta }}{% endif %}</time>
                {% if post.tags.size > 0 %}
                  <div class="post-taglist">
                    {% for tag in post.tags %}
                      <a href="{{ site.baseurl }}/tags/#{{ tag }}-ref" class="post-tag">{{ tag }}</a>
                    {% endfor %}
                  </div>
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

