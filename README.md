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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Moderna says its vaccine’s protection holds through six months.
---------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/05/world/moderna-vaccine-efficacy.html)

[![](https://static01.nyt.com/images/2021/08/05/world/05virus-briefing-moderna/merlin_186008010_5e99c721-94e2-4247-b8da-91d367ac6a43-superJumbo.jpg)](https://www.nytimes.com/2021/08/05/world/moderna-vaccine-efficacy.html)

The company said that it expected boosters would be needed before winter because of the Delta variant, but some experts disagree.

By Carl Zimmer and Sharon LaFraniere

* * *

* * *

The Booster Question
--------------------

[Article here](https://www.nytimes.com/2021/08/04/briefing/booster-shots-pfizer-covid-vaccine.html)

[![](https://static01.nyt.com/images/2021/08/04/lens/04ambriefing-promo/04ambriefing-booster-superJumbo-v2.jpg)](https://www.nytimes.com/2021/08/04/briefing/booster-shots-pfizer-covid-vaccine.html)

Momentum around booster shots is building in some countries. Does the U.S. need them?

By Claire Moses

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
