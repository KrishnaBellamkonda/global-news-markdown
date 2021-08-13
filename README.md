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

[Article here](https://www.nytimes.com/2021/08/12/briefing/afghanistan-evacuations-australia-lockdowns-fires.html)

[![](https://static01.nyt.com/images/2021/08/12/world/13ambriefing-aus-promo2/13ambriefing-aus-AFGHANISTAN-KANDAHAR2-superJumbo-v3.jpg)](https://www.nytimes.com/2021/08/12/briefing/afghanistan-evacuations-australia-lockdowns-fires.html)

A U.S. evacuation from Afghanistan.

By Melina Delkic

* * *

* * *

Australian officials are criticized over ‘double quarantine’ for Olympians.
---------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/12/world/australia/australia-olympic-athletes-quarantine.html)

[![](https://static01.nyt.com/images/2021/08/12/world/12virus-briefing-australia-olympians/merlin_192225684_e9aba83d-94bc-4c01-be38-34ebe43aa63b-superJumbo.jpg)](https://www.nytimes.com/2021/08/12/world/australia/australia-olympic-athletes-quarantine.html)

Sixteen athletes traveling to the state of South Australia must spend 28 days in quarantine. The country’s Olympic committee called the requirement “cruel.”

By Yan Zhuang

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
