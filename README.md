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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Your Tuesday Briefing
---------------------

[Article here](https://www.nytimes.com/2021/08/31/briefing/afghanistan-coronavirus-ida-flooding.html)

[![](https://static01.nyt.com/images/2021/08/30/world/3pm-briefing-us-afghanistan-evacs-COPY/3pm-briefing-us-afghanistan-evacs--superJumbo-v3.jpg)](https://www.nytimes.com/2021/08/31/briefing/afghanistan-coronavirus-ida-flooding.html)

The final moments of the U.S. presence in Afghanistan.

By Natasha Frost

* * *

* * *

70 percent of adults in the European Union have been fully vaccinated.
----------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/31/world/eu-covid-vaccinations-70-percent.html)

[![](https://static01.nyt.com/images/2021/08/31/world/31virus-briefing-eu-vaccinations/merlin_190803591_e63dafe8-593b-4985-b7e3-4d69fb1f94fd-superJumbo.jpg)](https://www.nytimes.com/2021/08/31/world/eu-covid-vaccinations-70-percent.html)

After a fumbling start, the European Union overtook the United States in vaccinations last month.

By Elian Peltier

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
