#!/bin/sh

# Delete the existing build
rm -fr docs;

#Make a new compiled static version of the website
react-scripts build;

#create the docs directory and move stuff into it (Github.io requires that the files either be in the root fold or in a folder titled docs)
mkdir -p docs;
mv build/* docs;

#delete the now empty directory 
rm -fr build;

# Add js script that enables github.io to not freak out at the fact that this is a single page application. This fixes the fact that refreshing on a subpage results in you being redirected to a github 404 page.
cp public/404.html docs/404.html;
sed -n -i -e '/<div id="root">/r public/github_single_page_app.html' -e 1x -e '2,${x;p}' -e '${x;p}' docs/index.html;
