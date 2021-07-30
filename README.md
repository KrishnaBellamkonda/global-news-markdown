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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Duterte says vaccine refusers in the Philippines should be detained at home.
----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/29/world/duterte-philippines-covid-vaccine.html)

[![](https://static01.nyt.com/images/2021/07/29/world/29virus-briefing-philippines/29virus-briefing-philippines-superJumbo-v2.jpg)](https://www.nytimes.com/2021/07/29/world/duterte-philippines-covid-vaccine.html)

It was not clear whether President Rodrigo Duterte intended to try to enforce such a rule, which legal experts said would be unconstitutional.

By Jason Gutierrez

* * *

* * *

This Ethiopian Road Is a Lifeline for Millions. Now It’s Blocked.
-----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/29/world/africa/ethiopia-tigray-aid-crisis.html)

[![](https://static01.nyt.com/images/2021/07/29/world/29ethiopia-sub/29ethiopia-sub-superJumbo.jpg)](https://www.nytimes.com/2021/07/29/world/africa/ethiopia-tigray-aid-crisis.html)

Aid workers say the Ethiopian government has effectively cut off the lone route into the conflict-torn region of Tigray, leading to a risk of mass starvation.

By Declan Walsh

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
