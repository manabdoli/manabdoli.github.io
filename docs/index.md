---
layout: page
---

<!--
<p> Inspect: {{ site.author | inspect }}</p>

<p>Author name: {{ site.author.name }}</p>
<p>Picture path: {{ site.author.picture }}</p>
<p>Author test: {{ site.author.test }}</p>
-->

# [Mansour Abdoli](https://manabdoli.github.io)
This portfolio showcases my work on development of practical tools that I use in teaching statistics and applying it to research. My focus in on Transparency, Reproducibility, and of course, automation.


<h2>Recent Posts</h2>
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%B %d, %Y" }})</small>
    </li>
  {% endfor %}
</ul>

