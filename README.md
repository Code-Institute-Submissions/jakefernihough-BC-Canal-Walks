# **THE BLACK COUNTRY CANAL WALK GUIDE** #

<img src="assets/images/responsive.png" style="margin: 0;">

For my Milestone 2 Project with [Code Institute](https://codeinstitute.net/), I had the challenge to incorporate a website using JavaScript.
I decided to creat a website close to home (literally). Due to my enjoyment of hikes and a passion to learn about
history, I chose to create a website dedicated to the Black Country Canals, located around the Dudley (DY area).

I used Google Maps API to create a living map embedded in the web page to give the viewers an interesting view of the canals and
attractions that they can find along the walks. 

**You can find a link to the live website** [HERE](https://jakefernihough.github.io/BC-Canal-Walks/).

# UX

## Website Goals
  * The purpose of creating this site was to build a website using JavaScript and Google Maps to created an interactive website for those interested in
  walking the Black Country Canal paths.
  
  * To teach viewers about the rich history of the Canals and the importance they had during the Industrial Revolution.

  * To give a clean and easy to use website for anyone to use whilst on the laptops or on the go on mobile and giving real locations and attractions.

  * A simple contact form for those interested in learning more about the canals with a working auto-reply Email using [emailjs](https://emailjs.com).

## User Stories

   * I want to go onto a responsive page with minimal loading time.
   * I want to go onto a page and understand what sort of content is available.
   * I want an easy and accessable navigation menu.
   * I want to learn about the history of the canals
   * I want to know what paths are available and where I can find them.
   * I want to be able to select a path of my choice using the maps.
   * I want to learn more about a specific walk and what sort of attractions are on offer.
   * I want an easy and accessable way to get in contact and getting a reply.
   * I want the footer to give me other useful information including social media links.

## Wireframes
   I created some wireframes to get an understanding of how I wanted to present the website on view.
   This way I could improve it where necessary or find alternate ways to produce a better product.
   I created these wireframes using [Balsamiq](https://balsamiq.com/wireframes/desktop/#) to produce this goal.

  * I changed the website slightly from the Wireframes as I was originally going to have an attraction page with 
  a gallery of places. However I felt that would take away from the use of Google Maps which itself does an adequete job.

### Links to Wireframes

  * * I have uploaded my Wireframes up into the [**Wireframes Repository**](https://github.com/jakefernihough/BC-Canal-Walks/tree/master/assets/Wireframes) directory.
  * * I have uploaded a [PDF File](https://drive.google.com/drive/u/0/folders/15fq_xdrNJ8SMRiGU_8pCJIqZXVGoBLPV) of the wireframes.
  * * I have also uploaded the [PNG's](https://drive.google.com/drive/u/0/folders/1v74Ir81CJYTPK1tzcNGrlkI_tT3BHIM0).

# Features

## Existing Features

 **Navigation Bar** - I added the Black Country Flag to the navbar to show more about the location of the said canals.
The menu links are across on the right. Nothing major, not in your face. When operating a smaller screen, the menu transforms into a hamburger menu
for easier and responsive navigation. It is fixed on the top of the screen for easier navigation of the website.

**Index Page** - I wanted to create a simple design that would span over the other pages to keep it consistent and using high quality pictures.

**History** - I wanted to provide a brief yet insightful introduction to the history of the canals so that viewers would want to learn more about them.

**Choose Path** - Selecting the image of the path you want to learn more about.

**Maps** - Using the magic of JavaScript and Google Maps, I added map markers with InfoWindows to introduce the locations to the different paths available and a link to each of the pages
so that the viewers can learn more about the specific paths.

**Paths Pages** - Very similar in design, the only difference is using images specific to the walks itself and using the different map marker locations to attractions to find on that specific walk.
I also added more indepth history about the paths.

**Contact** - I wanted to make sure that I would be in touch with our viewers who would want to learn more. I created a usable email form using EmailJS that sends an auto-reply message back to the user requester.

**Footer** - links to social media, as well as various links to the other pages on the website.

## Future Features 

   * Eventually I would like to bring an _**Attractions Page**_, to show more landmarks that people should visit such as Pubs, Churches etc.
   * I would like to build an _**Event Page**_ to bring together everyone socially.

# Technologies used

**HTML5 / Hyper Markup Language** was used for the structure of this website. Further Information is found [here](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5).

**CSS3 / Cascading Style Sheets** was used to style the web pages. More information is located [here](https://www.w3.org/Style/CSS/Overview.en.html)

**Bootstrap 4** was used to create the layout structure of the site on all platforms (desktop, mobile, ipad). 
I also used bootstrap to create the NavBar, Newsletter and Contact Form. Found [here](https://getbootstrap.com/)

**JavaScript** was used to incorporate the Maps and the Map Markers on each of the pages, as well as the function for the Contact Form and EmailJS.
More information about JavaScript can be found [here](https://www.javascript.com/).

**Google Maps** was used to build the attractions markers for the webpage. To use this, you have to set up a [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview),
following the instructions.as well as using the [Google Cloud Platform](https://console.cloud.google.com/home/) to build up your map instructions.

**EmailJS** was used to build the emailing system in the contact form. More informationcan be found [here](https://www.emailjs.com/).

**Font Awesome** was used to find the Icons placed through the web page. Information found [here](https://fontawesome.com/6?next=%2F)

**Google Font** I mainly used 'Libre Baskerville' Font for most of the website. Information can be found [here](https://fonts.google.com/)

**Github** Apart of Microsoft, Github is the hosting software for website development. Follow this [link](https://github.com/)

**Gitpod** Used to create code and run within a browser. Access to site [here](https://gitpod.io/)

**Free Formatter** I used this to beautify my code. Follow this [link](https://www.freeformatter.com/html-formatter.html)

**Favicon** - Used to create the small square logo next to web-link. Follow this link [here](https://realfavicongenerator.net/)


# Testing

**W3C Validator** was used to validate all my code and outline any errors. Found [here](https://validator.w3.org/)

**Chrome Dev Tools** was used to test out my code and be able to make adjustments. 
This was a constant use of mine throughout my development. More information [here](https://developers.google.com/web/tools/chrome-devtools)

**JSHint** was used to test out my JavaScript. It can be found [here](https://jshint.com/)

## Test Scenarios

1. **Maps** - Found on Stourbridge/Dudley No.1/Dudley No.2 Pages.

_Updated_
Google mas is no longer shown on the index.html page, due to an error in the javascript that could not be fixed due to it needing the 
/index.html in the url. It now shows image cards in its place to direct the user to the paths they want to see.

When the page has loaded, it shall have the google maps showing with markers around the Dudley/ Stourbridge area. Selecting a _Map Marker_ will
open up an InfoWindow showing a title of the image with a brief description and an image.
Underneath the map is a link back to the main page map displaying the 3 paths available.
  * on the console, the maps say it has 2 errors, "js?key=AIzaSyDBxXtEZTGwmahB77PhCYY9r6dNZUPLBqo&callback=initMap:70 InvalidValueError: setCenter:
   not a LatLng or LatLngLiteral with finite coordinates: in property lat: not a number"
   and...
   "Uncaught (in promise) TypeError: Cannot read property '0' of undefined
    at initMap (pathMaps.js:261)
    at js?key=AIzaSyDBxXtEZTGwmahB77PhCYY9r6dNZUPLBqo&callback=initMap:143
    at js?key=AIzaSyDBxXtEZTGwmahB77PhCYY9r6dNZUPLBqo&callback=initMap:143"

    * I attempted to fix or see where the issue was coming from, to no success. However the map loads exactly
    how I wanted it to. As well as other testers. So I can't see it being a huge deal that would break the site.
    * After testing this error, managed to fix the problem in my pathMaps.js file. There was code that overlapped and confused 
    the console as it repeated itself, so I got rid of the unnecessary code, that in turn fixed the issue.
    * Another problem I ran into was because I had 4 maps in the site, all showing seperate markers. The index.html map had to
    be reloaded in order for the map to show. After reconsideration, I removed the index map as 1. Was not the best functionality 
    and was the main cause of errors in the console and 2. It did not look professional. So I exchanged it for image cards, showing
    the different paths to choose.

    * click the box on the top right of the map to open up a larger view that will make the images more readable to the user.

2. **Contact Form** - Click on the Contact Page either on the Header, or the Footer.

     * Try to submit the form with empty fields and you will get an error message that requests to fill out form,
      starting with the Name input.

     * Try to submit the form without a valid syntaxt email will request the user to input a valid email address.

     * If the user does not fill out the Message input, the form will request to fill it out before submitting request.

     * Once you have submitted with all fields filled out, the Console should read _Success_ if successful, or _Failure_ if there is an error.
     
     * You should receieve an alert box saying 'Message Recieved' if successful.

     * You should receieve an automated reply to the email used to send coming from the website email.

3. **NavBar** - Hover over the menu titles and they should highlight dependant on what menu you're hovering over.

    * Click on a page (e.g Stourbridge) and it shall open up that page.


# Deployment

  Created a **GitHub** account at [GitHub](https://github.com) locate my page [Here](https://github.com/jakefernihough)

I uploaded all my files to my **GitHub repository** under the name [BC-Canal-Walks](https://github.com/jakefernihough/BC-Canal-Walks/).

To publish the project, Open up the *settings*, scroll down to the section titled *GitHub Pages*.
 Under the *Source* setting, select **master branch**.

Refresh the page and a link to the **[live](https://jakefernihough.github.io/BC-Canal-Walks/)** website can be
found and viewed.

For more information about deploying, go to **[this page](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)**

  ## How to Run this page Locally

  To clone this project from GitHub:

On GitHub, navigate to the main page of the repository.

On the right-hand side, above the files, press the green button labelled 'Clone or Download'.
This button will give you options to  open in desktop or download as a zip file, or clone with HTTPS.

Copy the clone URL for the repository.

Open the Terminal.

Change the current working directory to the location where you want the cloned directory to be made.

Type git clone into the terminal and then paste the URL https://github.com/jakefernihough/BC-Canal-Walks.git

Press Enter. Your local clone will be created.

More information about git cloning can be found [here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

## Favicon Package

This package was generated with [RealFaviconGenerator](https://realfavicongenerator.net/) [v0.16](https://realfavicongenerator.net/change_log#v0.16)

### Install instructions

To install this package:

Extract this package in the root of your web site. If your site is <code>http://www.example.com</code>, you should be 
able to access a file named <code>http://www.example.com/favicon.ico</code>.

Insert the following code in the `head` section of your pages:

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <meta name="apple-mobile-web-app-title" content="Jessica Warby Photography">
    <meta name="application-name" content="Jessica Warby Photography">
    <meta name="msapplication-TileColor" content="#b91d47">
    <meta name="theme-color" content="#000000">

*Optional* - Check your favicon with the [favicon checker](https://realfavicongenerator.net/favicon_checker).

# Credits

## Content Used

* **NavBar** Navbar credited to https://bootsnipp.com/snippets/nNWr8 by vosidiy

* **Contact Form** was inspired and created at Contact Form created by Bootstrap 4.1.1 Snippet by kshiti06 / https://bootsnipp.com/snippets/7nmOW

* **Image Overlay** on the index.html was inspired by https://www.w3schools.com/howto/howto_css_image_overlay_slide.asp.

* **Image Cards** on the index.html was inspired by https://bootsnipp.com/snippets/M5gZB "Zoome Image On Mouse Over" by aungnainghtay

* **JavaScvript** The JavaScript used was heavily influenced through the [Code Institute](https://codeinstitute.net/) Full Stack Web Developer course, 
specifically the Interactive-Frontend Module. Many thanks for the information and learning provided tohelp me finish this project.

* **JSHint** - After a console error (stated above) caused problems with my JavaScript, I used JSHint to find where the problems occured,
amd after many attempts, finally fixed the issue that was JS code was being overlapped and repeated, causing confusion for the data being presented.

### Inspirations

* I took inspiration with how to provide the content from the site from the [Canal River Trust Website](https://canalrivertrust.org.uk/enjoy-the-waterways/canal-and-river-network/stourbridge-canal).

* I used the Header that I found on the website [Discovering Britain](https://www.discoveringbritain.org/activities/west-midlands/trails/bumble-hole.html).

## Media 

!! **I have provided 98% of all images. All are taken at their specific locations using my Huawei Phone**.

* Other images used were found on the [Canal River Trust Website](https://canalrivertrust.org.uk/enjoy-the-waterways/canal-and-river-network/).

Jake Fernihough © 2020. All rights reserved.

* 'Libre Baskerville' font was used throughout the page, thanks to [Google Fonts](https://fonts.google.com/.)
* [Font Awesome](https://fontawesome.com/) was used for the Social Icons found.

## Acknowledgements

* First of all, a big THANK YOU to [CodeInstitute](https://codeinstitute.net/) for teaching me everything I have learnt so far. I have come a long way because of their instructions and guidance.
Also a big thank you for helping me through the Interactive-Frontend Module that I used heavily on influencing this project.
* A thank you to the [Slack Community](https://app.slack.com/client/T0L30B202/threads), who helped me in my time of needs during this project.
* Shout out to [Lewis Church](https://www.linkedin.com/in/lewis-church-a29b077/), who was the man that got me into starting this course.
* A very big thank you to my friend Lydia, who helped accompany me on all of the canal walks, gave me an idea about how to present the web page and also checking for any faults in the code.
* A thank you to my Parents, who helped teach me a bit about the history of the canals.
* Lastly, but certainly not least, The person who has guided me through this journey and this creation.
 Helping me whenever the chance came and being an absolute star mentor, I can not thank 
 [Adegbenga Adeye](https://www.linkedin.com/in/adegbenga-adeye-14003635/) enough for what he has done to help me.

 ## Disclaimer

 Apart from the original images provided by myself, I do not own any images that I have used from other sites. 
 
 This website is for Educational Purposes Only.
