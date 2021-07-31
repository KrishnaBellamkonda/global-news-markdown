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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Greece Accuses Aid Groups of Helping Smugglers of Migrants
----------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/30/world/europe/greece-migrants-aid-groups.html)

[![](https://static01.nyt.com/images/2021/07/30/world/30greece-espionage-01/merlin_136346322_f1452954-a8a5-4cb1-ac66-f8d5fcd31943-superJumbo.jpg)](https://www.nytimes.com/2021/07/30/world/europe/greece-migrants-aid-groups.html)

Greek police claim some groups have worked with smugglers and provided migrants with details about Coast Guard activities. The groups deny the charges.

By Niki Kitsantonis

* * *

* * *

Mourning Families Seek Solace From the ‘Grief Purgatory’ of Covid-19
--------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/31/us/coronavirus-grief-funerals.html)

[![](https://static01.nyt.com/images/2021/07/23/multimedia/00XP-virus-01/merlin_191247783_6e7037a5-a4fb-4ccf-870a-c5dc04116ed3-superJumbo.jpg)](https://www.nytimes.com/2021/07/31/us/coronavirus-grief-funerals.html)

The pandemic has left hundreds of thousands of Americans alone in bereavement, unable to plan proper funerals for their loved ones. Now, they’re planning larger celebrations of life.

By Eduardo Medina

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
