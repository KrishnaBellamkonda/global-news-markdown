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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the A local government in Australia killed its impounded dogs over coronavirus fears.
---------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/23/world/australia/covid-lockdown-dogs-killed.html)

[![](https://static01.nyt.com/images/2021/08/23/world/23virus-briefing-dogs/merlin_191034009_2d272b5b-b35f-4bfe-840b-f554a24c8e4b-superJumbo.jpg)](https://www.nytimes.com/2021/08/23/world/australia/covid-lockdown-dogs-killed.html)

The rural Bourke Shire Council said two of the dogs had become aggressive and the person who regularly found new homes for the animals became unavailable.

By Yan Zhuang

* * *

* * *

Chaos Persists at Kabul Airport as Taliban Discuss New Government
-----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/22/world/asia/afghanistan-taliban-biden-karzai.html)

[![](https://static01.nyt.com/images/2021/08/22/world/22-Afghan-Ledeall1/merlin_193550511_cb95adbb-3657-478d-83b6-6446270e300b-superJumbo.jpg)](https://www.nytimes.com/2021/08/22/world/asia/afghanistan-taliban-biden-karzai.html)

The militants have engaged the former officials Hamid Karzai and Abdullah Abdullah, as well as Moscow, to seek help in building an “inclusive” government while cementing their rule.

By Roger Cohen

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
