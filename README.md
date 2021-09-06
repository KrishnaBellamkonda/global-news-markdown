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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Afghans With Ties to U.S. Who Could Not Get Out Now Live in Fear
----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/03/world/asia/afghanistan-taliban-airport-evacuation-refugees-asylum.html)

[![](https://static01.nyt.com/images/2021/09/02/world/02AFGHANISTAN-TRAPPED-01/merlin_193550511_38534a4b-4fb2-4871-8a5e-e46d319c4ee3-superJumbo.jpg)](https://www.nytimes.com/2021/09/03/world/asia/afghanistan-taliban-airport-evacuation-refugees-asylum.html)

Thousands did not make it onto U.S. military evacuation flights. Many of them are now in hiding, worried for their safety and their future.

By Adam Nossiter

* * *

* * *

‘Everyone Is on the List’: Fear Grips Nicaragua as It Veers to Dictatorship
---------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/05/world/nicaragua-political-repression.html)

[![](https://static01.nyt.com/images/2021/09/02/world/00NICARAGUA1/00NICARAGUA1-superJumbo.jpg)](https://www.nytimes.com/2021/09/05/world/nicaragua-political-repression.html)

A crackdown on opposition by President Daniel Ortega leaves Nicaraguans to wonder: Who is next?

By Yubelka Mendoza, Anatoly Kurmanaev and Alfonso Flores Bermúdez

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
