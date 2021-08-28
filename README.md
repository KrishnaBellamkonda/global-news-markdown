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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the The U.S. retaliates over the airport bombing, days before the withdrawal deadline.
----------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/28/world/asia/the-us-retaliates-over-the-airport-bombing-days-before-the-withdrawal-deadline.html)

[![](https://static01.nyt.com/images/2021/08/28/world/27afghanistan-briefing-usairstrikeTopSUB/merlin_193759392_66acf184-f51b-420e-a54f-8b54f0b7b12e-superJumbo.jpg)](https://www.nytimes.com/2021/08/28/world/asia/the-us-retaliates-over-the-airport-bombing-days-before-the-withdrawal-deadline.html)

The U.S. military said that it had killed its target in the first strike since a deadly attack on the Kabul airport.

By Daniel Victor, Eric Schmitt, Zia ur-Rehman, Jim Huylebroek, Najim Rahim and Matthieu Aikins

* * *

* * *

Biden warns that new attack is ‘highly likely’ as evacuations slow.
-------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/28/world/asia/uk-france-afghanistan-evacuation-withdrawal.html)

[![](https://static01.nyt.com/images/2021/08/28/world/28afghanistan-briefing-evacuation-end/merlin_193791165_3768a5a6-7833-463b-a081-21056908c8cc-superJumbo.jpg)](https://www.nytimes.com/2021/08/28/world/asia/uk-france-afghanistan-evacuation-withdrawal.html)

U.S. officials estimate that about 350 Americans are still awaiting evacuation from Afghanistan.

By Michael Levenson

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
