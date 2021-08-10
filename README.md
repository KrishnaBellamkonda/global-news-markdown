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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Settling Scores at a Fist-Fighting Festival in the Peruvian Andes
-----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/09/travel/takanakuy-fighting-festival-peru.html)

[![](https://static01.nyt.com/images/2021/08/09/travel/09travel-peru-promo/09travel-peru-promo-superJumbo-v3.jpg)](https://www.nytimes.com/2021/08/09/travel/takanakuy-fighting-festival-peru.html)

Each year on Dec. 25, thousands of locals gather in the town of Santo Tomás — dressed in elaborate costumes — to dance, drink and duke it out.

By Mike Kai Chen

* * *

* * *

Your Tuesday Briefing
---------------------

[Article here](https://www.nytimes.com/2021/08/09/briefing/climate-change-fires-olympics-afghanistan.html)

[![](https://static01.nyt.com/images/2021/08/09/climate/10ambriefing-aus-nl-promo/merlin_192692550_3d5e43d9-a626-4a74-869f-6e7bdec851a7-superJumbo.jpg)](https://www.nytimes.com/2021/08/09/briefing/climate-change-fires-olympics-afghanistan.html)

A major climate report presents bleak findings.

By Melina Delkic

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
