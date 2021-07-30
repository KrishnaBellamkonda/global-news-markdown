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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Turkey Is Next as Wildfires Afflict Mediterranean Countries
-----------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/30/world/middleeast/turkey-fires-mediterranean-lebanon.html)

[![](https://static01.nyt.com/images/2021/07/30/world/30turkey-fires-03/merlin_192071427_567970cb-62e1-45a0-8f74-01c60a1cb12c-superJumbo.jpg)](https://www.nytimes.com/2021/07/30/world/middleeast/turkey-fires-mediterranean-lebanon.html)

The Turkish authorities said they were investigating the causes of fires that killed at least four people and threatened popular tourist destinations.

By Elian Peltier and Asmaa al-Omar

* * *

* * *

Vaccinated People May Spread the Virus, Though Rarely, C.D.C. Reports
---------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/30/health/cdc-vaccinated-delta.html)

[![](https://static01.nyt.com/images/2021/07/30/science/30virus-delta2/30virus-delta2-superJumbo.jpg)](https://www.nytimes.com/2021/07/30/health/cdc-vaccinated-delta.html)

The agency cited an outbreak in Provincetown, Mass., in which most of the infected were immunized. Unpublished internal documents paint an even more harrowing picture.

By Apoorva Mandavilli

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
