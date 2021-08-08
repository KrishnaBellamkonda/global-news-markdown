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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Reimagining Our Relationship With Nature Through Art
----------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/06/world/australia/reimagining-our-relationship-with-nature-through-art.html)

[![](https://static01.nyt.com/images/2021/08/06/world/06australialetter219-NL/06australialetter219-NL-superJumbo.jpg)](https://www.nytimes.com/2021/08/06/world/australia/reimagining-our-relationship-with-nature-through-art.html)

One Australian artist gives us a glimpse into a kinder, more caring world.

By Yan Zhuang

* * *

* * *

Greek Fires Force Thousands More to Evacuate
--------------------------------------------

[Article here](https://www.nytimes.com/2021/08/07/world/europe/greece-turkey-fires-ferry.html)

[![](https://static01.nyt.com/images/2021/08/07/world/07greece-fires01/merlin_192934347_4f4d36c3-637d-4fd3-8174-04e455f23cf9-superJumbo.jpg)](https://www.nytimes.com/2021/08/07/world/europe/greece-turkey-fires-ferry.html)

Wildfires are raging in Greece and Turkey as southern Europe faces one of its worst heat waves in decades.

By Niki Kitsantonis

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
