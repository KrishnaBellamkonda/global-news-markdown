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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Your Thursday Briefing
----------------------

[Article here](https://www.nytimes.com/2021/09/02/briefing/delta-merkel-taliban.html)

[![](https://static01.nyt.com/images/2021/08/27/science/02ambriefing-europe-virus-delta2/merlin_193295760_67b1877a-3432-45d8-b24d-3e3c7286eacf-superJumbo.jpg)](https://www.nytimes.com/2021/09/02/briefing/delta-merkel-taliban.html)

Tracking the Delta variant.

By Natasha Frost

* * *

* * *

Health officials plead for vaccine donations to Latin America and the Caribbean.
--------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/01/world/health-officials-plead-for-vaccine-donations-to-latin-america-and-the-caribbean.html)

[![](https://static01.nyt.com/images/2021/09/01/multimedia/01virus-briefing-PAHO2/merlin_191097276_d891ce40-17fe-498d-983c-228064dbc101-superJumbo.jpg)](https://www.nytimes.com/2021/09/01/world/health-officials-plead-for-vaccine-donations-to-latin-america-and-the-caribbean.html)

Although every country in the region now has some vaccines, only one person in four there has been fully vaccinated.

By Daniel Politi

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
