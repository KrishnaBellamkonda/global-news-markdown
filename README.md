# global-news-markdown

### Description 
This is a self-updating news section that updates every hour.

### Set Up 
* Clone the repository
* Make a New York Times account and get a Key for top stories section. Save the section as 
 ```
 KEY = (key obtained from a NYtimes API)
 ```
*  Create a Personnal Access Token GitHub Token for allowing automatic commits and push of updated markdown. (Push and commit authorization is enough). Save this Token as 
```
TOKEN = (Personal Access Token)
```
* Done! You will have a self updating markdown in this respository!

### Curious?
Come back in a few hours and seeif the news section has changed! (Is it too long?)

### Note
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Intelligence Warned of Afghan Military Collapse, Despite Biden’s Assurances
---------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/17/us/politics/afghanistan-biden-administration.html)

[![](https://static01.nyt.com/images/2021/08/17/us/politics/17dc-intel-sub1a/merlin_193374306_852afd6c-da16-441f-9d32-b9b732c2b19d-superJumbo.jpg)](https://www.nytimes.com/2021/08/17/us/politics/afghanistan-biden-administration.html)

Even as the president was telling the public that Kabul was unlikely to fall, intelligence assessments painted a grimmer picture.

By Mark Mazzetti, Julian E. Barnes and Adam Goldman

* * *

* * *

Body Parts Found in Landing Gear of Flight From Kabul, Officials Say
--------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/17/us/politics/afghans-deaths-us-plane.html)

[![](https://static01.nyt.com/images/2021/08/17/us/politics/17dc-plane-1/merlin_193374204_a9f5a983-2209-4184-9e85-15663bb6fd2a-superJumbo.jpg)](https://www.nytimes.com/2021/08/17/us/politics/afghans-deaths-us-plane.html)

Harrowing video of the chaos, recorded by the Afghan news media, has circulated around the world. The Air Force said the episode was under investigation.

By Helene Cooper and Eric Schmitt

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
