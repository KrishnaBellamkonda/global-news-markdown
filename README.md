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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the The top U.S. officer in Afghanistan talks with the Taliban almost every day.
----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/23/world/asia/taliban-united-states-talks-leaders.html)

[![](https://static01.nyt.com/images/2021/08/23/world/23-afghanistan-briefing-talks/merlin_193468608_09961747-f4c3-4912-ae91-9d402937baf0-superJumbo.jpg)](https://www.nytimes.com/2021/08/23/world/asia/taliban-united-states-talks-leaders.html)

Other officers have also engaged with Taliban commanders on specific security and threat reduction issues, a partnership of necessity after 20 years of war.

By Eric Schmitt

* * *

* * *

Forced to leave his home, former President Hamid Karzai remains in Kabul despite the risks.
-------------------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/23/world/asia/hamid-karzai-home-kabul.html)

[![](https://static01.nyt.com/images/2021/08/23/world/23-afghanistan-briefing-karzai/merlin_189586806_b660e2ec-f970-488a-af79-1b76eed731a4-superJumbo.jpg)](https://www.nytimes.com/2021/08/23/world/asia/hamid-karzai-home-kabul.html)

He and the Taliban have long been enemies, but he has stayed in Afghanistan, hoping to work with the militants and help shape a new government.

By Carlotta Gall, Austin Ramzy and Sharif Hassan

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
