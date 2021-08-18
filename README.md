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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the The Taliban respond with force to an outpouring of public anger.
----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/18/world/asia/afghanistan-taliban-protests.html)

[![](https://static01.nyt.com/images/2021/08/18/world/18afghanistan-briefing-LEDE-03/merlin_193397178_2823415b-9523-4fb5-a1d9-6b691b215186-superJumbo.jpg)](https://www.nytimes.com/2021/08/18/world/asia/afghanistan-taliban-protests.html)

Hundreds of protesters took to the streets in Jalalabad. The Taliban shot into the crowd and beat protesters.

By Marc Santora, Jim Huylebroek and Carlotta Gall

* * *

* * *

Haiti Quake Toll Leaps to Nearly 2,000 Dead as Rain Pelts Survivors
-------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/17/world/americas/haiti-hurricane-storm.html)

[![](https://static01.nyt.com/images/2021/08/17/world/17haiti-storm01/merlin_193347267_26829cb9-d64b-4983-93da-81e5f0b44daf-superJumbo.jpg)](https://www.nytimes.com/2021/08/17/world/americas/haiti-hurricane-storm.html)

The new casualty figures from Saturday’s quake, including 10,000 injured, come as victims struggled with a storm deluge that could complicate relief efforts.

By Anatoly Kurmanaev and Constant Méheut

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
