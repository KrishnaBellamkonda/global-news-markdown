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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Read Excerpts From Navalny’s Interview With The Times
-----------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/25/world/europe/navalny-interview-excerpts.html)

[![](https://static01.nyt.com/images/2021/08/25/world/25navalny1/merlin_193466622_28762b85-4af9-4960-9c39-ef2010b8de83-superJumbo.jpg)](https://www.nytimes.com/2021/08/25/world/europe/navalny-interview-excerpts.html)

Aleksei A. Navalny, the Russian opposition leader, lays out his case — by turns funny, sarcastic and ironic — for the inevitability of democracy in his country.

By The New York Times

* * *

* * *

N.Y.C. lays out safety measures for public schools as Delta variant rises.
--------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/26/nyregion/new-york-city-schools-reopening.html)

[![](https://static01.nyt.com/images/2021/09/25/world/25virus-briefing-nyschools/merlin_191253348_ecc8462e-78f4-40c5-8842-6c02b5f9f92b-superJumbo.jpg)](https://www.nytimes.com/2021/08/26/nyregion/new-york-city-schools-reopening.html)

The city’s school testing program will be smaller than last year, and only unvaccinated students will have to quarantine if exposed to the virus.

By Eliza Shapiro

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
