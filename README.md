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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Your Wednesday Briefing
-----------------------

[Article here](https://www.nytimes.com/2021/08/10/briefing/taliban-advance-travel-us-cuomo-resignation.html)

[![](https://static01.nyt.com/images/2021/08/10/world/11ambriefing-aus-nl-PROMO/merlin_123206912_4c009c2b-480d-44b3-8989-028d96fe6d21-superJumbo.jpg)](https://www.nytimes.com/2021/08/10/briefing/taliban-advance-travel-us-cuomo-resignation.html)

The Taliban is advancing rapidly.

By Melina Delkic

* * *

* * *

Mexico’s President Defends News Anchor After Cartel Threat
----------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/10/world/americas/mexico-president-journalist-cartel-threat.html)

[![](https://static01.nyt.com/images/2021/08/10/world/10mexico-journalist/merlin_193126938_a6d97734-454b-4f21-9b39-b3fc5e474e79-superJumbo.jpg)](https://www.nytimes.com/2021/08/10/world/americas/mexico-president-journalist-cartel-threat.html)

President Andrés Manuel López Obrador came out in defense of a TV news anchor, Azucena Uresti, after she received a death threat, apparently from a powerful drug cartel.

By Oscar Lopez

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
