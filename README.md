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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Breakthrough Covid Cases: Uncommon and Often Mild, but Not Always
-----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/26/health/covid-breakthrough-infection.html)

[![](https://static01.nyt.com/images/2021/08/06/science/00breakthroughs-1/merlin_192903705_14d852e0-a7cf-488e-9a38-6e7637e11973-superJumbo.jpg)](https://www.nytimes.com/2021/08/26/health/covid-breakthrough-infection.html)

Vaccination remains the best defense, health experts say. But some infections occur regardless, and can come as a traumatic surprise.

By Emma Goldberg

* * *

* * *

A Better Afghan Policy
----------------------

[Article here](https://www.nytimes.com/2021/08/25/briefing/afghanistan-policy-biden.html)

[![](https://static01.nyt.com/images/2021/08/25/lens/25ambriefing-promo01/25ambriefing-kabul-superJumbo-v3.jpg)](https://www.nytimes.com/2021/08/25/briefing/afghanistan-policy-biden.html)

What would it have been?

By David Leonhardt

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
