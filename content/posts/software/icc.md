---
author: "Adrian Patterson"
title: "IoT Control Center (ICC)"
date: "2019-03-10"
description: "ICC, the home-made control center for IoT devices hosted on a RaspberryPi. This is the story of how it came to be, the technical implementation, and its downfall."
summary: "Home-made control center for IoT devices, hosted on a RaspberryPi."
tags: ["Personal Projects", "IoT", "Python", "Raspberry Pi"]
categories: ["Software"]
ShowToc: true
TocOpen: true
cover:
  image: "/images/covers/icc.jpg"
  alt: "IoT Control Center interface on Raspberry Pi"
  caption: "ICC - Home-made IoT control center"
  relative: false
---

# Small Beginnings
The story of the IoT Control Center starts with a breadboard, a blue LED, and a Rasbperry Pi. It was the Spring of 2021 and my first Software internship was starting in May. How exciting!

The internship was for a full-stack position, working with the .NET framework and the C# programming language. Knowing nothing about C# or .NET, I decided to start a project to learn. I had a simple goal; control an LED from a React frontend, using .NET as a backend and a Raspberry Pi, connected to an LED on a breadboard.

[image diagram here of goal]

[image of LED + breadboard, image of react app]

After feverish hours and hours of tinkering and iterating to get something working, I finally got it! A simple on/off switch which was able to talk to the raspberry pi to turn on and off an LED. With this simple proof of concept, I thought to myself, the sky is the limit! With this minimally working setup, I could scale this to tons of devices and the automation I could achieve for my home IoT devices would be unparalleled! 

Oblivious to the mountain of work ahead for what I had in mind, I embarked on this journey to build what I called the IoT Control Center, or ICC for short.

# Design and Architecting

I actually didn't further pursue the project until after my internship. What I initially built was simple.

[adrian-patterson/control-center | GitHub](https://github.com/adrian-patterson/control-center)

