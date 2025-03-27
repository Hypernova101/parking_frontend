---
layout: post 
search_exclude: true
show_reading_time: false
permalink: /mihirmcqblog
title: Mihir's MCQ Blog
categories: [Mihir Final Retrospective]
---

# 2020 Practice Exam 1 MCQ Blog/Reflection

My score on this MCQ was a 62/67.


![MCQ Score]({{site.baseurl}}/images/mihir/mcqscore.png)

I tried to take this test like it was the actual AP test. That means not consulting any external sources, like my friends, when stuck.

I completed this test on Friday, 2/28, which was Before Time.

I ended up spending 1 hour 37 minutes on this test. Considering the MCQ section of the AP test is 2 hours, and the increased stress/pressure that comes with the AP test, I am extremely happy with my score and time.

But, there's always room to improve. Below are a list of topics with respect to the number of questions on the test, and a percentage of my performance. For space and time purposes, I will display the topics where I failed to get 100% on.


### By Topic

| Topic | Number of Questions | Average Performance % |
|-------|---------------------|-----------------------|
| 2.1: Binary Numbers | 5 | 80% |
| 3.4: Strings | 1 | 0% |
| 3.6: Conditionals | 1 | 0% |
| 3.9: Developing Algorithms | 4 | 75% |
| 5.5: Legal and Ethical Concerns | 3 | 67% |


## Big Idea 2: Data

In Big Idea 2, I was able to master the topics of 2.2 Data Compression, 2.3 Extracting Personal Information from Data, and 2.4 Using Programs with Data.

That leaves Topic 2.1, Binary Numbers. Now, while I was able to answer all the strictly binary related duqestions, the question I messed up on was:

![Question 17]({{site.baseurl}}/images/mihir/q17.png)

| Question | Correct Answer | Why I Was Wrong | Action Plan to Improve |
|----------|---------------|-----------------|------------------------|
| Which of the following can be represented by a sequence of bits? | **D: I, II, and III** | I only chose I only, but at the lowest level, **all digital data**, including integers, alphanumeric characters, and machine language instructions, are represented as sequences of bits. | Review how different types of data (numbers, text, machine instructions) are stored in binary. Study topics like **ASCII encoding**, **machine code**, and **data representation** in computing. Practice more questions on binary representation. |


## Big Idea 3: Algorithms and Programming

In Big Idea 3, I got 100% on all topics, except for Strings, Conditionals, and Developing Algorithms. The first question I messed up was strings.

![Question 65]({{site.baseurl}}/images/mihir/q65.png)

| Question | Correct Answer | Why I Was Wrong | Action Plan to Improve |
|----------|---------------|-----------------|------------------------|
| Which of the following can be used to store the string `"jackalope"` in the string variable `animal`? | **B and C** | I correctly selected **B**, but I mistakenly chose **D** instead of **C**. **B was correct** because it properly used `Substring` and `Concat` to extract `"lope"`, prepend `"a"`, and then concatenate `"jack"`, forming `"jackalope"`. **D was incorrect** because it attempted to concatenate `"a"` too early in the process, leading to the wrong string order. **C was actually correct** because it properly built `"jackalope"` by first extracting `"jack"`, adding `"a"`, and then appending `"lope"`. My mistake was likely due to misjudging the order of concatenation in **C vs. D**. | Review how **concatenation order** affects final string formation. Carefully trace each step in **string-building problems** to ensure I understand how substring extractions and concatenations interact. Practice debugging incorrect answers by manually checking the expected vs. actual outputs. |

![Question 62]({{site.baseurl}}/images/mihir/q62.png)

| Question | Correct Answer | Why I Was Wrong | Action Plan to Improve |
|----------|---------------|-----------------|------------------------|
| Which selection statements will display `true` given `x = true` and `y = false`? | **A and B** | I mistakenly selected **A and another incorrect option instead of B**. **A is correct** because `x` is `true`, so the `IF x` condition executes, and since `x OR y` evaluates to `true`, it displays `true`. **B is also correct** because `IF (x OR y)` evaluates to `true` (since `x = true`), and it then displays `x`, which is `true`. I likely misunderstood how logical operators (`AND`, `OR`) work within conditional statements. | Review Boolean logic, specifically **truth tables for AND/OR operations**. Practice more Boolean expression evaluations by manually substituting variable values and tracing execution paths. Ensure I check both the condition **and** the display statement separately. |

![Question 23]({{site.baseurl}}/images/mihir/q23.png)

| Question | Correct Answer | Why I Was Wrong | Action Plan to Improve |
|----------|---------------|-----------------|------------------------|
| Which of the following statements is equivalent to the algorithm in the flowchart? | **D: available ← (weekday AND (miles < 20))** | I selected **B**, but it was incorrect. **B used (miles ≥ 20) instead of (miles < 20), which reverses the condition**. The flowchart sets `available` to `true` only if `weekday = true` and `miles < 20`. Since `B` checks `miles ≥ 20`, it incorrectly assigns `available` in situations where it should be `false`. **D was correct** because it follows the exact logic of the flowchart, ensuring both conditions are met correctly. | Carefully check **logical conditions**, especially comparisons like `<` vs. `≥`. When converting flowcharts into logical expressions, **trace each condition step-by-step** to ensure accuracy. Practice translating flowchart logic into Boolean expressions. |


## Big Idea 5: Impact of Computing
In Big Idea 5, I was able to master all topics except data privacy due to a fatal misunderstanding in the way I read the question. More details below.

![Question 9]({{site.baseurl}}/images/mihir/q9.png)

| Question | Correct Answer | Why I Was Wrong | Action Plan to Improve |
|----------|---------------|-----------------|------------------------|
| Which of the following provides the most security when transmitting private data? | **C: Sending the data using public-key encryption** | I mistakenly selected **B: Sending the data using a high-bandwidth connection**. While a high-bandwidth connection can improve **speed**, it does **not** provide security for private data. **Public-key encryption** (also known as asymmetric encryption) ensures that only the intended recipient can decrypt the data, protecting it from unauthorized access. | Review the role of **encryption in cybersecurity**, specifically **public-key encryption (asymmetric encryption)** and how it is used to securely transmit data. Study real-world applications like **SSL/TLS in HTTPS** and **PGP encryption for emails**. Practice identifying security techniques in different networking scenarios. |


# Final Thoughts
After reviewing my performance on this practice MCQ, I realized that the big idea I messed up on the most was Big Idea 3. This is partly due to the large size of the topic. Before the AP Exam, I will make sure to spend my time most reviewing this big idea. 

Even so, I felt that I did phenomenal on this practice test when comparing time and score. I am proud of my efforts and score today.