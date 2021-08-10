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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Washington State sets vaccine mandate for government and health care workers.
-----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/09/us/washington-state-workers-vaccine-mandate.html)

[![](https://static01.nyt.com/images/2021/08/09/world/09virus-briefing-washington-state-mandate/merlin_174228081_fc070fa0-d81e-4293-8c8c-6b71561d7f3a-superJumbo.jpg)](https://www.nytimes.com/2021/08/09/us/washington-state-workers-vaccine-mandate.html)

Employees who refuse to get vaccinated would face losing their jobs, Gov. Jay Inslee said.

By Adeel Hassan

* * *

* * *

Settling Scores at a Fist-Fighting Festival in the Peruvian Andes
-----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/09/travel/takanakuy-fighting-festival-peru.html)

[![](https://static01.nyt.com/images/2021/08/09/travel/09travel-peru-promo/09travel-peru-promo-superJumbo-v3.jpg)](https://www.nytimes.com/2021/08/09/travel/takanakuy-fighting-festival-peru.html)

Each year on Dec. 25, thousands of locals gather in the town of Santo Tomás — dressed in elaborate costumes — to dance, drink and duke it out.

By Mike Kai Chen

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
