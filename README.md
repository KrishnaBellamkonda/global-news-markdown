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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Hezbollah Fires Rockets at Israel as Risk of Escalation Looms
-------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/06/world/middleeast/israel-lebanon-rockets.html)

[![](https://static01.nyt.com/images/2021/08/06/world/06israel-lebanon01/merlin_192850362_7232b41c-dc17-4f33-99f2-b7b57695d1a8-superJumbo.jpg)](https://www.nytimes.com/2021/08/06/world/middleeast/israel-lebanon-rockets.html)

Tensions between Israel and Iran and its Hezbollah allies intensified even as both sides signaled they had no interest in an all-out war.

By Isabel Kershner, Ronen Bergman and Ben Hubbard

* * *

* * *

Can the Olympics Take the Heat?
-------------------------------

[Article here](https://www.nytimes.com/2021/08/06/science/olympics-squirrels-competition.html)

[![](https://static01.nyt.com/images/2021/08/06/science/06sciencetimes-newsletter-2/merlin_147857778_2ccd78b6-ec93-458e-9bc4-df22b8a0a517-superJumbo.jpg)](https://www.nytimes.com/2021/08/06/science/olympics-squirrels-competition.html)

Plus: squirrel acrobats, gecko navigators, hair thieves and other natural overachievers in the Friday edition of the Science Times newsletter.

By Alan Burdick

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
