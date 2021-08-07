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

[Article here](https://www.nytimes.com/2021/08/05/briefing/iran-president-covid-boosters-electric-vehicles.html)

[![](https://static01.nyt.com/images/2021/08/06/lens/06ambriefing-aus-nl-iran2-promo/merlin_192795465_418458eb-5a48-4668-9b49-4d80064f4fe7-superJumbo.jpg)](https://www.nytimes.com/2021/08/05/briefing/iran-president-covid-boosters-electric-vehicles.html)

Iran’s new hard-line president is sworn in.

By Matthew Cullen

* * *

* * *

New Jersey’s governor orders schools to use masks.
--------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/06/world/new-jersey-mask-school.html)

[![](https://static01.nyt.com/images/2021/08/06/world/06virus-briefing-schools-masks/merlin_187080771_96ac0a6a-612f-4e8b-943d-286edb235ed7-superJumbo.jpg)](https://www.nytimes.com/2021/08/06/world/new-jersey-mask-school.html)

The furious spread of the Delta variant has prompted mask mandates and fights between state and local authorities.

By James C. McKinley Jr. and Lauren Hard

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
