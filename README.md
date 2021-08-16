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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Your Monday Briefing
--------------------

[Article here](https://www.nytimes.com/2021/08/15/briefing/taliban-haiti-earthquake.html)

[![](https://static01.nyt.com/images/2021/08/16/us/16ambriefing-europe-nl-promo/16ambriefing-europe-nl-lede-superJumbo.jpg)](https://www.nytimes.com/2021/08/15/briefing/taliban-haiti-earthquake.html)

The Taliban’s victory in Afghanistan.

By Natasha Frost

* * *

* * *

Haiti lies in the possible path of Tropical Storm Grace.
--------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/14/world/americas/tropical-storm-grace-haiti.html)

[![](https://static01.nyt.com/images/2021/08/14/world/14haiti-earthquake-live-tropical-storm-grace/14haiti-earthquake-live-tropical-storm-grace-superJumbo.jpg)](https://www.nytimes.com/2021/08/14/world/americas/tropical-storm-grace-haiti.html)

The storm is projected to pass near Haiti sometime on Monday, the National Hurricane Center said, but it is possible the storm will spare the beleaguered country.

By Alyssa Lukpat and Jesus Jiménez

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
