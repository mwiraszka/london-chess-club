# The London Chess Club (LCC) Web App

Welcome to the source code repository for the LCC web app! <https://londonchess.ca>

## Found a bug? Have a feature request?

Submit a new [issue](https://github.com/mwiraszka/london-chess-club/issues) on GitHub, or [email](mailto:michal@londonchess.ca?subject=LCC%20Website) me directly.
## Release notes

|     |                                   |
| --- | --------------------------------- |
| 🚀  | New features & improvements       |
| 🐛  | Bug fixes                         |
| 🔧  | Behind-the-scenes changes         |

<details>
<summary>v5.12.7 - March 6th, 2026</summary>

- 🚀 Improve article card styling
- 🚀 Always load up the 10 latest articles on the homepage and display them in a single, scrollable row instead of wrapping
- 🐛 Prevent potential localStorage quota exceeded errors by removing old state keys before setting the corresponding new ones

</details>

<details>
<summary>v5.12.6 - March 6th, 2026</summary>

- 🐛 Fix a couple article card layout issues

</details>

<details>
<summary>v5.12.5 - March 5th, 2026</summary>

- Article Grid
  - 🚀 Automatically parse out the top-5 finishers from the results tables (open section) of blitz tournament articles, and use that as the summary for the article
  - 🚀 Improve the layout and formatting of the summary section for all other types of articles
- 🔧 Upgrade Angular to v21.2.x and other packages to their latest versions
- 🔧 Security updates

</details>

<details>
<summary>v5.12.4 - March 1st, 2026</summary>

- 🚀 Update some wording on About and City Champion pages

</details>

<details>
<summary>v5.12.3 - February 28th, 2026</summary>

- 🚀 Improve contrast between event type colours
- 🐛 Fix race condition preventing items from being fetched when Members, News and Schedule pages are initially loaded

</details>

<details>
<summary>v5.12.2 - February 25th, 2026</summary>

- 🚀 Reduce height of schedule section on Home page when on mobile
- 🐛 Include event modification info in cache key in Events Calendar component to ensure ordering of same-day events is updated whenever any of the events change

</details>

<details>
<summary>v5.12.1 - February 25th, 2026</summary>

- 🚀 Increase contrast between rapid tournament and championship event colours
- 🐛 Ensure that initial batch of articles, events and members are loaded on their respective pages
- 🐛 Keep ordering of same-day events the same in Upcoming Event Banner, Events Calendar and Events Table components

</details>

<details>
<summary>v5.12.0 - February 25th, 2026</summary>

- Articles
    - 🚀 only make the first two table columns sticky for the Results and Ratings Report tables (i.e. allow other tables that begin with a '#' header to behave normally)
    - 🚀 extend the list of allowable characters in the article body
    - 🐛 ensure article banner re-fetch mechanism is not dependent on whether Home page or News page have already been loaded
- Events
    - 🚀 simplify the layout of events in the Events Table
    - 🚀 improve handling of multiple events that occur on the same day
- Upcoming Event Banner
    - 🚀 display multiple next events if they happen to fall on the same day and start time
    - 🚀 display a striped background using the colours from each event
- 🔧 Security updates
- 🔧 Various minor changes to data requests from the Home page to help prevent cache-related issues and reduce load time
</details>

<details>
<summary>v5.11.15 - February 18th, 2026</summary>

- 🔧 Update various third-party packages
- 🔧 Security updates

</details>

<details>
<summary>v5.11.14 - February 7th, 2026</summary>

- 🚀 Increase size of social link icons in footer
- 🚀 On the Game Archives page, automatically expand games from the first available year whenever the filter changes and the currently open year no longer has any games to show
- 🐛 Resolve some more version control and cache-related issues 

</details>

<details>
<summary>v5.11.13 - February 7th, 2026</summary>

- 🐛 Resolve an issue where Safari users would see a blank page due to cached state from the previous version

</details>

<details>
<summary>v5.11.12 - February 6th, 2026</summary>

- 🐛 On the Game Archives page, ensure PGNs for the currently open year automatically update whenever a filter is changed
- 🐛 Fix a bug where members with provisional and non-provisional ratings (but the same base rating) would sometimes not be sorted correctly in the Members Table
- 🔧 Security updates

</details>

<details>
<summary>v5.11.11 - February 3rd, 2026</summary>

- 🐛 Prevent image file source text from briefly appearing sometimes while image loads
- 🔧 Security updates

</details>

<details>
<summary>v5.11.10 - January 27th, 2026</summary>

- 🐛 Fix some issues with 'wide view' and keep the first two columns' widths constant for results tables, regardless of view setting
- 🔧 Security updates

</details>

<details>
<summary>v5.11.9 - January 26th, 2026</summary>

- 🚀 Add 'Wide view' toggle option under User Settings to extend content area of pages beyond default limit

</details>

<details>
<summary>v5.11.8 - January 25th, 2026</summary>

- 🚀 Add 'Desktop view' toggle option under User Settings, which simulates a 1200px-wide screen as if on desktop
- 🔧 Prevent potential memory leaks wherever screen resize observers are used

</details>

<details>
<summary>v5.11.7 - January 17th, 2026</summary>

- 🚀 Add PGNs for 2025 LCC Championship
- 🚀 Improve table layout in articles
- 🔧 Update all Angular packages and build tools from 21.0.x to 21.1.0
- 🔧 Replace deprecated Sass ternary `if()` expression with `@if/@else` blocks
- 🔧 Security updates

</details>

<details>
<summary>v5.11.6 - January 3rd, 2026</summary>

- 🐛 Fix some more issues with article images

</details>

<details>
<summary>v5.11.5 - January 1st, 2026</summary>

- 🐛 Fix a few more issues with embedded images in articles

</details>

<details>
<summary>v5.11.4 - January 1st, 2026</summary>

- 🚀 Improve article layout and add support for more characters and images in article body

</details>

<details>
<summary>v5.11.3 - December 31st, 2025</summary>

- 🚀 Improve handling of multiple embedded images in articles
- 🔧 Some more security updates

</details>

<details>
<summary>v5.11.2 - December 31st, 2025</summary>

- 🐛 Fix an image upload bug

</details>

<details>
<summary>v5.11.1 - December 29th, 2025</summary>

- 🚀 A few minor style and wording improvements

</details>

<details>
<summary>v5.11.0 - December 29th, 2025</summary>

- 🚀 Update City Champion page and Members table with new 2025 London Chess Champion
- 🚀 Revamp About and Regional Clubs pages
- 🐛 Fix a bug causing article banner images to remain blurred after the image has loaded
- 🔧 Upgrade Angular to v21.0.x and various other third-party packages to their latest versions
- 🔧 Create a simple `generate-uuid()` utility to replace `uuid` package
- 🔧 Fix the ordering of CSS property style rules for all components
- 🔧 Migrate remaining uses of `@import` to `@use` in Lichess PNG Viewer library stylesheets (marked as deprecated in Dart Sass)
- 🔧 Security updates

</details>

<details>
<summary>v5.10.9 - December 7th, 2025</summary>

- 🚀 Add PGNs for 2025 LCC Championship

</details>

<details>
<summary>v5.10.8 - November 27th, 2025</summary>

- 🚀 Create a dedicated Regional Clubs page, accessible from About page and footer; add Stratford club and some contact emails
- 🚀 Add support for fancy quotes and additional typographic characters in text fields (curly quotes: ' ' " ", guillemets: ‹ › « », bullet: •, ellipsis: …, section sign: §, copyright/trademark: © ® ™, degree symbol: °, prime symbols: ′ ″)
- 🐛 Close any open dialogs on navigation

</details>

<details>
<summary>v5.10.7 - November 22nd, 2025</summary>

- 🐛 Clear any orphaned loading call states upon rehydration

</details>

<details>
<summary>v5.10.6 - November 22nd, 2025</summary>

- 🔧 Add a 5-second timeout to all auth requests
- 🔧 Add missing changelog entry

</details>

<details>
<summary>v5.10.5 - November 21st, 2025</summary>

- 🔧 Update GitHub URL
- 🔧 Reorganize this README file

</details>

<details>
<summary>v5.10.4 - November 21st, 2025</summary>

- 🐛 Add backslash to list of accepted characters in form fields and add a proper validation error tooltip message for id validator

</details>

<details>
<summary>v5.10.3 - November 21st, 2025</summary>

- 🐛 Apply correct styling rules to disabled buttons in forms
- 🐛 Add en-dash to list of accepted characters in form fields

</details>

<details>
<summary>v5.10.2 - November 19th, 2025</summary>

- 🐛 Force a reset of stale data for any local storage keys from v5.9.x or older

</details>

<details>
<summary>v5.10.1 - November 19th, 2025</summary>

- 🐛 Bust image cache with each new app version release and remove some potential race conditions when determining what image data to fetch and when
- 🐛 Ensure new special embedded image syntax is hidden from article previews

</details>

<details>
<summary>v5.10.0 - November 18th, 2025</summary>

- 🚀 Allow for up to 3 images inside the article body, with support for custom sizing and caption text under each image
- 🚀 Transform the next event banner at the top of the screen into a looping marquee banner if there isn't enough room to display all the text
- 🚀 Add a button in the user settings menu to immediately fetch any new website data (by default fetched automatically every 30 mins). Also implement a basic pull-to-refresh mechanism on mobile to do the same thing.
- 🚀 Add support for GIFs
- 🚀 Spruce up photo grid, article grid and game archives with some fade-in animations
- 🚀 If the presigned URL for the full-size version of an image is expired, temporarily fall back to the thumbnail if available and valid
- 🚀 Add support for various international alphabets and unicode symbols for most string-based text fields such as member's first & last name, album title, and image caption
- 🐛 Ensure an image added to a brand new album automatically becomes that album's cover for the photo grid mosaic
- 🔧 Update web manifest configuration to ensure internal links always open up in the browser UI by default
- 🔧 Security updates

</details>

<details>
<summary style="cursor: pointer">
v0.8.0-alpha - v5.9.17
</summary>

<details>
<summary>v5.9.17 - November 17th, 2025</summary>

- 🐛 Ensure album form can simultaneously handle addition of new images and update of existing ones
- 🔧 Remove state refreshes and reinstate image state continuity (resets no longer necessary) whenever a new app version is released
- 🔧 Move all timeout handling to the backend to avoid race conditions, and improve timeout flow for large requests

</details>

<details>
<summary>v5.9.16 - November 15th, 2025</summary>

- 🚀 Minor style tweaks and improvements in a few places
- 🐛 Improve handling of expired presigned URLs to prevent certain thumbnail images from not rendering
- 🔧 Add tests for all selectors and effects... and with that, 100% comprehensive unit test coverage across the entire LCC web app! 🎉

</details>

<details>
<summary>v5.9.15 - November 11th, 2025</summary>

- 🚀 Add Baden Chess Club to list of regional/satellite clubs on homepage and improve layout of club cards

</details>

<details>
<summary>v5.9.14 - November 7th, 2025</summary>

- 🚀 Preserve users' app preferences (e.g. light/dark mode, filter & pagination settings) whenever a new version of the web app is released
- 🔧 Add tests for all reducers, selectors and directives
- 🔧 Security updates

</details>

<details>
<summary>v5.9.13 - November 4th, 2025</summary>

- 🚀 Improve how event information is displayed and handled in Event Calendar Grid with new Event Info Dialog component
- 🚀 Preserve light/dark mode and other app preferences when a new version of the web app is deployed
- 🔧 Improve how certain race conditions are handled when admin sessions are near or past expiry
- 🔧 Add tests for meta-reducers

</details>

<details>
<summary>v5.9.12 - November 3rd, 2025</summary>

- 🚀 Add support for commas in uploaded CSVs wherever values are wrapped in double-quotes (RFC 4180 standard)
- 🐛 Fix a few bugs related to new user activity / auto-logout flow, and extend admin user inactivity limit to 3 hours
- 🔧 Extend test coverage to include all HTTP interceptors and the remainder of frontend services

</details>

<details>
<summary>v5.9.11 - November 2nd, 2025</summary>

- 🚀 Add PGNs for 2025 LCC Championship

</details>

<details>
<summary>v5.9.10 - November 1st, 2025</summary>

- 🚀 Add Glencoe Chess Club to list of regional/satellite clubs on homepage
- 🚀 Several improvements to admin session management and auto-logout flow
- 🚀 Create a new reusable Session Expiry Dialog component and Duration pipe for converting raw millisecond values to MM:SS format

</details>

<details>
<summary>v5.9.9 - October 17th, 2025</summary>

- 🚀 Add PGNs for 2025 LCC Championship

</details>

<details>
<summary>v5.9.8 - October 17th, 2025</summary>

- 🚀 Initially display first moves of games in PGN Viewer widget
- 🐛 Fix some bugs related to how the dialog behaves when switching between documents on the Documents page

</details>

<details>
<summary>v5.9.7 - October 11th, 2025</summary>

- 🚀 Add PGNs for 2025 LCC Championship

</details>

<details>
<summary>v5.9.6 - October 5th, 2025</summary>

- 🚀 Add PGNs for 2025 LCC Championship

</details>

<details>
<summary>v5.9.5 - September 26th, 2025</summary>

- 🚀 Add PGNs for 2025 LCC Championship

</details>

<details>
<summary>v5.9.4 - September 19th, 2025</summary>

- 🚀 Add PGNs for 2025 LCC Championship
- 🚀 Minor style adjustments to tooltip fade-in effect, nav bar icons on hover, event indicators in Schedule page calendars, and icons next to Lichess analysis board links
- 🐛 Fix a few bugs related to the shape of the form data being sent to and expected from the backend
- 🐛 Fix a few bugs related to form change detection and unsaved change checks resulting in validation icons sometimes not appearing or the form displaying the incorrect change status
- 🔧 Add unit tests for API, Meta & Title, and Toast services

</details>

<details>
<summary>v5.9.3 - September 18th, 2025</summary>

- 🐛 Ensure dialog and admin control overlays render above sticky app header
- 🔧 Add additional periodic checks to fetch any failed article banner images
- 🔧 Move more fetches to the background and remove no longer needed URL Expiration Service

</details>

<details>
<summary>v5.9.2 - September 14th, 2025</summary>

- 🚀 Update Junior Championship table to include 2025 winner
- 🐛 A few minor adjustments to text on City Champion page and app footer
- 🐛 Ensure form data is preserved during background data fetches
- 🔧 Temporarily increase polling times while migrating over to a proper PWA/ cache management setup
- 🔧 Add unit tests for Auth and Unsaved Changes guards

</details>

<details>
<summary>v5.9.1 - September 8th, 2025</summary>

- 🚀 Widen tooltips in Calendar Events Grid and navigate to the associated article (if there is one) when clicked
- 🐛 Prevent blank tooltips from sometimes appearing on Champion Page

</details>

<details>
<summary>v5.9.0 - September 7th, 2025</summary>

- 🚀 A new and improved City Champion page:
    - a new Photo Carousel component that auto-cycles through championship photos, with the ability to cycle through manually by keyboard or by clicking on the dots
    - initially display only 10 rows in each past champions table, with the ability to see the remainder of rows by clicking on the ellipses in the table footers
    - some subtle animations and minor layout tweaks
- 🚀 Revamp Schedule page:
    - integrate pagination, filtering and search highlighting (as on News and Members pages)
    - redesign Events Table component with new circular date widgets (to take up far less space on mobile)
    - integrate a new Schedule Toolbar below pagination/filtering which offers the ability to
      1. view events in either 'list view' or 'calendar view',
      2. scroll down to the today if visible on the current page,
      3. export events in iCalendar format, which can then be imported into Google Calendar, Apple Calendar or Microsoft Outlook
    - add the ability for admins to export all events in a .CSV file (as recently made available for Members)
- 🐛 Fix issue preventing Album Editor from loading for certain albums
- 🔧 Upgrade Angular to `v20.2.3`, `@ngrx` packages to `v20.0.1`, and update a handful of third-party packages to their latest versions
- 🔧 Add support for context-aware templates in tooltips and implement in Events Calendar Grid for each event indicator

</details>

<details>
<summary>v5.8.5 - September 2nd, 2025</summary>

- 🚀 Configure 'on-push' change detection strategy on all page components to limit screen checks to only when inputs change, resulting in a slightly more performant web app
- 🐛 Fix issue where all album covers would sometimes not fetch on initial load
- 🔧 Extend unit test coverage to all page components

</details>

<details>
<summary>v5.8.4 - August 31st, 2025</summary>

- 🚀 Minor touch-ups to cards in Article Grid and Image Explorer
- 🚀 Fetch image metadata, article banner thumbnails and album cover thumbnails in the background to keep app responsive and avoid displaying unnecessary loading spinner while they load
- 🐛 Clean up fragment URL from browser address bar whenever Document Viewer dialog on Documents page is closed
- 🔧 Minor improvements to how Dialog Service handles different close events
- 🔧 Clean up navigation and route redirect handling effects
- 🔧 Reorganize type-guard utility functions and add specs for `actionSanitizer`, `isEntity` and `isGameScore` functions

</details>

<details>
<summary>v5.8.3 - August 29th, 2025</summary>

- 🚀 Fix article preview banner image section to 3:2 aspect ratio on larger screen sizes
- 🚀 Fetch only the missing article banner images to help reduce Home Page and News Page load times
- 🐛 Pre-load club logo image in app header to prevent layout shift as page context loads
- 🐛 Ensure article bookmark icons appear after initial page load
- 🐛 Ensure articles' table of contents headings render as expected
- 🔧 Move store dependencies out from low-level components for better separation of concerns and reusability
- 🔧 Perform periodic checks in the background (every 1 minute) and automatically refetch any data that is at least 10 minutes old; include redundant checks for article banner images in case articles loaded but the subsequent images fetch got interrupted and failed to complete

</details>

<details>
<summary>v5.8.2 - August 25th, 2025</summary>

- 🚀 Set the change detection strategy on all reusable components to `OnPush` for a notable performance boost across the entire app
- 🔧 Clean up Date Picker and Admin Controls components and make them more resilient to potential change detection issues
- 🔧 Silence expected console errors and warnings when running test suites

</details>

<details>
<summary>v5.8.1 - August 25th, 2025</summary>

- 🚀 Increase input text font size to prevent native zoom-on-focus behaviour on iPhones 
- 🐛 Ensure article banner images always load on initial page load
- 🔧 Minor adjustments to call state updates and request timeouts

</details>

<details>
<summary>v5.8.0 - August 24th, 2025</summary>

- 🚀 Add support for bulk member rating updates through CSV import
- 🚀 Add a button on the home page that links to our tournament registration Google Docs form
- 🚀 Some minor improvements to chess openings lookup and responsiveness on Game Archives page
- 🚀 A new page loader animation!
- 🚀 Add image request tracking mechanism and failsafes to help prevent orphaned loading states/ missing banner images during network outages, etc.
- 🐛 List the full-size images' file size, width and height in Image Explorer and ensure Admin Controls automatically hide on scroll
- 🐛 Prevent default scrolling behaviour on content behind Image Viewer overlay when using arrow keys, and a few other minor fixes to image navigation
- 🔧 Refactor Loader Service as a call state for each store slice to allow for more accurate handling of individual and combined call states
- 🔧 Store full-size and thumbnail images' width, height and file size values as part of metadata to allow for quicker lookups, allowing for aspect ratios to be calculated sooner, reducing layout shifts while the page loads

</details>

<details>
<summary>v5.7.0 - August 21st, 2025</summary>

- 🚀 Add ability for admins to export entire members database to a CSV file to allow for easier integration with SwissSys software
- 🚀 Integrate Data Toolbar with the News page for quicker navigation through articles, and the ability to search by article author, title or any text within its body
- 🚀 Integrate Data Toolbar with the Image Explorer for quicker navigation through photo collections, and the ability to search by image filename, caption or album 
- 🚀 Highlight all occurrences of the search query
- 🚀 Improve pagination summary text at bottom of the Data Toolbar component and include an 'ALL' page size option to view all items on a single page
- 🚀 Create a reusable Admin Toolbar component for the admin links and buttons displayed above various sections; add new admin icon or colour in admin-only access areas
- 🐛 Fix a couple loading and layout issues with Photo Grid
- 🔧 Replace all of Angular's `SimpleChanges` with custom `NgChanges<Component>` variant, fully-typed to the component
- 🔧 Remove redundant type-import markings on model imports as they are all already exported as types
- 🔧 Add specs for all remaining reusable components

</details>

<details>
<summary>v5.6.2 - August 13th, 2025</summary>

- 🐛 Ensure article headings are sized appropriately, and a few other minor typography adjustments

</details>

<details>
<summary>v5.6.1 - August 13th, 2025</summary>

- 🚀 Reduce number of photo albums displayed on the homepage now that that section takes up less space
- 🐛 Fix typo in filter counter section of new Data Toolbar component

</details>

<details>
<summary>v5.6.0 - August 13th, 2025</summary>

- 🚀 Create a reusable Data Toolbar component for pagination, filtering, and search controls on any given collection, and integrate with the Members Table
- 🚀 Minor style and layout tweaks to Article Grid, Photo Grid, and all tables
- 🔧 Improve SEO by adding a sitemap.xml file, as well as defining structured data and OG metatags in index.html
- 🔧 Change web application license from MIT to GPL-3.0, ensuring the project remains free and open-source, removing the risk of anyone making it proprietary/closed-source in the future and changing the license to something more restrictive
- 🔧 Remove no longer needed `-webkit-` and `-moz-` vendor prefixes, and use PostCSS Autoprefixer package instead

</details>

<details>
<summary>v5.5.5 - July 17th, 2025</summary>

- 🚀 Add players' ratings to past winners' table on City Champion page
- 🚀 Add past winner tables for active, speed and junior championships
- 🚀 Remove remaining links to the old website and Google Drive now that all data has been copied over

</details>

<details>
<summary>v5.5.4 - July 17th, 2025</summary>

- 🚀 Create a Cache Control HTTP request interceptor to have more granular control of how browsers cache stale image data
- 🐛 Reduce cache window from 30 mins to 10 mins, and ensure expired presigned URLs are fetched when within the window

</details>

<details>
<summary>v5.5.3 - July 16th, 2025</summary>

- 🚀 Increase image file size limit to 2.5 MB and ensure only up to 20 images can be uploaded at a time
- 🚀 Create new album ordinality property on images for a more explicit way of ordering images in an album

</details>

<details>
<summary>v5.5.2 - July 13th, 2025</summary>

- 🚀 Create new KeyState service, and a few new device utility functions; use them to display delete button in Admin Controls only when ctrl/cmd is pressed
- 🔧 Further increase cache duration for infrequently updated resources
- 🐛 Fix broken link in footer

</details>

<details>
<summary>v5.5.1 - July 12th, 2025</summary>

- 🔧 Increase cache duration for infrequently updated resources

</details>

<details>
<summary>v5.5.0 - July 12th, 2025</summary>

- 🚀 Support uploading, editing, and deleting multiple images at a time
- 🚀 Several improvements to resource fetching and caching for quicker page loads and fewer API requests
- 🚀 Build out website footer to include the club logo, social media links, and a proper site map
- 🚀 Some minor adjustments to the website colour palette and removal of repeating gradients for improved rendering of app header, table headers and article grid cards
- 🚀 Display tooltip or admin controls menu on touch devices whenever a long-press touch event is detected
- 🚀 Create Safe Mode Notice component to be displayed wherever users' personal information is hidden from view
- 🚀 Make wording in dialogs/modals more consistent throughout the app
- 🚀 Add a restore button in all forms that conveniently reverts form to its initial state without having to navigate away from the page
- 🐛 Various minor layout fixes in Navigation Bar and Form Error Icon components
- 🐛 Ensure member/event/article form data is properly reset when unsaved changes are cancelled
- 🐛 Prevent multiple of the same dialogs from stacking and ensure Document Viewer dialog automatically closes when the page is exited
- 🔧 Create new Image File service for processing image file data and performing CRUD operations with browser's built-in indexed DB
- 🔧 Extend test coverage to all form components

</details>

<details>
<summary>v5.4.4 - June 27th, 2025</summary>

- 🚀 Improve Navigation Bar icon styling
- 🐛 Ensure article banner image is loaded when navigating through 'More details' link on Schedule page
- 🔧 Increase test coverage on various reuseable components

</details>

<details>
<summary>v5.4.3 - June 22nd, 2025</summary>

- 🚀 Add this year's Lifetime Achievement Award recipients and remove incomplete sections from Lifetime and Champion pages
- 🐛 Ensure Markdown Renderer delays rendering of article until app-specific styles have been applied
- 🐛 Ensure image is only fetched when needed while on Article Viewer page
- 🐛 Fix a couple minor styling inconsistencies in the Article Form component

</details>

<details>
<summary>v5.4.2 - June 22nd, 2025</summary>

- 🐛 Prevent unnecessary image fetches

</details>

<details>
<summary>v5.4.1 - June 21st, 2025</summary>

- 🚀 When logged in as an admin, display headers in Members Table in the old order to allow for easier comparing & syncing
- 🐛 Refresh expiring images in batches to reduce load time

</details>

<details>
<summary>v5.4.0 - June 19th, 2025</summary>

- 🚀 Migrate from Feather icons to Material icons across the entire application
- 🚀 Implement dynamic sizing for admin control buttons based on `config.buttonSize` property
- 🚀 Apply icon-size mixin for consistent icon scaling and vertical alignment
- 🚀 Scale caption text in Image Viewer based on screen size
- 🚀 Combine first name and last name columns in Members Table
- 🐛 Fix icon sizing and positioning in various UI components
- 🐛 Automatically refresh presigned URLs for all images prior to their expiry to prevent broken image links
- 🔧 Upgrade all third-party packages to their latest versions
- 🔧 Increase test coverage on various reuseable components

</details>

<details>
<summary>v5.3.3 - June 14th, 2025</summary>

- 🐛 Ensure correct images are fetched during prefetching stage in Image Viewer
- 🔧 Enable source maps in preview and production environments

</details>

<details>
<summary>v5.3.2 - June 14th, 2025</summary>

- 🚀 Implement a prefetching strategy in Image Viewer for quicker image loading, and prevent unnecessary fetches where possible
- 🚀 A few minor aesthetic touch-ups in Image Viewer
- 🐛 Only update caption in the Image Viewer once the previous/next image has fully loaded
- 🐛 Ensure Champion page uses correct icon
- 🔧 Further increase test coverage for image-related components

</details>

<details>
<summary>v5.3.1 - June 10th, 2025</summary>

- 🐛 Minor improvements to Navigation Bar and Members Table
- 🔧 Simplify and future-proof local storage clean up logic
- 🔧 Increase test coverage for image-related components

</details>

<details>
<summary>v5.3.0 - June 5th, 2025</summary>

- 🚀 Various minor improvements and optimizations to images and the Image Viewer component
- 🚀 Display a shield icon next to the city champion in the Members Table
- 🚀 Add ability to copy article text with all the stylings intact
- 🔧 Upgrade to Angular v20 and update any dependencies with security vulnerabilities
- 🔧 Simplify notification flow and display toasts on a separate overlay layer for a cleaner architecture and better flexibility
</details>

<details>
<summary>v5.2.1 - v5.2.12 (May 31st, 2025 - June 1st, 2025)</summary>

- 🚀 Sort album images in Image Viewer component based on caption text
- 🐛 Various minor bug fixes
- 🔧 Test various local storage & CloudFront cache configurations, requiring repeated deployments and version bumps
- 🔧 Implement versioning on local storage keys to prevent the possibility of old state objects from being used
- 🔧 Remove unnecessary Angular Service Worker to prevent any undesired caching of stale data

</details>

<details>
<summary>v5.2.0 - May 31st, 2025</summary>

- 🚀 Allow multiple articles, events, members, and images to be viewed & edited simultaneously in multiple tabs
- 🚀 Add the ability for admins to edit image captions and album titles, as well as to delete photos directly from the Photo Viewer
- 🚀 Create new Lifetime Achievement Awards page to list all past recipients of the award
- 🚀 Support markdown blockquotes in articles
- 🚀 Choose more appropriate icons for some pages
- 🚀 Append `| LCC` to the end of browser tab page titles for all pages except the homepage
- 🚀 Improve handling of navigation to admin-only routes when not logged in
- 🔧 Various minor stability and performance improvements

</details>

<details>
<summary>v5.1.4 - April 25th, 2025</summary>

- 🔧 Reduce loading spinner limit to 2 seconds
- 🔧 Update some Angular packages

</details>

<details>
<summary>v5.1.3 - April 17th, 2025</summary>

- 🚀 Limit loading spinner to 5 seconds to keep application interactive in the event an API request hangs

</details>

<details>
<summary>v5.1.2 - March 25th, 2025</summary>

- 🚀 Update link to FIDE handbook

</details>

<details>
<summary>v5.1.1 - March 25th, 2025</summary>

- 🚀 Remove 'Active Tournament' and 'Rapid Tournament' event categories with 'Rapid Tournament (25 mins)' and 'Rapid Tournament (40 mins)'; add time control to 'Blitz Tournament' event category for consistency
- 🐛 Fix disabled button colour

</details>

<details>
<summary>v5.1.0 - March 22nd, 2025</summary>

- 🚀 Reorganize club information by incorporating a couple new sections on the About page, and adding raised cards with links on the Home page
- 🚀 Redesign Photo Grid and add support for albums
- 🚀 Improve table layout in About screen leadership section; list new assistant tournament director position under Coordinators
- 🚀 Add new [Code of Conduct](https://londonchess.ca/documents#lcc-code-of-conduct.pdf) document and redact personal information from board meeting documents
- 🚀 Add support for linking to any particular document on Documents page with # URL fragment (e.g. [londonchess.ca/documents#lcc-bylaws.pdf](https://londonchess.ca/documents#lcc-bylaws.pdf))
- 🚀 Add tooltip to document download icons and prevent default browser document reader from opening when clicked
- 🚀 Add a couple new photos from 2025 Rook's Revenge tournament
- 🚀 Increase size of link text and display underline animation when hovering over links
- 🚀 Increase allowable image upload file size to 4MB
- 🚀 Decrease load times by reducing the size of some excessively large static assets downloaded on initial load 
- 🚀 Replace full-width expansion panels on Games Archives page with buttons to make better use of the space
- 🔧 Upgrade to Angular v19.2.2
- 🔧 Upgrade third-party dependencies
- 🔧 Replace 'screen' with 'page' throughout codebase for more consistent naming

</details>

<details>
<summary>v5.0.6 - February 18th, 2025</summary>

- 🔧 Upgrade to Angular v19.1.7
- 🔧 Upgrade third-party dependencies and remove unused ones
- 🔧 Security upgrades

</details>

<details>
<summary>v5.0.5 - February 18th, 2025</summary>

- 🔧 Split Nav component into separate Navigation Bar and User Settings Menu components, and all dropdown-related logic into a dedicated Dropdown directive

</details>

<details>
<summary>v5.0.4 - February 12th, 2025</summary>

- 🔧 Integrate Plausible for outbound links, file downloads, hashed page paths and login button click events

</details>

<details>
<summary>v5.0.3 - February 11th, 2025</summary>

- 🔧 Fix README icons & begin prep work for new Photo Gallery 

</details>

<details>
<summary>v5.0.2 - February 9th, 2025</summary>

- 🚀 Add support for ordered lists and width settings on article images in markdown editor

</details>

<details>
<summary>v5.0.1 - February 6th, 2025</summary>

- 🐛 Minor bug fixes related to Members table sorting, app layout on mobile, and some funny business with icons in this README file

</details>

<details>
<summary>v5.0.0 - February 5th, 2025</summary>

- 🚀 Implement a 'sticky' app header to keep app banners and navigation buttons visible when scrolling down a page
- 🚀 Adjust layout and colour scheme in various places throughout app to remove any inconsistencies and generally improve the user experience (UX) 
- 🚀 Create a custom Date Picker component and implement in Event and Member Form component for date-related inputs
- 🚀 Redesign admin controls and make them accessible via a custom context menu (right-click); add a new bookmark control for a simpler way of adding and removing article bookmarks
- 🚀 Redesign article 'table of contents' section and have it auto-generate anchor links based on subheadings found in the article markdown data
- 🚀 Create a new Image Explorer component to allow admin users to reuse existing articles images and to delete any unused ones from the database
- 🚀 Create a new reusable Overlay service, with built-in mouse & key event listeners
- 🚀 Create a new reusable Dialog component, with a built-in header and further mouse & key event listeners
- 🚀 Redesign tooltips and dialogs, and support layered dialogs for contexts where a confirmation dialog needs to be displayed over another dialog
- 🐛 Prevent page reloads and smoothen scrolling behaviour when accessing anchor links (e.g. the `details` part of an article via `londonchess.ca/article123#details`)
- 🐛 Prevent various bugs that occurred occassionally when working with article banner images
- 🐛 Ensure clicking on admin controls and dialogs does not interact with any components below the overlay
- 🔧 Upgrade to Angular v19
- 🔧 Adapt Schedule, Members and Articles services for the new backend architecture
- 🔧 Move entire authentication flow to the new backend
- 🔧 Convert all frontend date types to either ISO 8601 date strings (standard dates in the format `YYYY-MM-DDTHH:MM:SS`) or `Moment` types in date-heavy contexts where lots of calculations may be needed
- 🔧 Consolidate all components, directives and pipes into more streamlined standalone components
- 🔧 Create custom `range` pipe for easier iteration over consecutive integers in templates
- 🔧 Clean up redundant code in Nav component
- 🔧 Improve error handling and provide more comprehensive error messages to notification toasts for easier debugging when needed
- 🔧 Rename 'Schedule' and 'Club Event' features and components to 'Event' wherever appropriate
- 🔧 Migrate deprecated `@import` rule to `@use`/`@forward` in prepararation for future release of Dart Sass 3.0.0, where `@import` will no longer be available
- 🔧 Migrate deprecated global built-in functions to use explicit `sass:` prefix
- 🔧 Migrate from Jasmine to Jest, and add unit tests for various components, pipes, validators, and utility functions
- 🔧 Update path aliases and remove redundant `.eslintrc` file
- 🔧 Improve efficiency of custom sorting algorithm (used for sorting members, club events and articles), add support for sorting by an additional secondary key, and handle certain edge cases more appropriately

</details>

<details>
<summary>v4.1.12 - January 24th, 2025</summary>

- 🚀 Update About page with new membership fees for 2025–2028
- 🚀 Add 'Incremental Plan to Break Even' PDF to Documents

</details>

<details>
<summary style="cursor: pointer">
v4.1.11 - January 4th, 2025
</summary>

- 🚀 Update About page with 2025 executive committee, directors and coordinators
- 🚀 Update City Champion page with result from 2025 Championship 

</details>

<details>
<summary style="cursor: pointer">
v4.1.10 - January 3rd, 2025
</summary>

- 🚀 Add PGNs for LCC Championship Playoffs

</details>

<details>
<summary style="cursor: pointer">
v4.1.9 - November 30th, 2024
</summary>

- 🚀 Re-sort 2024 PGNs

</details>

<details>
<summary style="cursor: pointer">
v4.1.8 - November 30th, 2024
</summary>

- 🚀 Add PGNs for LCC Championship

</details>

<details>
<summary style="cursor: pointer">
v4.1.7 - November 19th, 2024
</summary>

- 🚀 Generate favicons and icons for a wider range of devices and themes
- 🚀 Improve safe mode notice text styling
- 🚀 Improve disabled button styling
- 🐛 Reverse logic of safe mode toggle switch in Member Editor form
- 🐛 Fix bug where a valid member ID in the URL was sometimes interpreted as invalid
- 🐛 Fix bug where sometimes previous event or member would be loaded up when editing

</details>

<details>
<summary style="cursor: pointer">
v4.1.6 - November 18th, 2024
</summary>

- 🔧 Upgrade Angular to `v18.2.12` and update all third-party packages & dev dependencies

</details>

<details>
<summary style="cursor: pointer">
v4.1.5 - November 17th, 2024
</summary>

- 🚀 Add ability to show/hide sensitive information when logged in as admin wherever personal details may be displayed
- 🚀 Improve how image placeholders are handled and prevent layout shifts from occurring during article loading process
- 🚀 Only display edit date on articles which were edited on a different date than the creation date
- 🐛 Always attempt to fetch the latest article, member or club event whenever the page is refreshed
- 🐛 Ensure single quotes appear as expected in article previews on Home and News pages
- 🔧 Simplify a lot of the logic around fetching and updating articles, members and club events

</details>

<details>
<summary style="cursor: pointer">
v4.1.4 - November 2nd, 2024
</summary>

- 🐛 Fix issue in Member Editor preventing new members from being added
- 🔧 Upgrade to Angular v18.1.0 and update some third-party packages

</details>

<details>
<summary style="cursor: pointer">
v4.1.3 - October 31st, 2024
</summary>

- 🚀 Improve links at the bottom of article pages and a few more minor improvements to Article Editor

</details>

<details>
<summary style="cursor: pointer">
v4.1.2 - October 31st, 2024
</summary>

- 🚀 Improve background/text contrast on disabled buttons
- 🚀 Add support for multi-line event descriptions
- 🚀 Various minor improvements to the Article Editor
- 🔧 Improve some naming conventions used throughout codebase

</details>

<details>
<summary style="cursor: pointer">
v4.1.1 - October 28th, 2024
</summary>

- 🚀 Add PGNs for round 7 of LCC Championship

</details>

<details>
<summary style="cursor: pointer">
v4.1.0 - October 23rd, 2024
</summary>

- 🚀 Add a 'Analyze in Lichess' button for games in the Game Archives page which redirects you to Lichess' analysis board with the full PGN loaded
- 🚀 Add 'Analyze this position' text to existing 'Analysis Board' button to help avoid confusion
- 🚀 Display opening and result stats for filtered games
- 🚀 Add support for null paths and tooltips to be passed in to Link component
- 🐛 Prevent left-right arrow keys from controlling scrollbar in the expansion panel when a game is focused since they already control previous/next move in the Lichess PGN Viewer
- 🐛 Add a newline character after the game termination marker, followed by an intentional blank line, to all PGNs in the Game Archives
- 🐛 Ensure embedded images in articles are responsive and are always displayed at max-width 

</details>

<details>
<summary style="cursor: pointer">
v4.0.19 - October 18th, 2024
</summary>

- 🚀 Add PGNs for round 6 of LCC Championship

</details>

<details>
<summary style="cursor: pointer">
v4.0.18 - October 14th, 2024
</summary>

- 🚀 Add PGNs for round 5 of LCC Championship

</details>

<details>
<summary style="cursor: pointer">
v4.0.17 - October 6th, 2024
</summary>

- 🐛 Fix formatting of all PGNs in the Game Archives

</details>

<details>
<summary style="cursor: pointer">
v4.0.16 - October 5th, 2024
</summary>

- 🚀 Add PGNs for round 4 of LCC Championship

</details>

<details>
<summary style="cursor: pointer">
v4.0.15 - October 4th, 2024
</summary>

- 🔧 Configure separate API endpoint for dev & prod environments 

</details>

<details>
<summary style="cursor: pointer">
v4.0.14 - September 28th, 2024
</summary>

- 🐛 Add PGNs for round 3 of LCC Championship (Sections C, D and E)

</details>

<details>
<summary style="cursor: pointer">
v4.0.13 - September 27th, 2024
</summary>

- 🐛 Add PGNs for round 3 of LCC Championship (Sections A and B)
- 🐛 Reduce padding around Lichess PGN Viewer menu options

</details>

<details>
<summary style="cursor: pointer">
v4.0.12 - September 22nd, 2024
</summary>

- 🐛 Update some game PGNs and add remainder of games from second round of LCC Championship
- 🐛 Sort 2024's PGNs by tournament round number

</details>

<details>
<summary style="cursor: pointer">
v4.0.11 - September 20th, 2024
</summary>

- 🐛 Update game PGNs from first round and add some PGNs from second round of LCC Championship

</details>

<details>
<summary style="cursor: pointer">
v4.0.10 - September 13th, 2024
</summary>

- 🐛 Add game PGNs from first round of LCC Championship

</details>

<details>
<summary style="cursor: pointer">
v4.0.9 - September 1st, 2024
</summary>

- 🐛 Ensure article content persists on page reload when composing or editing an article
- 🔧 Clean up some code related to the Loader Service
- 🔧 Update how external and mailto links are configured to better follow [HTML standard](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element)

</details>

<details>
<summary style="cursor: pointer">
v4.0.8 - August 9th, 2024
</summary>

- 🚀 Update About page

</details>

<details>
<summary style="cursor: pointer">
v4.0.7 - August 5th, 2024
</summary>

- 🚀 Improve admin user authentication error handling and how toast notifications are displayed when the error message is long
- 🐛 Fix bug where Article and Members pages would sometimes hang while loading

</details>

<details>
<summary style="cursor: pointer">
v4.0.6 - August 4th, 2024
</summary>

- 🚀 Display scores next to players' names in the PGN viewer component
- 🚀 Add the ability to filter games in the Game Archives page by first/last name, whether the player was White or Black, and the number of moves 

</details>

<details>
<summary style="cursor: pointer">
v4.0.5 - July 5th, 2024
</summary>

- 🔧 Add step in GitHub action workflow to automatically invalidate CloudFront distribution whenever updating the production website S3

</details>

<details>
<summary style="cursor: pointer">
v4.0.4 - July 2nd, 2024
</summary>

- 🔧 Switch to `pnpm` and set up dedicated GitHub Actions workflows for preview and production static hosting buckets on S3
- 🔧 Set up basic unit tests

</details>

<details>
<summary style="cursor: pointer">
v4.0.3 - June 29th, 2024
</summary>

- 🚀 Remember user's show/hide past events preference in the Schedule component
- 🐛 Ensure browser back button takes you back to the top of the article after navigating to a page anchor via the article's table of contents
- 🐛 Fix Link List component's header colour theming

</details>

<details>
<summary style="cursor: pointer">
v4.0.2 - June 27th, 2024
</summary>

- 🚀 Improve colour contrast in warning toasts
- 🐛 Send prefetch request with appropriate headers to article images API to prevent the need for CORS browser plug-ins when creating/editing articles

</details>

<details>
<summary style="cursor: pointer">
v4.0.1 - June 26th, 2024
</summary>

- 🚀 Some minor styling touch-ups
- 🚀 Only display an article has been edited if it's at least 5 minutes after the creation time
- 🚀 Remove all 'MB' and empty {Fritz} annotations from archived games' PGNs

</details>

<details>
<summary style="cursor: pointer">
v4.0.0 - June 25th, 2024
</summary>

- 🚀 Upgrade to Angular v18
- 🚀 Overhaul redesign of colour theming throughout app
- 🚀 Revamp the user settings dropdown menu (top-right of app header)
- 🚀 Revamp the upcoming event banner (top of screen), and do not show again for at least 24 hours once it's been clicked
- 🚀 Introduce a dark mode, and add ability to toggle theme from the dropdown menu, defaulting to the user's browser preferences
- 🚀 Minor improvements to various UI components: buttons, tooltips, toasts, forms, screen headers, modification info boxes, event alert banners, and the page loading spinner
- 🐛 Fix layout issue on Game Archives page
- 🐛 Fix layout issue in app header when viewing app on a large screen
- 🔧 Simplify some CSS Flex code throughout codebase and remove other redundant/unused styles

</details>

<details>
<summary style="cursor: pointer">
v3.3.2 - May 25th, 2024
</summary>

- 🚀 Add more recent games (from 2017 to 2023) to club game archives
- 🚀 Various minor improvements to spruce up the Game Archives page
- 🐛 Fix a bug which made only a handful of game PGNs accessible in each expansion panel

</details>

<details>
<summary style="cursor: pointer">
v3.3.1 - May 3rd, 2024
</summary>

- 🚀 Add support for linking scheduled club events to an article where more details can be found

</details>

<details>
<summary style="cursor: pointer">
v3.3.0 - May 2nd, 2024
</summary>

- 🚀 Highlight the London Chess Championship event in the new homepage welcome section
- 🚀 Improve styling of notification toasts
- 🐛 Fix a bug which sometimes caused the page to redirect to a 404 error page
- 🐛 Fix a bug which prevented the user from navigating to the same anchor (section) of an article multiple times consecutively
- 🔧 Overhaul redesign of AWS Cognito admin authentication and password change flows

</details>

<details>
<summary style="cursor: pointer">
v3.2.0 - April 30th, 2024
</summary>

- 🚀 Revamp home screen with a more user-friendly layout and links to club's Instagram page and noticeboard on WhatsApp
- 🚀 Improve website SEO by 1) including more meaningful text within `<noscript>` tags for better description in SERPs, 2) using `<h1>` tags in Screen Header component, and 3) adding more meta tags to root index.html file
- 🚀 Dynamically generate metadata and title for each individual screen so that screen-specific titles appear in the browser tab (e.g. tab now says 'Members' when viewing the members table)
- 🔧 Implement module lazy-loading for a quicker initial load
- 🔧 Refactor website routing to split add/edit/view screens as variants of their parent member/article/event screens instead of standalone screens, and create dedicated member/article/event routing modules to handle their routing instead of a single app-level routing module
- 🔧 Refactor club map component to follow best practices with latest Google Maps API changes
- 🔧 Improve console log and error handling

</details>

<details>
<summary style="cursor: pointer">
v3.1.3 - April 24th, 2024
</summary>

- 🚀 Post PDFs of minutes from club's first three board meetings, as well as the club's bylaws
- 🚀 Change scrollbar colour to grey
- 🚀 Change article 'sticky' icon to be a bookmark
- 🐛 Ensure the next club event (in the app banner as well as the highlighted row on the Schedule screen) changes over at 9:00pm EST instead of midnight on Friday UTC time (which is currently equivalent to 7:00pm EST)
- 🔧 Replace `moment.js` library with `moment-timezone`, and improve date formatting algorithm

</details>

<details>
<summary style="cursor: pointer">
v3.1.2 - April 15th, 2024
</summary>

- 🐛 Fix a bug where scheduled club events would get sorted by date in the reverse order

</details>

<details>
<summary style="cursor: pointer">
v3.1.1 - April 14th, 2024
</summary>

- 🚀 Display provisional peak ratings in Members Table in regular `XXXX/X` format instead of converting to `(provisional)` fallback text
- 🐛 Several minor improvements and bug fixes related to article/member/event editing as well as image URL/file retrieval
- 🐛 Fix a bug where the Members Table would unsort itself after a member was edited or deleted

</details>

<details>
<summary style="cursor: pointer">
v3.1.0 - April 14th, 2024
</summary>

- 🚀 Implement article image placeholders and URL source fallbacks for better UX and to help prevent layout shift on page load when an image source is not loadable or unavailable
- 🚀 Keep admin user on the Add Member and Add Event pages after a new item (member/event) has been successfully created, to prevent them from having to re-navigate to the page each time when adding multiple items
- 🚀 Style scrollbars more consistently across app
- 🚀 Add ability to revert chosen article banner image when creating/editing an article
- 🚀 Retain form state on page refresh, and store chosen image's URL in local storage
- 🐛 Fix bug preventing admin user from setting an image on a new article
- 🔧 Major rework of the article image presigned URL/ image file serialization
- 🔧 Implement new navigation flow to help differentiate between deep-linking and page refreshing, which require slightly different page setup logic

</details>

<details>
<summary style="cursor: pointer">
v3.0.12 - April 3rd, 2024
</summary>

- 🐛 Fix bug with article view & edit navigation

</details>

<details>
<summary style="cursor: pointer">
v3.0.11 - April 3rd, 2024
</summary>

- 🐛 Fix some security vulnerabilities

</details>

<details>
<summary style="cursor: pointer">
v3.0.10 - April 2nd, 2024
</summary>

- 🚀 Save working progress in forms so that refreshing the page does not return the form to the item's original state
- 🚀 When linking directly to a 'create' or 'edit' screen for an item that could not be found in the store, make an API call to fetch that item before resorting to redirecting the user to another screen. This will allow the user to send links that take you directly to a specific article - the full collection of articles doesn't need to first be fetched from the database for this to work anymore
- 🐛 Fix bug where non-admin users were able to access certain 'edit' screens (in readonly mode)
- 🔧 Reorganize app's reusable utility functions
- 🔧 Add `type` modifier to certain imports and exports to future-proof app in the event that a transpiler (such as Babel or Vite) is introduced and it becomes unclear which imports/exports should be available at runtime (see: [this article](https://typescript-eslint.io/blog/consistent-type-imports-and-exports-why-and-how/))
- 🔧 Refactor `*ngFor` and `*ngIf` directives to Angular's new `@for` and `@if` control-flow syntax for better DX and a slightly smaller bundle size since the new syntax is built into the template engine
- 🔧 Add `readonly` modifier to all imported types and methods used in templates or help prevent accidental overwrites

</details>

<details>
<summary style="cursor: pointer">
v3.0.9 - March 12th, 2024
</summary>

- 🚀 Add a link in the app footer to the club's Instagram page
- 🚀 Display a loading spinner whenever any database operation takes place, such as updating an article or deleting an event
- 🚀 Change lecture event tag colour to blue to help differentiate from blitz tournament tags
- 🚀 After an article has been published or edited, navigate the admin user to that article instead of the News screen
- 🚀 After an article has been deleted, only navigate the user to the News screen if they're coming from the Article View screen
- 🐛 Ensure members table remains sorted after a create/edit/delete operation has completed
- 🔧 Rename all requesting database actions, changing prefix from 'load' to 'fetch'

</details>

<details>
<summary style="cursor: pointer">
v3.0.8 - March 11th, 2024
</summary>

- 🚀 Add support for linking to sections of article pages
- 🚀 Revert club map back to Google Maps' default red marker styling and improve marker's longitude and latitude co-ordinates
- 🔧 Update Angular Google Maps library to `v17.3.0-rc.0` and replace deprecated `map-marker` with `advanced-map-marker` HTML element

</details>

<details>
<summary style="cursor: pointer">
v3.0.7 - March 10th, 2024
</summary>

- 🐛 Reinstate Angular Service Worker to prevent page from not being found when deep-linking into subroutes such as `/members` or `/news`

</details>

<details>
<summary style="cursor: pointer">
v3.0.6 - March 9th, 2024
</summary>

- 🐛 Fix issue where Members table sometimes hangs when sorting

</details>

<details>
<summary style="cursor: pointer">
v3.0.5 - March 9th, 2024
</summary>

- 🚀 Replace 100-items per page option in paginator component with one that allows user to see _all_ table items at once
- 🐛 Remove the option to install a bootable version of the website, and all ngsw (Angular Service Worker) related code

</details>

<details>
<summary style="cursor: pointer">
v3.0.4 - March 2nd, 2024
</summary>

- 🐛 Fix minor alignment issue in app footer

</details>

<details>
<summary style="cursor: pointer">
v3.0.3 - March 2nd, 2024
</summary>

- 🔧 Test out new website update notification process with change introduced in v3.0.2

</details>

<details>
<summary style="cursor: pointer">
v3.0.2 - March 2nd, 2024
</summary>

- 🐛 No longer force user from refreshing the page when a new version of the website becomes available, and instead only display a notification in the app footer that a new version is available

</details>

<details>
<summary style="cursor: pointer">
v3.0.1 - February 5th, 2024
</summary>

- 🚀 Migrate archived games (1974-2000) from old website
- 🚀 Update City Champion screen with result from 2023 Championship match

</details>

<details>
<summary style="cursor: pointer">
v3.0.0 - January 24th, 2024
</summary>

- 🚀 Upgrade to Angular v17
- 🚀 Show loading spinner over Photo Gallery photo while it loads
- 🚀 Create a PGN viewer widget and use to display archived games in new Game Archives screen
- 🐛 Remove spaces between link text and any punctuation that follows

</details>

<details>
<summary style="cursor: pointer">
v2.2.5 - January 18th, 2024
</summary>

- 🚀 Update main contact email to `welcome@londonchess.ca`

</details>

<details>
<summary style="cursor: pointer">
v2.2.4 - January 17th, 2024
</summary>

- 🚀 Add next/previous image buttons on Photo Gallery screen
- 🔧 Refactor ImageOverlay state as a general Photos state, and add more photo-related actions and selectors

</details>

<details>
<summary style="cursor: pointer">
v2.2.3 - January 17th, 2024
</summary>

- 🚀 Display each member's last update date in the members table
- 🚀 Carry over some markdown table features to the members table (i.e. horizontal scrollbar and larger font sizes)
- 🐛 Fix issue preventing admin user from adding a new member without supplying certain optional properties
- 🐛 Fix paginator tooltip text
- 🔧 Consolidate/remove repeated or no longer used table code

</details>

<details>
<summary style="cursor: pointer">
v2.2.2 - January 12th, 2024
</summary>

- 🐛 Fix various bugs which sometimes prevented an admin user from posting or editing an article
- 🔧 Improve some NgRx action names following v2.2.0's navigation refactor

</details>

<details>
<summary style="cursor: pointer">
v2.2.1 - January 11th, 2024
</summary>

- 🚀 Add fun chess pieces graphic to app header and update header font
- 🚀 Increase number of articles shown on the Home screen from 4 to 5
- 🐛 Prevent tooltips from displaying out of screen's bounds

</details>

<details>
<summary style="cursor: pointer">
v2.2.0 - January 9th, 2024
</summary>

- 🚀 Add ability to open any linkable item in a new tab by ctrl-clicking, and also display URL in browser on hover (previously was only possible on certain standard text links)
- 🚀 Various minor improvements to admin user dropdown component
- 🚀 Scroll to top of screen after toggling past events in the Schedule screen
- 🚀 Brief update on 2023 Championship Match (more details and photos to follow)
- 🔧 Refactor navigation logic throughout app to make better use of Angular's routing features
- 🔧 Leverage NgNeat's `until-destroy` library for a neater way to unsubscribe from observables when a component is destroyed

</details>

<details>
<summary style="cursor: pointer">
v2.1.0 - December 31st, 2023
</summary>

- 🚀 Add support for 'sticky' articles, allowing admins to bump up selected articles to the top of the list
- 🚀 Auto-expire warning toasts (red notifications in bottom-left of screen) just as with success toasts
- 🚀 Navigate to Home screen when clicking on either London Chess Club logo or text in main app header, and always in the current browser tab
- 🐛 Fix bug causing unsaved changes dialog from appearing when editing an article, even when it was returned to its original state
- 🐛 Fix some broken links on the About screen, and make sure they open up in a new tab when expected

</details>

<details>
<summary style="cursor: pointer">
v2.0.4 - December 23rd, 2023
</summary>

- 🐛 Fix some layout issues on Article Viewer screen
- 🐛 Fix timezone of default 'created by' & 'last edited by' dates for member edits when value is not found in database
- 🔧 Revert table width hacks in Markdown Renderer component now that layout has been corrected

</details>

<details>
<summary style="cursor: pointer">
v2.0.3 - December 22nd, 2023
</summary>

- 🐛 Fix some typos on the About screen
- 🐛 Ensure article banner images can be fetched through both HTTP and HTTPS and on all environments

</details>

<details>
<summary style="cursor: pointer">
v2.0.2 - December 20th, 2023
</summary>

- 🔧 Revert changes made in v2.0.1 to test out effects of the directive in the `index.html`

</details>

<details>
<summary style="cursor: pointer">
v2.0.1 - December 20th, 2023
</summary>

- 🐛 Use `upgrade-insecure-requests` directive to ensure article images endpoint can be reached via HTTP on both staging and prod environments

</details>

<details>
<summary style="cursor: pointer">
v2.0.0 - December 20th, 2023
</summary>

- 🚀 Make adjustments to this README.md prior to v2.0.0 launch
- 🚀 Move About screen to after Home screen in the navigation tabs
- 🚀 Improve About screen layout and content
- 🚀 Display only future events in Schedule by default, with an option to show past events
- 🐛 Fix issue which prevented article banner images from being fetched using secure connection (HTTPS protocol)
- 🐛 Correct club event date-time tiemzone calculations which were causing Thursday club event dates to show up as Wednesday
- 🐛 Fix Angular Service Worker issues when app is running on a production environment
- 🐛 Fix bug which prevented form validation icon from appearing in Create/Edit Event screen
- 🔧 Split `utils.ts` into more categorized util files, and leverage `moment.js` library for better date-time calculations

</details>

<details>
<summary style="cursor: pointer">
v1.6.8-beta - December 19th, 2023
</summary>

- 🚀 Update content on About screen
- 🚀 Update content on Champion screen
- 🐛 Fix password change bug
- 🔧 Update `manifest.webmanifest` file

</details>

<details>
<summary style="cursor: pointer">
v1.6.7-beta - December 18th, 2023
</summary>

- 🚀 Make member's year of birth field visible only to admins
- 🐛 Correct peak rating calculation for when a member's rating is edited
- 🐛 Ensure current date in new member empty form template correctly uses local timezone and not UTC time

</details>

<details>
<summary style="cursor: pointer">
v1.6.6-beta - December 17th, 2023
</summary>

- 🚀 Add a 'report a bug' link to the website footer
- 🚀 Limit banner image height so that it doesn't expand too much on larger screens
- 🐛 Fix bug preventing new banner images from being uploaded in some scenarios

</details>

<details>
<summary style="cursor: pointer">
v1.6.5-beta - December 16th, 2023
</summary>

- 🚀 Add support for hyperlinks and bullet points in article bodies
- 🚀 Minor revamping of home screen, about screen, and app header
- 🚀 Update some static content on about screen
- 🐛 Fix some minor layout bugs in Article Grid component
- 🐛 Fix bug causing unsaved changes modal to appear after successfully updating a member
- 🐛 Display correct 6:00 PM start time in banner alert message

</details>

<details>
<summary style="cursor: pointer">
v1.6.4-beta - December 12th, 2023
</summary>

- 🚀 Sort articles based on creation date
- 🚀 Hide more markdown characters from article body preview in Article Grid
- 🐛 Only show article edit date if different from creation date
- 🐛 Ensure new lines are at least preserved with HTML 'break' tags for now

</details>

<details>
<summary style="cursor: pointer">
v1.6.3-beta - December 10th, 2023
</summary>

- 🚀 Update schedule event types; add icon beside championship type
- 🐛 Fix various small bugs in Event Form component

</details>

<details>
<summary style="cursor: pointer">
v1.6.2-beta - December 9th, 2023
</summary>

- 🚀 Improve styling on divider lines used throughout app
- 🐛 Fix layout of Modification Info component, particularly for small devices
- 🐛 Fix bug where the create/edit member form incorrectly detected changes in the member's details

</details>

<details>
<summary style="cursor: pointer">
v1.6.1-beta - December 9th, 2023
</summary>

- 🐛 Fix bug causing embedded tables in articles to mess up the screen layout

</details>

<details>
<summary style="cursor: pointer">
v1.6.0-beta - December 7th, 2023
</summary>

- 🚀 Revamp top-right dropdown user menu
- 🚀 In the admin-only article/event/member edit forms, display author's name next to each article/event/member; display in the new user dropdown menu as well
- 🚀 Various minor layout improvements in form and toaster components
- 🔧 Improve user login and Cognito auth flow
- 🔧 Overhaul refactor of item creation and update dates to support JS Date objects, as well as store and read items' new creation & update details

</details>

<details>
<summary style="cursor: pointer">
v1.5.3-beta - December 2nd, 2023
</summary>

- 🚀 Improve modal (pop-up) button colour scheme
- 🐛 Fix bug where long links in the article body would break the layout on small devices

</details>

<details>
<summary style="cursor: pointer">
v1.5.2-beta - December 1st, 2023
</summary>

- 🔧 Increase production budgets in `angular.json` to accomodate for the new icon library

</details>

<details>
<summary style="cursor: pointer">
v1.5.1-beta - December 1st, 2023
</summary>

- 🚀 Add support for LCC-styled markdown tables in articles' content section
- 🚀 Replace CDS with Angular Feather library for icons
- 🚀 Increase limit on article body length and align text left in markdown preview section of Article Editor
- 🐛 Prevent user menu dropdown icon from displaying above the image previews when an image is selected in the Photo Gallery
- 🔧 Remove all dependencies to Clarity Design System library and replace with a more lightweight alternative solutions jfor icons

</details>

<details>
<summary style="cursor: pointer">
v1.5.0-beta - December 1st, 2023
</summary>

- 🚀 Add support for markdown in articles!
- 🐛 Fix various minor layout bugs on News and Photo Gallery screens
- 🐛 Restrict article banner image size to 1MB to ensure image uploads do not fail
- 🐛 Ensure dates used to determine upcoming events are compared correctly
- 🔧 Clean up various warnings showing up in the console, related to issues with the webmanifest and common JS packages

</details>

<details>
<summary style="cursor: pointer">
v1.4.5-beta - November 22nd, 2023
</summary>

- 🐛 Fix various minor bugs on Photo Gallery screen

</details>

<details>
<summary style="cursor: pointer">
v1.4.4-beta - November 22nd, 2023
</summary>

- 🚀 Improve typography and layout of Schedule and Nav components
- 🚀 Add more photos and archive links to Photo Gallery screen
- 🚀 Improve styling of 'secondary' buttons throughout app
- 🐛 Fix various minor bugs on Article Editor and Article Viewer screens
- 🔧 Revamp this `README` file and issue tickets for upcoming full release (v2.0.0)
- 🔧 Reorganize `layout` style partials

</details>

<details>
<summary style="cursor: pointer">
v1.4.3-beta - November 19th, 2023
</summary>

- 🚀 Display next event as a banner with option to link to that particular event on the Schedule screen
- 🚀 Improve how images are displayed on small devices
- 🚀 Add more event categories and only display upcoming events on the Home screen
- 🐛 Ensure admin control buttons don't propagate and trigger click events on their parent components
- 🔧 Create a `formatDate` pipe that invokes the `formatDate` utility function

</details>

<details>
<summary style="cursor: pointer">
v1.4.2-beta - November 16th, 2023
</summary>

- 🚀 Automatically log in after a successful password change, redirect user to Home screen, and hide sensitive information from Redux Devtools
- 🐛 Fix bug preventing user from accessing add member, add article and add event screens
- 🐛 Fix bug causing 'Last edited: Invalid Date' to be displayed after creating a new article

</details>

<details>
<summary style="cursor: pointer">
v1.4.1-beta - November 15th, 2023
</summary>

- 🚀 Add tables for executive committee and board of directors
- 🚀 Fix table column widths for all breakpoints to prevent layout shifts when sorting and awkward gaps between columns
- 🐛 Fix some small layout bugs on Champion screen
- 🐛 Fix bug preventing user menu to open

</details>

<details>
<summary style="cursor: pointer">
v1.4.0-beta - November 13th, 2023
</summary>

- 🚀 Overhaul layout upgrades on all screens
- 🔧 Implement power-of-2 't-shirt size' naming conventions for spacing style rules, including paddings, margins and flex gaps
- 🔧 Update some copy
- 🔧 Remove unnecessary/ unused style sheet partials

</details>

<details>
<summary style="cursor: pointer">
v1.3.3-beta - November 5th, 2023
</summary>

- 🚀 Update production environment variable for article images endpoint to not include port number now that nginx reverse proxy is set up

</details>

<details>
<summary style="cursor: pointer">
v1.3.2-beta - November 4th, 2023
</summary>

- 🚀 Update production environment variable for article images endpoint to use IP address of server running on the new EC2 instance

</details>

<details>
<summary style="cursor: pointer">
v1.3.1-beta - November 1st, 2023
</summary>

- 🔧 Update `README` and `.gitignore` files

</details>

<details>
<summary style="cursor: pointer">
v1.3.0-beta - October 30th, 2023
</summary>

- 🚀 Support banner images for articles
- 🚀 Create an Article Viewer screen to display the entire article whenever one is selected in the Article Grid
- 🚀 Remove unnecessary 'subtitle' field
- 🚀 Improve screen layouts for XL-wide devices
- 🚀 Improve truncation logic and support truncation by line count
- 🚀 Modify all toast titles to make them more distinct from notification descriptions directly below
- 🐛 Fix bug causing forms to submit twice when using the 'enter' key
- 🐛 Fix bug preventing new password from being sent to the server

- 🔧 Use generic types for `ServiceResponse`'s payload property for better type safety

</details>

<details>
<summary style="cursor: pointer">
v1.2.0-beta - October 4th, 2023
</summary>

- 🚀 Support submitting via 'enter' key in all forms
- 🚀 Add ability to return to the previous screen and request a new code after an email has already been entered
- 🐛 Revert changes to algorithm of 'kebabize' helper function, ensuring that the correct CSS classes are added in the Members Table component
- 🐛 Ensure all validator functions work as expected again, after major code refactor in the previous release

- 🔧 Simplify handling of form validation messages

</details>

<details>
<summary style="cursor: pointer">
v1.1.0-beta - August 31st, 2023
</summary>

- 🚀 Embed Google Maps map of club location
- 🔧 Enforce strict typing and apply better formatting in all files using new ESLint, Prettier and Beautify set up
- 🔧 Update and clean up this `README` file
- 🔧 Ensure all functions have an explicit return type

</details>

<details>
<summary style="cursor: pointer">
v1.0.0-beta - September 26th, 2022
</summary>

- 🐛 Revert accidental removal of DevTools module property 'logOnly' to re-disable all but logs when in a production environment
- 🔧 Clean up comments throughout codebase
- 🔧 Add any missing information to this `README` file

</details>

<details>
<summary style="cursor: pointer">
v0.8.2-alpha - September 22nd, 2022
</summary>

- 🚀 Add 'date created' and 'date edited' information to article cards
- 🚀 Improve date formatting in schedule component
- 🚀 Centre admin control links displayed above the schedule, members, and article grid components
- 🚀 Sanitize any actions in NgRx DevTools that include sensitive information
- 🔧 Remove any unused code from article grid and article form components and resize the cards that make up the article grid
- 🔧 Clean up `.gitignore` file

</details>

<details>
<summary style="cursor: pointer">
v0.8.1-alpha - September 13th, 2022
</summary>

- 🚀 Implement custom trackBy function to improve performance of ngFor directive's tracking algorithm
- 🐛 Correct faulty date format conversions used in schedule component
- 🔧 Wrap `createEffect()` callbacks with `return` for easier debugging

</details>

<details>
<summary style="cursor: pointer">
v0.8.0-alpha - September 8th, 2022
</summary>

- 🚀 Integrate an NgRx (redux-based) infrastructure for state management
- 🚀 Integrate various backend solutions through AWS, including: DynamoDB for a NoSQL database, Cognito and IAM for user authentication and authorization, API Gateway and Lambda functions for HTTP request manipulation and routing, S3 for static hosting, CodeBuild for an automated CI/CD pipeline triggered directly by GitHub PR merges, and Route 53 and CloudFront for DNS record management, CDN services, and traffic management
- 🚀 Implement an assortment of basic UI/UX features, such as toast notifications, modals (pop-ups) for action confirmation, an alert bar at the top of the screen, and a loading spinner for when data is being fetched from the database
- 🚀 Implement a standard nav bar to route to the various screens available, including an icon-only view on smaller devices, and a user account section to house any account-specific information and actions
- 🚀 Implement user sign up, login, and change password flows, granting LCC committee members admin access to perform Create, Read, Update and Delete (CRUD) actions on any data which is regularly updated: currently members, articles, and scheduled events
- 🚀 Implement basic members table and paginator components, fully fitted with sorting and filtering algorithms
- 🚀 _(Work in progress)_ Implement basic database CRUD functionality and a responsive grid layout for articles
- 🚀 Implement basic CRUD functionality and a responsive table layout for all club events stored in the database
- 🚀 Create a responsive grid layout to organize the most commonly sought information about the club
- 🚀 Create a responsive grid layout to house photos from club meetings and club-organized events, including the functionality to enlarge photos in an image overlay 'preview' mode
- 🚀 Create a responsive grid layout to showcase only the most pertinent information from other screens (such as only the next 4 events from the schedule, and a more limited amount of photos from the photo gallery)

</details>
</details>

## Tools & technologies

|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| | |
|-|-|-|
| [![Angular](readme-icons/angular.png)](https://angular.dev) | `Angular` | frontend framework |
| [![AWS Route 53](readme-icons/aws-route-53.png)](https://aws.amazon.com/route53) | `AWS CloudFront` | content delivery network service |
| [![AWS Cognito](readme-icons/aws-cognito.png)](https://aws.amazon.com/cognito) | `AWS Cognito` | user management and authentication |
| [![AWS EC2](readme-icons/aws-ec2.png)](https://aws.amazon.com/ec2) | `AWS EC2` | compute platform |
| [![AWS Route 53](readme-icons/aws-cloudfront.png)](https://aws.amazon.com/cloudfront) | `AWS Route 53` | DNS and traffic management |
| [![AWS S3](readme-icons/aws-s3.png)](https://aws.amazon.com/s3) | `AWS S3` | static web hosting and cloud storage for images |
| [![Chart.js](readme-icons/chartjs.png)](https://www.chartjs.org/) | `Chart.js` | game and player stats |
| [![Express.js](readme-icons/expressjs.png)](https://expressjs.com) | `Express.js` | API and routing framework built on Node.js |
| [![GitHub Actions](readme-icons/github.png)](https://github.com/features/actions) | `GitHub Actions` | automated workflows |
| [![Lichess PGN Viewer](readme-icons/lichess.png)](https://github.com/lichess-org/pgn-viewer) | `Lichess PGN Viewer` | chess game rendering |
| [![MongoDB](readme-icons/mongodb.png)](https://www.mongodb.com) | `MongoDB` | database management system  |
| [![NGINX](readme-icons/nginx.png)](https://nginx.org/en) | `NGINX` | HTTP web server and reverse proxy |
| [![NgRx](readme-icons/ngrx.png)](https://ngrx.io) | `NgRx` | reactive state management |
| [![Ngx Markdown](readme-icons/ngx-markdown.png)](https://github.com/jfcere/ngx-markdown) | `Ngx Markdown` | markdown parsing |
