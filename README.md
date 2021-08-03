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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the 12-Hour Days, Six Days a Week
-----------------------------

[Article here](https://www.nytimes.com/2021/08/02/briefing/china-economy-gig-workers.html)

[![](https://static01.nyt.com/images/2021/08/02/lens/02ambriefing-promo/02ambriefing-china01-superJumbo-v2.jpg)](https://www.nytimes.com/2021/08/02/briefing/china-economy-gig-workers.html)

Today, Vivian Wang explains Chinese work culture and the debate around working conditions.

By Vivian Wang

* * *

* * *

Demand for shots is increasing in less-vaccinated states under siege from the Delta variant.
--------------------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/31/world/less-vaccinated-covid-shots.html)

[![](https://static01.nyt.com/images/2021/07/31/multimedia/31-virus-briefing-vaccineation-rise/merlin_191732976_90f99669-66be-482f-83e9-69d5db9b774e-superJumbo.jpg)](https://www.nytimes.com/2021/07/31/world/less-vaccinated-covid-shots.html)

Data from the C.D.C. shows that many people in states like Louisiana, Mississippi and Missouri are now receiving their first doses. On Friday, more than 850,000 total shots were recorded in the U.S.

By Eduardo Medina

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
