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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the For Seniors Especially, Covid Can Be Stealthy
---------------------------------------------

[Article here](https://www.nytimes.com/2021/08/08/health/coronavirus-symptoms-elderly.html)

[![](https://static01.nyt.com/images/2021/08/10/science/07SCI-SPAN-ATYPICAL-1/merlin_192514638_a5286e84-51f5-4f70-870e-85273cf892f4-superJumbo.jpg)](https://www.nytimes.com/2021/08/08/health/coronavirus-symptoms-elderly.html)

With infections increasing once more, and hospitalization rising among older adults, health experts offer a timely warning: a coronavirus infection can look different in older patients.

By Paula Span

* * *

* * *

A Hotter Future
---------------

[Article here](https://www.nytimes.com/2021/08/09/briefing/climate-report-global-warming-future.html)

[![](https://static01.nyt.com/images/2021/08/09/lens/09ambriefing-promo/09ambriefing-climate01-superJumbo-v3.jpg)](https://www.nytimes.com/2021/08/09/briefing/climate-report-global-warming-future.html)

Human activity has significantly heated the Earth already. But several climate futures are still possible.

By Somini Sengupta

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
