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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Your Friday Briefing
--------------------

[Article here](https://www.nytimes.com/2021/09/03/briefing/ida-flooding-taliban-coronavirus.html)

[![](https://static01.nyt.com/images/2021/09/03/us/03am-briefing-europe--flld-ida/merlin_194068431_672b4127-8287-4ee6-843a-c02dcaa2f946-superJumbo.jpg)](https://www.nytimes.com/2021/09/03/briefing/ida-flooding-taliban-coronavirus.html)

A lethal storm in the northeastern U.S.

By Natasha Frost

* * *

* * *

The last U.S. diplomat to leave Kabul has tested positive for the virus.
------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/02/us/politics/ross-wilson-covid.html)

[![](https://static01.nyt.com/images/2021/09/02/lens/02virus-briefing-wilson1/merlin_192074007_8a295b01-f70a-4c69-8992-70891f4b2472-superJumbo.jpg)](https://www.nytimes.com/2021/09/02/us/politics/ross-wilson-covid.html)

It wasn’t clear if Ross Wilson was experiencing symptoms of Covid-19.

By Zach Montague

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
