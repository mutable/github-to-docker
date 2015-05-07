Container Factory
===

- Container Factory
- To host your own version
- About us
- To-Do List
- License


Container Factory
---
Use Container Factory to convert any GitHub repository into a published container image. This is done by using the Dockerfile you have in you git repo or auto builds, which is limited to nodejs atm, we plan on expanding that with your help. The container is then available to be published to any cloud hosting provider thats supports docker comtainers. This project was made for the Disrupt NY Hackathon 2015, and is carrying forward as a LSQ.io initiative to make moving to a distributed architecture simpler. 

To host your own version
---
You can fork this and do it your self. We have this image publicly on [Docker hub](https://registry.hub.docker.com/u/lsqio/githubtodocker/). When you run it your self make sure to add the necessary Environment Vars GITHUBID (github app client id) and GITHUBTOKEN (github app secret). Or you can just make pull requests here and we will improve on making this open system even better.

About Us
---
This project was a joint effort by LSQ.io team and the Haystack.im team.

- [LSQ.io](https://lsq.io)
- [Haystack](https://haystack.im)

Feel free to get a hold of us by email you will find on our lsq.io site or twitter @lsqio

To-Do List
---

- Add support for more languages
  - Go
  - Python
  - Ruby
  - JVM

- Add more clients 
  - CLI (Make a local folder pushed to container factory)

License
---
container-factory is distributed under the terms of the ISC license.



