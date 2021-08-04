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

[Article here](https://www.nytimes.com/2021/08/04/briefing/delta-variant-cuomo-climate.html)

[![](https://static01.nyt.com/images/2021/08/04/us/04europe-briefing-nl-lede-2-promo/merlin_187506714_19ebdaa7-de9a-4e97-a2d6-8fc00c0802b5-superJumbo.jpg)](https://www.nytimes.com/2021/08/04/briefing/delta-variant-cuomo-climate.html)

Young adults and the virus.

By Victoria Shannon

* * *

* * *

As Hikers Vanish, These Mountains Hold Tight to Their Mysteries
---------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/04/world/asia/wonnangatta-valley-disappearances.html)

[![](https://static01.nyt.com/images/2021/08/04/world/04oz-disappearances-promo/00oz-disappearances1-superJumbo.jpg)](https://www.nytimes.com/2021/08/04/world/asia/wonnangatta-valley-disappearances.html)

The high country of southern Australia is “remote and beautiful and unpredictable,” a place where visitors can be swallowed up without a sound.

By Yan Zhuang and Asanka Brendon Ratnayake

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
