#!/bin/sh
here="`dirname \"$0\"`"
echo "cd-ing to $here"
cd "$here" || exit 1
node WwiseSFX.js > ../WwiseSFX.txt
node WwiseMUS.js > ../WwiseMUS.txt
node WwiseVO.js > ../WwiseVO.txt
git add --all
git commit -m "Added events from Wwise"
git pull
git push
exit