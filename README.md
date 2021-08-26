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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Your Wednesday Briefing
-----------------------

[Article here](https://www.nytimes.com/2021/08/24/briefing/afghanistan-deadline-unvaccinated-covid-fifa.html)

[![](https://static01.nyt.com/images/2021/08/25/us/25ambriefing-europe-nl-promo/merlin_193589862_6c3c21bc-837d-4989-978c-b95d884a1492-superJumbo.jpg)](https://www.nytimes.com/2021/08/24/briefing/afghanistan-deadline-unvaccinated-covid-fifa.html)

U.S. on track to leave Afghanistan by Aug. 31.

By Melina Delkic

* * *

* * *

A Swimmer’s Journey From Afghanistan to Refugee Camps to the Paralympics
------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/25/world/asia/afghan-swimmer-tokyo-paralympics.html)

[![](https://static01.nyt.com/images/2021/08/25/world/25paraly-refugee-01/merlin_193655769_57bf3916-160d-4265-974b-ffd8c5824013-superJumbo.jpg)](https://www.nytimes.com/2021/08/25/world/asia/afghan-swimmer-tokyo-paralympics.html)

Abbas Karimi, who was born without arms, eventually made it to the U.S. and realized his dream of competing internationally.

By Motoko Rich

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
