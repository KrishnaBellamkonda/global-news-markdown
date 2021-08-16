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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the The prospect of booster shots is igniting a global health debate.
-----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/16/world/booster-shots-debate.html)

[![](https://static01.nyt.com/images/2021/08/13/us/13virus-briefing-vaccine-booster/merlin_186207246_c172b13a-c96a-494a-a2e3-5cded2f678c7-superJumbo.jpg)](https://www.nytimes.com/2021/08/16/world/booster-shots-debate.html)

Citing a lack of scientific evidence, the W.H.O. argues that extra vaccine doses should be sent to poor countries instead.

By Daniel E. Slotnik and Noah Weiland

* * *

* * *

Japan’s Economy Returns to Growth, but Virus Threat Looms
---------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/15/business/japan-economy-gdp-second-quarter.html)

[![](https://static01.nyt.com/images/2021/08/16/lens/16japan-economy/16japan-economy-superJumbo-v2.jpg)](https://www.nytimes.com/2021/08/15/business/japan-economy-gdp-second-quarter.html)

Even as other major economies have roared back to life, Japan’s has been stuck in a cycle of growth and contraction.

By Ben Dooley and Makiko Inoue

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
