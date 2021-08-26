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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Chinese Citizen Who Documented Wuhan Outbreak Falls Ill in Prison Hunger Strike
-------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/25/world/asia/china-zhang-zhan-hunger-strike.html)

[![](https://static01.nyt.com/images/2021/08/24/world/00china-hungerstrike-1sub/merlin_193361349_7ce6ed6b-7f67-4824-bcd3-23b3a283783d-superJumbo.jpg)](https://www.nytimes.com/2021/08/25/world/asia/china-zhang-zhan-hunger-strike.html)

Zhang Zhan was sentenced to four years for videos about failures in handling the virus. She now weighs less than 90 pounds, her former lawyer says.

By Amy Chang Chien and Austin Ramzy

* * *

* * *

Your Thursday Briefing
----------------------

[Article here](https://www.nytimes.com/2021/08/25/briefing/afghanistan-evacuations-virus-origin-studies-navalny.html)

[![](https://static01.nyt.com/images/2021/08/26/world/26ambriefing-aus-nl1/26ambriefing-aus-nl1-superJumbo.jpg)](https://www.nytimes.com/2021/08/25/briefing/afghanistan-evacuations-virus-origin-studies-navalny.html)

Racing to get out of Afghanistan.

By Melina Delkic

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
