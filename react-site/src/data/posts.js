const posts = [
  {
    id: 'getting-started',
    title: 'Getting Started with My Website',
    date: '2025-09-01',
    photo: '/MontBlancBanner.jpg', // place this file in public/MontBlancBanner.jpg
    content: `
      Welcome to my website! This is a project I’ve been working on for the past couple months. I started out on Codecademy learning the basics of HTML and CSS. The website is built using JavaScript with the React framework. Much of the website was built using Claude Sonnet 4 as a starting point, and then I'd make changes as needed. It’s still a work in progress, so there may still be some lorem ipsum text scattered throughout as I work to update the website with projects I’ve been working on, photos from my different hobbies, and just other tech related topics I’m exploring.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis tortor et nisl ullamcorper, eu rhoncus orci hendrerit. 
      Integer cursus est turpis, eu lobortis risus maximus quis. Vestibulum porttitor mattis nisi vel molestie. Fusce sed semper augue. 
      Donec congue maximus odio, tincidunt porttitor lectus. Cras placerat auctor eros, a congue nibh dignissim at. Vestibulum suscipit 
      rutrum urna in faucibus. Fusce leo ipsum, lacinia eu aliquet vitae, suscipit non ipsum. Nullam imperdiet facilisis accumsan. Nulla 
      finibus odio eget enim sagittis, a rutrum tellus placerat. Quisque id bibendum odio.

            ![left:My wife, Juliette, and me when we got engaged](/hero2.jpg)

      Morbi volutpat sed libero ut varius. Nulla gravida leo eros, nec feugiat ante molestie rhoncus. 
      Vestibulum in arcu vel diam euismod imperdiet vel ac dui. Pellentesque quis feugiat nisi. Ut vulputate 
      sem id urna lobortis porttitor. Phasellus eu diam magna. Morbi pellentesque rutrum nunc vitae tincidunt.
       Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec luctus 
       urna non euismod feugiat. Vestibulum et tristique nulla.

      Suspendisse euismod tristique sapien eu tempor. Sed a metus odio. Praesent ut rhoncus odio. Nunc vitae
       ex eu libero lobortis consequat. Nullam fringilla, risus sed molestie molestie, risus enim porta 
       lorem, ut aliquet sapien lorem nec nisl. Donec et tellus in enim sodales dignissim et ac elit. 
       Etiam ultrices ornare augue a tempor. Duis dignissim est et massa lacinia aliquam. Donec rutrum 
       varius velit, volutpat faucibus felis egestas nec. Mauris non leo nec nunc vestibulum consectetur. 
       Aliquam blandit, nulla eget malesuada commodo, tortor neque elementum ipsum, blandit viverra ante 
       ante nec tortor. Donec rhoncus sapien in efficitur ornare. Phasellus dui nibh, blandit quis porttitor 
       id, convallis id lectus. Nunc vestibulum in velit nec imperdiet. Phasellus fermentum lacus quis laoreet 
       hendrerit.

      Proin eget congue nibh, quis feugiat lorem. Maecenas blandit et augue iaculis tristique. Pellentesque varius finibus urna, a volutpat nisl bibendum ut. Curabitur fringilla velit nec urna rhoncus consectetur. Quisque luctus pretium libero, vel faucibus massa pretium vitae. Etiam justo nisl, tristique in vehicula eu, tincidunt vitae urna. Mauris at mollis tortor. Aliquam erat volutpat. Quisque finibus iaculis libero. Etiam ultrices, purus et sollicitudin posuere, arcu tortor luctus lacus, ut laoreet quam augue eu dolor. Ut elit ipsum, viverra at dignissim in, sagittis nec ante. Integer luctus diam velit, id dapibus neque convallis ac. Nullam porta tempus eleifend. Nullam iaculis commodo erat vitae dapibus.

      Maecenas sapien dui, tempor sit amet placerat quis, scelerisque id metus. Integer sed auctor turpis. Quisque vestibulum justo leo, in suscipit odio fermentum non. Phasellus tempus eleifend risus in consequat. Nulla tellus dui, eleifend et mollis id, lobortis a sapien. Etiam nibh lorem, porta quis ipsum id, ultrices vulputate ipsum. Etiam sodales sagittis justo, eu luctus ligula pharetra vel. Fusce vel erat pellentesque, molestie quam non, tincidunt neque. Cras elit justo, pulvinar a molestie in, aliquam quis tellus.
    `,
  },
  {
    id: 'SAINTCON',
    title: 'SAINTCON 2025',
    date: '2025-10-24',
    photo: '/SAINTCON_Logo.png|/SAINTCON_Logo_mobile.png',
    content: `
      
This past week I had the chance to go to SAINTCON, a week-long hacking convention in Utah. It's like a regional DEFCON. My dad and older brother came out to Provo where the event was held at the Utah Valley Convention Center. At SAINTCON, they had keynote speakers, smaller presentations, hacker challenges, and booths set up for different communities.
I wasn’t able to go to any of the keynote speakers this year unfortunately. They happened when I was in classes I couldn’t skip (They are recorded luckily, so I’m excited to go back and watch the keynotes later). But, I got the opportunity to go to a few of the smaller presentations. These presentations were opportunities for hackers to share what they’ve learned in their careers to people who want to listen. 

![left:The admission badge had an LCD screen, an antenna, and places for mini badges!](/SAINTCON_Badge.jpg)

The first presentation I went to was about hacking traffic systems. I learned the technology that controls stop lights and intersections is very outdated and many of the tools needed to change traffic flow are available on eBay for relatively cheap. The type of traffic controller computers found in many U.S. cities is publicly disclosed by local government. The presenter bought an old computer for a traffic control box for his city (a pretty common one found the U.S.) and poked around.  That computer could switch which pairs of traffic lights were on at any given moment and was running a version of Windows known for many vulnerabilities, so the presenter was able to hack in and change which pairs of lights were on. Interestingly, the pairs of lights were actually soldered in place on a large circuit board inside the control box (the circuit is what prevents traffic from running into each other), and that detail wasn’t in the code. He luckily couldn’t find a way to change the hardwired circuit’s signal from software. Either way, I learned this is largely security through obscurity, and I was relieved the lights couldn’t simply be made all green remotely from anything the speaker found. He also mentioned how emergency vehicles get through lights (by running reds, using devices that broadcast a signal to change lights (MIRT), or via cameras detecting flashing lights) noting that replicating MIRT devices is a felony even though information on how to build one is online, which is a scary thought.

![left:The BYU Creamery provided free ice cream to all SAINTCON attendees!](/SAINTCON_Ice_Cream.jpg)


The next presentation I went to was an every day carry (EDC) showdown. This was a competition between 4 different presenters at the conference to see who had the most robust EDC backpack. They weighed their bags, and then proceeded to pose possible scenarios that the hackers might be in. “You’re in a server room and need to leave behind a remote access device. What do you do?” or “You need to copy the contents of a server to take with you. It’s 2TB and you can’t use any cloud solutions”. Some of the scenarios were over the top and maybe impractical, but the contestants did their best to come up with solutions with what they had in their bags.



The last presentation I went to was called “Grand Theft API”. It was all about how insecure the systems were that control the remote functionalities of all car brands. For all of the brands that the speaker tested, he found ways of bypassing the authentication needed to make API requests to do things like unlock a car or open the trunk. He analyzed the difference between how the Kia app, for instance, communicates with its servers before and after signing into your account. After signing in, he was able to proxy the app again while taking actions such as unlocking the car to see which API calls were made. He was able to essentially reproduce those same API calls to unlock the car, directly from his command line. For a different car manufacturer, in the source code he was able to change just one line of code to take control of a person’s car. “user=owner" to “user=dealer". By changing that one line of code he was able to take control of a vehicle just by inputting the VIN. 

![right:A command line interface to hack cars](/SAINTCON_Car_Hacking.jpg|/SAINTCON_Car_Hacking_Mobile.jpg)

In the process of responsible disclosure, he decided to make an app on his phone. Just type in the license plate number and state, and after about 20 seconds he could press buttons on his screen to unlock the car, open the trunk, or even remotely start the car. This was by far the coolest presentation I went to.



One thing my brother and I spent a lot of time on was the RFID capture the flag challenges. After going to a 30 minute presentation on how easily hackable RFID badges are, we were able to get our hands on some dummy employee badges at the conference. Our goal was to snoop around in them enough to find a flag. It might be specified as “find their facility code and card number” or just “try scanning the card to see what you can find”. We could use our phone’s high frequency receiver (the same one used for tap-to-pay or NFC tags), a borrowed FlipperZero, or a Proxmark3. After we found some simple flags using our phone’s NFC tools app and the FlipperZero, we ventured on to use a Proxmark3. 

![left:The table where we could get help with the RFID challenges. Or get new badges to play with!](/SAINTCON_RFID_Community.jpg)

The Proxmark3 is a much more robust tool that gives much more data than the FlipperZero does. It tells you about the manufacturer, the batch number of the microchip in the badge, access to all the chunks of memory, and lots, lots more. It was overwhelming how much data there was when using the Proxmark3. The software for the device, which is a publicly available product, was developed by a man who regularly attends at SAINTCON. It was really cool to break through the encryption on the nice RFID badges and see what data they held underneath. Apparently, most HF RFID badges use the default encryption key, which is publicly available. If they do use a different key, there is a database of encryption keys that we downloaded. Apparently the company has to pay a lot for “Elite Keys”, meaning keys for which the encryption key has not been publicly leaked. I thought that was funny. We had lots of fun working to capture flags. 

![left:The lock picking community had this great tool to progressively ramp up the lock picking challenge](/SAINTCON_Lockpicking.jpeg)

The last place where we spent lots of time was the lock picking community. We learned how locks work and how to exploit their vulnerabilities. We spent at least a few hours while at SAINTCON practicing picking locks. It was a ton of fun! I was definitely able to improve my skills during those hours of practice. I think the hardest part is getting a feel for the pins when manipulating the pick. You have to be aware of what number pin you’re pushing up and which ones you’ve set. I had a ton of fun, although it was at times very frustrating trying to feel the delicate pressure on the pins.
    `,
  },
  {
    id: 'pihole',
    title: 'Pi-hole Ad Blocker',
    date: '2025-03-24',
    photo: '/Pihole_logo.png|/Pihole_logo_mobile.png',
    content: `
      One of my first home networking projects that I took on was implementing a Pi-hole. Pi-hole is a network wide ad blocker that I run on my RaspberryPi. I followed this link to set it up, but used many other resources to research more about what I was doing. The software is free, open source, and has great community support which is an added bonus!

![center-large:The Pi-hole dashboard](/Pihole_Dashboard.png)

Pi-hole blocks ads by acting as a DNS sinkhole. Straight from the RaspberryPi website, “Pi-hole stands between your network and a DNS server. Consider a client device, like your smart toilet, performing a DNS lookup for a domain. The Pi-hole in your network acts like a DNS server; DNS lookups from all client devices, whether that’s your smart toilet or your phone, go to the Pi-hole.


But Pi-hole doesn’t store a perfect up-to-date mapping of all domain names to all IP addresses. Instead, Pi-hole queries a real DNS server outside of your network. However, before it queries that real DNS server, Pi-hole checks a blocklist. If the domain passes this filter, Pi-hole requests the IP address from the DNS server, and returns it to the client device on your network. If the domain doesn’t pass the filter — if it’s included on the blocklist — Pi-hole returns a non-routable address such as 0.0.0.0.”

This was a fun project because I had to learn about how a DNS server works, how I could set my own RaspberryPi as my routers default DNS server, static vs dynamic IP addresses, and what DHCP configurations are.

![center-large:Pi-hole also allows for Regex filtering](/Pihole_Regex.png)

It’s been really nice to have a network wide ad blocker. This means that on my phone, laptop, or even AppleTV, I can block ads that I would’ve had a harder time blocking previously. This means that I can block ads on Peacock and Disney+ (either on my laptop or the AppleTV), on recipe websites, or on any other website I visit. 

Sometimes I need to turn off the Pi-hole for a time, such as when I’m clicking on a link that I want to read that has trackers. My brother, who installed a Pi-hole on his computer before me, sent me a nice Apple Shortcuts program to automatically disable the Pi-hole for a specified time. It’s a great quality of life upgrade!
    `,
  },
  {
    id: 'plant_monitoring',
    title: 'Plant Monitoring Project',
    date: '2022-10-01',
    photo: '/Forest.jpeg|/Bonsai_mobile.jpg',
    content: `
My longest running project is a remote plant monitoring system. The project started my freshman year with a dream of having a bonsai tree that I could keep on my desk. Bonsai trees are difficult to take care of though. So I decided that I’d make as curated of an experience for the tree as possible. That included a custom built wooden stand with arches with embedded grow LEDs going over the tree. It would include a soil moisture monitoring system and a pump/reservoir to add water as needed to the shallow roots of the small tree. 

![left:This is the ESP32 and the capacitive moisture sensor wired up](/ESP32_and_sensor.jpeg)

I decided that my first step in this project would be to find a way to remotely monitor the soil moisture of my plants. I had 3 small succulents that sat on my desk in the dorms. Because they were so drought resistant, I never knew when to water them. And I often forgot when the last time I watered the plants. So rather than do something like keep a log of every time I watered the plants, I decided to take the over-engineered route. I got an Arduino nano and a few I2C capacitive moisture sensors, designed for this very task. I thought it would be a fun project for me to embark.

The challenge came after I received the parts. I didn’t know where to start! I tried googling what my challenge was to see if anyone had posted about their process before. I found similar projects, but nothing that was exactly like what I was trying to do. Part of the problem was that I wasn’t entirely sure what I wanted the system to look like when it was finished! After struggling to get the system to work for a week or so, and with my first round of midterms coming up, I decided to put the project on hold.

Two years later, I was in an embedded systems class. I learned about what I2C was, the basics of embedded programming, and even used an Arduino Nano for the class. I remembered that I had my capacitive moisture sensors and an Arduino at home. I picked the project back up and made my first working prototype! It would print a calibrated soil moisture reading to my terminal while I ran the program, with the Arduino plugged into my laptop. I had gotten it working well enough.

![center-large:This is what my Grafana dashboard looks like. I have a different graph for each plant. Notice that the y-axis is how dry the soil is. I might change that to be more clear. You can also see that the moisture measurements vary cyclically throughout the day.](/Grafana_dashboard.png)

Then a year after that, I had taken more classes and more importantly had been exposed to more microcontrollers. I was at the point where I knew enough to know what to look up. I decided to make another iteration of my sensor project and bought some knock-off ESP32s for the project. I followed another tutorial and setup my current system: a database on my RaspberryPi, Mosquitto on my ESP32s configured as publishers, a broker and subscriber on my RaspberryPi that feeds into my database, and then a Grafana dashboard where I can view the regularly published moisture levels. And because my RaspberryPi is on my Tailscale network, I can view my plant dashboard from anywhere! 
    `,
  },
  {
    id: 'origami',
    title: 'Origami Endeavors',
    date: '2025-09-20',
    photo: '/Origami_dragon.jpeg|/Origami_horse.jpeg',
    content: `
      Lorem ipsum
    `,
  },
  {
    id: 'Floral_Design',
    title: 'Floral Design',
    date: '2025-09-20',
    photo: '/Flower_landscape.jpeg|/Flower_hero.jpeg',
    content: `
      Lorem Ipsum
    `,
  },
  {
    id: 'test4',
    title: 'DNS Troubleshooting Tips',
    date: '2025-09-20',
    photo: '/dns.png',
    content: `
      DNS issues can be frustrating, especially when deploying custom domains. Here's how I debugged my GitHub Pages setup:
      - Verified CNAME records
      - Cleared browser cache
      - Used incognito mode to bypass cached redirects
    `,
  },
];

export default posts;


// ![center:caption](image) - Regular center (85% width)
// ![center-small:caption](image) - Small center (45% width)
// ![center-large:caption](image) - Large center (95% width)
// ![left-small:caption](image) - Small left-floating (40% width)
// ![right-large:caption](image) - Large right-floating (95% width)
// And any other position-size combination you need