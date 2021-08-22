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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Jesse Jackson and his wife, Jacqueline, are hospitalized with Covid-19.
-----------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/21/us/jesse-jackson-wife-hospitalized-covid-19.html)

[![](https://static01.nyt.com/images/2021/08/21/world/21virus-briefing-jackson/merlin_192587040_a4a5c3dc-5c7b-451b-a800-7081b27b9455-superJumbo.jpg)](https://www.nytimes.com/2021/08/21/us/jesse-jackson-wife-hospitalized-covid-19.html)

Mr. Jackson, 79, was vaccinated in January.

* * *

* * *

Fears Rise About Safety of Afghan Airport as U.S. Warns Americans to Stay Away
------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/21/world/asia/Afghanistan-Kabul-airport-evacuations.html)

[![](https://static01.nyt.com/images/2021/08/21/world/21afghanistan-kabul1/21afghanistan-kabul1-superJumbo.jpg)](https://www.nytimes.com/2021/08/21/world/asia/Afghanistan-Kabul-airport-evacuations.html)

Families continued to swarm the airport in hopes of getting aboard American military planes. U.S. officials are now worried that Islamic State might launch an attack to damage the Taliban’s sense of control.

By David Zucchino

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
