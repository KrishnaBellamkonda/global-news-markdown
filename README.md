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

### Note
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the The European Union pulls ahead of the United States in vaccinations.
--------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/29/world/europe/eu-us-vaccinations.html)

[![](https://static01.nyt.com/images/2021/07/27/world/27virus-briefing-EU-vaccinations/merlin_191007561_04a14009-3fab-436e-bed3-555f1b434d2a-superJumbo.jpg)](https://www.nytimes.com/2021/07/29/world/europe/eu-us-vaccinations.html)

The figures provided a stark contrast with the early stages of the inoculation campaigns, when the bloc, facing a shortage of doses and delayed deliveries, looked in envy at efforts elsewhere.

By Elian Peltier

* * *

* * *

‘Terror’: Crackdown After Protests in Cuba Sends a Chilling Message
-------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/28/world/americas/cuba-protests-crackdown-arrests.html)

[![](https://static01.nyt.com/images/2021/07/28/world/28cuba-02/merlin_190734558_656dc11b-9fbe-48c4-a792-e8c48de1fada-superJumbo.jpg)](https://www.nytimes.com/2021/07/28/world/americas/cuba-protests-crackdown-arrests.html)

In a remarkable act of defiance, thousands of Cubans took to the streets two weeks ago and chanted “We’re not afraid!” Many are now terrified.

By Ernesto Londoño and Daniel Politi

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
