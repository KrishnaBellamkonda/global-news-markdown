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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the After Quick Victory, Taliban Find Governing Is Harder
-----------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/01/world/asia/afghanistan-taliban-victory-governing.html)

[![](https://static01.nyt.com/images/2021/09/01/world/01taliban-govern1/merlin_193997712_378f35bc-9f40-4ce9-8c4a-f46dce8a6f75-superJumbo.jpg)](https://www.nytimes.com/2021/09/01/world/asia/afghanistan-taliban-victory-governing.html)

The two weeks since the fall of Kabul have been a scramble for Taliban officials, who are trying to take up the functions of a new government on the eve of its announcement.

By Matthieu Aikins

* * *

* * *

Rulings Without Explanations
----------------------------

[Article here](https://www.nytimes.com/2021/09/03/briefing/scotus-shadow-docket-texas-abortion-law.html)

[![](https://static01.nyt.com/images/2021/09/03/us/03-THE-MORNING-NL-LEDE-PROMO/merlin_193144545_5d5c155c-98c5-4c2b-9ccd-8ba45c8e23af-superJumbo.jpg)](https://www.nytimes.com/2021/09/03/briefing/scotus-shadow-docket-texas-abortion-law.html)

Why is the Supreme Court using its “shadow docket” so often?

By David Leonhardt

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
