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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Paralympic officials in Tokyo report the first virus case in the Olympic Village.
---------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/19/world/asia/paralympics-virus-case.html)

[![](https://static01.nyt.com/images/2021/08/19/world/19virus-briefing-paralympics/merlin_192730854_99c92902-e8c2-4956-aa22-76c1a30630d0-superJumbo.jpg)](https://www.nytimes.com/2021/08/19/world/asia/paralympics-virus-case.html)

Instances of coronavirus linked to the Games come as Japan is reporting record numbers of infections.

By Motoko Rich

* * *

* * *

Israel, Once the Model for Beating Covid, Faces New Surge of Infections
-----------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/18/world/middleeast/israel-virus-infections-booster.html)

[![](https://static01.nyt.com/images/2021/08/18/world/18ISRAEL-VIRUS01/merlin_193188354_e514d58c-2019-480d-868e-273d4bc589f5-superJumbo.jpg)](https://www.nytimes.com/2021/08/18/world/middleeast/israel-virus-infections-booster.html)

One of the most vaccinated societies, Israel now has one of the highest infection rates in the world, raising questions about the vaccine’s efficacy.

By Isabel Kershner

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
