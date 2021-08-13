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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Australians seek ways to speed vaccinations as government rollout sputters.
---------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/12/world/australians-seek-ways-to-speed-vaccinations-as-government-rollout-sputters.html)

[![](https://static01.nyt.com/images/2021/08/12/world/12virus-briefing-australia-covid/merlin_193157814_0a4d4f39-f1e0-49fe-a68f-19255933ee74-superJumbo.jpg)](https://www.nytimes.com/2021/08/12/world/australians-seek-ways-to-speed-vaccinations-as-government-rollout-sputters.html)

A stubborn Delta outbreak has kicked a complacent country into gear, with community members working to fill gaps in the government’s sputtering vaccine rollout.

By Damien Cave

* * *

* * *

Three more major cities are under Taliban control, as the government’s forces near collapse.
--------------------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/13/world/asia/afghanistan-taliban-advance-kandahar.html)

[![](https://static01.nyt.com/images/2021/08/12/world/00AFGHANISTAN-KANDAHAR-HFO/merlin_192879501_c6a50e9e-c02e-4598-ba16-cf3514e4f789-superJumbo.jpg)](https://www.nytimes.com/2021/08/13/world/asia/afghanistan-taliban-advance-kandahar.html)

With Lashkar Gah and Kandahar, the Taliban now effectively control southern Afghanistan. The western city of Herat is also in their hands.

By Thomas Gibbons-Neff and Christina Goldbaum

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
