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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the He Worked With the U.S. for 9 Years. Now He’s Left Behind in Afghanistan.
-------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/10/world/afghan-interpreter-us-military.html)

[![](https://static01.nyt.com/images/2021/08/10/video/10vid-afghan-thumb/10vid-afghan-thumb-superJumbo.jpg)](https://www.nytimes.com/2021/08/10/world/afghan-interpreter-us-military.html)

Video calls provide a rare, intimate look into the daily life of an Afghan family whose future is hanging in the balance as the U.S. war in Afghanistan comes to an end.

By Isabelle Niu

* * *

* * *

The State of the American Mall
------------------------------

[Article here](https://www.nytimes.com/2021/08/10/briefing/shopping-pandemic-american-malls.html)

[![](https://static01.nyt.com/images/2021/08/10/lens/10ambriefing-promo/10ambriefing-mall01-superJumbo-v2.jpg)](https://www.nytimes.com/2021/08/10/briefing/shopping-pandemic-american-malls.html)

The pandemic has changed shopping habits. Today, we take a look at what’s happening with malls in the U.S.

By Sapna Maheshwari

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
