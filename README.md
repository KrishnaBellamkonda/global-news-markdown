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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Vaccine Effectiveness Against Infection May Wane, C.D.C. Studies Find
---------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/18/health/covid-cdc-boosters-elderly.html)

[![](https://static01.nyt.com/images/2021/08/18/science/18virus-cdc1/merlin_193074279_6d001e57-b1fc-4881-b4a0-87d9a0cac195-superJumbo.jpg)](https://www.nytimes.com/2021/08/18/health/covid-cdc-boosters-elderly.html)

Federal health officials said the new data justified a campaign of booster shots. But some scientists disagreed, saying not every American needs another dose.

By Apoorva Mandavilli

* * *

* * *

‘We’re on Our Own’: Many Earthquake Survivors Expect No Help From Haitian Officials
-----------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/18/world/americas/haiti-quake-aid.html)

[![](https://static01.nyt.com/images/2021/08/18/world/18haiti2/merlin_193391748_9a400686-ad00-4723-822c-71b0d4ca0cb7-superJumbo.jpg)](https://www.nytimes.com/2021/08/18/world/americas/haiti-quake-aid.html)

“No one trusts this government here,” said a farmer in one village where at least 20 residents were killed by the quake as they attended a funeral at a church that collapsed.

By Anatoly Kurmanaev and Andre Paultre

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
