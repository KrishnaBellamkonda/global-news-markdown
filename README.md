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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the U.S. mask requirement for travelers is extended to January.
-----------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/17/world/us-mask-requirement-travelers.html)

[![](https://static01.nyt.com/images/2021/08/17/lens/17virusbriefing-tsa/merlin_193178040_00f5b187-251e-4bd7-afdd-94ff221ba671-superJumbo.jpg)](https://www.nytimes.com/2021/08/17/world/us-mask-requirement-travelers.html)

The mandate covers airports, as well as buses, trains and shuttle buses connected to airports, and all public buses, trains, subways and ferries.

By Azi Paybarah

* * *

* * *

How Haiti Was Devastated by Two Natural Disasters in Three Days
---------------------------------------------------------------

[Article here](https://www.nytimes.com/interactive/2021/08/18/world/americas/haiti-earthquake-grace.html)

[![](https://static01.nyt.com/images/2021/08/17/us/haiti-earthquake-grace-promo-1629244715428/haiti-earthquake-grace-promo-1629244715428-superJumbo.jpg)](https://www.nytimes.com/interactive/2021/08/18/world/americas/haiti-earthquake-grace.html)

The impact of a magnitude-7.2 earthquake on Saturday was magnified Monday by heavy rains and wind from Grace, then a tropical depression, which would soon strengthen into a tropical storm.

By Tim Wallace, Ashley Wu and Jugal K. Patel

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
