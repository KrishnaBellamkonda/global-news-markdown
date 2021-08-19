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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the The Dangerous Road to the Kabul Airport
---------------------------------------

[Article here](https://www.nytimes.com/interactive/2021/08/18/world/asia/kabul-airport-afghanistan-maps.html)

[![](https://static01.nyt.com/images/2021/08/18/us/kabul-airport-afghanistan-maps-promo-1629325507334/kabul-airport-afghanistan-maps-promo-1629325507334-superJumbo.jpg)](https://www.nytimes.com/interactive/2021/08/18/world/asia/kabul-airport-afghanistan-maps.html)

Thousands of people have headed to the airport trying to flee, but Taliban fighters have blocked entrances, fired rifles and beaten some people in the crowds.

By Lauren Leatherby, Jim Huylebroek, Scott Reinhard and Sarah Kerr

* * *

* * *

Biden Says Troops May Stay in Kabul Longer to Assist Evacuations
----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/18/us/politics/military-afghan-evacuation.html)

[![](https://static01.nyt.com/images/2021/08/18/us/18dc-military/merlin_193374192_d194557a-4cd6-4ad0-8f2e-dcb02f536a72-superJumbo.jpg)](https://www.nytimes.com/2021/08/18/us/politics/military-afghan-evacuation.html)

Tens of thousands of people trying to flee remain in the country, unable to leave.

By Eric Schmitt, Helene Cooper and Michael D. Shear

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
