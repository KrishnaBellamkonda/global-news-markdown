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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Remains of Esther Dingley, Missing British Hiker, Are Found
-----------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/30/world/europe/esther-dingley-missing-british-hiker.html)

[![](https://static01.nyt.com/images/2021/07/30/us/30xp-hiker/30xp-hiker-superJumbo.jpg)](https://www.nytimes.com/2021/07/30/world/europe/esther-dingley-missing-british-hiker.html)

For months, the authorities and Ms. Dingley’s partner combed the Pyrenees mountains. A DNA test confirmed the identity of remains found near her last known location, a group aiding the search said.

By Derrick Bryson Taylor

* * *

* * *

Covid Vaccine Effort in Europe Confronts Anger, Disinformation and Suspicion
----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/29/world/europe/brussels-vaccination-undocumented.html)

[![](https://static01.nyt.com/images/2021/07/27/world/27belgium-migrants-01/merlin_189866058_cd188b9c-782c-4429-ae9d-9f526bdae006-superJumbo.jpg)](https://www.nytimes.com/2021/07/29/world/europe/brussels-vaccination-undocumented.html)

Across the continent, reaching vulnerable populations on the margins of society is a challenge. In Brussels, the authorities are hoping mobile outreach teams can help.

By Monika Pronczuk

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
