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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Texas takes its ban on school mask mandates to the state Supreme Court.
-----------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/14/world/texas-abbott-battle-mask-mandate.html)

[![](https://static01.nyt.com/images/2021/08/14/world/14virus-briefing-texas/merlin_193193742_9524916a-2984-4584-8a7d-2bc47d4f54ae-superJumbo.jpg)](https://www.nytimes.com/2021/08/14/world/texas-abbott-battle-mask-mandate.html)

After judges in the San Antonio and Dallas areas ruled to uphold locally issued mask mandates, the state’s attorney general took a case to the state’s top court.

By Andrea Kannapell

* * *

* * *

Germany adds the U.S. to its ‘high risk’ list, requiring some travelers to quarantine.
--------------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/14/world/europe/germany-us-high-risk-list.html)

[![](https://static01.nyt.com/images/2021/08/14/world/14virus-briefing-germany-us-risk/14virus-briefing-germany-us-risk-superJumbo.jpg)](https://www.nytimes.com/2021/08/14/world/europe/germany-us-high-risk-list.html)

American tourists and other nonessential travelers will have to quarantine for 10 days, starting Sunday, if they cannot document full vaccination or immunity from a past infection.

By Christopher F. Schuetze

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
