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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Under Taliban Rule, Life in Kabul Transforms Once Again
-------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/24/world/asia/kabul-life-taliban-rule.html)

[![](https://static01.nyt.com/images/2021/08/24/world/24Kabul-life01/merlin_193507869_c13d2ec5-6f87-49db-9294-8a02db536d1f-superJumbo.jpg)](https://www.nytimes.com/2021/08/24/world/asia/kabul-life-taliban-rule.html)

Though the streets are quiet, Kabul residents describe a struggle to make ends meet in a reeling economy where banks and government offices are closed, and uncertainty reigns.

By Norimitsu Onishi and Sharif Hassan

* * *

* * *

The World Bank is freezing aid disbursements to Afghanistan.
------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/24/world/asia/world-bank-afghanistan.html)

[![](https://static01.nyt.com/images/2021/08/24/world/24economy-briefing-worldbank2/24economy-briefing-worldbank2-superJumbo.jpg)](https://www.nytimes.com/2021/08/24/world/asia/world-bank-afghanistan.html)

The bank had committed nearly $800 million to the country in 2021.

By Alan Rappeport

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
