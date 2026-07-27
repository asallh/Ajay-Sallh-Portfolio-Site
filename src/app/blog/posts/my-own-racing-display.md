---
title: "Building My Own F1 Driver Display"
date: "2026-07-27"
excerpt: "Solar Car Visual Communications was one of the most interesting projects I've worked on. I needed to get back into that world, so I built my own F1 telemetry display."
---

## My Own F1 Car

Sort of...

Working with the solar car team at the University of Calgary was honestly one of the most fun projects I'd worked on in a long time. Over the last couple of months, I've been figuring out what projects really drive me, interest me, and where I want to go with my career. The thing I've always been motivated by is cars, and mechanical engineering, software, and all of that come together in F1.

Because of that, I've been playing F1 games pretty regularly over the last couple of years, and I've loved it. So much so that I ended up spending more money than I could afford on an actual racing wheel and simulator. Call me an overgrown child. Except, something I came across the other day was that the F1 game streams telemetry data over UDP, and that's when this project started.

## Why bother?

Realistically, the data I need when playing is already on the screen. There's no day-to-day reason to stream or parse the telemetry myself. But that's where the cool part is. Just having the data available means I can do so much more with it. I have a ton of ideas for this project, and building my own heads-up display is at the very front of that list.

I mentioned Solar Car was an amazing experience, and unfortunately, due to competing priorities, I had to drop out of the club before I got to see the finished product. Having that itch, seeing this data available, and knowing what I know about byte streams, I thought this was the perfect opportunity to take a project like the solar car dashboard I helped build, put my own spin on it, and get back into the embedded C++ / Qt world.

## My process

Although very similar, there are small differences between the solar car byte data and the byte data I'm getting from the game. The streaming data from the solar car was sent out as raw packets that we had to decode based on packet size. F1 telemetry is still a byte stream, but each packet has a header that defines exactly what's in it, and the F1 UDP docs are really easy to understand. To be honest, when something wasn't clear, Cursor and Claude were fantastic for helping me dig through it.

Based on my memory of how we originally built the solar car dashboard, I tried to replicate that architecture and put my own spin on it. The packet factory to manage all the different packets and datasets, plus isolating the QML frontend altogether, was what allowed multiple teams to work together without collisions or conflicting changes. I knew I wanted to stick with something similar.

## Current state

At the moment, I have a very simple dashboard that can stream speed, RPMs, and gear. But EA exposes so many packets: race temperature, location on the map, everyone in the lobby, essentially everything. If I choose to store and cache this data, the project can go well beyond a live dashboard. I'll leave that for another post.

Where things stand now: I can ingest the data, decode it, and send it up to the QML frontend, where it gets displayed for the driver.

There are still a few things to fix. The frontend in the video below is completely AI-generated. I gave it nothing beyond "make it look cool" and "make it look Tron-inspired." My vision is something more OEM+: traditional race-car feel, but a little more premium. I also have a few spare rotary encoders in a drawer, and I've got some ideas for those as well.

![Pitwall demo](/blog/pitwall-demo.mp4)

Finally, the package structure is ready to go. I just need to put in the hard work to get the data flowing onto a Raspberry Pi. One bug I've already hit: during testing, the connection would drop from the PlayStation for reasons I haven't pinned down yet. Definitely not production-ready, but ready for testing. If you're curious, check out the repo on [GitHub](https://github.com/asallh/PitWall). I'm really stoked about this project.
