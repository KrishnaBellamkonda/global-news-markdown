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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the U.S., others warn of threat at airport in Kabul and tell citizens to leave immediately.
---------------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/25/world/asia/us-kabul-airport-threat.html)

[![](https://static01.nyt.com/images/2021/08/24/world/26-afghan-briefing-airport-threat/26-afghan-briefing-airport-threat-superJumbo.jpg)](https://www.nytimes.com/2021/08/25/world/asia/us-kabul-airport-threat.html)

The U.S. government has long warned of potential security threats but the latest warning cited specific gates.

By Eric Schmitt and Traci Carl

* * *

* * *

Your Thursday Briefing
----------------------

[Article here](https://www.nytimes.com/2021/08/25/briefing/afghanistan-evacuations-virus-origin-studies-navalny.html)

[![](https://static01.nyt.com/images/2021/08/26/world/26ambriefing-aus-nl1/26ambriefing-aus-nl1-superJumbo.jpg)](https://www.nytimes.com/2021/08/25/briefing/afghanistan-evacuations-virus-origin-studies-navalny.html)

Racing to get out of Afghanistan.

By Melina Delkic

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
