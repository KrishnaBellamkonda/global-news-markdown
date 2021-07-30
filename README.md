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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the As Covid Cases Hit Record High in Tokyo, Can the Olympic Bubble Hold?
---------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/29/world/asia/tokyo-olympics-covid.html)

[![](https://static01.nyt.com/images/2021/07/29/world/29olympics-covid-04/merlin_190795002_602f6479-d73d-4085-b8e3-26bda1dce4ec-superJumbo.jpg)](https://www.nytimes.com/2021/07/29/world/asia/tokyo-olympics-covid.html)

With the Games approaching their midway point, promises of a “safe and secure” event are being put to the test.

By Motoko Rich and Hikari Hida

* * *

* * *

Your Friday Briefing
--------------------

[Article here](https://www.nytimes.com/2021/07/30/briefing/europe-vaccinations-olympics-heat-wave.html)

[![](https://static01.nyt.com/images/2021/07/27/world/30am-briefing-europe-vacc-rate/merlin_191007561_04a14009-3fab-436e-bed3-555f1b434d2a-superJumbo.jpg)](https://www.nytimes.com/2021/07/30/briefing/europe-vaccinations-olympics-heat-wave.html)

Europe’s vaccine campaigns speed ahead.

By Melina Delkic

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
