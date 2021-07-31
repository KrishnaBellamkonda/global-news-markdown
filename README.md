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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Your Friday Briefing
--------------------

[Article here](https://www.nytimes.com/2021/07/30/briefing/europe-vaccinations-olympics-heat-wave.html)

[![](https://static01.nyt.com/images/2021/07/27/world/30am-briefing-europe-vacc-rate/merlin_191007561_04a14009-3fab-436e-bed3-555f1b434d2a-superJumbo.jpg)](https://www.nytimes.com/2021/07/30/briefing/europe-vaccinations-olympics-heat-wave.html)

Europe’s vaccine campaigns speed ahead.

By Melina Delkic

* * *

* * *

This Ethiopian Road Is a Lifeline for Millions. Now It’s Blocked.
-----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/29/world/africa/ethiopia-tigray-aid-crisis.html)

[![](https://static01.nyt.com/images/2021/07/29/world/29ethiopia-sub/29ethiopia-sub-superJumbo.jpg)](https://www.nytimes.com/2021/07/29/world/africa/ethiopia-tigray-aid-crisis.html)

Aid workers say the Ethiopian government has effectively cut off the lone route into the conflict-torn region of Tigray, leading to a risk of mass starvation.

By Declan Walsh

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
