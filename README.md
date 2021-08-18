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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the The War in Afghanistan: How It Started and How It Is Ending
-----------------------------------------------------------

[Article here](https://www.nytimes.com/article/afghanistan-war-us.html)

[![](https://static01.nyt.com/images/2021/04/21/world/21afghanistan-explainer-2/merlin_10297984_59ad5aff-017e-4524-a125-bea34a76f05f-superJumbo.jpg)](https://www.nytimes.com/article/afghanistan-war-us.html)

Just as the United States was set to withdraw its military from Afghanistan after nearly 20 years of war, the Taliban took over Kabul, the country’s capital.

By David Zucchino

* * *

* * *

Your Wednesday Briefing
-----------------------

[Article here](https://www.nytimes.com/2021/08/17/briefing/taliban-haiti-breakthrough-infections.html)

[![](https://static01.nyt.com/images/2021/08/18/us/18ambriefing-europe-nl-promo/18ambriefing-europe-nl-taliban-superJumbo.jpg)](https://www.nytimes.com/2021/08/17/briefing/taliban-haiti-breakthrough-infections.html)

History clouds the Taliban’s promises.

By Natasha Frost

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
