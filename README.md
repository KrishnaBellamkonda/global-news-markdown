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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the A Century After the Titanic Sank, a Film Tries to Rescue 6 Survivors’ Stories
-----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/21/world/chinese-titanic-survivors-the-six.html)

[![](https://static01.nyt.com/images/2021/08/18/lens/00xp-china-titanic1/00xp-china-titanic1-superJumbo.jpg)](https://www.nytimes.com/2021/08/21/world/chinese-titanic-survivors-the-six.html)

“The Six,” a new documentary, attempts to track down the fate of Chinese sailors who survived the Titanic but were scattered by Western immigration laws.

By Jennifer Jett

* * *

* * *

In Melbourne, Australia, a protest against Covid restrictions turned violent.
-----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/21/world/australia/melbourne-protests-covid-restrictions.html)

[![](https://static01.nyt.com/images/2021/08/21/world/21virus-briefing-oz-protests/merlin_193494093_43aeb0fb-7671-4f97-858d-47ab6368be91-superJumbo.jpg)](https://www.nytimes.com/2021/08/21/world/australia/melbourne-protests-covid-restrictions.html)

The police said it was the first time officers had been forced to use “a range of nonlethal options” to disperse anti-lockdown protesters in Melbourne.

By Yan Zhuang

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
