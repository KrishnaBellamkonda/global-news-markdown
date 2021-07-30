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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the China’s New U.S. Ambassador Is Likely to Reflect Beijing’s Confidence
---------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/28/world/asia/china-ambassador-qin-gang.html)

[![](https://static01.nyt.com/images/2021/05/06/world/00china-ambassador-hfo/00china-ambassador-hfo-superJumbo.jpg)](https://www.nytimes.com/2021/07/28/world/asia/china-ambassador-qin-gang.html)

Qin Gang rose from working for a foreign news agency to becoming a trusted aide to Xi Jinping, China’s top leader.

By Chris Buckley

* * *

* * *

Qaddafi’s Son Is Alive. And He Wants to Take Libya Back.
--------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/30/magazine/qaddafi-libya.html)

[![](https://static01.nyt.com/images/2021/08/01/opinion/01mag-libya-03/01mag-libya-03-superJumbo.jpg)](https://www.nytimes.com/2021/07/30/magazine/qaddafi-libya.html)

In his first meeting with a foreign journalist in a decade, Seif al-Islam described his years in captivity — and hinted at a bid for Libya’s presidency.

By Robert F. Worth and Jehad Nga

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
