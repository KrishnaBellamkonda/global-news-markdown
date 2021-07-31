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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Virus cases are rising around the world, and deaths in Africa are surging.
--------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/30/world/africa-who-coronavirus-deaths.html)

[![](https://static01.nyt.com/images/2021/07/30/world/30virus-briefing-who-africa/merlin_191853954_14f08eed-feba-474f-9a37-552e9efbc2d4-superJumbo.jpg)](https://www.nytimes.com/2021/07/30/world/africa-who-coronavirus-deaths.html)

“We can prevent this disease, we can test for it, and we can treat it,” Dr. Tedros Adhanom Ghebreyesus said.

By Daniel E. Slotnik

* * *

* * *

Behind the Masks, a Mystery: How Often Do the Vaccinated Spread the Virus?
--------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/29/health/cdc-masks-vaccinated-transmission.html)

[![](https://static01.nyt.com/images/2021/07/29/science/29virus-transmit1/merlin_191732004_683cde72-c3bb-4323-9732-80bd27f32fe0-superJumbo.jpg)](https://www.nytimes.com/2021/07/29/health/cdc-masks-vaccinated-transmission.html)

The C.D.C.’s new masking advice was based in part on data showing that the virus can thrive in the airways of vaccinated people. The findings are expected on Friday.

By Apoorva Mandavilli

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
