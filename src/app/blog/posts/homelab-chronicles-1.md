---
title: "Homelab Chronicles - Part 1"
date: "2025-08-27"
excerpt: "n I started my journey at Cenovus Energy, I had made it very clear to the members that I worked with that I am passionate, excited, and fired up. I'm there for 12 months, and I want to make an impact, and I want to make sure I learn."
---

# Homelab Chronicles - Part 1
When I started my journey at Cenovus Energy, I had made it very clear to the members that I worked with that I am passionate, excited, and fired up. I'm there for 12 months, and I want to make an impact, and I want to make sure I learn. My supervisor introduced me to a member of his team, whom I look to as my mentor. This man changed my career. He is known around the office as the quiet guy... boy oh boy was he everything but that when I was with him. He told me that he gets along with the crazy ones and that I'm one of them based on how I get obsessed and stubborn when it comes to solving some of the problems that we were up to. Hate to break it, but he was also one of us 😉

I have learned so much from this wizard. I went into this internship thinking I knew what it took to be a Software Engineer or Developer alike... but this man shifted my perspective and made me realize how vast this space really is. Really humbled me and honestly gave me a reality check. One of the first things he introduced me to was homelabbing.

## My start

My mentor introduced me to how he would be able to access the tools he deployed in his own internal network, such as Gitlab, Jenkins, RDP, and more. I thought this was insane, but it was the perfect solution to the project I was working on.

### Solar Car

I was on the University of Calgary Solar car team, and one of the projects I got to work on was building out the OS that was going to run on the dashboard. We were using QT6, and I was pursuing building a yocto image with all of our dependencies. It unfortunately wasn't a successful project, but I learned a ton from this and got to connect with some people from around the world on this project to get some insight!

When compiling the Yocto image on my MacBook Air m2, I realized that there was going to be an issue with the image, because the OS is supposed to run on a Raspberry Pi 4, which needs an x86 compiled image, not ARM. My solution to work on this wherever I can was to start my homelab, where I can run an x86 Intel chip and just SSH to the Linux machine where I want to compile the code.

## Solution

I found a cheap RPi 4 on Kijiji and decided to grab it, and used this to create a reverse proxy with the guidance of my mentor. I also purchased a spare SSD to install onto my gaming PC, which would then dual-boot into a Linux server.

With the reverse proxy, I was able to access my network from anywhere on my gaming PC and then compile my image. Using the VSCode SSH plugin, I was able to quickly edit the code, download the image and attempt to use it wherever I was.

Once I had figured this out, I decided to try out self-hosting. At the moment, I'm running several of my applications self-hosted, such as Jenkins. I ran my gaming PC as a server for a bit, but it was super loud. I was able to get my hands on a mini pc. Using this to run some low-level Docker images seems ideal, as it's the size of a pack of Oreos.

Stay tuned for the next update!
