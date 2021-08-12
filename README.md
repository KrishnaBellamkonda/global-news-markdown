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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Algerian Soldiers Die Fighting Wildfires, President Says
--------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/10/world/algerian-soldiers-die-fighting-wildfires-president-says.html)

[![](https://static01.nyt.com/images/2021/08/10/world/10algeria1/merlin_193121448_f8f304bc-f032-4d62-9a14-65ad2ade48c1-superJumbo.jpg)](https://www.nytimes.com/2021/08/10/world/algerian-soldiers-die-fighting-wildfires-president-says.html)

At least 25 soldiers were killed saving residents from wildfires ravaging mountain forests and villages east of the capital, he said. The civilian death toll from the blazes rose to at least 17.

By The Associated Press

* * *

* * *

Thousands in Germany get extra shots after a nurse is suspected of tampering with the vaccine.
----------------------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/11/world/europe/german-nurse-vaccine-saline.html)

[![](https://static01.nyt.com/images/2021/08/11/world/11virus-briefing-germany/11virus-briefing-germany-superJumbo.jpg)](https://www.nytimes.com/2021/08/11/world/europe/german-nurse-vaccine-saline.html)

The nurse admitted to replacing six vaccine doses with a saline solution. The police suspect that she may have done so with many others during her time working at a clinic early this year.

By Christopher F. Schuetze

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
