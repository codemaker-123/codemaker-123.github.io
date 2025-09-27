---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* B.S. in Electronic Information Engineering, Wuhan University, 2024
  * GPA: 3.60/4.0 (87.2)
  * Third Class Scholarship of School of Electronic Information, 2021
    
Work Experience
======
* Aug 2023 - Jan 2024: **Visual Alignment in Industrial Settings**
  * Intern, Siemens, Shanghai, China
  * Simulated AGV to detect cargo in Gazebo based on ROS2
  * Designed visual algorithm that calculated pose and position of cargo by determining its frontal area

Skills
======
* **Programming**: Proficient in Python, C++, C
* **Development Tools & Platforms**: Experienced with ROS, Linux, and embedded systems
* **Research Areas**:
  * Multimodal Learning
  * Computer Vision
  * Reinforcement Learning
  * Trustworthy AI
  * Large Language Models

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
