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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the U.S. Strikes Explosive-Laden Vehicle in Kabul
---------------------------------------------

[Article here](https://www.nytimes.com/2021/08/29/us/politics/us-strike-kabul-airport.html)

[![](https://static01.nyt.com/images/2021/08/29/us/politics/29dc-airstrikes/merlin_193858926_e4b68ef9-d535-42b0-ab1d-fab2b5ebc60e-superJumbo.jpg)](https://www.nytimes.com/2021/08/29/us/politics/us-strike-kabul-airport.html)

The drone strike came after a warning from President Biden that another terrorist attack at the Afghan capital’s airport was “highly likely.”

By Helene Cooper and Eric Schmitt

* * *

* * *

A New Breed of Crisis: War and Warming Collide in Afghanistan
-------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/30/climate/afghanistan-climate-taliban.html)

[![](https://static01.nyt.com/images/2021/08/26/climate/00cl-afghanistan1/merlin_190820895_8335b039-57ef-4fdc-b939-7a0b97d00637-superJumbo.jpg)](https://www.nytimes.com/2021/08/30/climate/afghanistan-climate-taliban.html)

Unrest and climate change are creating an agonizing feedback loop that punishes some of the world’s most vulnerable people.

By Somini Sengupta

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
