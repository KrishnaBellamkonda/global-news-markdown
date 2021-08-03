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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Florida may face its worst wave ever as the Delta variant spreads.
------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/02/world/florida-covid-cases.html)

[![](https://static01.nyt.com/images/2021/08/02/world/02virus-briefing-florida-delta-sub/02virus-briefing-florida-delta-superJumbo.jpg)](https://www.nytimes.com/2021/08/02/world/florida-covid-cases.html)

The state is about a month away from its peak, according to an epidemiologist who tracks the virus there.

By Adeel Hassan

* * *

* * *

Your Tuesday Briefing
---------------------

[Article here](https://www.nytimes.com/2021/08/02/briefing/germany-booster-vaccines-worker-shortages.html)

[![](https://static01.nyt.com/images/2021/08/03/us/03ambriefing-europe/03ambriefing-europe--superJumbo.jpg)](https://www.nytimes.com/2021/08/02/briefing/germany-booster-vaccines-worker-shortages.html)

Germany moves ahead on booster vaccinations.

By Victoria Shannon

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
