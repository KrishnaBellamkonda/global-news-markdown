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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the A Popular Comedy’s Return in France Exposes Growing Divides
-----------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/14/world/europe/france-OSS-117-movie-comedy.html)

[![](https://static01.nyt.com/images/2021/08/14/world/14FRANCE-HUMOR01/merlin_193219059_1e67579b-eb01-4163-938f-abee19baeb75-superJumbo.jpg)](https://www.nytimes.com/2021/08/14/world/europe/france-OSS-117-movie-comedy.html)

After 12 years, a French spy spoof movie series featuring a clueless, racist and sexist hero re-emerges in a nation where laughter has become more complicated.

By Norimitsu Onishi

* * *

* * *

Taliban Sweep in Afghanistan Follows Years of U.S. Miscalculations
------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/14/us/afghanistan-biden.html)

[![](https://static01.nyt.com/images/2021/08/12/world/14dc-intel/merlin_106307455_5c1305db-0902-4660-b496-bd670fb5b326-superJumbo.jpg)](https://www.nytimes.com/2021/08/14/us/afghanistan-biden.html)

An Afghan military that did not believe in itself and a U.S. effort that Mr. Biden, and most Americans, no longer believed in brought an ignoble end to America’s longest war.

By David E. Sanger and Helene Cooper

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
