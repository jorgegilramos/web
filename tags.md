---
layout: default
title: Ricardo Jorge Gil Ramos - Tags
description: Ricardo Jorge Gil Ramos - Tags
body-id: tags
permalink: /tags/
---

<section>
  <div id="center-body" class="wrap">
    <div class="">
      <section class="content-tags">
        <h1>Tags</h1>
        <ul style="list-style: outside none none">
          {% for tag in site.tags %}
          <li>
            <h2 id="{{ tag[0] }}-ref">#{{ tag[0] }}</h2>
            <ul>
              {% for post in tag[1] %}
                 <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
              {% endfor %}
            </ul>
          </li>
          {% endfor %}
        </ul>
      </section>
    </div>
  </div>
</section>
