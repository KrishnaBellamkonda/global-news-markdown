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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Looking for St. Mark’s Square? You May Find Yourself in a Shipyard Instead
--------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/02/world/europe/italy-venice-tourism-cruise-ships.html)

[![](https://static01.nyt.com/images/2021/08/02/world/02venice-dispatch-01/merlin_192297966_caa96bcd-5ca2-4eea-80f1-724d2781ba69-superJumbo.jpg)](https://www.nytimes.com/2021/08/02/world/europe/italy-venice-tourism-cruise-ships.html)

As Venice’s ban on cruise ships took effect this weekend, some tourists were surprised to be docked hours away from the city’s famous sights.

By Jason Horowitz

* * *

* * *

What We Lost That Day
---------------------

[Article here](https://www.nytimes.com/interactive/2021/08/01/world/middleeast/beirut-explosion-anniversary.html)

[![](https://static01.nyt.com/images/2021/08/01/world/01beirut-anniversary-promo-static/01beirut-anniversary-promo-static-superJumbo.jpg)](https://www.nytimes.com/interactive/2021/08/01/world/middleeast/beirut-explosion-anniversary.html)

Personal reflections from victims of the Aug. 4, 2020, explosion at the Beirut port.

By Lina Mounzer, Ben Hubbard, Tala Safie and Mohamad Abdouni

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
