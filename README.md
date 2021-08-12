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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the A man who traveled to an Australian town while infected with the virus is being charged.
----------------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/11/world/australia/a-man-who-traveled-to-an-australian-town-while-infected-with-the-virus-is-being-charged.html)

[![](https://static01.nyt.com/images/2021/08/11/world/11virus-briefing-globalroundup/merlin_187021179_b30676ad-f854-4a22-8851-9e686301b621-superJumbo.jpg)](https://www.nytimes.com/2021/08/11/world/australia/a-man-who-traveled-to-an-australian-town-while-infected-with-the-virus-is-being-charged.html)

By Yan Zhuang

* * *

* * *

New Zealand, a pandemic success story, unveils a reopening strategy.
--------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/12/world/new-zealand-virus-reopening.html)

[![](https://static01.nyt.com/images/2021/08/12/world/12virus-briefing-nz-elimination/merlin_193177884_e5cb987e-398d-46b9-b802-319c84b26aee-superJumbo.jpg)](https://www.nytimes.com/2021/08/12/world/new-zealand-virus-reopening.html)

From early next year, vaccinated travelers from low-risk countries can enter New Zealand without having to quarantine.

By Natasha Frost

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
