const posts = [
  {
    id: 'getting-started',
    title: 'Getting Started with My Website',
    date: '2025-09-01',
    photo: '/MontBlancBanner.jpg', // place this file in public/MontBlancBanner.jpg
    content: `
      Welcome to my personal website! I'm Chase, and this is where I document my journey as a student both at school and elsewhere.

      From systems programming in C to deploying elegant React layouts, I’m building this site to learn, share, and grow.
      
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

The first presentation I went to was about hacking traffic systems. I learned that the technology that controls the stop lights and intersections is very outdated. Many of the tools needed to alter the flow of traffic are available on Ebay for relatively cheap. The presenter was able to buy an old computer that was inside of a traffic control box on the side of the intersection and poke around. This is the same type of computer found in many cities around the U.S., as found through publicly disclosed documents. This computer was able to switch which pairs of traffic lights were on at any given moment. That computer was running a version of Windows known for having many vulnerabilities, and so the presenter was able to hack in and change which pairs of lights were on. What I found interesting was that the pairs of lights were actually soldered in place with wires on a large circuit board inside of the traffic control box. This circuit was what stopped traffic from running into each other. That information wasn’t anywhere in the code, just which pairs of lights should be on. He tried and tried, but wasn’t able to find a way to change the signal coming from the circuit in the code (he obviously could change the connection of the wires on the circuit board, but that wasn’t the point). 
Either way, I learned that this is most definitely a case of security through obscurity to some extent. I was glad to hear that the lights couldn’t just turn all green at the same time remotely, at least from anything the speaker found. 
He did talk for a bit about how emergency vehicles get through lights (either by just running red lights, by having a device that broadcasts a signal that changes the light (MIRT), or by having cameras that are looking for the emergency vehicles flashing lights). He didn’t really focus too much on this, other than the fact that trying to replicate those MIRT devices is a felony. But the information is online for how to build one, which is a scary thought for sure.

The next presentation I went to was an every day carry (EDC) showdown. This was a competition between 4 different presenters at the conference to see who had the most robust EDC backpack. They weighed their bags, and then proceeded to pose possible scenarios that the hackers might be in. “You’re in a server room and need to leave behind a remote access device. What do you do?” or “You need to copy the contents of a server to take with you. It’s 2TB and you can’t use any cloud solutions”. Some of the scenarios were over the top and maybe impractical, but the contestants did their best to come up with solutions with what they had in their bags.

![right:A command line interface to hack cars](/SAINTCON_Car_Hacking.jpg|/SAINTCON_Car_Hacking_mobile.jpg)

The last presentation I went to was called “Grand Theft API”. It was all about how insecure the systems were that control the remote functionalities of all car brands. For all of the brands that the speaker tested, he found ways of bypassing the authentication needed to make API requests to do things like unlock a car or open the trunk. He analyzed the difference between how the Kia app, for instance, communicates with its servers before and after signing into your account. After signing in, he was able to proxy the app again while taking actions such as unlocking the car to see which API calls were made. He was able to essentially reproduce those same API calls to unlock the car, directly from his command line. For a different car manufacturer, in the source code he was able to change just one line of code to take control of a person’s car. “user=owner" to “user=dealer". By changing that one line of code he was able to take control of a vehicle just by inputting the VIN. 
In the process of responsible disclosure, he decided to make an app on his phone. Just type in the license plate number and state, and after about 20 seconds he could press buttons on his screen to unlock the car, open the trunk, or even remotely start the car. This was by far the coolest presentation I went to.

![left:The table where we could get help with the RFID challenges. Or get new badges to play with!](/SAINTCON_RFID_Community.jpg)

One thing my brother and I spent a lot of time on was the RFID capture the flag challenges. After going to a 30 minute presentation on how easily hackable RFID badges are, we were able to get our hands on some dummy employee badges at the conference. Our goal was to snoop around in them enough to find a flag. It might be specified as “find their facility code and card number” or just “try scanning the card to see what you can find”. We could use our phone’s high frequency receiver (the same one used for tap-to-pay or NFC tags), a borrowed FlipperZero, or a Proxmark3. After we found some simple flags using our phone’s NFC tools app and the FlipperZero, we ventured on to use a Proxmark3. It is a much more robust tool that gives much more data than the FlipperZero does. It tells you about the manufacturer, the batch number of the microchip in the badge, access to all the chunks of memory, and lots, lots more. It was overwhelming how much data there was when using the Proxmark3. The software for the device, which is a publicly available product, was developed by a man who regularly attends at SAINTCON. It was really cool to break through the encryption on the nice RFID badges and see what data they held underneath. Apparently, most HF RFID badges use the default encryption key, which is publicly available. If they do use a different key, there is a database of encryption keys that we downloaded. Apparently the company has to pay a lot for “Elite Keys”, meaning keys for which the encryption key has not been publicly leaked. I thought that was funny. We had lots of fun working to capture flags. 

![left:The BYU Creamery provided free ice cream to all SAINTCON attendees!](/SAINTCON_Ice_Cream.jpg)

The last place where we spent lots of time was the lock picking community. We learned how locks work and how to exploit their vulnerabilities. We spent at least a few hours while at SAINTCON practicing picking locks. It was a ton of fun! I was definitely able to improve my skills during those hours of practice. I think the hardest part is getting a feel for the pins when manipulating the pick. You have to be aware of what number pin you’re pushing up and which ones you’ve set. I had a ton of fun, although it was at times very frustrating trying to feel the delicate pressure on the pins.
    `,
  },
  {
    id: 'jekyll-build-errors',
    title: 'Fixing Jekyll Build Errors',
    date: '2025-09-18',
    content: `
      Jekyll threw some curveballs during my site setup. I patched SCSS grid logic, resolved gem conflicts, and learned how GitHub Pages handles plugins.
      Persistence pays off—now I can preview everything locally with \`bundle exec jekyll serve\`.
    `,
  },
  {
    id: 'test1',
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
  {
    id: 'test2',
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
  {
    id: 'test3',
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
