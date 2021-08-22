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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the The situation at Kabul’s airport deteriorates as diplomats warn of threats.
---------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/21/world/asia/kabul-airport-afghanistan-security.html)

[![](https://static01.nyt.com/images/2021/08/21/world/21afghanistan-briefing-pentagon/21afghanistan-briefing-pentagon-superJumbo.jpg)](https://www.nytimes.com/2021/08/21/world/asia/kabul-airport-afghanistan-security.html)

Some Americans made it through the chaos at the airport despite warnings by the U.S. State Department to wait for orders to evacuate.

By Eric Schmitt

* * *

* * *

A Century After the Titanic Sank, a Film Tries to Rescue 6 Survivors’ Stories
-----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/21/world/chinese-titanic-survivors-the-six.html)

[![](https://static01.nyt.com/images/2021/08/18/lens/00xp-china-titanic1/00xp-china-titanic1-superJumbo.jpg)](https://www.nytimes.com/2021/08/21/world/chinese-titanic-survivors-the-six.html)

“The Six,” a new documentary, attempts to track down the fate of Chinese sailors who survived the Titanic but were scattered by Western immigration laws.

By Jennifer Jett

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
