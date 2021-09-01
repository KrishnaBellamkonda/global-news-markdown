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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Human Most of All: In Moscow, a Theater Stages ‘Gorbachev’
----------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/30/theater/gorbachev-play-moscow.html)

[![](https://static01.nyt.com/images/2021/09/01/arts/30gorbachev-notebook-1/merlin_186188976_972459c5-3ee0-430e-ae05-3a16f96ab72a-superJumbo.jpg)](https://www.nytimes.com/2021/08/30/theater/gorbachev-play-moscow.html)

The Latvian director Alvis Hermanis’s bioplay is an ode to the love story of Mikhail and Raisa Gorbachev, and portrays the former leader in all his humanity.

By Ivan Nechepurenko

* * *

* * *

U.S. War in Afghanistan Ends as Final Evacuation Flights Depart
---------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/30/world/asia/afghanistan-us-occupation-ends.html)

[![](https://static01.nyt.com/images/2021/08/30/world/30Afghanistan-Ledeall-LEDE/30Afghanistan-Ledeall-LEDE-superJumbo.jpg)](https://www.nytimes.com/2021/08/30/world/asia/afghanistan-us-occupation-ends.html)

The last U.S. military plane left Kabul Monday night, ending a presence that spanned two decades but failed to defeat the Taliban and left behind tens of thousands of Afghans.

By Adam Nossiter and Eric Schmitt

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
