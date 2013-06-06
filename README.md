bootstrap-theme
===============

Template to create Liferay portals with a new theme developed using the amazing Twitter Bootstrap framework

About this project
==================

These instructions show you how to get started with bootstrap-theme source tree. Note that these instructions are for developers looking to customize and collaborate with bootstrap-theme itself.

This project contains:

* Bootstrap theme, which includes base CSS, Javascript and HTML for typography, forms, buttons, tables, grids, navigation, and more with responsive design based on latest version Bootstrap 2.3.2.

 - Theme _templates_ files customized to use the Bootstrap _Base CSS_ and _Components_.
 - Theme _layouttpl_ files that create the Bootstrap _Fluid grid system_
 - Theme _look-and-feel_ settings

If you like to try a release that has already been built, we recommend that you visit download page [](TODO) and read the _Try the Bootstrap theme_ section below.

Pre-requisites
==============

To start with bootstrap-theme you need:

* [Liferay Portal 6.1 CE GA2](http://www.liferay.com/es/downloads/liferay-portal/available-releases)
* [Private Plugin Installer CE](http://www.liferay.com/es/marketplace/-/mp/application/15474932) The Private Plugin Installer app allows developers and system administrators to hot deploy individual Liferay plugins using the Control Panel. 

To develop bootstrap-theme you need:

* [Liferay Plugins SDK 6.1 GA 2](http://www.liferay.com/es/downloads/liferay-portal/additional-files), command-line-driven development environment for portlets, themes and layout templates.

Developer setup instructions
============================

1. Download this project to _themes_ directory in your Liferay SDK
2. Customize as needed
3. Run _ant_ to deploy the theme

Try the Bootstrap theme
=======================

1. [Download the Bootstrap theme](https://github.com/DISID/bootstrap-liferay/bootstrap-theme-6.1.1.1.war)
2. Install Bootstrap theme (see section _Install Bootstrap theme_ below)
3. [Download the Bootstrap site template](https://github.com/DISID/bootstrap-liferay/bootstrap-site.lar)

   To test Bootstrap theme quickly, we have created a _Bootstrap site template_, which includes Liferay pages configured with demo web contents to build the Bootstrap site in Liferay: Home, Get started, Scaffolding, Base CSS, Components, JavaScript, Customize

4. Import Bootstrap site template (see section _Import Bootstrap site template_ below)
5. Use Bootstrap site template (see section _Use Bootstrap site template_ below)

Install Bootstrap theme
-----------------------

To install _bootstrap-theme-6.1.1.1.war_:

1. Go to `Control Panel >> Plugins Installation`, press tab `Plugin Private Installer`, then press tab `Upload File`.

   Note that you can also install it by copying to `/deploy` directory on your Tomcat server. 
  
2. Go to `Control Panel >> Site Templates` and press _Add_ button.

   Create the site template for your server, for example _Bootstrap Site_. It will appear in your _Control Panel_ once created.

Import Bootstrap site template
------------------------------

1. Go to `Control Panel >> Site Templates`. Locate the target site and press _Actions_ then _Import_ action to load _bootstrap-site.lar_

   We suggest you activate _Deleted missing pages_

2. Check the default web content have been imported successfully. To check it, go to `Control Panel >> Site Templates`, press _Actions_ button and go to `View Pages`
3. Configure the footer for site pages:

  * `Control Panel >> Site Templates` press _Actions_ button and go to `View Pages`
  * From dockbar select `Manage >> Site Content >> Web Content` and search _Footer__Bootstrap_ content, then copy its number ID.
  * From dockbar select `Manage >> Page`, select `Pages` and replace the value of field `footer-section-article-id` with the ID of your footer web content. 
  * The footer web content will be visible in all the pages of site template.

Use Bootstrap site template
---------------------------

1. Check the default web content have been imported successfully. To check it, go to `Control Panel >> Site Templates`, press _Actions_ button and go to `View Pages`
2. Go to `Control Panel >> Sites`, press _Add_ button and select the site template named "Bootstrap site"
3. Give a name for your new site and save it

Note your new site has been populated with web contents, documents and media, all copied from the _Bootstrap site template_.

Bug tracker
===========

Have a bug or a feature request? [Please open a new issue](https://github.com/DISID/bootstrap-theme/issues). Before opening any issue, please search for existing issues and read the [Issue Guidelines](https://github.com/necolas/issue-guidelines), written by [Nicolas Gallagher](https://github.com/necolas/).

Contributing
============

All contributions will be welcome, just create a pull-request and we will take it in account.

Thanks!

Thanks to
=========

[Twitter Bootstrap](http://twitter.github.io/bootstrap/) is a sleek, intuitive, and powerful front-end framework for faster and easier web development, created and maintained by [Mark Otto](http://twitter.com/mdo) and [Jacob Thornton](http://twitter.com/fat).

[Liferay Portal](http://www.liferay.com/) is an enterprise web platform for building business solutions that deliver immediate results and long-term value. 

License
=======

Copyright (C) 2013 [http://www.disid.com/en/](DISID TECHNOLOGIES S.L.)

This work is licensed under the terms of the GNU General Public License as published by the Free Software Foundation, version 3 of the License.

To view a copy of this license, visit http://www.gnu.org/copyleft/gpl.html

