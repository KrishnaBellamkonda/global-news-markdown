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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Military Analysis Raises Questions About Deadly Drone Strike in Kabul
---------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/05/us/politics/military-drone-strike-kabul.html)

[![](https://static01.nyt.com/images/2021/09/05/us/politics/05dc-dronestrike/merlin_193892649_2c020f0e-7cc3-4a95-8ec6-bf02df561371-superJumbo.jpg)](https://www.nytimes.com/2021/09/05/us/politics/military-drone-strike-kabul.html)

A preliminary analysis said that it was “possible to probable” that explosives were in the car and that drone operators took only a cursory scan of the courtyard before launching an attack.

By Eric Schmitt

* * *

* * *

Thai Protesters Are Back, and Angrier, as Government Fumbles on Covid
---------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/05/world/asia/thailand-protesters-covid.html)

[![](https://static01.nyt.com/images/2021/09/03/world/00virus-thailand-1/merlin_191014131_750ec6aa-007d-45bd-9c6a-0ec0605a4357-superJumbo.jpg)](https://www.nytimes.com/2021/09/05/world/asia/thailand-protesters-covid.html)

With more than 12,000 dead, few vaccinated and the economy in shambles, demonstrations against the authorities have become a daily event.

By Muktita Suhartono and Hannah Beech

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
