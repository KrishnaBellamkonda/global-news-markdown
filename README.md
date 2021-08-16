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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the A Florida school board defies the governor’s mask ban.
------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/15/us/delta-covid-florida-schools-masks.html)

[![](https://static01.nyt.com/images/2021/09/15/world/15virus-briefing-broward/merlin_193297185_b74b55fb-448f-42eb-aa5d-8158e30b8f91-superJumbo.jpg)](https://www.nytimes.com/2021/08/15/us/delta-covid-florida-schools-masks.html)

After Broward County officials voted to impose a mandate on face coverings, Gov. Ron DeSantis threatened to revoke their pay.

By Melina Delkic

* * *

* * *

Can the vaccinated develop long Covid?
--------------------------------------

[Article here](https://www.nytimes.com/2021/08/16/briefing/long-covid-afghanistan-haiti.html)

[![](https://static01.nyt.com/images/2021/08/16/lens/16ambriefing-promo/16ambriefing-covid-superJumbo-v2.jpg)](https://www.nytimes.com/2021/08/16/briefing/long-covid-afghanistan-haiti.html)

Long Covid remains a worrisome complication after a Covid-19 infection. Are the vaccinated at risk, too?

By Tara Parker-Pope

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
