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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the State Dept. Offers Potential Refugee Status to More Afghans Who Worked With U.S.
--------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/02/us/politics/afghan-visas-refugees.html)

[![](https://static01.nyt.com/images/2021/08/02/world/02dc-afghan/merlin_192094116_20133ae2-24a7-4c9f-9c4a-3bbdc12ca078-superJumbo.jpg)](https://www.nytimes.com/2021/08/02/us/politics/afghan-visas-refugees.html)

As the Taliban make territorial gains, more Afghans, including those who helped U.S. news outlets, will become eligible for visas.

By Michael Crowley

* * *

* * *

Key Afghan City in Danger of Falling to the Taliban
---------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/31/world/asia/afghanistan-taliban-lashkar-gah.html)

[![](https://static01.nyt.com/images/2021/07/31/world/31afghanistan-helmand-01/merlin_187595676_f8092e1f-c098-4ba7-9f2b-94fb1a3238cc-superJumbo.jpg)](https://www.nytimes.com/2021/07/31/world/asia/afghanistan-taliban-lashkar-gah.html)

Government reinforcements arrived Saturday in Lashkar Gah, the capital of Helmand Province, but people were fleeing their homes and a hospital in the city had been bombed.

By Thomas Gibbons-Neff and Taimoor Shah

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
