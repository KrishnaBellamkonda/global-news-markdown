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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Disabled Japanese Are Often Invisible. Will Paralympics Bring Lasting Light?
----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/03/world/asia/japan-paralympics-disabled.html)

[![](https://static01.nyt.com/images/2021/09/01/world/00JAPAN-DISABILITY-01/00JAPAN-DISABILITY-01-superJumbo.jpg)](https://www.nytimes.com/2021/09/03/world/asia/japan-paralympics-disabled.html)

Tokyo improved its infrastructure before the Games, but activists wonder how long the focus will continue in a country with a long history of excluding people with disabilities.

By Motoko Rich and Hikari Hida

* * *

* * *

Japan’s Prime Minister to Step Aside After Just a Year in Office
----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/02/world/asia/japan-suga-resign-election.html)

[![](https://static01.nyt.com/images/2021/09/03/world/03japan-suga/merlin_193290843_6cf30927-024e-446a-859c-4c9add721d23-superJumbo.jpg)](https://www.nytimes.com/2021/09/02/world/asia/japan-suga-resign-election.html)

Yoshihide Suga’s abrupt decision came after he had spent days trying to salvage a historically unpopular administration.

By Motoko Rich

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
