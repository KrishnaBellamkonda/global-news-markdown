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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the President Biden will speak Friday on the troubled evacuation effort.
--------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/19/world/asia/biden-speech-evacuation.html)

[![](https://static01.nyt.com/images/2021/09/19/world/19afghanistan-briefing-biden-remarks/merlin_193413201_d948ade3-1981-442a-bbee-eb8dcc4240bc-superJumbo.jpg)](https://www.nytimes.com/2021/08/19/world/asia/biden-speech-evacuation.html)

The remarks come after days of tumult in and around Hamid Karzai International Airport since the Taliban took Kabul.

By Chris Cameron

* * *

* * *

Trump’s Deal With the Taliban Draws Fire From His Former Allies
---------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/19/us/politics/trump-biden-afghan-taliban.html)

[![](https://static01.nyt.com/images/2021/09/18/us/politics/18dc-trumpafghan-1/merlin_160506423_cb840c08-f6c8-4b68-a0ab-5df8989db811-superJumbo.jpg)](https://www.nytimes.com/2021/08/19/us/politics/trump-biden-afghan-taliban.html)

The former president and his secretary of state, Mike Pompeo, are attacking President Biden over Afghanistan even as their own policy faces harsh criticism.

By Michael Crowley

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
