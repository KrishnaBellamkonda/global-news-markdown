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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Your Wednesday Briefing
-----------------------

[Article here](https://www.nytimes.com/2021/08/11/briefing/cuomo-domestic-abuse-soccer.html)

[![](https://static01.nyt.com/images/2021/08/11/us/11ambriefing-europe-nl-promo/merlin_193127319_33971fcd-0341-4cc9-a781-4993821fc6b3-superJumbo.jpg)](https://www.nytimes.com/2021/08/11/briefing/cuomo-domestic-abuse-soccer.html)

Gov. Andrew Cuomo resigns.

By Natasha Frost

* * *

* * *

Non-E.U. visitors to France can get a health pass to enter social venues.
-------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/10/world/europe/france-covid-health-pass.html)

[![](https://static01.nyt.com/images/2021/08/10/world/10virus-briefing-paris-pass/merlin_193096182_68c5ffdb-77f2-4280-9653-98def02b23dd-superJumbo.jpg)](https://www.nytimes.com/2021/08/10/world/europe/france-covid-health-pass.html)

Tourists had been concerned that they would not be allowed in cafes, museums and sporting events if their foreign vaccination certificates were not recognized.

By Constant Méheut

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
