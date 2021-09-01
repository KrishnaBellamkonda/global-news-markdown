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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the An Experimental H.I.V. Vaccine Fails in Africa
----------------------------------------------

[Article here](https://www.nytimes.com/2021/08/31/health/hiv-vaccine-south-africa.html)

[![](https://static01.nyt.com/images/2021/08/31/us/31hiv-1/31hiv-1-superJumbo.jpg)](https://www.nytimes.com/2021/08/31/health/hiv-vaccine-south-africa.html)

Researchers ended a large trial in South Africa after finding that an experimental vaccine offered little protection.

By Stephanie Nolen

* * *

* * *

Japan Needs a Lot More Tech Workers. Can It Find a Place for Women?
-------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/01/business/japan-tech-workers-women.html)

[![](https://static01.nyt.com/images/2021/09/01/business/01japan-digitalgap-1/merlin_193760769_2e673a75-cb4d-46fd-a756-b325bf19fea2-superJumbo.jpg)](https://www.nytimes.com/2021/09/01/business/japan-tech-workers-women.html)

The country is pushing to digitally modernize itself, but one of the developed world’s starkest gender gaps is holding it back.

By Malcolm Foster

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
