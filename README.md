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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the The C.I.A. director visited Kabul for secret talks with the Taliban.
--------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/24/world/asia/cia-taliban-william-burns-afghanistan.html)

[![](https://static01.nyt.com/images/2021/08/24/world/24afghan-briefing-burns-cia/merlin_187998384_95a94ef5-9fea-4fe0-811f-cc931ae1c4cd-superJumbo.jpg)](https://www.nytimes.com/2021/08/24/world/asia/cia-taliban-william-burns-afghanistan.html)

The meetings are the highest-level in-person talks between a Biden administration official and Afghanistan’s new leadership.

By Julian E. Barnes and Richard Pérez-Peña

* * *

* * *

Many Older Americans Still Aren’t Vaccinated, Making the Delta Wave Deadlier
----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/interactive/2021/08/24/world/vaccines-seniors.html)

[![](https://static01.nyt.com/images/2021/08/23/us/vaccination-seniors-promo-1629761989949/vaccination-seniors-promo-1629761989949-superJumbo.png)](https://www.nytimes.com/interactive/2021/08/24/world/vaccines-seniors.html)

Compared with other highly vaccinated countries, large parts of the United States have many vulnerable seniors, helping spur hospitalization and death.

By Josh Holder and Amy Schoenfeld Walker

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
