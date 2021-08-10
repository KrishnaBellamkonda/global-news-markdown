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

[Article here](https://www.nytimes.com/2021/08/08/briefing/afghanistan-taliban-olympics.html)

[![](https://static01.nyt.com/images/2021/08/09/us/09ambriefing-europe-nl-promo/09ambriefing-europe-nl-lede-superJumbo.jpg)](https://www.nytimes.com/2021/08/08/briefing/afghanistan-taliban-olympics.html)

The Taliban take three more cities.

By Natasha Frost

* * *

* * *

Deadly Clashes Threaten South Sudan’s Shaky Peace Deal
------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/09/world/africa/deadly-clashes-threaten-south-sudans-shaky-peace-deal.html)

[![](https://static01.nyt.com/images/2021/08/08/world/08southsudan-01/merlin_190582449_1ecb9412-1482-45b1-a8fd-d7c6cf615707-superJumbo.jpg)](https://www.nytimes.com/2021/08/09/world/africa/deadly-clashes-threaten-south-sudans-shaky-peace-deal.html)

Infighting within the vice president’s party is undermining an already unstable ruling alliance that was formed after a five-year civil war killed 400,000 people.

By Abdi Latif Dahir

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
