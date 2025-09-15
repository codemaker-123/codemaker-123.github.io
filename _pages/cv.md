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
  * GPA: 3.60/4.0 (87.2%)
  * Third Class Scholarship of School of Electronic Information, 2021

Research Experience
======
* Mar 2025 - May 2025: **Geo-Image-Textualization**
  * Research Assistant, Department of Computer Science, UIUC
  * Advisor: Prof. Tong Zhang
  * Proposed Geo-Image-Textualization, a reinforcement learning-based framework for generating semantically aligned geometry image-caption pairs
  * Constructed GeoReasoning-10K, the first dataset with full modality equivalence for geometric reasoning
  * Demonstrated significant improvements in Qwen-2.5-vl performance across geometry, arithmetic, algebraic, and numeric domains

* Jul 2024 - Jan 2025: **Probabilistic Residual User Clustering**
  * Research Assistant, Department of Computer Science, Rutgers
  * Advisor: Prof. Hao Wang
  * Proposed PRUC, a causal Bayesian framework that clusters users and models residuals between predicted and true ratings
  * Introduced a plug-and-play architecture compatible with diverse deep learning recommenders
  * Demonstrated significant improvement across benchmark datasets while uncovering meaningful user clusters

* May 2024 - Sep 2024: **Interpretability of MLLM**
  * Research Assistant, Department of Computer Science, Rutgers
  * Advisor: Prof. Hao Wang
  * Identified strong correlations between visual inputs and token-level outputs in LLaVA
  * Enhanced interpretability by uncovering underlying attention mechanisms
  * Proposed adaptive pruning technique to selectively prune hierarchical attention layers

* Mar 2024 - May 2024: **Multimodal Needle Benchmark & Continual Learning Survey**
  * Research Assistant, Department of Computer Science, Rutgers
  * Advisor: Prof. Hao Wang
  * Evaluated performance of InstructBLIP vicuna/t5 on custom-developed benchmark
  * Researched advancements in continual learning for multimodal large language models

* Jun 2023 - Sep 2023: **Dynamic Scene Graph Generation**
  * Research Assistant, Shenzhen University
  * Advisors: Prof. Runhao Zeng, Chuang Gan
  * Deployed Multimodal-LLM following MiniGPT4 and fine-tuned on AG datasets to generate scene graphs
  * Fine-tuned class, box models in MiniGPT4's base model by transfer learning to enhance relationship predictions

* Feb 2023 - Apr 2023: **Multi-Tailed Vision Transformers**
  * Research Assistant, Department of Computer Science, University of Sydney
  * Advisor: Prof. Chang Xu
  * Designed multiple tails to generate visual sequences of different lengths for Transformer encoder
  * Achieved significant reduction in FLOPs with no accuracy degradation

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
