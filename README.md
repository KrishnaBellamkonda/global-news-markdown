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

### Note
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Behind the Masks, a Mystery: How Often Do the Vaccinated Spread the Virus?
--------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/29/health/cdc-masks-vaccinated-transmission.html)

[![](https://static01.nyt.com/images/2021/07/29/science/29virus-transmit1/merlin_191732004_683cde72-c3bb-4323-9732-80bd27f32fe0-superJumbo.jpg)](https://www.nytimes.com/2021/07/29/health/cdc-masks-vaccinated-transmission.html)

The C.D.C.’s new masking advice was based in part on data showing that the virus can thrive in the airways of vaccinated people. The findings are expected on Friday.

By Apoorva Mandavilli

* * *

* * *

A powerful storm called Evert is expected to bring more wild weather to the U.K.
--------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/29/world/europe/storm-evert-uk.html)

[![](https://static01.nyt.com/images/2021/07/29/us/29weather-climate-briefing-uk-weather-1/merlin_191720331_b72ab639-9e8a-4eee-bbe2-77c8076deec4-superJumbo.jpg)](https://www.nytimes.com/2021/07/29/world/europe/storm-evert-uk.html)

The storm is set to hit southwestern England starting Thursday night, after a series of extreme weather events in the country over the past month.

By Aina J. Khan

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
