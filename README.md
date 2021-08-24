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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Australia tells Afghan refugees: ‘Do not attempt an illegal boat journey.’
--------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/23/world/asia/australia-tells-afghan-refugees-do-not-attempt-an-illegal-boat-journey.html)

[![](https://static01.nyt.com/images/2021/08/23/world/23-afghanistan-briefing-australia/merlin_193451274_86c2b1f6-61b4-44ca-90d7-687de4671594-superJumbo.jpg)](https://www.nytimes.com/2021/08/23/world/asia/australia-tells-afghan-refugees-do-not-attempt-an-illegal-boat-journey.html)

By Yan Zhuang

* * *

* * *

F.D.A. Fully Approves Pfizer-BioNTech’s Vaccine, a First for a Covid-19 Shot
----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/23/health/pfizer-vaccine-approval-fda.html)

[![](https://static01.nyt.com/images/2021/08/23/us/politics/23dc-virus-pfizer/merlin_193343802_9126eb2e-d122-4c31-a2d0-e329bf801c4c-superJumbo.jpg)](https://www.nytimes.com/2021/08/23/health/pfizer-vaccine-approval-fda.html)

The move was expected to kick off a round of new vaccination mandates from hospitals, schools and private companies.

By Sharon LaFraniere and Noah Weiland

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
