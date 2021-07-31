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

Here are the details from Biden’s latest push to spur vaccinations.
-------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/29/world/biden-covid-plan.html)

[![](https://static01.nyt.com/images/2021/07/29/lens/29virus-briefing-fed-mandate-points1/merlin_191980404_36dae6d9-e4bb-476b-9e71-1dcdc523dbd5-superJumbo.jpg)](https://www.nytimes.com/2021/07/29/world/biden-covid-plan.html)

The president is encouraging paid time off to get vaccinated and other incentives to combat Covid-19 infections.

By Lauren McCarthy

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
