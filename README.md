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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the For France, American Vines Still Mean Sour Grapes
-------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/29/world/europe/france-wine-usa.html)

[![](https://static01.nyt.com/images/2021/08/27/world/00FRANCE-FORBIDDEN-WINE01/merlin_193616151_3d7cb817-1280-4db8-9075-fca26496487f-superJumbo.jpg)](https://www.nytimes.com/2021/08/29/world/europe/france-wine-usa.html)

French authorities have tried to outlaw hardy American hybrids for 87 years. But climate change and the natural wine movement are giving renegade winemakers a lift.

By Norimitsu Onishi

* * *

* * *

At Least One Dead as Tropical Storm Nora Lashes Mexico With Heavy Rain
----------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/29/world/americas/nora-storm-news.html)

[![](https://static01.nyt.com/images/2021/08/29/multimedia/00xp-Nora-02/00xp-Nora-02-superJumbo.jpg)](https://www.nytimes.com/2021/08/29/world/americas/nora-storm-news.html)

The storm, which was downgraded from a hurricane, battered western Mexico with rain and was also blamed for at least two injuries in Jalisco State.

By Alyssa Lukpat

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
