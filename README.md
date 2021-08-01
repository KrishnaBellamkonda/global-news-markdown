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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the As Fears Grip Afghanistan, Hundreds of Thousands Flee
-----------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/31/world/asia/afghanistan-migration-taliban.html)

[![](https://static01.nyt.com/images/2021/07/31/world/31afghanistan-exodus4/merlin_191176125_55074437-1c68-4526-b3e4-b63c1cd96ce0-superJumbo.jpg)](https://www.nytimes.com/2021/07/31/world/asia/afghanistan-migration-taliban.html)

With the Taliban sweeping across much of the country, at least 30,000 Afghans are leaving each week. Many more have been displaced within Afghanistan’s borders.

By Christina Goldbaum and Fatima Faizi

* * *

* * *

Spanish Court Targets Chilean Bank Tied to Pinochet
---------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/30/world/europe/pinochet-banco-de-chile.html)

[![](https://static01.nyt.com/images/2021/06/22/world/22pinochet-01/merlin_159478617_a4ac89e0-87ce-42fc-bf62-9ef1ed30cfcc-superJumbo.jpg)](https://www.nytimes.com/2021/07/30/world/europe/pinochet-banco-de-chile.html)

Spurred by victims of Gen. Augusto Pinochet’s regime, the court has reopened an investigation into whether Banco de Chile helped the former Chilean dictator launder money.

By Raphael Minder

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
