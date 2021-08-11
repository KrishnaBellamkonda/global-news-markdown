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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Andrew Cuomo and #MeToo
-----------------------

[Article here](https://www.nytimes.com/2021/08/11/briefing/andrew-cuomo-resignation-me-too-movement.html)

[![](https://static01.nyt.com/images/2021/08/11/lens/11ambriefing-promo/merlin_193127319_d0ff6d96-8fdf-4e58-bb94-336a8fd6b8f5-superJumbo.jpg)](https://www.nytimes.com/2021/08/11/briefing/andrew-cuomo-resignation-me-too-movement.html)

It was a big news day: Gov. Andrew Cuomo announced his resignation, and the Senate passed a trillion-dollar infrastructure bill.

By Jodi Kantor

* * *

* * *

Algerian Soldiers Die Fighting Wildfires, President Says
--------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/10/world/algerian-soldiers-die-fighting-wildfires-president-says.html)

[![](https://static01.nyt.com/images/2021/08/10/world/10algeria1/merlin_193121448_f8f304bc-f032-4d62-9a14-65ad2ade48c1-superJumbo.jpg)](https://www.nytimes.com/2021/08/10/world/algerian-soldiers-die-fighting-wildfires-president-says.html)

At least 25 soldiers were killed saving residents from wildfires ravaging mountain forests and villages east of the capital, he said. The civilian death toll from the blazes rose to at least 17.

By The Associated Press

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
