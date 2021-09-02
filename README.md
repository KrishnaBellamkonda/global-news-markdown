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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the ‘Finally, I Am Safe’: U.S. Air Base Becomes Temporary Refuge for Afghans
------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/01/world/europe/us-airbase-germany-afghanistan.html)

[![](https://static01.nyt.com/images/2021/09/02/world/02afghanistan-ramstein-p1/merlin_194006358_23e197bc-11d5-449f-9ee1-383b4e971589-superJumbo.jpg)](https://www.nytimes.com/2021/09/01/world/europe/us-airbase-germany-afghanistan.html)

About a fifth of all people evacuated from Kabul were brought to Ramstein Air Base in Germany, where they await the next leg of their journey, to the United States.

By Melissa Eddy

* * *

* * *

Pope Criticizes Western Intervention in Afghanistan
---------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/01/world/europe/pope-afghanistan-health.html)

[![](https://static01.nyt.com/images/2021/09/01/world/01pope/merlin_193997226_e842de22-6566-4d19-bccd-577a316fba44-superJumbo.jpg)](https://www.nytimes.com/2021/09/01/world/europe/pope-afghanistan-health.html)

In a wide-ranging interview with a Spanish-language radio network, Francis said he was in good health after colon surgery in July, and insisted that he had not considered resigning.

By Elisabetta Povoledo

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
