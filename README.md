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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the The U.S. Is Getting a Crash Course in Scientific Uncertainty
------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/22/health/covid-research-delta-boosters.html)

[![](https://static01.nyt.com/images/2021/08/09/science/09virus-science-1/merlin_192444375_94f25f81-f7f0-4d53-bf74-f6671fcd1cb4-superJumbo.jpg)](https://www.nytimes.com/2021/08/22/health/covid-research-delta-boosters.html)

As the pandemic takes an unexpected direction, Americans again must reckon with twists in scientific understanding of the virus.

By Apoorva Mandavilli

* * *

* * *

Sardinian Village Tries to Save an Ancient Tree Scorched by Fire
----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/22/world/europe/italy-sardinia-fire-tree.html)

[![](https://static01.nyt.com/images/2021/08/20/world/00italy-trees-01/merlin_193462764_a8e2c6f7-9b12-4046-8019-b69b8c4617dc-superJumbo.jpg)](https://www.nytimes.com/2021/08/22/world/europe/italy-sardinia-fire-tree.html)

A team of experts, with the help of local residents and authorities, is trying to revive an ancient olive tree in the hilltop village of Cuglieri that was engulfed in a catastrophic wildfire.

By Gaia Pianigiani

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
