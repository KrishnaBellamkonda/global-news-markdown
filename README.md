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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the The U.S. finally hits Biden’s self-imposed goal of 70 percent of adults partly vaccinated four weeks late.
----------------------------------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/02/world/covid-vaccination-goal-70-percent.html)

[![](https://static01.nyt.com/images/2021/08/02/world/02virus-briefing-whitehouse-vaccination-goal/merlin_191986818_44572b53-4613-452a-926a-80b1fda24f07-superJumbo.jpg)](https://www.nytimes.com/2021/08/02/world/covid-vaccination-goal-70-percent.html)

States with low vaccination rates are seeing more people seeking out the shots as the Delta variant creates a new wave of cases.

By Azi Paybarah

* * *

* * *

Wuhan, where the virus emerged, will test all residents after its first outbreak in over a year.
------------------------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/03/world/wuhan-china-covid-new-cases.html)

[![](https://static01.nyt.com/images/2021/08/03/world/03virus-briefing-wuhan/merlin_192512634_aaa909d3-3201-4f93-87c1-3df3d0469640-superJumbo.jpg)](https://www.nytimes.com/2021/08/03/world/wuhan-china-covid-new-cases.html)

The city in central China that endured the pandemic’s first lockdown has found its first signs of local transmission since May 2020.

By Vivian Wang

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
