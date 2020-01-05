#!bash
rm -rf ./build
rm -rf ./_next
rm -rf ./data
rm -rf ./index.html
rm -rf ./404.html

next build
next export

mv -v ./out/* ./
rm -rf ./out
