#!/bin/sh
here="`dirname \"$0\"`"
echo "cd-ing to $here"
cd "$here" || exit 1
node ../waapi/WwiseSFX.js > ../WwiseSFX.txt
node ../waapi/WwiseMUS.js > ../WwiseMUS.txt
node ../waapi/WwiseVO.js > ../WwiseVO.txt
git add --all
git commit -m "Added events from Wwise"
git pull
git push
exit