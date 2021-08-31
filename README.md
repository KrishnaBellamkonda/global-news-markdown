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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Biden receives the bodies of soldiers killed in the Kabul bombing.
------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/30/world/biden-receives-the-bodies-of-soldiers-killed-in-the-kabul-bombing.html)

[![](https://static01.nyt.com/images/2021/08/29/world/29afghanistan-briefing-dc2/29afghanistan-briefing-dc2-superJumbo.jpg)](https://www.nytimes.com/2021/08/30/world/biden-receives-the-bodies-of-soldiers-killed-in-the-kabul-bombing.html)

By Jim Tankersley

* * *

* * *

Can Afghanistan’s Leading Broadcaster Survive the Taliban?
----------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/30/world/asia/afghanistan-tolo-taliban.html)

[![](https://static01.nyt.com/images/2021/08/26/world/00afghanistan-tolo-01/merlin_144065925_699ea1ef-0f6d-48af-a60a-780c4dcf2240-superJumbo.jpg)](https://www.nytimes.com/2021/08/30/world/asia/afghanistan-tolo-taliban.html)

Tolo came to prominence with hard-hitting news, raucous reality shows and lurid Turkish soap operas. Now there are ominous signs that a violent media clampdown is underway.

By Dan Bilefsky

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
