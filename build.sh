#!bash

# clean up dist
rm -rf ./out
rm -rf ./build
rm -rf ./_next
rm -rf ./data
rm -rf ./index.html
rm -rf ./404.html

# run build
next build
next export

# move dist one level out for github page
mv -v ./out/* ./
rm -rf ./out
