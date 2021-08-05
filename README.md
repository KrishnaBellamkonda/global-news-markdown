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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Afghan War Casualty Report: August 2021
---------------------------------------

[Article here](https://www.nytimes.com/2021/08/05/world/asia/afghanistan-casualty-report-august.html)

[![](https://static01.nyt.com/images/2021/08/04/world/04afghanistan-attack01-copy/merlin_192616680_d610c5b9-7b9b-46a8-a8e1-d8cd4400f4ab-superJumbo.jpg)](https://www.nytimes.com/2021/08/05/world/asia/afghanistan-casualty-report-august.html)

At least 115 Afghan security forces and 58 civilians were killed in Afghanistan in the first five days of August.

By Fatima Faizi

* * *

* * *

Israel reinstates some virus restrictions to avoid a full lockdown.
-------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/04/world/israel-covid-restrictions-lockdown.html)

[![](https://static01.nyt.com/images/2021/08/04/lens/04virus-briefing-israel1/merlin_185973186_71de31c9-3364-4d21-806d-a5c6ae22e662-superJumbo.jpg)](https://www.nytimes.com/2021/08/04/world/israel-covid-restrictions-lockdown.html)

Mask-wearing and vaccination requirements will be expanded, travel rules will be tightened and more Israelis will be told to work from home, the government said.

By Isabel Kershner

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
