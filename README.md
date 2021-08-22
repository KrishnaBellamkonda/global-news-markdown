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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Health officials warn people not to treat Covid with a drug meant for livestock.
--------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/21/world/ivermectin-fda-covid-19-treatment.html)

[![](https://static01.nyt.com/images/2021/08/21/business/21Virus-Brieing-ivermectin/merlin_174810798_32d2978c-3f70-4fbe-83e8-db3e9fa073b9-superJumbo.jpg)](https://www.nytimes.com/2021/08/21/world/ivermectin-fda-covid-19-treatment.html)

“You are not a horse,” the Food and Drug Administration said. “Stop it.”

By Eduardo Medina

* * *

* * *

Athens Is Only Getting Hotter. Its New ‘Chief Heat Officer’ Hopes to Cool It Down.
----------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/21/world/europe/athens-is-only-getting-hotter-its-new-chief-heat-officer-hopes-to-cool-it-down.html)

[![](https://static01.nyt.com/images/2021/08/18/world/00athens-heat01/merlin_193381674_e3002808-dfe0-4fb4-a7c1-49a499af8691-superJumbo.jpg)](https://www.nytimes.com/2021/08/21/world/europe/athens-is-only-getting-hotter-its-new-chief-heat-officer-hopes-to-cool-it-down.html)

Eleni Myrivili has been tasked with finding ways to help the Greek capital cope with ever-hotter heat waves that are expected to be part of life for years to come.

By Jason Horowitz

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
