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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Dutch-Turkish Novelist Depicts Her Journey to Secularism With No Inhibitions
----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/13/world/europe/netherlands-dutch-turkish-novelist.html)

[![](https://static01.nyt.com/images/2021/07/22/world/00SaturdayProfile-LaleGul-01/merlin_190119969_e492425c-6f57-4540-bdbf-da830b88a944-superJumbo.jpg)](https://www.nytimes.com/2021/08/13/world/europe/netherlands-dutch-turkish-novelist.html)

Lale Gul’s autobiographical and sexually frank tale of a woman breaking with her conservative Muslim culture, and her strict parents, is a best seller in the Netherlands. “I’m done hiding,” she says.

By Thomas Erdbrink

* * *

* * *

An Afghan warlord who steadfastly resisted the Taliban surrendered. Others may follow his lead.
-----------------------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/13/world/asia/afghanistan-mohammad-ismail-khan.html)

[![](https://static01.nyt.com/images/2021/08/13/world/13afghanistan-live-briefing-ishmael-khan-falls/merlin_192871158_c55f3b79-8084-417a-a058-34bff1ff8d6b-superJumbo.jpg)](https://www.nytimes.com/2021/08/13/world/asia/afghanistan-mohammad-ismail-khan.html)

The surrender of Ismail Khan, the only warlord who posed a serious threat to the insurgents in the western region of the country, could be a sign that others may soon switch allegiances.

By Sharif Hassan

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
