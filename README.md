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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the T. Rex Was Fearsome but May Have Been a Picky Eater
---------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/23/science/tyrannosaurus-rex.html)

[![](https://static01.nyt.com/images/2021/08/23/us/23xp-trex-1/merlin_186452322_03f63eff-9c6e-4f48-9ad9-6f0a54b361e1-superJumbo.jpg)](https://www.nytimes.com/2021/08/23/science/tyrannosaurus-rex.html)

The jaw of the Tyrannosaurus Rex had sensitive nerves that may have allowed it to differentiate between parts of its prey, a new study found.

By Maria Cramer

* * *

* * *

Did the War in Afghanistan Have to Happen?
------------------------------------------

[Article here](https://www.nytimes.com/2021/08/23/world/middleeast/afghanistan-taliban-deal-united-states.html)

[![](https://static01.nyt.com/images/2021/08/22/world/22TALIBANDEAL1/22TALIBANDEAL1-superJumbo.jpg)](https://www.nytimes.com/2021/08/23/world/middleeast/afghanistan-taliban-deal-united-states.html)

In 2001, when the Taliban were weak and ready to surrender, the U.S. passed on a deal. Nearly 20 years later, the Taliban hold all the cards.

By Alissa J. Rubin

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
