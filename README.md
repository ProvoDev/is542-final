# UOLF Kiosk - React Rewrite
### IS 542 FInal Project  - Brandon Buchanan

This repository contains the Utah Olypmic Legacy Foundation kiosk software.  The software was previously written in February 2016. 
The goal of this project was to refractor the entire application from jquery and rewrite it using Facebook's React framework.  The application now runs as a single page application.

#### Requirements
* Node JS
* Surge.sh (node package)

#### User Experience

The application is designed to be used on a specific screen size and is therefore not responsive.
The reason for this is the touch screen for the displays at the museum is 1280 x 1024 in size. A lot of the css used is positioned absolutely because the size and resolution of the device is known before hand and is expected not to change.

The application displays photos and biographical information about famous cross country skiiers and allows museum patrons to view and interact with this information.
#### Hosting

The application is hosted at [Surge - bbuchanan.surge.sh](http://bbuchanan.surge.sh).  This site provides cli interface to deploy static websites for free.
