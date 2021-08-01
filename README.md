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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Los Angeles schools order weekly virus tests for everyone, vaccinated or not.
-----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/30/world/los-angeles-schools-covid.html)

[![](https://static01.nyt.com/images/2021/07/29/lens/29virus-briefing-la-school-testing1/merlin_190771764_cbdc0fb8-21e7-4a08-8570-78917a88212c-superJumbo.jpg)](https://www.nytimes.com/2021/07/30/world/los-angeles-schools-covid.html)

The shift by the second-largest U.S. district comes weeks before in-person classes are scheduled to resume.

By Lauren McCarthy

* * *

* * *

Remains of Esther Dingley, Missing British Hiker, Are Found
-----------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/30/world/europe/esther-dingley-missing-british-hiker.html)

[![](https://static01.nyt.com/images/2021/07/30/us/30xp-hiker/30xp-hiker-superJumbo.jpg)](https://www.nytimes.com/2021/07/30/world/europe/esther-dingley-missing-british-hiker.html)

For months, the authorities and Ms. Dingley’s partner combed the Pyrenees mountains. A DNA test confirmed the identity of remains found near her last known location, a group aiding the search said.

By Derrick Bryson Taylor

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
